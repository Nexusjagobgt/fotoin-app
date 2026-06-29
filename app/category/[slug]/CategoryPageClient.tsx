'use client';
import { useState } from 'react';
import Link from 'next/link';
import BottomNav from '@/components/BottomNav';
import { photographers } from '@/lib/mockData';

type Meta = { name: string; desc: string; subdesc: string; img: string };

const budgetFilters = ['Rp 100rb-250rb', '250rb-500rb', '500rb-1jt', '1jt+'];
const ratingFilters = ['4.5+', '4.0+', 'Semua'];
const availFilters = ['Hari Ini', 'Minggu Ini', 'Semua'];

function PhotographerCard({ p }: { p: (typeof photographers)[number] }) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-4">
      <div className="mb-3 flex items-start gap-3">
        <div
          className="h-14 w-14 flex-shrink-0 rounded-full"
          style={{ backgroundImage: `url(${p.avatar})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[15px] font-bold text-gray-900">{p.name}</span>
            {p.verified && (
              <span className="rounded-md bg-green-100 px-1.5 py-0.5 text-[10px] font-semibold text-green-700">✅ Verified</span>
            )}
            {p.og && (
              <span className="rounded-md bg-amber-100 px-1.5 py-0.5 text-[10px] font-semibold text-amber-700">⭐ OG</span>
            )}
          </div>
          <div className="mt-1 inline-block rounded-md bg-violet-100 px-1.5 py-0.5 text-[11px] text-violet-600">
            {p.specialty}
          </div>
          <div className="mt-1 flex items-center gap-1.5 text-xs text-gray-500">
            <span>⭐ {p.rating}</span>
            <span>· {p.sessions} sesi</span>
            <span>⚡ {p.response}</span>
          </div>
          <div className="mt-0.5 text-sm font-bold" style={{ color: '#7C3AED' }}>{p.price}</div>
          <div className="mt-1 flex items-center gap-1.5 text-xs">
            <span className="rounded-md bg-green-100 px-1.5 py-0.5 font-medium text-green-700">
              ✅ Tersedia {p.available}
            </span>
            <span className="text-gray-500">{p.distance}</span>
          </div>
        </div>
        <div className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-green-500" />
      </div>

      <div className="mb-2 flex gap-1.5">
        {p.styles.map((s) => (
          <span key={s} className="rounded-full border border-gray-200 px-2.5 py-0.5 text-[11px] text-gray-600">
            {s}
          </span>
        ))}
      </div>

      <div className="mb-3 flex gap-1.5">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-16 flex-1 rounded-xl bg-gray-100"
            style={{ backgroundImage: `url(https://picsum.photos/seed/${p.id}${i}/200/150)`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          />
        ))}
        <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl bg-gray-900 text-sm font-bold text-white">
          +{p.extraPhotos}
        </div>
      </div>

      <div className="flex gap-2">
        <Link
          href={`/p/${p.id}`}
          className="flex-1 rounded-xl border border-gray-200 py-2.5 text-center text-sm font-medium text-gray-700"
        >
          Lihat Profil
        </Link>
        <Link
          href={`/messages/${p.id}`}
          className="flex-1 rounded-xl py-2.5 text-center text-sm font-semibold text-white"
          style={{ backgroundColor: '#7C3AED' }}
        >
          💬 Konsultasi
        </Link>
      </div>
    </div>
  );
}

function ProductServiceSelector({ selected, onSelect }: { selected: string; onSelect: (v: string) => void }) {
  return (
    <div className="bg-white px-4 py-4">
      <div className="mb-3 text-base font-bold text-gray-900">Jenis Layanan Produk</div>
      <div className="flex flex-col gap-3">
        {[
          {
            value: 'kirim',
            icon: '📦',
            iconBg: '#EDE9FE',
            title: 'Saya kirim produk ke fotografer',
            subtitle: 'Produk dikirim ke studio fotografer',
            tagline: 'Lebih hemat · Hasil lebih terkontrol',
            chip: 'Populer untuk online seller',
            chipBg: '#EDE9FE',
            chipText: '#7C3AED',
          },
          {
            value: 'kunjungi',
            icon: '🚗',
            iconBg: '#DCFCE7',
            title: 'Fotografer datang ke lokasi saya',
            subtitle: 'Fotografer ke toko/gudang/rumah kamu',
            tagline: 'Fleksibel · Cocok untuk produk besar',
            chip: 'Cocok untuk furniture, kuliner, dll',
            chipBg: '#DCFCE7',
            chipText: '#16A34A',
          },
        ].map((opt) => (
          <button
            key={opt.value}
            onClick={() => onSelect(opt.value)}
            className="flex items-start gap-3 rounded-2xl border-2 p-4 text-left transition-all"
            style={{
              borderColor: selected === opt.value ? '#7C3AED' : '#E5E7EB',
              backgroundColor: selected === opt.value ? '#F5F3FF' : 'white',
            }}
          >
            <div
              className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full text-xl"
              style={{ backgroundColor: opt.iconBg }}
            >
              {opt.icon}
            </div>
            <div className="flex-1">
              <div className="text-sm font-bold text-gray-900">{opt.title}</div>
              <div className="mt-0.5 text-xs text-gray-500">{opt.subtitle}</div>
              <div className="mt-0.5 text-xs text-gray-400">{opt.tagline}</div>
              <div
                className="mt-2 inline-block rounded-full px-2.5 py-0.5 text-[11px] font-medium"
                style={{ backgroundColor: opt.chipBg, color: opt.chipText }}
              >
                {opt.chip}
              </div>
            </div>
            {selected === opt.value && (
              <div
                className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full"
                style={{ backgroundColor: '#7C3AED' }}
              >
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function CategoryPageClient({ slug, meta }: { slug: string; meta: Meta }) {
  const [activeBudget, setActiveBudget] = useState('');
  const [activeRating, setActiveRating] = useState('Semua');
  const [activeAvail, setActiveAvail] = useState('Semua');
  const [productService, setProductService] = useState('');

  const filtered = photographers.filter((p) => p.categories.includes(slug));
  const showList = slug !== 'product' || productService !== '';

  return (
    <div className="flex h-svh flex-col bg-gray-50">
      {/* Top bar */}
      <div className="flex items-center justify-between border-b border-gray-100 bg-white px-4 py-3">
        <Link
          href="/home"
          className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5M12 19l-7-7 7-7" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
        <span className="text-base font-bold text-gray-900">{meta.name}</span>
        <div className="rounded-full border border-violet-600 bg-violet-100 px-2.5 py-0.5 text-xs font-medium text-violet-700">
          Customer
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Hero */}
        <div className="relative h-44">
          <div
            className="absolute inset-0"
            style={{ backgroundImage: `url(${meta.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          />
          <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.52)' }} />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <h1 className="text-2xl font-extrabold text-white">{meta.name}</h1>
            <p className="mt-1 text-[14px] font-medium text-white/90">{meta.desc}</p>
            <p className="mt-0.5 text-[13px] text-white/70">{meta.subdesc}</p>
          </div>
        </div>

        {/* Filter bar */}
        <div className="bg-white px-4 py-3 border-b border-gray-100">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {budgetFilters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveBudget(activeBudget === f ? '' : f)}
                className="flex-shrink-0 rounded-full px-3 py-1.5 text-xs font-medium transition-colors"
                style={{
                  backgroundColor: activeBudget === f ? '#7C3AED' : '#F3F4F6',
                  color: activeBudget === f ? 'white' : '#374151',
                }}
              >
                {f}
              </button>
            ))}
            <div className="w-px bg-gray-200 mx-1 flex-shrink-0" />
            {ratingFilters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveRating(f)}
                className="flex-shrink-0 rounded-full px-3 py-1.5 text-xs font-medium transition-colors"
                style={{
                  backgroundColor: activeRating === f ? '#7C3AED' : '#F3F4F6',
                  color: activeRating === f ? 'white' : '#374151',
                }}
              >
                ⭐ {f}
              </button>
            ))}
            <div className="w-px bg-gray-200 mx-1 flex-shrink-0" />
            {availFilters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveAvail(f)}
                className="flex-shrink-0 rounded-full px-3 py-1.5 text-xs font-medium transition-colors"
                style={{
                  backgroundColor: activeAvail === f ? '#7C3AED' : '#F3F4F6',
                  color: activeAvail === f ? 'white' : '#374151',
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Product service selector */}
        {slug === 'product' && (
          <div className="mt-2">
            <ProductServiceSelector selected={productService} onSelect={setProductService} />
          </div>
        )}

        {/* Photographer list */}
        {showList ? (
          <div className="px-4 py-3 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">{filtered.length} fotografer ditemukan</span>
              <div className="flex gap-1.5">
                <div className="rounded-full bg-violet-600 px-3 py-1 text-xs font-medium text-white">Relevansi</div>
                <div className="rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-500">Rating ↑</div>
              </div>
            </div>
            {filtered.map((p) => (
              <PhotographerCard key={p.id} p={p} />
            ))}
          </div>
        ) : (
          slug === 'product' && (
            <div className="flex flex-col items-center justify-center py-12 px-6 text-center">
              <div className="text-4xl mb-3">👆</div>
              <div className="text-sm font-semibold text-gray-700">Pilih jenis layanan dulu</div>
              <div className="text-xs text-gray-400 mt-1">Kami akan menampilkan fotografer yang tepat untukmu</div>
            </div>
          )
        )}
      </div>

      <BottomNav mode="client" />
    </div>
  );
}
