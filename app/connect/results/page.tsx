import Link from 'next/link';
import BottomNav from '@/components/BottomNav';

const photographers = [
  {
    id: 'rizki',
    name: 'Rizki Pratama',
    verified: true,
    og: true,
    specialty: 'Wedding Specialist',
    rating: '4.9',
    sessions: '127',
    response: '<1jam',
    price: 'Rp 400.000/jam',
    available: '15 April',
    distance: '1.2 km',
    styles: ['Romantic', 'Candid', 'Outdoor'],
    extraPhotos: 12,
    avatar: 'https://i.pravatar.cc/80?img=11',
  },
  {
    id: 'devano',
    name: 'Devano Putra',
    verified: true,
    og: true,
    specialty: 'Wedding & Prewedding',
    rating: '4.9',
    sessions: '178',
    response: '<2jam',
    price: 'Rp 500.000/jam',
    available: '15 April',
    distance: '3.4 km',
    styles: ['Cinematic', 'Romantic', 'Elegant'],
    extraPhotos: 18,
    avatar: 'https://i.pravatar.cc/80?img=12',
  },
];

export default function ResultsPage() {
  return (
    <div className="flex h-svh flex-col bg-gray-50">
      {/* Header */}
      <div className="flex items-center gap-3 bg-white px-4 py-3 border-b border-gray-100">
        <Link href="/connect" className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5M12 19l-7-7 7-7" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
        <div className="text-base font-bold text-gray-900">Fotografer Wedding</div>
        <div className="ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M4 6h16M7 12h10M10 18h4" stroke="#374151" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white px-4 pb-3 flex flex-col gap-2 border-b border-gray-100">
        <div className="flex gap-2 overflow-x-auto">
          {['Wedding ×', 'Rp 250rb-500rb ×', '15 April ×'].map((f) => (
            <div key={f} className="flex-shrink-0 rounded-full bg-violet-100 px-3 py-1 text-xs font-medium text-violet-700">{f}</div>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-gray-500">24 fotografer ditemukan</span>
          <div className="flex gap-1.5 ml-auto">
            <div className="rounded-full bg-violet-600 px-3 py-1 text-xs font-medium text-white">Relevansi</div>
            <div className="rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-500">Harga ↑</div>
            <div className="rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-500">Rating ↑</div>
          </div>
        </div>
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto px-4 py-3 flex flex-col gap-3">
        {photographers.map((p) => (
          <div key={p.id} className="rounded-2xl border border-gray-100 bg-white p-4">
            {/* Top info */}
            <div className="flex items-start gap-3 mb-3">
              <div className="h-14 w-14 flex-shrink-0 rounded-full" style={{ backgroundImage: `url(${p.avatar})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
              <div className="flex-1">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="text-[15px] font-bold text-gray-900">{p.name}</span>
                  {p.verified && (
                    <span className="rounded-md bg-green-100 px-1.5 py-0.5 text-[10px] font-semibold text-green-700">✅ Verified</span>
                  )}
                  {p.og && (
                    <span className="rounded-md bg-amber-100 px-1.5 py-0.5 text-[10px] font-semibold text-amber-700">⭐ OG</span>
                  )}
                </div>
                <div className="mt-1 inline-block rounded-md bg-violet-100 px-1.5 py-0.5 text-[11px] text-violet-600">{p.specialty}</div>
                <div className="mt-1 flex items-center gap-1.5 text-xs text-gray-500">
                  <span>⭐ {p.rating}</span>
                  <span>· {p.sessions} sesi</span>
                  <span>⚡ {p.response}</span>
                </div>
                <div className="mt-0.5 text-sm font-bold" style={{ color: '#7C3AED' }}>{p.price}</div>
                <div className="mt-1 flex items-center gap-1.5 text-xs">
                  <span className="rounded-md bg-green-100 px-1.5 py-0.5 text-green-700 font-medium">✅ Tersedia {p.available}</span>
                  <span className="text-gray-500">{p.distance}</span>
                </div>
              </div>
              <div className="h-2.5 w-2.5 flex-shrink-0 rounded-full bg-green-500 mt-1" />
            </div>

            {/* Style tags */}
            <div className="mb-2 flex gap-1.5">
              {p.styles.map((s) => (
                <span key={s} className="rounded-full border border-gray-200 px-2.5 py-0.5 text-[11px] text-gray-600">{s}</span>
              ))}
            </div>

            {/* Photos preview */}
            <div className="mb-3 flex gap-1.5">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-16 flex-1 rounded-xl bg-gray-100" style={{ backgroundImage: `url(https://picsum.photos/seed/${p.id}${i}/200/150)`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
              ))}
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl bg-gray-900 text-sm font-bold text-white">+{p.extraPhotos}</div>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <Link href={`/p/${p.id}`} className="flex-1 rounded-xl border border-gray-200 py-2.5 text-center text-sm font-medium text-gray-700 hover:bg-gray-50">
                Lihat Profil
              </Link>
              <Link href="/messages/rizki" className="flex-1 rounded-xl py-2.5 text-center text-sm font-semibold text-white" style={{ backgroundColor: '#7C3AED' }}>
                💬 Konsultasi
              </Link>
            </div>
          </div>
        ))}
      </div>

      <BottomNav mode="client" />
    </div>
  );
}
