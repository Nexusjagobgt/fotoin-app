'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const stageLabels = [
  'Foto berhasil diupload',
  'Analisa fitur wajah selesai',
  'Mencocokkan dari 2.847 foto...',
  'Menyiapkan hasil',
];

const stageDoneAt = [25, 50, 90, 100];

function getProgress(elapsed: number): number {
  if (elapsed >= 8000) return 100;
  if (elapsed < 2000) return (elapsed / 2000) * 25;
  if (elapsed < 4000) return 25 + ((elapsed - 2000) / 2000) * 25;
  if (elapsed < 7000) return 50 + ((elapsed - 4000) / 3000) * 40;
  return 90 + ((elapsed - 7000) / 1000) * 10;
}

export default function ProcessingPage() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const router = useRouter();

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
      router.push('/sports/results');
    }, 9000);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(completeTimer);
      clearTimeout(redirectTimer);
    };
  }, [router]);

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
        href="/sports"
        className="absolute left-4 top-10 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M19 12H5M12 19l-7-7 7-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>

      <div className="relative z-10 flex w-full max-w-[300px] flex-col items-center">
        {/* Avatar with rotating gradient border */}
        <div className="relative mb-4 flex items-center justify-center">
          <div
            className={`h-[88px] w-[88px] rounded-full p-[3px] ${isComplete ? '' : 'animate-spin'}`}
            style={{
              background: isComplete
                ? '#22C55E'
                : 'conic-gradient(#6B21F5 0%, #22C55E 50%, #6B21F5 100%)',
              animationDuration: '2s',
              transition: 'background 0.4s ease',
            }}
          >
            <div className="h-full w-full overflow-hidden rounded-full">
              <div
                className="h-full w-full"
                style={{
                  backgroundImage: 'url(https://i.pravatar.cc/80?img=33)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </div>
          </div>
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
              Foto ditemukan! 🎉
            </span>
          ) : (
            'Sedang mencari fotomu...'
          )}
        </div>
        <p className="mb-6 text-center text-sm text-white/60">
          {isComplete
            ? 'Kami berhasil menemukan fotomu'
            : 'AI kami sedang mencocokkan dari 2.847 foto di event ini'}
        </p>

        {/* Progress bar */}
        <div className="mb-1 w-full">
          <div className="mb-1.5 flex justify-between text-xs">
            <span className="text-white/50">{isComplete ? 'Selesai!' : 'Mencocokkan wajah...'}</span>
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
                  {label}
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
          <Link href="/sports/results" className="text-xs text-white/50 underline">
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
