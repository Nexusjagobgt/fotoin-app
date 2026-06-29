import Link from 'next/link';

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
          {step < 4 && (
            <div className="h-0.5 w-8 rounded-full" style={{ backgroundColor: step < current ? '#22C55E' : '#E5E7EB' }} />
          )}
        </div>
      ))}
      <div className="ml-2 text-xs text-gray-400">
        {['Profil', 'Portofolio', 'Layanan', 'Verifikasi'][current - 1]}
      </div>
    </div>
  );
}

export default function OnboardingStep1Page() {
  return (
    <div className="flex min-h-svh flex-col bg-white">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-gray-100 px-4 py-3">
        <Link href="/role" className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M19 12H5M12 19l-7-7 7-7" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </Link>
        <div>
          <div className="text-sm font-bold text-gray-900">Daftar sebagai Fotografer</div>
          <div className="text-xs text-gray-400">Langkah 1 dari 4</div>
        </div>
      </div>

      <div className="px-4">
        <StepIndicator current={1} />
      </div>

      <div className="flex-1 overflow-y-auto px-4 pb-24">
        <h2 className="text-xl font-bold text-gray-900 mb-1">Lengkapi Profilmu</h2>
        <p className="text-sm text-gray-400 mb-6">Buat profilmu semenarik mungkin agar lebih banyak klien tertarik.</p>

        {/* Avatar upload */}
        <div className="flex flex-col items-center mb-6">
          <div className="relative h-24 w-24 rounded-full border-2 border-dashed border-violet-300 bg-violet-50 flex items-center justify-center">
            <div className="flex flex-col items-center gap-1">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="7" r="4" stroke="#7C3AED" strokeWidth="1.8" /><path d="M4 21v-1a8 8 0 0116 0v1" stroke="#7C3AED" strokeWidth="1.8" strokeLinecap="round" /></svg>
              <span className="text-xs font-semibold text-violet-600">Upload</span>
            </div>
            <div className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-violet-600">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="white" strokeWidth="2.5" strokeLinecap="round" /></svg>
            </div>
          </div>
          <span className="mt-2 text-xs text-gray-400">Foto profil (maks. 2MB)</span>
        </div>

        {/* Form fields */}
        <div className="flex flex-col gap-4">
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-gray-900">Nama Lengkap *</label>
            <input defaultValue="Rizki Pratama" className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none focus:border-violet-400" />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-gray-900">Bio Singkat *</label>
            <div className="relative">
              <textarea defaultValue="Fotografer profesional berbasis di Surabaya. Spesialis event, wedding, dan portrait. 4+ tahun pengalaman." className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none focus:border-violet-400 resize-none" rows={3} maxLength={200} />
              <span className="absolute bottom-2 right-3 text-[10px] text-gray-400">112/200</span>
            </div>
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-gray-900">Nomor WhatsApp *</label>
            <div className="flex rounded-xl border border-gray-200 overflow-hidden">
              <div className="flex items-center bg-gray-50 px-3 py-3 border-r border-gray-200">
                <span className="text-sm text-gray-500">+62</span>
              </div>
              <input defaultValue="812-3456-7890" className="flex-1 px-3 py-3 text-sm text-gray-900 outline-none" />
            </div>
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-gray-900">Kota</label>
            <div className="flex items-center justify-between rounded-xl border border-gray-200 px-4 py-3">
              <span className="text-sm text-gray-900">Surabaya, Jawa Timur</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-1/2 w-full max-w-[390px] -translate-x-1/2 bg-white px-4 pb-8 pt-3 border-t border-gray-100">
        <Link href="/photographer/onboarding/step2" className="flex w-full items-center justify-center gap-2 rounded-xl py-4 text-base font-semibold text-white" style={{ backgroundColor: '#7C3AED' }}>
          Lanjut ke Portofolio <span>›</span>
        </Link>
      </div>
    </div>
  );
}
