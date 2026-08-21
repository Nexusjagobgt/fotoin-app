'use client';
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

const stageLabels = [
  'Memeriksa data event',
  'Mencocokkan wajahmu',
  'Menyiapkan hasil',
];

const stageDoneAt = [30, 85, 100];

function getProgress(elapsed: number): number {
  if (elapsed >= 8000) return 100;
  if (elapsed < 2500) return (elapsed / 2500) * 30;
  if (elapsed < 6500) return 30 + ((elapsed - 2500) / 4000) * 55;
  return 85 + ((elapsed - 6500) / 1500) * 15;
}

import { Suspense } from 'react';

function ProcessingContent() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const resultsHref = `/sports/results${searchParams.size ? `?${searchParams.toString()}` : ''}`;
  const eventId = searchParams.get('eventId');
  const backHref = eventId
      ? `/sports/${eventId}/check?${new URLSearchParams({
        ...(searchParams.get('eventName') ? { eventName: searchParams.get('eventName')! } : {}),
        ...(searchParams.get('category') ? { category: searchParams.get('category')! } : {}),
        ...(searchParams.get('bib') ? { bib: searchParams.get('bib')! } : {}),
        ...(searchParams.get('faceScanned') === '1' ? { faceScanned: '1' } : {}),
      }).toString()}`
    : '/sports';

  useEffect(() => {
    const startTime = performance.now();
    let rafId: number;

    const tick = (now: number) => {
      const p = getProgress(now - startTime);
      setProgress(p);
      if (p < 100) {
        rafId = requestAnimationFrame(tick);
      }
    };
    rafId = requestAnimationFrame(tick);

    const completeTimer = setTimeout(() => {
      setProgress(100);
      setIsComplete(true);
    }, 8000);

    const redirectTimer = setTimeout(() => {
      router.push(resultsHref);
    }, 9000);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(completeTimer);
      clearTimeout(redirectTimer);
    };
  }, [resultsHref, router]);

  const displayPct = Math.min(100, Math.round(progress));
  const showSkip = progress >= 50;

  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-gray-900 px-6 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1565120130276-05b94d46be21?w=400&h=800&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0" style={{ background: 'rgba(17,24,39,0.88)' }} />

      {/* Back button */}
      <Link
        href={backHref}
        className="absolute left-4 top-10 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M19 12H5M12 19l-7-7 7-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>

      <div className="relative z-10 flex w-full max-w-[300px] flex-col items-center">
        {/* Search and success status */}
        <div className="relative mb-4 flex items-center justify-center">
          {isComplete ? (
            <div className="flex h-[88px] w-[88px] items-center justify-center rounded-full bg-green-500 shadow-[0_0_24px_rgba(34,197,94,0.3)]">
              <svg width="42" height="42" viewBox="0 0 24 24" fill="none" aria-label="Pencarian berhasil">
                <path d="M5 12.5l4.5 4.5L19.5 7" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          ) : (
            <div
              className="h-[76px] w-[76px] animate-spin rounded-full border-[3px] border-white/15 border-r-emerald-400 border-t-violet-400"
              style={{ animationDuration: '1.2s' }}
              aria-label="Sedang mencari foto"
            />
          )}
          {/* Green ring pulse on complete */}
          {isComplete && (
            <div className="absolute inset-0 rounded-full animate-ping" style={{ border: '3px solid #22C55E', opacity: 0.4 }} />
          )}
        </div>

        {/* Title */}
        <div className="mb-1 mt-2 text-center text-2xl font-bold text-white">
          {isComplete ? (
            <span
              style={{
                animation: 'fadeIn 0.5s ease forwards',
                opacity: 0,
                display: 'inline-block',
              }}
            >
              Foto ditemukan!
            </span>
          ) : (
            'Sedang mencari fotomu...'
          )}
        </div>
        <p className="mb-6 text-center text-sm text-white/60">
          {isComplete
            ? 'Kami berhasil menemukan fotomu'
            : 'Sedang mencocokkan wajahmu dengan 2.847 foto dari event ini'}
        </p>

        {/* Progress bar */}
        <div className="mb-1 w-full">
          <div className="mb-1.5 flex justify-between text-xs">
            <span className="text-white/50">{isComplete ? 'Selesai!' : 'Mencocokkan wajahmu...'}</span>
            <span
              className="font-bold"
              style={{ color: isComplete ? '#22C55E' : 'white', transition: 'color 0.4s ease' }}
            >
              {displayPct}%
            </span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full"

              style={{
                width: `${progress}%`,
                background: isComplete
                  ? '#22C55E'
                  : 'linear-gradient(90deg, #6B21F5, #22C55E)',
                transition: 'background 0.4s ease',
              }}
            />
          </div>
        </div>

        {/* Stage indicators */}
        <div className="mt-6 flex w-full flex-col gap-3">
          {stageLabels.map((label, i) => {
            const done = progress >= stageDoneAt[i];
            const active = !done && progress >= (stageDoneAt[i - 1] ?? 0);
            return (
              <div key={label} className="flex items-center gap-3">
                {done ? (
                  <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-500">
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                ) : active ? (
                  <div
                    className="h-5 w-5 flex-shrink-0 animate-spin rounded-full border-2 border-violet-400"
                    style={{ borderTopColor: 'transparent', animationDuration: '0.7s' }}
                  />
                ) : (
                  <div className="h-5 w-5 flex-shrink-0 rounded-full border-2 border-white/20 bg-white/5" />
                )}
                <span
                  className="text-sm"
                  style={{
                    color: done ? '#DCFCE7' : active ? '#C4B5FD' : 'rgba(255,255,255,0.3)',
                    transition: 'color 0.3s ease',
                  }}
                >
                  {isComplete ? label : `${label}...`}
                </span>
              </div>
            );
          })}
        </div>

        {/* Skip link — appears at 50% */}
        <div
          className="mt-8"
          style={{
            opacity: showSkip ? 1 : 0,
            pointerEvents: showSkip ? 'auto' : 'none',
            transition: 'opacity 0.5s ease',
          }}
        >
          <Link href={resultsHref} className="text-xs text-white/50 underline">
            Langsung lihat semua foto
          </Link>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

export default function ProcessingPage() {
  return (
    <Suspense fallback={<div className="flex min-h-svh items-center justify-center bg-gray-900"><div className="h-8 w-8 animate-spin rounded-full border-2 border-white border-t-transparent" /></div>}>
      <ProcessingContent />
    </Suspense>
  );
}
