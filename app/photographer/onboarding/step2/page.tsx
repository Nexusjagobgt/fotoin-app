'use client';

import { ChangeEvent, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function StepIndicator({ current }: { current: number }) {
  return (
    <div className="flex items-center gap-2 py-3">
      {[1, 2, 3, 4].map((step) => (
        <div key={step} className="flex items-center gap-2">
          <div
            className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold"
            style={{
              backgroundColor: step < current ? '#22C55E' : step === current ? '#7C3AED' : '#E5E7EB',
              color: step <= current ? 'white' : '#9CA3AF',
            }}
          >
            {step < current ? '✓' : step}
          </div>
          {step < 4 && <div className="h-0.5 w-8 rounded-full" style={{ backgroundColor: step < current ? '#22C55E' : '#E5E7EB' }} />}
        </div>
      ))}
    </div>
  );
}

const MIN_PORTFOLIO_PHOTOS = 3;
const MAX_PORTFOLIO_PHOTOS = 6;

type PortfolioPhoto = {
  id: string;
  previewUrl?: string;
  file?: File;
  label?: string;
  color?: string;
};

const samplePhotos: PortfolioPhoto[] = [
  { id: 'sample-wedding', label: 'Wedding', color: '#7C3AED' },
  { id: 'sample-portrait', label: 'Portrait', color: '#22C55E' },
  { id: 'sample-event', label: 'Event', color: '#9A3412' },
];

export default function OnboardingStep2Page() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const objectUrlsRef = useRef<Set<string>>(new Set());
  const [portfolioPhotos, setPortfolioPhotos] = useState<PortfolioPhoto[]>(samplePhotos);
  const photoCount = portfolioPhotos.length;
  const minimumMet = photoCount >= MIN_PORTFOLIO_PHOTOS;
  const emptySlotCount = MAX_PORTFOLIO_PHOTOS - photoCount;

  useEffect(() => () => {
    objectUrlsRef.current.forEach((url) => URL.revokeObjectURL(url));
    objectUrlsRef.current.clear();
  }, []);

  const openFilePicker = () => {
    fileInputRef.current?.click();
  };

  const addPhotos = (event: ChangeEvent<HTMLInputElement>) => {
    const availableSlots = MAX_PORTFOLIO_PHOTOS - portfolioPhotos.length;
    const selectedFiles = Array.from(event.target.files ?? [])
      .filter((file) => file.type.startsWith('image/'))
      .slice(0, availableSlots);

    if (selectedFiles.length > 0) {
      const timestamp = Date.now();
      const newPhotos = selectedFiles.map((file, index) => {
        const previewUrl = URL.createObjectURL(file);
        objectUrlsRef.current.add(previewUrl);
        return {
          id: `upload-${timestamp}-${index}-${file.name}`,
          previewUrl,
          file,
        };
      });
      setPortfolioPhotos((current) => [...current, ...newPhotos]);
    }

    event.target.value = '';
  };

  const removePhoto = (photoId: string) => {
    const photo = portfolioPhotos.find((item) => item.id === photoId);
    if (photo?.previewUrl) {
      URL.revokeObjectURL(photo.previewUrl);
      objectUrlsRef.current.delete(photo.previewUrl);
    }
    setPortfolioPhotos((current) => current.filter((item) => item.id !== photoId));
  };

  return (
    <div className="flex min-h-svh flex-col bg-white">
      <div className="flex items-center gap-3 border-b border-gray-100 px-4 py-3">
        <Link href="/photographer/onboarding" className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M19 12H5M12 19l-7-7 7-7" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </Link>
        <div>
          <div className="text-sm font-bold text-gray-900">Daftar sebagai Fotografer</div>
          <div className="text-xs text-gray-400">Langkah 2 dari 4</div>
        </div>
      </div>

      <div className="flex items-center justify-between px-4 pt-2 pb-1">
        <StepIndicator current={2} />
        <div className="flex h-6 items-center justify-center rounded-full bg-gray-100 px-2.5 text-[10px] font-bold text-gray-500">2</div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 pb-24">
        <h2 className="text-xl font-bold text-gray-900 mb-1">Portofoliomu</h2>
        <p className="text-sm text-gray-400 mb-6">Upload minimal 3 foto terbaikmu untuk menarik klien potensial.</p>

        {/* Photo upload grid */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {portfolioPhotos.map((photo) => (
            <div key={photo.id} className="relative aspect-square rounded-2xl overflow-hidden" style={{ backgroundColor: photo.color ?? '#F3F4F6' }}>
              {photo.previewUrl && (
                <Image src={photo.previewUrl} alt="Foto portofolio" fill unoptimized className="object-cover" />
              )}
              <button
                type="button"
                onClick={() => removePhoto(photo.id)}
                aria-label={`Hapus foto${photo.label ? ` ${photo.label}` : ''}`}
                className="absolute top-1.5 right-1.5 z-10 flex h-5 w-5 cursor-pointer items-center justify-center rounded-full bg-black/30 active:scale-90 transition-transform"
              >
                <span className="text-[10px] text-white">✕</span>
              </button>
              {photo.label && (
                <div className="absolute bottom-1.5 left-1.5">
                  <span className="text-[10px] font-semibold text-white">{photo.label}</span>
                </div>
              )}
            </div>
          ))}
          {Array.from({ length: emptySlotCount }, (_, index) => (
            <button
              type="button"
              key={`empty-${index}`}
              onClick={openFilePicker}
              className="flex aspect-square cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 gap-1 transition-colors hover:bg-gray-100 active:bg-gray-100"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" /></svg>
              <span className="text-xs text-gray-400">Tambah</span>
            </button>
          ))}
          <input ref={fileInputRef} type="file" accept="image/*" multiple onChange={addPhotos} className="hidden" />
        </div>

        {/* Progress */}
        <div className={`mb-4 flex items-center gap-2 rounded-xl border px-4 py-2.5 ${minimumMet ? 'border-green-200 bg-green-50' : 'border-amber-200 bg-amber-50'}`}>
          <div className={`h-5 w-5 flex-shrink-0 rounded-full flex items-center justify-center ${minimumMet ? 'bg-green-500' : 'bg-amber-500'}`}>
            {minimumMet ? (
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            ) : (
              <span className="text-xs font-bold text-white">!</span>
            )}
          </div>
          <span className={`text-xs font-semibold ${minimumMet ? 'text-green-700' : 'text-amber-800'}`}>
            {minimumMet
              ? `${photoCount}/${MIN_PORTFOLIO_PHOTOS} foto minimum terpenuhi`
              : `${photoCount}/${MIN_PORTFOLIO_PHOTOS} foto — tambahkan minimal ${MIN_PORTFOLIO_PHOTOS - photoCount} foto lagi`}
          </span>
        </div>

        {/* Tips */}
        <div className="rounded-xl bg-violet-50 border border-violet-100 p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-base">⭐</span>
            <span className="text-xs font-bold text-violet-700">Tips foto berkualitas tinggi</span>
          </div>
          <ul className="flex flex-col gap-1">
            {[
              'Gunakan foto resolusi tinggi (min. 1080px)',
              'Tampilkan variasi — portrait, landscape, detail',
              'Hindari foto blur atau terlalu gelap',
            ].map((tip) => (
              <li key={tip} className="text-xs text-violet-600">• {tip}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="fixed bottom-0 left-1/2 w-full max-w-[390px] -translate-x-1/2 bg-white px-4 pb-8 pt-3 border-t border-gray-100">
        <button
          type="button"
          disabled={!minimumMet}
          onClick={() => router.push('/photographer/onboarding/step3')}
          className="flex w-full items-center justify-center gap-2 rounded-xl py-4 text-base font-semibold text-white transition-colors disabled:cursor-not-allowed"
          style={{ backgroundColor: minimumMet ? '#7C3AED' : '#D1D5DB' }}
        >
          Lanjut ke Layanan <span>›</span>
        </button>
      </div>
    </div>
  );
}
