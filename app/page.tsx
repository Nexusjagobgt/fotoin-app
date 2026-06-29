'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function SplashPage() {
  const router = useRouter();

  return (
    <>
      <style>{`
        @keyframes floatDot {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.45; }
          50% { transform: translateY(-16px) scale(1.2); opacity: 1; }
        }
        @keyframes blob {
          0%, 100% { transform: scale(1) translate(0, 0); }
          33% { transform: scale(1.08) translate(16px, -24px); }
          66% { transform: scale(0.94) translate(-12px, 14px); }
        }
        @keyframes accentPulse {
          0%, 100% { width: 48px; opacity: 1; }
          50% { width: 68px; opacity: 0.7; }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .dot { animation: floatDot var(--dur, 3.2s) ease-in-out var(--delay, 0s) infinite; }
        .blob { animation: blob var(--bdur, 9s) ease-in-out infinite; }
        .accent { animation: accentPulse 2.6s ease-in-out infinite; }
        .fu1 { animation: fadeSlideUp 0.65s ease-out 0.15s both; }
        .fu2 { animation: fadeSlideUp 0.65s ease-out 0.35s both; }
        .fu3 { animation: fadeSlideUp 0.65s ease-out 0.55s both; }
        .fu4 { animation: fadeSlideUp 0.65s ease-out 0.75s both; }
      `}</style>

      <div
        className="relative flex min-h-svh w-full items-center justify-center overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #6B21F5 0%, #4C1D95 100%)' }}
      >
        {/* Pulsing blobs */}
        <div className="blob absolute -top-24 -left-20 h-72 w-72 rounded-full opacity-40"
          style={{ background: 'radial-gradient(circle, #7C3AED, transparent 70%)', '--bdur': '9s' } as React.CSSProperties} />
        <div className="blob absolute -bottom-16 -right-16 h-64 w-64 rounded-full opacity-35"
          style={{ background: 'radial-gradient(circle, #4C1D95, transparent 70%)', '--bdur': '11s' } as React.CSSProperties} />
        <div className="blob absolute top-1/2 left-2/3 h-48 w-48 rounded-full opacity-25"
          style={{ background: 'radial-gradient(circle, #6B21F5, transparent 70%)', '--bdur': '7s' } as React.CSSProperties} />

        {/* Floating dots */}
        <span className="dot absolute top-[8%]  left-[10%]  h-2   w-2   rounded-full bg-white/30" style={{ '--dur': '3.1s', '--delay': '0s'    } as React.CSSProperties} />
        <span className="dot absolute top-[15%] right-[12%] h-3   w-3   rounded-full bg-green-400/40" style={{ '--dur': '4.2s', '--delay': '0.5s'  } as React.CSSProperties} />
        <span className="dot absolute top-[38%] left-[6%]  h-1.5 w-1.5 rounded-full bg-white/20" style={{ '--dur': '2.8s', '--delay': '1.1s'  } as React.CSSProperties} />
        <span className="dot absolute bottom-[28%] right-[8%]  h-2.5 w-2.5 rounded-full bg-purple-300/35" style={{ '--dur': '3.8s', '--delay': '0.3s'  } as React.CSSProperties} />
        <span className="dot absolute bottom-[16%] left-[16%] h-2   w-2   rounded-full bg-green-300/40" style={{ '--dur': '4.6s', '--delay': '0.8s'  } as React.CSSProperties} />
        <span className="dot absolute top-[58%] right-[20%] h-1.5 w-1.5 rounded-full bg-white/25" style={{ '--dur': '3.4s', '--delay': '1.4s'  } as React.CSSProperties} />

        {/* Content */}
        <div className="relative z-10 flex w-full max-w-[390px] flex-col items-center px-8 py-14">

          {/* Logo */}
          <div className="fu1 flex flex-col items-center">
            <Image
              src="/images/FOTOIN LOGO.png"
              alt="FOTOIN"
              width={220}
              height={55}
              priority
              className="object-contain"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
            <div
              className="accent mt-4 h-[3px] rounded-full bg-green-400"
              style={{ width: 48 }}
            />
          </div>

          {/* Tagline */}
          <p
            className="fu2 mt-8 text-center text-[15px] leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.80)', maxWidth: 280 }}
          >
            Temukan fotografer terbaik untuk momen berhargamu
          </p>

          {/* CTA */}
          <button
            onClick={() => router.push('/login')}
            className="fu3 mt-12 w-full rounded-2xl py-4 text-base font-semibold text-white transition-transform active:scale-95"
            style={{
              background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
              boxShadow: '0 8px 28px rgba(34,197,94,0.40)',
            }}
          >
            Mulai Sekarang →
          </button>

          {/* Version */}
          <p className="fu4 mt-5 text-xs" style={{ color: 'rgba(255,255,255,0.35)', letterSpacing: '0.4px' }}>
            v1.0.0 Beta · Surabaya Pilot
          </p>
        </div>
      </div>
    </>
  );
}
