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
          {step < 4 && <div className="h-0.5 w-8 rounded-full" style={{ backgroundColor: step < current ? '#22C55E' : '#E5E7EB' }} />}
        </div>
      ))}
    </div>
  );
}

const samplePhotos = [
  { label: 'Wedding', color: '#7C3AED' },
  { label: 'Portrait', color: '#22C55E' },
  { label: 'Event', color: '#9A3412' },
];

export default function OnboardingStep2Page() {
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
          {samplePhotos.map((p) => (
            <div key={p.label} className="relative aspect-square rounded-2xl overflow-hidden" style={{ backgroundColor: p.color }}>
              <div className="absolute top-1.5 right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-black/30">
                <span className="text-[10px] text-white">✕</span>
              </div>
              <div className="absolute bottom-1.5 left-1.5">
                <span className="text-[10px] font-semibold text-white">{p.label}</span>
              </div>
            </div>
          ))}
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex aspect-square flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 gap-1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" /></svg>
              <span className="text-xs text-gray-400">Tambah</span>
            </div>
          ))}
        </div>

        {/* Progress */}
        <div className="mb-4 flex items-center gap-2 rounded-xl bg-green-50 border border-green-200 px-4 py-2.5">
          <div className="h-5 w-5 flex-shrink-0 rounded-full bg-green-500 flex items-center justify-center">
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </div>
          <span className="text-xs font-semibold text-green-700">3/3 foto minimum terpenuhi</span>
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
        <Link href="/photographer/onboarding/step3" className="flex w-full items-center justify-center gap-2 rounded-xl py-4 text-base font-semibold text-white" style={{ backgroundColor: '#7C3AED' }}>
          Lanjut ke Layanan <span>›</span>
        </Link>
      </div>
    </div>
  );
}
