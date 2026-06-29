'use client';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

const eventNames: Record<string, string> = {
  'marathon-2026': 'Surabaya City Marathon 2026',
  'cycling-2026': 'Gran Fondo Surabaya',
  'campus-fun-run': 'Campus Fun Run Petra',
  'night-run': 'Surabaya Night Run',
};

type Phase = 'idle' | 'uploading' | 'done';

const TOTAL_TICKS = 50;
const TICK_MS = 50;

export default function UploadPage() {
  const params = useParams<{ eventId: string }>();
  const eventId = (params?.eventId ?? '') as string;
  const eventName = eventNames[eventId] ?? 'Event';

  const fileInputRef = useRef<HTMLInputElement>(null);
  const previewsRef = useRef<string[]>([]);

  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [phase, setPhase] = useState<Phase>('idle');
  const [tick, setTick] = useState(0);
  const [bibCount, setBibCount] = useState(0);

  previewsRef.current = previews;

  useEffect(() => {
    return () => {
      previewsRef.current.forEach((url) => URL.revokeObjectURL(url));
    };
  }, []);

  useEffect(() => {
    if (phase !== 'uploading') return;
    const interval = setInterval(() => {
      setTick((prev) => {
        const next = prev + 1;
        if (next >= TOTAL_TICKS) {
          clearInterval(interval);
          setBibCount(Math.max(1, Math.floor(files.length * 0.72)));
          setPhase('done');
          return TOTAL_TICKS;
        }
        return next;
      });
    }, TICK_MS);
    return () => clearInterval(interval);
  }, [phase, files.length]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = Array.from(e.target.files ?? []);
    if (!selected.length) return;
    previewsRef.current.forEach((url) => URL.revokeObjectURL(url));
    const newPreviews = selected.map((f) => URL.createObjectURL(f));
    setFiles(selected);
    setPreviews(newPreviews);
    e.target.value = '';
  };

  const removeFile = (idx: number) => {
    URL.revokeObjectURL(previews[idx]);
    setFiles((prev) => prev.filter((_, i) => i !== idx));
    setPreviews((prev) => prev.filter((_, i) => i !== idx));
  };

  const handleUpload = () => {
    setTick(0);
    setPhase('uploading');
  };

  const getFilePct = (fileIdx: number): number => {
    if (phase === 'done') return 100;
    if (phase !== 'uploading' || files.length === 0) return 0;
    const start = fileIdx / files.length;
    const end = (fileIdx + 1) / files.length;
    const cur = tick / TOTAL_TICKS;
    if (cur <= start) return 0;
    if (cur >= end) return 100;
    return Math.round(((cur - start) / (end - start)) * 100);
  };

  const completedCount =
    phase === 'done'
      ? files.length
      : phase === 'uploading'
      ? previews.filter((_, i) => getFilePct(i) === 100).length
      : 0;

  const hasFiles = files.length > 0;

  return (
    <>
      <style>{`
        @keyframes scale-in-bounce {
          0%   { transform: scale(0); opacity: 0; }
          60%  { transform: scale(1.15); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        .success-pop { animation: scale-in-bounce 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) both; }
      `}</style>

      <div className="flex h-svh flex-col bg-gray-50">
        {/* Status bar */}
        <div className="flex items-center justify-between bg-white px-5 pt-3 pb-1">
          <span className="text-xs font-semibold text-gray-900">9:41</span>
          <div className="flex items-center gap-1">
            <div className="flex items-center rounded-sm border border-gray-300 px-0.5">
              <div className="h-2.5 w-5 rounded-sm bg-gray-900" />
              <div className="h-1.5 w-0.5 rounded-r-sm bg-gray-400" />
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="bg-white border-b border-gray-100 px-4 pb-3 pt-1 flex-shrink-0">
          <div className="flex items-center gap-3 py-2">
            <Link
              href="/photographer/sports"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 active:scale-95 transition-transform"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M15 18l-6-6 6-6" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <div className="flex-1 min-w-0">
              <div className="text-[15px] font-bold text-gray-900">Upload Foto</div>
              <div className="text-[11px] text-gray-400 truncate">{eventName}</div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-4 py-3">

          {/* Done state */}
          {phase === 'done' && (
            <div className="flex flex-col items-center justify-center py-10 text-center">
              <div className="success-pop mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-green-500" style={{ boxShadow: '0 8px 24px rgba(34,197,94,0.35)' }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12l5 5L20 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="text-xl font-bold text-gray-900 mb-1">
                {files.length} foto berhasil diupload!
              </div>
              <div className="text-sm text-gray-500 mb-1">
                AI mendeteksi <span className="font-bold text-violet-700">{bibCount} nomor BIB</span> dari foto yang diupload
              </div>
              <div className="text-xs text-gray-400 mb-8">
                Foto akan segera tersedia untuk peserta event
              </div>

              {/* Preview strip */}
              <div className="w-full grid grid-cols-3 gap-2 mb-6">
                {previews.map((src, i) => (
                  <div key={i} className="relative aspect-square overflow-hidden rounded-xl">
                    <div
                      className="absolute inset-0"
                      style={{ backgroundImage: `url(${src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                    />
                    <div className="absolute inset-0 bg-black/10" />
                    <div className="absolute bottom-1 right-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-500">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12l5 5L20 7" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/photographer/sports"
                className="w-full rounded-xl py-3.5 text-center text-base font-semibold text-white active:scale-95 transition-transform"
                style={{ backgroundColor: '#6B21F5' }}
              >
                Selesai
              </Link>
            </div>
          )}

          {/* Uploading state */}
          {phase === 'uploading' && (
            <div>
              <div className="mb-3 flex items-center justify-between">
                <div className="text-sm font-semibold text-gray-700">Mengupload & Memproses dengan AI...</div>
                <div className="text-xs text-gray-400">
                  {completedCount}/{files.length} selesai
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {previews.map((src, i) => {
                  const pct = getFilePct(i);
                  return (
                    <div key={i} className="relative aspect-square overflow-hidden rounded-xl bg-gray-100">
                      <div
                        className="absolute inset-0"
                        style={{ backgroundImage: `url(${src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                      />
                      {pct < 100 && (
                        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center">
                          <div className="text-[10px] font-bold text-white">{pct}%</div>
                        </div>
                      )}
                      {/* Progress bar */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20">
                        <div
                          className="h-full bg-green-400"
                          style={{ width: `${pct}%`, transition: 'width 0.05s linear' }}
                        />
                      </div>
                      {pct === 100 && (
                        <div className="absolute bottom-1.5 right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-green-500">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                            <path d="M5 12l5 5L20 7" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 rounded-xl bg-violet-50 p-3 flex items-center gap-2.5">
                <div className="h-4 w-4 flex-shrink-0 rounded-full border-2 border-violet-500 border-t-transparent" style={{ animation: 'spin 0.7s linear infinite' }} />
                <div className="text-xs text-violet-700 font-medium">
                  AI sedang mendeteksi nomor BIB dari setiap foto...
                </div>
              </div>
            </div>
          )}

          {/* Idle / selected state */}
          {phase === 'idle' && (
            <div>
              {/* File picker area */}
              {!hasFiles ? (
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-gray-200 bg-white py-10 active:scale-95 transition-transform"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-50">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" stroke="#6B21F5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-800">Pilih Foto dari Galeri</div>
                    <div className="mt-0.5 text-xs text-gray-400">Tap untuk memilih, bisa lebih dari satu</div>
                  </div>
                  <div className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-400">
                    0 foto dipilih
                  </div>
                </button>
              ) : (
                <div>
                  <div className="mb-3 flex items-center justify-between">
                    <div className="text-sm font-semibold text-gray-700">
                      {files.length} foto dipilih
                    </div>
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="text-xs font-semibold active:scale-95 transition-transform"
                      style={{ color: '#6B21F5' }}
                    >
                      + Tambah foto
                    </button>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    {previews.map((src, i) => (
                      <div key={i} className="relative aspect-square overflow-hidden rounded-xl bg-gray-100">
                        <div
                          className="absolute inset-0"
                          style={{ backgroundImage: `url(${src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                        />
                        <button
                          onClick={() => removeFile(i)}
                          className="absolute right-1 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-black/60 active:scale-95 transition-transform"
                        >
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                            <path d="M18 6L6 18M6 6l12 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                          </svg>
                        </button>
                      </div>
                    ))}

                    {/* Add more tile */}
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="aspect-square rounded-xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center gap-1 active:scale-95 transition-transform"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M12 5v14M5 12h14" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                      <span className="text-[10px] text-gray-400">Tambah</span>
                    </button>
                  </div>
                </div>
              )}

              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />

              {/* Info note */}
              <div className="mt-3 rounded-xl bg-amber-50 border border-amber-100 p-3 flex items-start gap-2">
                <span className="text-base flex-shrink-0">🤖</span>
                <div className="text-xs text-amber-700 leading-relaxed">
                  Foto akan diproses AI untuk mendeteksi nomor BIB pelari secara otomatis menggunakan AWS Rekognition.
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom action */}
        {phase === 'idle' && (
          <div className="bg-white border-t border-gray-100 px-4 py-3 flex-shrink-0">
            <button
              onClick={handleUpload}
              disabled={!hasFiles}
              className="flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-semibold text-white active:scale-95 transition-transform disabled:opacity-40 disabled:active:scale-100"
              style={{ backgroundColor: '#6B21F5' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Upload & Proses dengan AI
            </button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </>
  );
}
