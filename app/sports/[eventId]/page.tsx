import Link from 'next/link';

const eventData: Record<string, { name: string; date: string; photos: string; previewRemainder: string }> = {
  'marathon-2026':  { name: 'Surabaya City Marathon 2026', date: '15 Maret 2026',     photos: '3.847', previewRemainder: '+3.844' },
  'cycling-2026':   { name: 'Gran Fondo Surabaya',          date: '22 Februari 2026',  photos: '1.203', previewRemainder: '+1.200' },
  'campus-fun-run': { name: 'Campus Fun Run Petra',          date: '2 Maret 2026',      photos: '934',   previewRemainder: '+931'   },
  'night-run':      { name: 'Surabaya Night Run',            date: '8 Februari 2026',   photos: '2.156', previewRemainder: '+2.153' },
};
const fallbackEvent = { name: 'Event Olahraga', date: '—', photos: '0', previewRemainder: '+0' };

export default async function EventSearchPage({ params }: PageProps<'/sports/[eventId]'>) {
  const { eventId } = await params;
  const event = eventData[eventId] ?? fallbackEvent;

  return (
    <div className="flex min-h-svh flex-col bg-white">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-gray-100 px-4 py-3">
        <Link href="/sports" className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5M12 19l-7-7 7-7" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
        <div>
          <div className="text-sm font-bold text-gray-900">{event.name}</div>
          <div className="text-xs text-gray-400">{event.photos} foto tersedia · {event.date}</div>
        </div>
      </div>

      <div className="flex-1 px-4 py-6">
        <h1 className="text-xl font-bold text-center text-gray-900 mb-2">
          Bagaimana kamu ingin mencari fotomu?
        </h1>
        <p className="text-sm text-center text-gray-400 mb-6">Pilih salah satu metode pencarian di bawah</p>

        {/* Method cards */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <Link
            href="/sports/processing"
            className="flex flex-col items-center gap-3 rounded-2xl border-2 border-violet-300 bg-violet-50 p-4 relative"
          >
            <div className="absolute top-2 left-2 inline-flex items-center rounded-full bg-violet-600 px-2 py-0.5 text-[9px] font-bold text-white">REKOMENDASI</div>
            <div className="mt-4 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="8" width="18" height="13" rx="2" stroke="#7C3AED" strokeWidth="1.8" />
                <path d="M8 8V5a4 4 0 018 0v3" stroke="#7C3AED" strokeWidth="1.8" strokeLinecap="round" />
                <circle cx="12" cy="14" r="2" fill="#7C3AED" />
              </svg>
            </div>
            <div className="text-sm font-bold text-violet-600">Upload Selfie</div>
            <div className="text-[11px] text-center text-gray-500">Deteksi wajah otomatis dengan AI</div>
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-violet-600">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M9 18l6-6-6-6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </div>
          </Link>

          <button className="flex flex-col items-center gap-3 rounded-2xl border-2 border-gray-200 bg-gray-50 p-4">
            <div className="mt-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="18" height="18" rx="2" stroke="#9CA3AF" strokeWidth="1.8" />
                <path d="M8 8h8M8 12h8M8 16h4" stroke="#9CA3AF" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </div>
            <div className="text-sm font-bold text-gray-600">Nomor BIB</div>
            <div className="text-[11px] text-center text-gray-400">Masukkan nomor dorsal kamu</div>
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-300">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M9 18l6-6-6-6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </div>
          </button>
        </div>

        {/* BIB input */}
        <div className="mb-6">
          <p className="text-sm text-gray-500 mb-2">Atau masukkan nomor BIB langsung</p>
          <div className="flex gap-2">
            <input
              className="flex-1 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-400 outline-none focus:border-violet-400 focus:bg-white"
              placeholder="Contoh: 1234"
            />
            <button className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl" style={{ backgroundColor: '#7C3AED' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M9 18l6-6-6-6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Sample photos */}
        <div>
          <p className="text-sm text-gray-500 mb-2">Contoh foto dari event ini</p>
          <div className="flex gap-2">
            {[
              'https://images.unsplash.com/photo-1565120130276-05b94d46be21?w=150&h=100&fit=crop',
              'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=150&h=100&fit=crop',
            ].map((src, i) => (
              <div key={i} className="h-20 flex-1 overflow-hidden rounded-xl" style={{ backgroundImage: `url(${src})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
            ))}
            <div className="flex h-20 flex-1 items-center justify-center rounded-xl bg-gray-100 text-xs font-bold text-gray-500">{event.previewRemainder}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
