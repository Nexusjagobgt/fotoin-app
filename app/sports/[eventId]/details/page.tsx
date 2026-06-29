'use client';
import { useState, use } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const runningCategories = ['5K', '10K', 'Half Marathon', 'Full Marathon'];
const cyclingCategories = ['50K', '100K', 'Gran Fondo'];

export default function EventDetailsPage({ params }: { params: Promise<{ eventId: string }> }) {
  const { eventId } = use(params);
  const [selectedCategory, setSelectedCategory] = useState('10K');
  const [bib, setBib] = useState('');
  const [startTime, setStartTime] = useState('');
  const router = useRouter();

  const isRunning = !['cycling-2026', 'granfondo'].includes(eventId);
  const categories = isRunning ? runningCategories : cyclingCategories;

  return (
    <div className="flex min-h-svh flex-col bg-white">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-gray-100 px-4 py-3">
        <Link href={`/sports/${eventId}/check`} className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5M12 19l-7-7 7-7" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
        <div>
          <div className="text-sm font-bold text-gray-900">Detail Partisipasimu</div>
          <div className="text-xs text-gray-400">Langkah 2 dari 4</div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-1 bg-gray-100">
        <div className="h-full bg-violet-600 transition-all" style={{ width: '50%' }} />
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-5 pb-32">
        {/* Event name */}
        <div className="mb-5 rounded-xl bg-violet-50 border border-violet-100 px-4 py-3 flex items-center gap-3">
          <span className="text-violet-500">🏃</span>
          <div>
            <div className="text-[11px] text-violet-500 font-medium uppercase tracking-wide">Event</div>
            <div className="text-sm font-bold text-gray-900">
              {eventId === 'marathon-2026' ? 'Surabaya City Marathon 2026'
                : eventId === 'cycling-2026' ? 'Gran Fondo Surabaya'
                : eventId === 'campus-fun-run' ? 'Campus Fun Run Petra'
                : eventId === 'night-run' ? 'Surabaya Night Run'
                : eventId}
            </div>
          </div>
        </div>

        {/* Category */}
        <div className="mb-5">
          <div className="text-sm font-bold text-gray-900 mb-3">Kategori</div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className="rounded-full px-4 py-2 text-sm font-medium transition-colors"
                style={{
                  backgroundColor: selectedCategory === cat ? '#7C3AED' : 'white',
                  color: selectedCategory === cat ? 'white' : '#374151',
                  border: `1.5px solid ${selectedCategory === cat ? '#7C3AED' : '#D1D5DB'}`,
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* BIB input */}
        <div className="mb-5">
          <div className="text-sm font-bold text-gray-900 mb-1">Nomor BIB</div>
          <div className="text-xs text-gray-400 mb-2">Opsional tapi sangat disarankan</div>
          <input
            value={bib}
            onChange={(e) => setBib(e.target.value)}
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none focus:border-violet-400 focus:bg-white transition-colors"
            placeholder="Contoh: 1234"
            inputMode="numeric"
          />
        </div>

        {/* Start time input */}
        <div className="mb-5">
          <div className="text-sm font-bold text-gray-900 mb-1">Waktu Start</div>
          <div className="text-xs text-gray-400 mb-2">Opsional — bantu mempersempit hasil pencarian</div>
          <input
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none focus:border-violet-400 focus:bg-white transition-colors"
            placeholder="Contoh: 06:30"
          />
        </div>

        {/* Tips card */}
        <div className="rounded-xl bg-amber-50 border border-amber-100 px-4 py-3 flex items-start gap-3">
          <span className="text-amber-500 mt-0.5">💡</span>
          <p className="text-xs text-amber-700 leading-relaxed">
            Masukkan BIB dan waktu start untuk hasil lebih akurat. AI kami akan memprioritaskan foto dari zona dan waktu kamu.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="fixed bottom-0 left-1/2 w-full max-w-[390px] -translate-x-1/2 bg-white border-t border-gray-100 px-4 py-4">
        <button
          onClick={() => router.push(`/sports/${eventId}/search`)}
          className="w-full rounded-xl py-4 text-base font-semibold text-white"
          style={{ backgroundColor: '#7C3AED' }}
        >
          Lanjut → Pilih Metode Cari
        </button>
      </div>
    </div>
  );
}
