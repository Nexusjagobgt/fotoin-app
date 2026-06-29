'use client';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

type Role = 'customer' | 'photographer';

export default function RolePage() {
  const [role, setRole] = useState<Role | null>(null);
  const router = useRouter();

  function handleContinue() {
    if (role === 'customer') router.push('/home');
    else if (role === 'photographer') router.push('/photographer/onboarding-intro');
  }

  return (
    <>
      <style>{`
        @keyframes cardPop {
          0%   { transform: scale(0.97); }
          60%  { transform: scale(1.02); }
          100% { transform: scale(1); }
        }
        .card-selected { animation: cardPop 0.25s ease-out forwards; }
      `}</style>

      <div className="flex min-h-svh flex-col items-center bg-white px-6">
        {/* Logo */}
        <div className="mt-14 mb-1">
          <Image
            src="/images/FOTOIN LOGO.png"
            alt="FOTOIN"
            width={160}
            height={40}
            priority
            className="object-contain"
          />
        </div>

        {/* Heading */}
        <div className="mt-8 text-center">
          <h1 className="text-[22px] font-bold leading-tight text-gray-900">
            Kamu bergabung sebagai?
          </h1>
          <p className="mt-2 text-sm text-gray-400">Pilih peran untuk melanjutkan</p>
        </div>

        {/* Cards */}
        <div className="mt-8 flex w-full flex-col gap-4">
          {/* Customer */}
          <button
            onClick={() => setRole('customer')}
            className={`flex items-center gap-4 rounded-2xl border-2 px-5 py-5 text-left transition-all duration-200${role === 'customer' ? ' card-selected' : ''}`}
            style={{
              borderColor: role === 'customer' ? '#6B21F5' : '#E5E7EB',
              backgroundColor: role === 'customer' ? '#F5F3FF' : 'white',
              boxShadow: role === 'customer' ? '0 4px 20px rgba(107,33,245,0.18)' : 'none',
            }}
          >
            <div
              className="flex h-[54px] w-[54px] flex-shrink-0 items-center justify-center rounded-[14px]"
              style={{ background: 'linear-gradient(135deg, #7C3AED 0%, #6B21F5 100%)' }}
            >
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <circle cx="14" cy="10" r="5" fill="rgba(255,255,255,0.95)" />
                <path d="M5 24c0-4.97 4.03-9 9-9s9 4.03 9 9" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="text-[17px] font-bold text-gray-900">Customer</div>
              <div className="mt-0.5 text-[13px] leading-snug text-gray-500">
                Temukan dan booking fotografer terbaik
              </div>
            </div>
            <div
              className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full transition-all duration-200"
              style={{
                background: role === 'customer' ? '#6B21F5' : '#F3F4F6',
              }}
            >
              {role === 'customer' && (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
          </button>

          {/* Fotografer */}
          <button
            onClick={() => setRole('photographer')}
            className={`flex items-center gap-4 rounded-2xl border-2 px-5 py-5 text-left transition-all duration-200${role === 'photographer' ? ' card-selected' : ''}`}
            style={{
              borderColor: role === 'photographer' ? '#16a34a' : '#E5E7EB',
              backgroundColor: role === 'photographer' ? '#F0FDF4' : 'white',
              boxShadow: role === 'photographer' ? '0 4px 20px rgba(34,197,94,0.18)' : 'none',
            }}
          >
            <div
              className="flex h-[54px] w-[54px] flex-shrink-0 items-center justify-center rounded-[14px]"
              style={{ background: 'linear-gradient(135deg, #22C55E 0%, #16a34a 100%)' }}
            >
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <rect x="3" y="8" width="22" height="15" rx="3" fill="rgba(255,255,255,0.9)" />
                <circle cx="14" cy="15.5" r="3.8" fill="#22C55E" />
                <circle cx="14" cy="15.5" r="2.1" fill="white" />
                <path d="M10 8l1.4-2.8h5.2L18 8" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
                <circle cx="21" cy="11.5" r="1.4" fill="#16a34a" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="text-[17px] font-bold text-gray-900">Fotografer</div>
              <div className="mt-0.5 text-[13px] leading-snug text-gray-500">
                Terima booking dan kembangkan portofoliomu
              </div>
            </div>
            <div
              className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full transition-all duration-200"
              style={{
                background: role === 'photographer' ? '#16a34a' : '#F3F4F6',
              }}
            >
              {role === 'photographer' && (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
          </button>
        </div>

        {/* Footer */}
        <div className="mt-auto mb-6 w-full flex flex-col gap-3 pt-6">
          <button
            onClick={handleContinue}
            disabled={!role}
            className="w-full rounded-xl py-4 text-base font-semibold text-white transition-all duration-200"
            style={{
              background: role
                ? 'linear-gradient(135deg, #6B21F5 0%, #4C1D95 100%)'
                : '#D1D5DB',
              boxShadow: role ? '0 4px 20px rgba(107,33,245,0.30)' : 'none',
              cursor: role ? 'pointer' : 'not-allowed',
            }}
          >
            {role === 'customer'
              ? 'Lanjutkan sebagai Customer →'
              : role === 'photographer'
              ? 'Lanjutkan sebagai Fotografer →'
              : 'Pilih peran terlebih dahulu'}
          </button>
          <p className="text-center text-xs leading-relaxed text-gray-400 px-2">
            Kamu bisa beralih peran kapanpun melalui pengaturan
          </p>
        </div>
      </div>
    </>
  );
}
