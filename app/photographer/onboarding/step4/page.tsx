import Link from 'next/link';

function StepIndicator({ current }: { current: number }) {
  return (
    <div className="flex items-center gap-2 py-3">
      {[1, 2, 3, 4].map((step) => (
        <div key={step} className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold" style={{ backgroundColor: step < current ? '#22C55E' : step === current ? '#7C3AED' : '#E5E7EB', color: step <= current ? 'white' : '#9CA3AF' }}>
            {step < current ? '✓' : step}
          </div>
          {step < 4 && <div className="h-0.5 w-8 rounded-full" style={{ backgroundColor: step < current ? '#22C55E' : '#E5E7EB' }} />}
        </div>
      ))}
    </div>
  );
}

export default function OnboardingStep4Page() {
  return (
    <div className="flex min-h-svh flex-col bg-white">
      <div className="flex items-center gap-3 border-b border-gray-100 px-4 py-3">
        <Link href="/photographer/onboarding/step3" className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M19 12H5M12 19l-7-7 7-7" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </Link>
        <div>
          <div className="text-sm font-bold text-gray-900">Daftar sebagai Fotografer</div>
          <div className="text-xs text-gray-400">Langkah 4 dari 4</div>
        </div>
      </div>

      <div className="px-4">
        <StepIndicator current={4} />
      </div>

      <div className="flex-1 overflow-y-auto px-4 pb-24">
        <h2 className="text-xl font-bold text-gray-900 mb-1">Verifikasi Identitas</h2>
        <p className="text-sm text-gray-400 mb-6">Upload KTP dan selfie untuk memverifikasi akunmu.</p>

        {/* KTP upload */}
        <div className="mb-5">
          <div className="mb-2 text-sm font-semibold text-gray-900">Foto KTP</div>
          <div className="flex flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-violet-200 bg-violet-50 py-8">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="2" stroke="#7C3AED" strokeWidth="1.8" /><path d="M3 9h18" stroke="#7C3AED" strokeWidth="1.8" /><circle cx="8" cy="14" r="2" stroke="#7C3AED" strokeWidth="1.8" /></svg>
            <div className="text-sm font-semibold text-violet-600">Upload Foto KTP</div>
            <div className="text-xs text-gray-400">JPG, PNG — Maks. 5MB</div>
          </div>
        </div>

        {/* Selfie with KTP */}
        <div className="mb-5">
          <div className="mb-2 text-sm font-semibold text-gray-900">Selfie dengan KTP</div>
          <div className="flex flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 py-8">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><rect x="3" y="8" width="18" height="13" rx="2" stroke="#9CA3AF" strokeWidth="1.8" /><circle cx="12" cy="14" r="3" stroke="#9CA3AF" strokeWidth="1.8" /><path d="M8 8V5a4 4 0 018 0v3" stroke="#9CA3AF" strokeWidth="1.8" strokeLinecap="round" /></svg>
            <div className="text-sm text-gray-400">Upload Selfie + KTP</div>
            <div className="text-xs text-gray-400">Foto wajah sambil memegang KTP</div>
          </div>
        </div>

        {/* Security notice */}
        <div className="rounded-2xl border border-green-200 bg-green-50 p-4">
          <div className="mb-2 flex items-center gap-2">
            <div className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center">
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </div>
            <span className="text-xs font-bold text-green-800">Data kamu aman bersama kami</span>
          </div>
          <ul className="flex flex-col gap-1">
            {[
              'Dienkripsi dengan standar keamanan tinggi',
              'Proses verifikasi 1×24 jam kerja',
              'Notifikasi hasil via email & aplikasi',
            ].map((item) => (
              <li key={item} className="text-xs text-green-700">• {item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="fixed bottom-0 left-1/2 w-full max-w-[390px] -translate-x-1/2 bg-white px-4 pb-8 pt-3 border-t border-gray-100 flex flex-col gap-2">
        <Link href="/photographer/onboarding/done" className="flex w-full items-center justify-center gap-2 rounded-xl py-4 text-base font-semibold text-white" style={{ backgroundColor: '#7C3AED' }}>
          ⭐ Submit untuk Verifikasi
        </Link>
        <Link href="/photographer/onboarding/done" className="text-center text-sm text-gray-400 hover:text-gray-600">
          Lewati dulu, verifikasi nanti
        </Link>
      </div>
    </div>
  );
}
