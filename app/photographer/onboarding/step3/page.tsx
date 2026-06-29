'use client';
import { useState } from 'react';
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

const cats = ['Wedding', 'Portrait', 'Event', 'Produk', 'Olahraga', 'Fashion', 'Wisuda', 'Lainnya'];

export default function OnboardingStep3Page() {
  const [selected, setSelected] = useState(['Wedding', 'Portrait']);
  const [available, setAvailable] = useState(true);

  const toggle = (cat: string) => {
    setSelected((prev) => prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]);
  };

  return (
    <div className="flex min-h-svh flex-col bg-white">
      <div className="flex items-center gap-3 border-b border-gray-100 px-4 py-3">
        <Link href="/photographer/onboarding/step2" className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M19 12H5M12 19l-7-7 7-7" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </Link>
        <div>
          <div className="text-sm font-bold text-gray-900">Daftar sebagai Fotografer</div>
          <div className="text-xs text-gray-400">Langkah 3 dari 4</div>
        </div>
      </div>

      <div className="px-4">
        <StepIndicator current={3} />
      </div>

      <div className="flex-1 overflow-y-auto px-4 pb-24">
        <h2 className="text-xl font-bold text-gray-900 mb-1">Layananmu</h2>
        <p className="text-sm text-gray-400 mb-6">Pilih kategori dan tentukan harga untuk menarik klien.</p>

        {/* Categories */}
        <div className="mb-6">
          <div className="mb-2 text-sm font-semibold text-gray-900">Kategori Fotografi</div>
          <div className="flex flex-wrap gap-2">
            {cats.map((cat) => (
              <button
                key={cat}
                onClick={() => toggle(cat)}
                className="rounded-full px-4 py-2 text-sm font-medium"
                style={{
                  backgroundColor: selected.includes(cat) ? '#7C3AED' : 'white',
                  color: selected.includes(cat) ? 'white' : '#374151',
                  border: `1.5px solid ${selected.includes(cat) ? '#7C3AED' : '#D1D5DB'}`,
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Price */}
        <div className="mb-6">
          <div className="mb-2 text-sm font-semibold text-gray-900">Harga per Jam</div>
          <div className="flex items-center rounded-xl border border-violet-300 bg-violet-50 px-4 py-3">
            <span className="text-sm text-gray-400 mr-2">Rp</span>
            <input defaultValue="350.000" className="flex-1 bg-transparent text-base font-bold text-gray-900 outline-none" />
            <span className="text-sm text-gray-400">/ jam</span>
          </div>
          <p className="mt-1.5 text-xs text-gray-400">Rata-rata fotografer di kotamu: Rp 250.000–500.000/jam</p>
        </div>

        {/* Availability toggle */}
        <div className="flex items-center justify-between rounded-xl border border-gray-100 bg-gray-50 p-4">
          <div>
            <div className="text-sm font-semibold text-gray-900">Tersedia Hari Ini</div>
            <div className="text-xs text-gray-400">Tampilkan profilmu sebagai aktif sekarang</div>
          </div>
          <button
            onClick={() => setAvailable(!available)}
            className="relative h-7 w-12 flex-shrink-0 rounded-full transition-colors"
            style={{ backgroundColor: available ? '#22C55E' : '#E5E7EB' }}
          >
            <div className="absolute top-0.5 h-6 w-6 rounded-full bg-white shadow-sm transition-transform" style={{ transform: available ? 'translateX(20px)' : 'translateX(2px)' }} />
          </button>
        </div>
      </div>

      <div className="fixed bottom-0 left-1/2 w-full max-w-[390px] -translate-x-1/2 bg-white px-4 pb-8 pt-3 border-t border-gray-100">
        <Link href="/photographer/onboarding/step4" className="flex w-full items-center justify-center gap-2 rounded-xl py-4 text-base font-semibold text-white" style={{ backgroundColor: '#7C3AED' }}>
          Lanjut ke Verifikasi <span>›</span>
        </Link>
      </div>
    </div>
  );
}
