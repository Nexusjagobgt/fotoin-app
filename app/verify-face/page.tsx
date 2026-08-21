'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ArrowLeft, ScanFace, CheckCircle2, ShieldCheck, Camera } from 'lucide-react';

type ScanState = 'idle' | 'requesting' | 'ready' | 'scanning' | 'success' | 'camera-error';

const cameraErrorMessages: Record<string, string> = {
  insecure: 'Akses kamera memerlukan localhost atau HTTPS. Buka aplikasi melalui http://localhost:3000.',
  unsupported: 'Kamera tidak tersedia di browser ini.',
  NotAllowedError: 'Izin kamera ditolak. Izinkan akses kamera di pengaturan browser lalu coba lagi.',
  PermissionDeniedError: 'Izin kamera ditolak. Izinkan akses kamera di pengaturan browser lalu coba lagi.',
  NotFoundError: 'Kamera tidak ditemukan di perangkat ini.',
  DevicesNotFoundError: 'Kamera tidak ditemukan di perangkat ini.',
  NotReadableError: 'Kamera sedang digunakan aplikasi lain atau tidak dapat diakses.',
  TrackStartError: 'Kamera sedang digunakan aplikasi lain atau tidak dapat diakses.',
  SecurityError: 'Akses kamera memerlukan localhost atau koneksi HTTPS.',
  OverconstrainedError: 'Konfigurasi kamera tidak didukung.',
  ConstraintNotSatisfiedError: 'Konfigurasi kamera tidak didukung.',
  default: 'Kamera gagal dibuka. Silakan coba lagi.',
};

function getCameraErrorName(error: unknown) {
  if (error instanceof DOMException) return error.name;
  if (typeof error === 'object' && error !== null && 'name' in error && typeof error.name === 'string') return error.name;
  return 'default';
}

import { Suspense } from 'react';

function FaceVerificationContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [scanState, setScanState] = useState<ScanState>('idle');
  const [cameraError, setCameraError] = useState('');
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const scanTimers = useRef<number[]>([]);
  const isSportsSearch = searchParams.get('source') === 'sports';
  const returnTo = searchParams.get('returnTo');
  const safeReturnTo = returnTo?.startsWith('/sports/') ? returnTo : '/sports';
  const sportsContext = new URLSearchParams();

  ['eventId', 'eventName', 'category', 'bib'].forEach((key) => {
    const value = searchParams.get(key);
    if (value) sportsContext.set(key, value);
  });

  const eventId = sportsContext.get('eventId');
  const identificationParams = new URLSearchParams(sportsContext);
  identificationParams.set('faceScanned', '1');
  const identificationHref = eventId
    ? `/sports/${eventId}/check?${identificationParams.toString()}`
    : '/sports';

  const stopCamera = () => {
    streamRef.current?.getTracks().forEach((track) => track.stop());
    streamRef.current = null;
    if (videoRef.current) videoRef.current.srcObject = null;
  };

  useEffect(() => () => {
    scanTimers.current.forEach((timer) => window.clearTimeout(timer));
    streamRef.current?.getTracks().forEach((track) => track.stop());
  }, []);

  const continueFlow = () => {
    router.push(isSportsSearch ? identificationHref : '/role');
  };

  const startCamera = async () => {
    setCameraError('');
    setScanState('requesting');

    if (typeof window === 'undefined' || typeof navigator === 'undefined') return;

    if (!window.isSecureContext) {
      setCameraError(cameraErrorMessages.insecure);
      setScanState('camera-error');
      return;
    }

    if (typeof navigator === 'undefined' || !navigator.mediaDevices?.getUserMedia) {
      setCameraError(cameraErrorMessages.unsupported);
      setScanState('camera-error');
      return;
    }

    try {
      stopCamera();
      let stream: MediaStream;

      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'user' },
          audio: false,
        });
      } catch (error) {
        const errorName = getCameraErrorName(error);
        console.error('Camera error:', error);

        if (errorName !== 'OverconstrainedError' && errorName !== 'ConstraintNotSatisfiedError' && errorName !== 'TypeError') {
          throw error;
        }

        stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: false,
        });
      }

      streamRef.current = stream;

      if (!videoRef.current) {
        stream.getTracks().forEach((track) => track.stop());
        throw new Error('Camera preview element is not available');
      }

      videoRef.current.srcObject = stream;
      await videoRef.current.play();
      setScanState('ready');
    } catch (error) {
      console.error('Camera error:', error);
      stopCamera();
      const errorName = getCameraErrorName(error);
      setCameraError(cameraErrorMessages[errorName] ?? cameraErrorMessages.default);
      setScanState('camera-error');
    }
  };

  const captureFace = () => {
    const video = videoRef.current;
    if (!video || video.readyState < HTMLMediaElement.HAVE_CURRENT_DATA || !video.videoWidth || !video.videoHeight) {
      setCameraError('Pratinjau kamera belum siap. Silakan coba lagi.');
      setScanState('camera-error');
      stopCamera();
      return;
    }

    const canvas = document.createElement('canvas');
    canvas.width = 480;
    canvas.height = 480;
    const context = canvas.getContext('2d');
    if (!context) {
      setCameraError(cameraErrorMessages.default);
      setScanState('camera-error');
      stopCamera();
      return;
    }

    const sourceSize = Math.min(video.videoWidth, video.videoHeight);
    const sourceX = (video.videoWidth - sourceSize) / 2;
    const sourceY = (video.videoHeight - sourceSize) / 2;
    context.translate(canvas.width, 0);
    context.scale(-1, 1);
    context.drawImage(video, sourceX, sourceY, sourceSize, sourceSize, 0, 0, canvas.width, canvas.height);

    try {
      sessionStorage.setItem('fotoin_sports_face_capture', JSON.stringify({
        eventId,
        capturedAt: Date.now(),
        image: canvas.toDataURL('image/jpeg', 0.72),
      }));
    } catch {
      // The captured frame remains valid for this flow even if browser storage is unavailable.
    }

    setScanState('scanning');
    stopCamera();

    // Prototype detection boundary. Replace this timer with a face model/API when available.
    const detectionTimer = window.setTimeout(() => {
      setScanState('success');
      const continueTimer = window.setTimeout(() => {
        continueFlow();
      }, 1200);
      scanTimers.current.push(continueTimer);
    }, 1400);
    scanTimers.current.push(detectionTimer);
  };

  const handlePrimaryAction = () => {
    if (scanState === 'ready') captureFace();
    else if (scanState === 'success') continueFlow();
    else if (scanState === 'idle' || scanState === 'camera-error') void startCamera();
  };

  const leaveScan = () => {
    stopCamera();
    router.push(isSportsSearch ? safeReturnTo : '/role');
  };

  return (
    <div className="flex h-svh flex-col bg-white md:max-w-md md:mx-auto md:shadow-2xl relative overflow-hidden text-gray-900">
      
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-4 shrink-0">
        <button type="button" onClick={leaveScan} className="p-2 -ml-2 text-gray-700 active:bg-gray-100 rounded-full transition-colors">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <span className="font-bold text-[15px]">{isSportsSearch ? 'Pindai Wajah' : 'Verifikasi Wajah'}</span>
        <button type="button" onClick={leaveScan} className="text-[13px] font-semibold text-gray-500 active:text-gray-700 p-2 -mr-2">
          {isSportsSearch ? 'Batal' : 'Nanti'}
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 pb-20">
        
        {/* Texts */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">{isSportsSearch ? 'Temukan Fotomu dengan AI' : 'Bantu AI Mengenali Anda'}</h1>
          <p className="text-sm text-gray-500 leading-relaxed max-w-[280px] mx-auto">
            {isSportsSearch
              ? 'Pindai wajahmu agar FOTOIN dapat mencocokkannya dengan foto-foto dari event ini.'
              : 'Daftarkan wajah Anda agar sistem AI FOTOIN bisa menemukan foto Anda secara otomatis di berbagai event.'}
          </p>
        </div>

        {/* Viewfinder Container */}
        <div className="relative w-64 h-64 mb-8">
          {/* Animated Background/Scanner */}
          <div className={`absolute inset-0 rounded-full overflow-hidden transition-all duration-700 bg-gray-100 ${
            scanState === 'scanning' ? 'ring-4 ring-[#6236FF] ring-opacity-50 scale-105' :
            scanState === 'success' ? 'ring-4 ring-green-500 ring-opacity-100 scale-100' : 
            'border-4 border-dashed border-gray-300'
          }`}>

            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className={`h-full w-full object-cover transition-opacity duration-500 ${scanState === 'ready' || scanState === 'scanning' || scanState === 'success' ? 'opacity-100' : 'opacity-0'}`}
              style={{ transform: 'scaleX(-1)' }}
              aria-label="Pratinjau kamera depan"
            />

            {/* Scanning line animation */}
            {scanState === 'scanning' && (
              <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-[#6236FF]/40 border-b-2 border-[#6236FF] animate-[scan_2s_ease-in-out_infinite_alternate]" />
            )}

            {/* Success Overlay */}
            {scanState === 'success' && (
              <div className="absolute inset-0 bg-green-500/20 backdrop-blur-[2px] flex items-center justify-center">
                <CheckCircle2 className="w-16 h-16 text-white drop-shadow-md" />
              </div>
            )}

            {/* Idle State Guide */}
            {(scanState === 'idle' || scanState === 'requesting' || scanState === 'camera-error') && (
              <div className="absolute inset-0 flex items-center justify-center">
                <ScanFace className="w-20 h-20 text-gray-400 opacity-50" strokeWidth={1} />
              </div>
            )}
          </div>
        </div>

        {/* Status Text */}
        <div className="h-8 mb-6">
          {scanState === 'idle' && (
            <p className="text-sm font-semibold text-gray-500 text-center">
              Tekan Mulai Kamera untuk memulai pemindaian wajah.
            </p>
          )}
          {scanState === 'requesting' && <p className="text-sm font-semibold text-gray-500 text-center">Menunggu izin kamera...</p>}
          {scanState === 'ready' && <p className="text-sm font-semibold text-gray-500 text-center">Posisikan wajahmu di dalam area</p>}
          {scanState === 'scanning' && (
            <p className="text-sm font-bold text-[#6236FF] text-center">
              Memindai kontur wajah...
            </p>
          )}
          {scanState === 'success' && (
            <p className="text-sm font-bold text-green-600 text-center">
              {isSportsSearch ? 'Wajah berhasil terdeteksi!' : 'Verifikasi berhasil!'}
            </p>
          )}
          {scanState === 'camera-error' && <p className="text-sm font-semibold text-red-600 text-center">{cameraError}</p>}
        </div>

        {/* Security Trust Badge */}
        <div className="flex items-center gap-1.5 justify-center bg-green-50 px-3 py-1.5 rounded-full mb-10">
          <ShieldCheck className="w-4 h-4 text-green-600" />
          <span className="text-[11px] font-semibold text-green-700">{isSportsSearch ? 'Wajahmu digunakan untuk pencocokan foto dan tetap terlindungi.' : 'Privasi Anda terjamin dan terenkripsi'}</span>
        </div>
      </main>

      {/* Fixed Bottom Action */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-white shrink-0">
        <button 
          type="button"
          onClick={handlePrimaryAction}
          disabled={scanState === 'requesting' || scanState === 'scanning'}
          className={`w-full flex items-center justify-center gap-2 py-4 rounded-full font-bold text-[15px] transition-all duration-300 ${
            scanState === 'success' ? 'bg-green-500 text-white shadow-lg shadow-green-500/30' : 
            scanState === 'scanning' || scanState === 'requesting' ? 'bg-[#6236FF]/50 text-white cursor-not-allowed' :
            'bg-[#6236FF] text-white active:scale-[0.98] shadow-xl shadow-[#6236FF]/20'
          }`}
        >
          {scanState === 'idle' ? (
             <>
               <Camera className="w-5 h-5" />
               {isSportsSearch ? 'Mulai Kamera' : 'Mulai Scan Wajah'}
             </>
          ) : scanState === 'ready' ? (
             <><ScanFace className="w-5 h-5" /> Pindai Wajah</>
          ) : scanState === 'requesting' ? (
             'Membuka Kamera...'
          ) : scanState === 'scanning' ? (
             'Mohon Tahan...'
          ) : scanState === 'camera-error' ? (
             'Coba Lagi'
          ) : (
             'Lanjutkan'
          )}
        </button>
      </div>
      
      {/* Tailwind Animation for scanner line */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}} />
    </div>
  );
}

export default function FaceVerificationPage() {
  return (
    <Suspense fallback={<div className="flex h-svh items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900" /></div>}>
      <FaceVerificationContent />
    </Suspense>
  );
}
