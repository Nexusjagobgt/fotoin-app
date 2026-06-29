import Link from 'next/link';

export default async function EventCheckPage({ params }: PageProps<'/sports/[eventId]/check'>) {
  const { eventId } = await params;

  return (
    <div className="flex min-h-svh flex-col bg-gray-900">
      {/* Back button */}
      <div className="px-4 pt-10 pb-4">
        <Link href="/sports" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5M12 19l-7-7 7-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>

      {/* Background */}
      <div className="absolute inset-0 -z-10" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1565120130276-05b94d46be21?w=400&h=800&fit=crop)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <div className="absolute inset-0 -z-10" style={{ background: 'linear-gradient(to bottom, rgba(17,24,39,0.6) 0%, rgba(17,24,39,0.95) 100%)' }} />

      {/* Event header */}
      <div className="relative z-10 px-4 pb-4">
        <div className="inline-block rounded-full bg-violet-600 px-2.5 py-0.5 text-[10px] font-bold text-white mb-2">⚡ FOTOIN SPORTS</div>
        <h1 className="text-[22px] font-extrabold text-white mb-1">Surabaya City Marathon 2026</h1>
        <div className="flex items-center gap-3 text-sm text-white/60">
          <span>📅 15 Maret 2026</span>
          <span>📍 Surabaya</span>
        </div>
        <div className="flex items-center gap-3 text-sm mt-1" style={{ color: '#A78BFA' }}>
          <span>3.847 foto tersedia · 12 fotografer</span>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 px-4">
        <h2 className="text-xl font-bold text-white text-center mb-2">
          Apakah kamu baru mengikuti event ini?
        </h2>
        <p className="text-sm text-white/60 text-center mb-6">Pilihanmu membantu kami mencari foto yang tepat</p>

        {/* Options */}
        <div className="flex flex-col gap-3 mb-6">
          <Link
            href={`/sports/${eventId}/details`}
            className="flex items-center gap-4 rounded-2xl border border-green-500 bg-green-500/10 p-4"
          >
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-green-500">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 12l5 5L20 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="text-sm font-bold text-white mb-0.5">Ya, saya ikut event ini</div>
              <div className="text-xs text-white/60">Cari foto kamu dengan AI atau Nomor BIB</div>
            </div>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke="white/60" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>

          <Link
            href="/sports/results"
            className="flex items-center gap-4 rounded-2xl border border-gray-600 bg-gray-800/50 p-4"
          >
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gray-700">
              <span className="text-2xl">🏃</span>
            </div>
            <div className="flex-1">
              <div className="text-sm font-bold text-white mb-0.5">Hanya ingin lihat-lihat</div>
              <div className="text-xs text-white/60">Browse semua foto dari event ini</div>
            </div>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        {/* Preview photos */}
        <div>
          <p className="text-xs text-white/50 mb-2">Contoh foto dari event ini:</p>
          <div className="flex gap-2">
            {[
              'https://images.unsplash.com/photo-1565120130276-05b94d46be21?w=150&h=100&fit=crop',
              'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=150&h=100&fit=crop',
              'https://images.unsplash.com/photo-1461897104016-0b3b00cc81ee?w=150&h=100&fit=crop',
            ].map((src, i) => (
              <div key={i} className="h-16 flex-1 overflow-hidden rounded-xl">
                <div className="h-full w-full" style={{ backgroundImage: `url(${src})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
              </div>
            ))}
            <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl bg-gray-800 text-xs font-bold text-white">
              +3.844
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
