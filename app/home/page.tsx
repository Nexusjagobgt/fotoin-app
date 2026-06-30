import Image from 'next/image';
import Link from 'next/link';
import BottomNav from '@/components/BottomNav';
import { homeCategories } from '@/lib/mockData';

const featuredPhotographers = [
  { name: 'Rizki Pratama', specialty: 'Wedding', rating: '4.9', sessions: '127', price: 'Rp 400.000/jam', available: 'Hari Ini', availableColor: '#DCFCE7', availableText: '#16A34A', km: '1.2 km', response: '<1 jam', avatar: 'https://i.pravatar.cc/80?img=11' },
  { name: 'Dinda Aulia', specialty: 'Graduation', rating: '4.8', sessions: '89', price: 'Rp 300.000/jam', available: 'Besok', availableColor: '#FEF9C3', availableText: '#92400E', km: '2.5 km', response: '<2 jam', avatar: 'https://i.pravatar.cc/80?img=5' },
  { name: 'Bagas F.', specialty: 'Event', rating: '4.7', sessions: '203', price: 'Rp 350.000/jam', available: 'Hari Ini', availableColor: '#DCFCE7', availableText: '#16A34A', km: '3.1 km', response: '<1 jam', avatar: 'https://i.pravatar.cc/80?img=8' },
];

export default function HomePage() {
  return (
    <div className="flex h-svh flex-col bg-gray-50">
      {/* Top bar */}
      <div className="flex items-center justify-between border-b border-gray-100 bg-white px-4 py-3">
        <Link href="/"><Image src="/images/FOTOIN LOGO.png" alt="FOTOIN" width={110} height={28} priority className="object-contain" /></Link>
        <div className="flex items-center gap-2">
          <div className="relative flex h-[34px] w-[34px] items-center justify-center rounded-full bg-gray-100">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M12 2a7 7 0 00-7 7v4l-2 2v1h18v-1l-2-2V9a7 7 0 00-7-7z" stroke="#374151" strokeWidth="1.8" strokeLinecap="round" />
              <path d="M10 19a2 2 0 004 0" stroke="#374151" strokeWidth="1.8" />
            </svg>
            <div className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500" />
          </div>
          <Link href="/photographer/home" className="inline-flex items-center rounded-full border-[1.5px] border-violet-600 bg-violet-100 px-2.5 py-1">
            <span className="text-xs font-medium text-violet-700">Customer</span>
          </Link>
          <div className="h-[34px] w-[34px] rounded-full border-2 border-violet-600" style={{ backgroundImage: 'url(https://i.pravatar.cc/40?img=33)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        </div>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto">
        {/* Greeting + search */}
        <div className="bg-white px-4 pb-3.5 pt-4">
          <div className="mb-0.5 flex items-center gap-1.5">
            <span className="text-[9px]">📍</span>
            <span className="text-xs font-medium text-gray-500">Surabaya, Jawa Timur</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M3 5l3 3 3-3" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="text-[22px] font-bold leading-snug text-gray-900">Halo, Christian 👋</div>
          <div className="mt-0.5 text-sm text-gray-500">Mau foto apa hari ini?</div>
          <Link
            href="/connect"
            className="mt-3 flex items-center gap-2 rounded-xl bg-gray-100 px-3.5 py-2.5"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="7" stroke="#7C3AED" strokeWidth="2" />
              <path d="M20 20l-3-3" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span className="flex-1 text-sm text-gray-400">Cari fotografer atau layanan...</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M4 6h16M7 12h10M10 18h4" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </Link>
        </div>

        {/* Expiry warning banner */}
        <Link
          href="/my-photos"
          className="mx-4 mt-3 flex items-center gap-3 rounded-2xl px-4 py-3"
          style={{ backgroundColor: '#FEF3C7', border: '1px solid #FDE68A' }}
        >
          <span className="text-lg">⚠️</span>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-semibold" style={{ color: '#92400E' }}>
              1 foto akan expired dalam 5 hari! Segera download.
            </div>
          </div>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M9 18l6-6-6-6" stroke="#92400E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>

        {/* Categories */}
        <div className="mt-2 bg-white px-4 py-4">
          <div className="mb-3 text-base font-bold text-gray-900">Kategori Layanan</div>
          <div className="grid grid-cols-2 gap-2">
            {homeCategories.map((cat, i) => {
              const isLast = i === homeCategories.length - 1;
              return (
                <Link
                  key={cat.slug}
                  href={`/connect/${cat.slug}`}
                  className={`relative h-20 overflow-hidden rounded-xl${isLast ? ' col-span-2' : ''}`}
                >
                  <div className="absolute inset-0" style={{ backgroundImage: `url(${cat.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0) 100%)' }} />
                  <div className="absolute bottom-2 left-2.5 text-xs font-bold text-white">{cat.name}</div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* FOTOIN Sports banner */}
        <div className="mt-2 bg-white px-4 py-4">
          <Link href="/sports" className="relative block h-32 overflow-hidden rounded-2xl">
            {/* Background photo */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=500&h=250&fit=crop)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            {/* Gradient overlay: dark on left for text legibility, fades right */}
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0.1) 100%)' }}
            />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-between p-3.5">
              {/* Top: badge */}
              <div className="self-start inline-flex items-center rounded-full bg-white/20 px-2.5 py-0.5 backdrop-blur-sm">
                <span className="text-[10px] font-bold text-white">⚡ AI-Powered</span>
              </div>

              {/* Bottom: text + button */}
              <div className="flex items-end justify-between gap-3">
                <div>
                  <div className="text-sm font-bold leading-snug text-white">
                    Cari Fotomu di<br />Event Olahraga
                  </div>
                  <div className="mt-0.5 text-[11px] text-white/70">
                    Ribuan foto, ditemukan otomatis dengan AI
                  </div>
                </div>
                <div className="flex-shrink-0 rounded-full bg-white px-4 py-1.5 text-[12px] font-semibold text-gray-900">
                  Lihat Event →
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Featured photographers */}
        <div className="mt-2 bg-white px-4 pb-3 pt-4">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-base font-bold text-gray-900">Fotografer Featured</span>
            <Link href="/connect/results" className="text-xs font-semibold" style={{ color: '#7C3AED' }}>Lihat Semua →</Link>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-1">
            {featuredPhotographers.map((p) => (
              <Link
                key={p.name}
                href="/p/rizki"
                className="min-w-[170px] rounded-[14px] border border-gray-100 bg-gray-50 px-3 py-3"
              >
                <div className="mb-2 flex items-center gap-2">
                  <div className="h-10 w-10 flex-shrink-0 rounded-full" style={{ backgroundImage: `url(${p.avatar})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                  <div>
                    <div className="text-[13px] font-bold text-gray-900">{p.name}</div>
                    <div className="mt-0.5 inline-block rounded-md bg-violet-100 px-1.5 py-0.5">
                      <span className="text-[11px] text-violet-600">{p.specialty}</span>
                    </div>
                  </div>
                </div>
                <div className="mb-1 flex items-center gap-1">
                  <span className="text-xs">⭐</span>
                  <span className="text-xs font-bold text-gray-900">{p.rating}</span>
                  <span className="text-[11px] text-gray-500">· {p.sessions} sesi</span>
                </div>
                <div className="text-[13px] font-bold" style={{ color: '#7C3AED' }}>{p.price}</div>
                <div className="mt-1.5 flex items-center gap-1">
                  <div className="inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold" style={{ backgroundColor: p.availableColor, color: p.availableText }}>
                    ✅ {p.available}
                  </div>
                  <span className="text-[10px] text-gray-500">{p.km}</span>
                </div>
                <div className="mt-1 text-[10px] text-gray-500">⚡ Balas {p.response}</div>
              </Link>
            ))}
          </div>
        </div>

        {/* Nearby */}
        <div className="mt-2 mb-2 bg-white px-4 pb-3 pt-4">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-base font-bold text-gray-900">Dekat Kamu di Surabaya</span>
            <Link href="/connect/results" className="text-xs font-semibold" style={{ color: '#7C3AED' }}>Lihat Semua →</Link>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-1">
            {[
              { name: 'Nadya Kusuma', specialty: 'Product', rating: '4.9', sessions: '156', price: 'Rp 280.000/jam', km: '0.8 km', avatar: 'https://i.pravatar.cc/80?img=25' },
              { name: 'Aldi Santoso', specialty: 'Sports', rating: '4.6', sessions: '94', price: 'Rp 320.000/jam', km: '1.5 km', avatar: 'https://i.pravatar.cc/80?img=15' },
            ].map((p) => (
              <Link key={p.name} href="/p/rizki" className="min-w-[170px] rounded-[14px] border border-gray-100 bg-gray-50 px-3 py-3">
                <div className="mb-2 flex items-center gap-2">
                  <div className="h-10 w-10 flex-shrink-0 rounded-full" style={{ backgroundImage: `url(${p.avatar})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                  <div>
                    <div className="text-[13px] font-bold text-gray-900">{p.name}</div>
                    <div className="mt-0.5 inline-block rounded-md bg-violet-100 px-1.5 py-0.5">
                      <span className="text-[11px] text-violet-600">{p.specialty}</span>
                    </div>
                  </div>
                </div>
                <div className="mb-1 flex items-center gap-1">
                  <span className="text-xs">⭐</span>
                  <span className="text-xs font-bold text-gray-900">{p.rating}</span>
                  <span className="text-[11px] text-gray-500">· {p.sessions} sesi</span>
                </div>
                <div className="text-[13px] font-bold" style={{ color: '#7C3AED' }}>{p.price}</div>
                <div className="mt-1.5 flex items-center gap-1">
                  <div className="inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-semibold text-green-600">✅ Hari Ini</div>
                  <span className="text-[10px] text-gray-500">{p.km}</span>
                </div>
                <div className="mt-1 text-[10px] text-gray-500">⚡ Balas &lt;1 jam</div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <BottomNav mode="client" />
    </div>
  );
}

