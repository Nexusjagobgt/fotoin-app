import Link from 'next/link';

export default function OnboardingDonePage() {
  return (
    <div className="flex min-h-svh flex-col bg-white">
      {/* Step indicator - all done */}
      <div className="px-4 pt-4 pb-2">
        <div className="flex items-center gap-2">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-green-500 text-xs font-bold text-white">✓</div>
              {step < 4 && <div className="h-0.5 w-8 rounded-full bg-green-500" />}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center px-6 py-8">
        {/* Success icon */}
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100" style={{ boxShadow: '0 8px 24px rgba(34,197,94,0.25)' }}>
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M5 12l5 5L20 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        <h1 className="mb-2 text-center text-2xl font-bold text-gray-900">Profil Fotografermu Siap!</h1>
        <p className="mb-8 text-center text-sm text-gray-400 leading-relaxed">
          Akunmu sedang direview oleh tim FOTOIN. Biasanya selesai dalam 1×24 jam.
        </p>

        {/* What to do next */}
        <div className="w-full rounded-2xl border border-violet-100 bg-violet-50 p-4 mb-8">
          <div className="mb-3 text-xs font-bold text-violet-700">Yang bisa kamu lakukan sekarang:</div>
          {[
            { icon: '⏰', text: 'Tunggu email konfirmasi verifikasi dari kami' },
            { icon: '📸', text: 'Lengkapi paket harga di dashboard fotografer' },
            { icon: '⭐', text: 'Aktifkan ketersediaan agar klien bisa menemukanmu' },
          ].map(({ icon, text }) => (
            <div key={text} className="flex items-center gap-3 py-2 border-b border-violet-100 last:border-0">
              <span className="text-base flex-shrink-0">{icon}</span>
              <span className="text-sm text-violet-700">{text}</span>
            </div>
          ))}
        </div>

        <Link
          href="/photographer/dashboard"
          className="flex w-full items-center justify-center gap-2 rounded-xl py-4 text-base font-semibold text-white"
          style={{ backgroundColor: '#7C3AED' }}
        >
          Ke Dashboard Fotografer <span>›</span>
        </Link>
      </div>
    </div>
  );
}
