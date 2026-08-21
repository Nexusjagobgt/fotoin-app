'use client';
import { useState, use } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const runningCategories = ['5K', '10K', 'Half Marathon', 'Full Marathon'];
const cyclingCategories = ['50K', '100K', 'Gran Fondo'];

const eventData: Record<string, {
  name: string;
  date: string;
  location: string;
  photos: string;
  photographers: string;
  previewRemainder: string;
}> = {
  'marathon-2026': { name: 'Surabaya City Marathon 2026', date: '15 Maret 2026', location: 'Surabaya', photos: '3.847', photographers: '12', previewRemainder: '+3.844' },
  'cycling-2026': { name: 'Gran Fondo Surabaya', date: '22 Februari 2026', location: 'Surabaya', photos: '1.203', photographers: '6', previewRemainder: '+1.200' },
  'campus-fun-run': { name: 'Campus Fun Run Petra', date: '2 Maret 2026', location: 'Surabaya', photos: '934', photographers: '4', previewRemainder: '+931' },
  'night-run': { name: 'Surabaya Night Run', date: '8 Februari 2026', location: 'Surabaya', photos: '2.156', photographers: '8', previewRemainder: '+2.153' },
};

const fallbackEvent = { name: 'Event Olahraga', date: '—', location: 'Surabaya', photos: '0', photographers: '0', previewRemainder: '+0' };

export default function EventCheckPage({ params }: { params: Promise<{ eventId: string }> }) {
  const { eventId } = use(params);
  const event = eventData[eventId] ?? fallbackEvent;
  const router = useRouter();
  const searchParams = useSearchParams();

  const isRunning = !['cycling-2026', 'granfondo'].includes(eventId);
  const categories = isRunning ? runningCategories : cyclingCategories;

  const defaultCategory = isRunning ? '10K' : 'Gran Fondo';
  const [selectedCategory, setSelectedCategory] = useState(() => {
    const category = searchParams.get('category');
    return category && categories.includes(category) ? category : defaultCategory;
  });
  const [bib, setBib] = useState(() => searchParams.get('bib') ?? '');
  const faceScanned = searchParams.get('faceScanned') === '1';

  const getSportsContext = () => {
    const params = new URLSearchParams({
      eventId,
      eventName: event.name,
      category: selectedCategory,
      faceScanned: '1',
    });
    if (bib.trim()) params.set('bib', bib.trim());
    return params;
  };

  const continueToMatching = () => {
    if (!faceScanned) {
      const params = getSportsContext();
      params.set('source', 'sports');
      params.set('returnTo', '/sports');
      params.delete('faceScanned');
      router.push(`/verify-face?${params.toString()}`);
      return;
    }

    router.push(`/sports/processing?${getSportsContext().toString()}`);
  };

  const returnToFaceScan = () => {
    const params = getSportsContext();
    params.set('source', 'sports');
    params.set('returnTo', '/sports');
    params.delete('faceScanned');
    router.push(`/verify-face?${params.toString()}`);
  };

  return (
    <div className="flex min-h-svh flex-col bg-white">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-gray-100 px-4 py-3 bg-white sticky top-0 z-10">
        <button type="button" onClick={faceScanned ? returnToFaceScan : () => router.push('/sports')} className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 active:scale-95 transition-transform">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5M12 19l-7-7 7-7" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <div>
          <div className="text-[15px] font-bold text-gray-900">Identifikasi Diri</div>
          <div className="text-xs text-gray-500 font-medium">Langkah 2 dari 3</div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-1 w-full bg-gray-100">
        <div className="h-full bg-violet-600 transition-all duration-500" style={{ width: '50%' }} />
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-5 pb-28">
        {/* Event context */}
        <div className="mb-6 rounded-2xl bg-gray-50 border border-gray-100 px-4 py-3.5 flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-violet-100 text-violet-600">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>
          </div>
          <div>
            <div className="text-[10px] font-extrabold text-violet-600 uppercase tracking-widest mb-0.5">Event Pilihan</div>
            <div className="text-sm font-bold text-gray-900 leading-tight">{event.name}</div>
          </div>
        </div>

        {faceScanned && (
          <div className="mb-6 flex items-center gap-3 rounded-2xl border border-green-200 bg-green-50 px-4 py-3.5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-500 text-white">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12.5l4.5 4.5L19.5 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <div className="text-sm font-bold text-green-800">Wajahmu sudah terdeteksi</div>
              <div className="mt-0.5 text-xs text-green-700">Siap digunakan untuk mencocokkan foto event.</div>
            </div>
          </div>
        )}

        {/* Category */}
        <div className="mb-6">
          <div className="text-[15px] font-bold text-gray-900 mb-3">Kategori</div>
          <div className="flex flex-wrap gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className="rounded-full px-4 py-2 text-[13px] font-bold transition-all active:scale-95"
                style={{
                  backgroundColor: selectedCategory === cat ? '#F5F3FF' : '#F9FAFB',
                  color: selectedCategory === cat ? '#6B21F5' : '#4B5563',
                  border: `1.5px solid ${selectedCategory === cat ? '#6B21F5' : '#E5E7EB'}`,
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* BIB input (Optional) */}
        <div className="mb-4">
          <div className="flex items-end justify-between mb-2">
            <div className="text-[15px] font-bold text-gray-900">Nomor BIB <span className="text-gray-400 font-medium">(Opsional)</span></div>
          </div>
          <div className="text-[12px] text-gray-500 mb-3 leading-relaxed">
            Tambahkan nomor BIB untuk membantu AI mempersempit hasil pencarian foto.
          </div>
          <input
            value={bib}
            onChange={(e) => setBib(e.target.value)}
            className="w-full rounded-2xl border-2 border-gray-100 bg-gray-50 px-4 py-3.5 text-sm font-bold text-gray-900 outline-none focus:border-violet-400 focus:bg-white transition-all placeholder-gray-400"
            placeholder="Contoh: 1234"
            inputMode="numeric"
          />
        </div>

        {/* Search summary */}
        <div className="mt-5 px-0.5">
          <div className="mb-2 text-[11px] font-bold uppercase tracking-wider text-gray-500">Pencarian akan menggunakan</div>
          <div className="flex flex-col gap-1.5 text-[12px] text-gray-600">
            <div className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <circle cx="8" cy="8" r="7" fill="#F5F3FF" />
                <path d="M4.6 8.1l2.1 2.1 4.5-4.4" stroke="#6B21F5" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Kategori: {selectedCategory}</span>
            </div>
            <div className="flex items-center gap-2">
              {bib.trim() ? (
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <circle cx="8" cy="8" r="7" fill="#DCFCE7" />
                  <path d="M4.6 8.1l2.1 2.1 4.5-4.4" stroke="#16A34A" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                <span className="flex h-3.5 w-3.5 shrink-0 rounded-full border border-gray-300" aria-hidden="true" />
              )}
              <span>Nomor BIB: {bib.trim() || 'Belum ditambahkan'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="fixed bottom-0 left-1/2 w-full max-w-[390px] -translate-x-1/2 bg-white/90 backdrop-blur-md border-t border-gray-100 px-5 py-4 pb-6">
        <button
          type="button"
          onClick={continueToMatching}
          className="w-full rounded-2xl bg-violet-600 py-3.5 text-[15px] font-bold text-white shadow-[0_4px_15px_rgba(107,33,245,0.25)] transition-all active:scale-[0.98]"
        >
          {faceScanned ? 'Lanjutkan Pencarian' : 'Pindai Wajah'}
        </button>

      </div>
    </div>
  );
}
