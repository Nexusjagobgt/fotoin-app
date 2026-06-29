import Link from 'next/link';
import BottomNav from '@/components/BottomNav';

export default async function PhotographerProfilePage({ params }: PageProps<'/p/[id]'>) {
  const { id } = await params;

  return (
    <div className="flex h-svh flex-col bg-gray-50">
      <div className="flex-1 overflow-y-auto">
        {/* Hero */}
        <div className="relative h-48 bg-violet-900">
          <div className="absolute inset-0" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=200&fit=crop)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%)' }} />
          <Link href="/connect/results" className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M19 12H5M12 19l-7-7 7-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
        </div>

        {/* Profile info */}
        <div className="bg-white px-4 pb-4 relative">
          <div className="flex items-end gap-3 -mt-8 mb-3">
            <div className="h-20 w-20 rounded-2xl border-4 border-white shadow-lg" style={{ backgroundImage: 'url(https://i.pravatar.cc/80?img=11)', backgroundSize: 'cover' }} />
            <div className="pb-1 flex-1">
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="text-lg font-bold text-gray-900">Rizki Pratama</span>
                <span className="text-xs bg-green-100 text-green-700 rounded-md px-1.5 py-0.5 font-semibold">✅ Verified</span>
                <span className="text-xs bg-amber-100 text-amber-700 rounded-md px-1.5 py-0.5 font-semibold">⭐ OG</span>
              </div>
              <div className="text-xs text-gray-500 mt-0.5">Wedding Specialist · Surabaya</div>
              <div className="flex items-center gap-1 mt-0.5">
                <span className="text-xs text-amber-400">⭐</span>
                <span className="text-xs font-bold text-gray-900">4.9</span>
                <span className="text-xs text-gray-400">· 127 sesi · ⚡ Balas &lt;1 jam</span>
              </div>
            </div>
          </div>

          <div className="text-sm font-bold" style={{ color: '#7C3AED' }}>Rp 400.000/jam</div>
          <p className="mt-2 text-sm text-gray-500 leading-relaxed">
            Fotografer profesional berbasis di Surabaya dengan 5+ tahun pengalaman. Spesialis wedding, portrait, dan event. Menggunakan kamera Sony A7IV dan teknik Romantic Candid.
          </p>

          {/* Style tags */}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {['Romantic', 'Candid', 'Outdoor', 'Indoor', 'Natural Light'].map((s) => (
              <span key={s} className="rounded-full border border-gray-200 px-2.5 py-0.5 text-xs text-gray-600">{s}</span>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-2 grid grid-cols-3 gap-0 bg-white border-y border-gray-100">
          {[
            { val: '127', label: 'Sesi' },
            { val: '4.9', label: 'Rating' },
            { val: '100%', label: 'Response' },
          ].map(({ val, label }) => (
            <div key={label} className="flex flex-col items-center py-4 border-r border-gray-100 last:border-0">
              <span className="text-lg font-extrabold" style={{ color: '#7C3AED' }}>{val}</span>
              <span className="text-xs text-gray-400">{label}</span>
            </div>
          ))}
        </div>

        {/* Portfolio */}
        <div className="mt-2 bg-white px-4 py-4">
          <div className="mb-3 text-base font-bold text-gray-900">Portofolio</div>
          <div className="grid grid-cols-3 gap-1">
            {Array.from({ length: 6 }, (_, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-xl" style={{ backgroundImage: `url(https://picsum.photos/seed/rizki${i + 1}/200/200)`, backgroundSize: 'cover' }} />
            ))}
          </div>
        </div>

        {/* Reviews */}
        <div className="mt-2 mb-4 bg-white px-4 py-4">
          <div className="mb-3 text-base font-bold text-gray-900">Ulasan (24)</div>
          {[
            { name: 'Maya K.', rating: 5, text: 'Sangat profesional dan hasil foto luar biasa!', time: '2 minggu lalu', avatar: 'https://i.pravatar.cc/40?img=25' },
            { name: 'Dito P.', rating: 5, text: 'Rizki sangat responsif dan kreatif. Recommended!', time: '1 bulan lalu', avatar: 'https://i.pravatar.cc/40?img=15' },
          ].map((review) => (
            <div key={review.name} className="mb-3 border-b border-gray-50 pb-3 last:border-0">
              <div className="flex items-center gap-2 mb-1">
                <div className="h-8 w-8 rounded-full" style={{ backgroundImage: `url(${review.avatar})`, backgroundSize: 'cover' }} />
                <div>
                  <div className="text-xs font-semibold text-gray-900">{review.name}</div>
                  <div className="flex gap-0.5">{Array.from({ length: review.rating }).map((_, i) => <span key={i} className="text-[10px]">⭐</span>)}</div>
                </div>
                <span className="ml-auto text-[10px] text-gray-400">{review.time}</span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">{review.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Action bar */}
      <div className="flex gap-3 border-t border-gray-100 bg-white px-4 py-3">
        <Link href="/messages/rizki" className="flex-1 rounded-xl border border-violet-600 py-3 text-center text-sm font-semibold text-violet-600 hover:bg-violet-50">
          💬 Konsultasi
        </Link>
        <Link href="/booking/terms" className="flex-1 rounded-xl py-3 text-center text-sm font-semibold text-white" style={{ backgroundColor: '#7C3AED' }}>
          Book Sekarang
        </Link>
      </div>
    </div>
  );
}
