'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import BottomNav from '@/components/BottomNav';
import { photographers, type ConnectCategoryConfig } from '@/lib/mockData';

const budgetChips = ['Rp 100rb-250rb', 'Rp 250rb-500rb', 'Rp 500rb-1jt', 'Rp 1jt+'];
const availChips  = ['Hari Ini', 'Minggu Ini', 'Semua'];
const ratingChips = ['4.5★+', '4.0★+', 'Semua'];
const sortOptions = ['Relevansi', 'Rating ↑', 'Harga ↑'];

const portfolioSeeds: Record<string, string[]> = {
  wedding:    ['bride',    'wedding2',  'ceremony'],
  graduation: ['graduate', 'toga',      'campus'],
  birthday:   ['portrait', 'lifestyle', 'outdoor'],
  sweet17:    ['portrait', 'lifestyle', 'outdoor'],
  event:      ['concert',  'party',     'conference'],
  product:    ['product1', 'flatlay',   'ecommerce'],
  food:       ['food1',    'restaurant','cuisine'],
  corporate:  ['office',   'business',  'meeting'],
  personal:   ['portrait', 'lifestyle', 'outdoor'],
};

type Photographer = (typeof photographers)[number];

type ServiceOption = {
  value: string;
  icon: string;
  title: string;
  subtitle: string;
  tagline: string;
};

const productOptions: ServiceOption[] = [
  { value: 'kirim',    icon: '📦', title: 'Kirim ke Fotografer',  subtitle: 'Produk kamu dikirim ke studio',   tagline: 'Hemat · Hasil terkontrol' },
  { value: 'kunjungi', icon: '🚗', title: 'Fotografer ke Lokasi', subtitle: 'Fotografer datang ke tempatmu', tagline: 'Fleksibel · Untuk produk besar' },
];

const foodOptions: ServiceOption[] = [
  { value: 'kunjungi', icon: '🚗', title: 'Fotografer ke Lokasi',    subtitle: 'Fotografer datang ke restoran/cafému',  tagline: 'Cocok untuk menu & suasana restoran' },
  { value: 'kirim',    icon: '📦', title: 'Kirim Makanan ke Studio', subtitle: 'Makanan dikirim ke studio fotografer', tagline: 'Hasil lebih terkontrol · Lighting sempurna' },
];

function ServiceSelector({
  label,
  options,
  selected,
  onSelect,
}: {
  label: string;
  options: ServiceOption[];
  selected: string;
  onSelect: (v: string) => void;
}) {
  return (
    <div className="bg-white px-4 py-4 border-b border-gray-100">
      <div className="mb-3 text-sm font-bold text-gray-900">{label}</div>
      <div className="flex gap-2">
        {options.map((opt) => (
          <button
            key={opt.value}
            onClick={() => onSelect(selected === opt.value ? '' : opt.value)}
            className="flex flex-1 flex-col items-start gap-1 rounded-2xl border-2 p-3 text-left transition-all"
            style={{
              borderColor: selected === opt.value ? '#6B21F5' : '#E5E7EB',
              backgroundColor: selected === opt.value ? '#F5F3FF' : 'white',
            }}
          >
            <span className="text-xl">{opt.icon}</span>
            <div className="text-xs font-bold text-gray-900">{opt.title}</div>
            <div className="text-[11px] text-gray-500">{opt.subtitle}</div>
            <div className="text-[10px] text-gray-400">{opt.tagline}</div>
          </button>
        ))}
      </div>
    </div>
  );
}

function PhotographerCard({ p, category }: { p: Photographer; category: string }) {
  const seeds = portfolioSeeds[category] ?? ['photo1', 'photo2', 'photo3'];
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
      {/* Header row */}
      <div className="mb-3 flex items-start gap-3">
        <div
          className="h-[60px] w-[60px] flex-shrink-0 rounded-full"
          style={{ backgroundImage: `url(${p.avatar})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="min-w-0 flex-1">
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
          <div className="mt-1 flex flex-wrap items-center gap-1.5 text-xs text-gray-500">
            <span>⭐ {p.rating}</span>
            <span>· {p.sessions} sesi selesai</span>
            <span>⚡ {p.response}</span>
          </div>
          <div className="mt-0.5 text-sm font-bold" style={{ color: '#6B21F5' }}>{p.price}</div>
          <div className="mt-1 flex items-center gap-1.5 text-xs">
            <span className="rounded-md bg-green-100 px-1.5 py-0.5 font-medium text-green-700">
              ✅ Tersedia {p.available}
            </span>
            <span className="text-gray-500">{p.distance}</span>
          </div>
        </div>
        <div className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-green-500" />
      </div>

      {/* Style tags */}
      <div className="mb-2 flex flex-wrap gap-1.5">
        {p.styles.map((s) => (
          <span key={s} className="inline-flex items-center rounded-full border border-gray-200 px-2.5 py-0.5 text-[11px] text-gray-600">{s}</span>
        ))}
      </div>

      {/* Portfolio strip */}
      <div className="mb-3 flex gap-1.5">
        {seeds.map((seed, i) => (
          <div
            key={i}
            className="h-16 flex-1 rounded-xl bg-gray-100"
            style={{
              backgroundImage: `url(https://picsum.photos/seed/${seed}/120/90)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}
        <div className="flex h-16 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gray-900 text-sm font-bold text-white">
          +{p.extraPhotos}
        </div>
      </div>

      {/* Actions */}
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
          style={{ backgroundColor: '#6B21F5' }}
        >
          💬 Konsultasi
        </Link>
      </div>
    </div>
  );
}

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="flex-shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors"
      style={{
        backgroundColor: active ? '#6B21F5' : 'white',
        color: active ? 'white' : '#4B5563',
        border: `1.5px solid ${active ? '#6B21F5' : '#E5E7EB'}`,
      }}
    >
      {label}
    </button>
  );
}

export default function ConnectCategoryClient({
  category,
  config,
}: {
  category: string;
  config: ConnectCategoryConfig;
}) {
  const router = useRouter();
  const [activeBudget, setActiveBudget] = useState('');
  const [activeAvail,  setActiveAvail]  = useState('Semua');
  const [activeRating, setActiveRating] = useState('Semua');
  const [activeSort,   setActiveSort]   = useState('Relevansi');
  const [serviceSelected, setServiceSelected] = useState('');

  const isProduct = category === 'product';
  const isFood    = category === 'food';

  const filteredPhotographers = config.photographerIds
    .map((id) => photographers.find((p) => p.id === id))
    .filter((p): p is Photographer => Boolean(p));

  return (
    <div className="flex h-svh flex-col bg-gray-50">
      {/* Top bar */}
      <div className="flex items-center justify-between border-b border-gray-100 bg-white px-4 py-3">
        <button onClick={() => router.back()} className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5M12 19l-7-7 7-7" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <span className="text-base font-bold text-gray-900">{config.name}</span>
        <Link
          href="/photographer/home"
          className="inline-flex items-center rounded-full border border-violet-600 bg-violet-100 px-2.5 py-0.5 text-xs font-medium text-violet-700"
        >
          Customer
        </Link>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Hero */}
        <div className="relative h-[120px] flex-shrink-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(https://picsum.photos/seed/${config.picsumSeed}/800/300)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.55)' }} />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <div className="mb-1 text-2xl">{config.icon}</div>
            <div className="text-lg font-extrabold leading-tight text-white">{config.name}</div>
            <div className="mt-0.5 text-[13px] text-white/80">{config.tagline}</div>
          </div>
        </div>

        {/* Service selectors */}
        {isProduct && (
          <div className="mt-2">
            <ServiceSelector
              label="Jenis Layanan"
              options={productOptions}
              selected={serviceSelected}
              onSelect={setServiceSelected}
            />
          </div>
        )}
        {isFood && (
          <div className="mt-2">
            <ServiceSelector
              label="Jenis Layanan"
              options={foodOptions}
              selected={serviceSelected}
              onSelect={setServiceSelected}
            />
          </div>
        )}

        {/* Filter bar */}
        <div className="border-b border-gray-100 bg-white px-4 py-3">
          <div className="scrollbar-hide flex gap-2 overflow-x-auto">
            {budgetChips.map((f) => (
              <FilterChip key={f} label={f} active={activeBudget === f} onClick={() => setActiveBudget(activeBudget === f ? '' : f)} />
            ))}
            <div className="mx-0.5 w-px flex-shrink-0 bg-gray-200" />
            {availChips.map((f) => (
              <FilterChip key={f} label={f} active={activeAvail === f} onClick={() => setActiveAvail(f)} />
            ))}
            <div className="mx-0.5 w-px flex-shrink-0 bg-gray-200" />
            {ratingChips.map((f) => (
              <FilterChip key={f} label={f} active={activeRating === f} onClick={() => setActiveRating(f)} />
            ))}
          </div>
        </div>

        {/* Results + sort */}
        <div className="px-4 pt-3 pb-1">
          <p className="mb-2 text-[13px] text-gray-500">
            {filteredPhotographers.length} fotografer {config.name.toLowerCase()} ditemukan
          </p>
          <div className="flex items-center gap-2">
            <span className="flex-shrink-0 text-[13px] text-gray-500">Urutkan:</span>
            {sortOptions.map((s) => (
              <button
                key={s}
                onClick={() => setActiveSort(s)}
                className="flex-shrink-0 rounded-full px-3 py-1 text-[11px] font-medium transition-colors"
                style={{
                  backgroundColor: activeSort === s ? '#6B21F5' : 'white',
                  color: activeSort === s ? 'white' : '#6B7280',
                  border: `1px solid ${activeSort === s ? '#6B21F5' : '#E5E7EB'}`,
                }}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Photographer cards */}
        <div className="flex flex-col gap-4 px-4 pb-4 pt-3">
          {filteredPhotographers.map((p) => (
            <PhotographerCard key={p.id} p={p} category={category} />
          ))}
        </div>
      </div>

      <BottomNav mode="client" />
    </div>
  );
}
