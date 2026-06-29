'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import BottomNav from '@/components/BottomNav';

const categories = [
  { slug: 'wedding',    name: 'Wedding Photography',        icon: '💍', desc: 'Abadikan hari istimewamu',          seed: 'wedding-ceremony' },
  { slug: 'graduation', name: 'Graduation Photography',     icon: '🎓', desc: 'Momen wisuda tak terlupakan',       seed: 'graduation'       },
  { slug: 'birthday',   name: 'Birthday Photography',       icon: '🎂', desc: 'Rayakan momen ulang tahunmu',       seed: 'party'            },
  { slug: 'sweet17',    name: 'Sweet Seventeen Photography',icon: '👑', desc: 'Momen sweet seventeen yang berkesan',seed: 'celebration'     },
  { slug: 'event',      name: 'Event Documentation',        icon: '🎉', desc: 'Dokumentasi acara profesional',     seed: 'concert'          },
  { slug: 'product',    name: 'Product Photography',        icon: '📦', desc: 'Foto produk untuk bisnis online',   seed: 'product'          },
  { slug: 'food',       name: 'Food Photography',           icon: '🍽️', desc: 'Tampilkan menu terbaikmu',          seed: 'food'             },
  { slug: 'corporate',  name: 'Corporate Photography',      icon: '🏢', desc: 'Foto profesional untuk bisnis',     seed: 'office'           },
  { slug: 'personal',   name: 'Personal Photoshoot',        icon: '🧍', desc: 'Ekspresikan dirimu',                seed: 'portrait'         },
];

export default function ConnectPage() {
  const router = useRouter();

  return (
    <div className="flex h-svh flex-col bg-gray-50">
      {/* Top bar */}
      <div className="relative flex items-center border-b border-gray-100 bg-white px-4 py-3">
        <button
          onClick={() => router.back()}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5M12 19l-7-7 7-7" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="text-base font-bold text-gray-900">FOTOIN Connect</span>
        </div>
        <Link
          href="/photographer/home"
          className="ml-auto rounded-full border border-violet-600 bg-violet-100 px-2.5 py-0.5 text-xs font-medium text-violet-700"
        >
          Customer
        </Link>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto px-4 py-5">
        {/* Headline */}
        <div className="mb-5">
          <h1 className="text-[22px] font-bold text-gray-900">Mau foto apa hari ini?</h1>
          <p className="mt-1 text-sm text-gray-500">Pilih kategori untuk menemukan fotografer terbaik</p>
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-2 gap-3">
          {categories.map((cat, i) => {
            const isLast = i === categories.length - 1;
            return (
              <Link
                key={cat.slug}
                href={`/connect/${cat.slug}`}
                className={`relative overflow-hidden rounded-2xl${isLast ? ' col-span-2 h-32' : ' h-36'}`}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url(https://picsum.photos/seed/${cat.seed}/400/250)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.7) 100%)' }}
                />
                <div className="absolute left-3 top-3 text-xl">{cat.icon}</div>
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="text-sm font-bold text-white">{cat.name}</div>
                  <div className="mt-0.5 text-[12px] text-white/80">{cat.desc}</div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <BottomNav mode="client" />
    </div>
  );
}
