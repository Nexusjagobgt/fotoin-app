'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import BottomNav from '@/components/BottomNav';
import { Trophy } from 'lucide-react';
import { photographers, type ConnectCategoryConfig } from '@/lib/mockData';

const budgetChips = ['Semua', 'Rp 100rb-250rb', 'Rp 250rb-500rb', 'Rp 500rb-1jt', 'Rp 1jt+'];
const availChips  = ['Semua', 'Hari Ini', 'Minggu Ini'];
const ratingChips = ['Semua', '4.5★+', '4.0★+'];
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
  'sports-photography': ['marathon', 'cycling-race', 'football-match'],
};

const sportsServiceChips = ['Semua', 'Running', 'Cycling', 'Football / Futsal', 'Basketball', 'Badminton', 'Gym / Fitness', 'Sports Event', 'Team Documentation'];

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

function PhotographerCard({ p, category, categoryName }: { p: Photographer; category: string; categoryName: string }) {
  const seeds = portfolioSeeds[category] ?? ['photo1', 'photo2', 'photo3'];
  
  // Clean up price string to ensure it looks like "Rp500.000 /jam"
  const basePrice = p.price.replace('/jam', '').trim();
  
  // Extract just the core category name (e.g., "Wedding" instead of "Wedding Photography")
  const shortCategory = categoryName.replace(/ Photography/i, '').replace(/ Documentation/i, '');

  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
      {/* Header row: Avatar + Name + Rating + Price + Avail */}
      <div className="flex items-start gap-3">
        <div
          className="h-[56px] w-[56px] flex-shrink-0 rounded-full border border-gray-100"
          style={{ backgroundImage: `url(${p.avatar})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="min-w-0 flex-1 pb-0.5">
          {/* Name & Verified */}
          <div className="flex items-center gap-1.5">
            <span className="text-base font-bold text-gray-900 truncate">{p.name}</span>
            {p.verified && (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#10B981" />
                <path d="M7.5 12L10.5 15L16.5 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </div>
          {category === 'sports-photography' && (
            <div className="mt-0.5 text-[12px] font-medium text-gray-500">{p.specialty}</div>
          )}
          
          {/* Rating & Reviews */}
          <div className="mt-0.5 flex flex-wrap items-center gap-1.5 text-[13px] text-gray-500 font-medium">
            <span className="flex items-center gap-1 text-gray-700">
              <span className="text-amber-400">★</span> {p.rating}
            </span>
            <span>·</span>
            <span>{p.sessions} {category === 'sports-photography' ? 'sesi' : 'ulasan'}</span>
          </div>
          
          {/* Price */}
          <div className="mt-1 flex items-baseline gap-1">
            <span className="text-[17px] font-bold text-gray-900">{basePrice}</span>
            <span className="text-[13px] font-medium text-gray-500">/jam</span>
          </div>
          
          {/* Availability & Distance */}
          <div className="mt-1 flex flex-wrap items-center gap-2 text-[12px] font-medium text-gray-600">
            <div className="flex items-center gap-1.5 text-green-700 bg-green-50 px-2 py-0.5 rounded-full">
              <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
              Tersedia {p.available}
            </div>
            <span className="text-gray-300">•</span>
            <span>{p.location ?? p.distance}</span>
          </div>
        </div>
      </div>

      {/* Portfolio strip context label */}
      <div className="mt-3 mb-1.5 text-[11px] font-bold uppercase tracking-wider text-gray-500">
        Portofolio {shortCategory}
      </div>

      {/* Portfolio strip */}
      <div className="mb-2.5 flex gap-2">
        {seeds.map((seed, i) => (
          <div
            key={i}
            className="h-[80px] flex-1 rounded-xl bg-gray-100"
            style={{
              backgroundImage: `url(https://picsum.photos/seed/${seed}/120/90)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}
        <div className="flex h-[80px] w-[64px] flex-shrink-0 items-center justify-center rounded-xl bg-gray-900/90 text-[15px] font-bold text-white">
          +{p.extraPhotos}
        </div>
      </div>

      {/* Style tags */}
      <div className="mb-3.5 flex flex-wrap gap-1.5">
        {p.styles.map((s) => (
          <span key={s} className="inline-flex items-center rounded-lg bg-gray-50 border border-gray-100 px-3 py-1 text-[12px] font-medium text-gray-600">
            {s}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        <Link
          href={`/photographer/${p.id}?from=connect&category=${category}`}
          className="flex-1 rounded-xl border border-gray-200 py-2.5 text-center text-sm font-semibold text-gray-700 active:bg-gray-50 transition-colors"
        >
          Lihat Profil
        </Link>
        <Link
          href={`/messages/${p.id}?from=connect&category=${category}`}
          className="flex-1 rounded-xl py-2.5 text-center text-sm font-bold text-white shadow-sm active:scale-[0.98] transition-transform"
          style={{ backgroundColor: '#6B21F5' }}
        >
          Konsultasi
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
      className="flex-shrink-0 rounded-full px-4 py-2 text-[13px] font-semibold transition-colors"
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
  const [activeBudget, setActiveBudget] = useState('Semua');
  const [activeAvail,  setActiveAvail]  = useState('Semua');
  const [activeRating, setActiveRating] = useState('Semua');
  const [activeSort,   setActiveSort]   = useState('Relevansi');
  const [serviceSelected, setServiceSelected] = useState('');
  const [activeSportsService, setActiveSportsService] = useState('Semua');

  const isProduct = category === 'product';
  const isFood    = category === 'food';
  const isSports  = category === 'sports-photography';

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

      <div className="flex-1 overflow-y-auto pb-4">
        {/* Hero */}
        <div className="relative h-[140px] flex-shrink-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(https://picsum.photos/seed/${config.picsumSeed}/800/300)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.6)' }} />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <div className="mb-1.5 text-[28px] drop-shadow-md">
              {isSports ? <Trophy className="h-8 w-8 text-white" aria-hidden="true" /> : config.icon}
            </div>
            <div className="text-[22px] font-extrabold leading-tight text-white drop-shadow-md">{config.name}</div>
            <div className="mt-1 text-[14px] text-white/90 drop-shadow-md">{config.tagline}</div>
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

        {isSports && (
          <div className="border-b border-gray-100 bg-white px-4 py-4">
            <div className="mb-2 text-[11px] font-bold uppercase tracking-wider text-gray-500">Jenis Olahraga</div>
            <div className="scrollbar-hide flex items-center gap-2 overflow-x-auto">
              {sportsServiceChips.map((service) => (
                <FilterChip key={service} label={service} active={activeSportsService === service} onClick={() => setActiveSportsService(service)} />
              ))}
            </div>
          </div>
        )}

        {/* Filter Section */}
        <div className="border-b border-gray-100 bg-white px-4 py-4 flex flex-col gap-4">
          {/* Waktu Group */}
          <div>
            <div className="mb-2 text-[11px] font-bold uppercase tracking-wider text-gray-500">Waktu</div>
            <div className="scrollbar-hide flex items-center gap-2 overflow-x-auto">
              {availChips.map((f) => (
                <FilterChip key={f} label={f} active={activeAvail === f} onClick={() => setActiveAvail(f)} />
              ))}
            </div>
          </div>

          {/* Rating Group */}
          <div>
            <div className="mb-2 text-[11px] font-bold uppercase tracking-wider text-gray-500">Rating</div>
            <div className="scrollbar-hide flex items-center gap-2 overflow-x-auto">
              {ratingChips.map((f) => (
                <FilterChip key={f} label={f} active={activeRating === f} onClick={() => setActiveRating(f)} />
              ))}
            </div>
          </div>
          {/* Harga Group */}
          <div>
            <div className="mb-2 text-[11px] font-bold uppercase tracking-wider text-gray-500">Harga</div>
            <div className="scrollbar-hide flex items-center gap-2 overflow-x-auto">
              {budgetChips.map((f) => (
                <FilterChip key={f} label={f} active={activeBudget === f} onClick={() => setActiveBudget(f)} />
              ))}
            </div>
          </div>
        </div>


        {/* Results + sort */}
        <div className="px-4 pt-4 pb-1">
          <p className="mb-3 text-[14px] font-medium text-gray-700">
            {filteredPhotographers.length} fotografer {config.name.toLowerCase()} ditemukan
          </p>
          <div className="flex items-center gap-2.5">
            <span className="flex-shrink-0 text-[13px] text-gray-500">Urutkan:</span>
            {sortOptions.map((s) => (
              <button
                key={s}
                onClick={() => setActiveSort(s)}
                className="flex-shrink-0 rounded-full px-3.5 py-1.5 text-[12px] font-semibold transition-colors"
                style={{
                  backgroundColor: activeSort === s ? '#6B21F5' : 'white',
                  color: activeSort === s ? 'white' : '#4B5563',
                  border: `1.5px solid ${activeSort === s ? '#6B21F5' : '#E5E7EB'}`,
                }}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Photographer cards */}
        <div className="flex flex-col gap-4 px-4 pb-2 pt-3">
          {filteredPhotographers.map((p) => (
            <PhotographerCard key={p.id} p={p} category={category} categoryName={config.name} />
          ))}
        </div>
      </div>

      <BottomNav mode="client" />
    </div>
  );
}
