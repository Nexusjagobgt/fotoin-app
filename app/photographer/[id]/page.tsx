import Image from 'next/image';
import Link from 'next/link';
import { BadgeCheck, CheckCircle2, Clock, Heart, MessageCircle, Share2, Star } from 'lucide-react';
import { getPhotographerById, type Photographer } from '@/lib/mockData';
import ProfileBackButton from './ProfileBackButton';

const portfolioSeeds: Record<string, string[]> = {
  wedding: ['wedding-ceremony', 'bride-candid', 'wedding-reception', 'wedding-detail', 'wedding-outdoor', 'wedding-couple'],
  graduation: ['graduation-stage', 'graduation-portrait', 'campus-photo', 'graduation-family', 'toga-detail', 'graduation-friends'],
  event: ['event-stage', 'conference', 'concert-crowd', 'event-speaker', 'event-candid', 'event-venue'],
  product: ['product-studio', 'product-flatlay', 'ecommerce-product', 'product-detail', 'product-lifestyle', 'product-campaign'],
  food: ['food-menu', 'restaurant-dish', 'food-detail', 'cafe-menu', 'culinary-photo', 'beverage-photo'],
  corporate: ['corporate-event', 'office-team', 'business-headshot', 'conference-speaker', 'company-event', 'office-candid'],
  personal: ['portrait-outdoor', 'lifestyle-portrait', 'personal-studio', 'portrait-candid', 'fashion-portrait', 'personal-outdoor'],
  'sports-photography': ['marathon-runner', 'cycling-race', 'football-match', 'basketball-action', 'badminton-match', 'team-sports'],
};

function formatPrice(value: number) {
  return `Rp ${new Intl.NumberFormat('id-ID').format(value)}`;
}

function getPrimaryCategory(photographer: Photographer) {
  return photographer.categories[0] ?? 'personal';
}

function getPackages(photographer: Photographer) {
  const category = getPrimaryCategory(photographer);
  const names = category === 'sports-photography'
    ? ['Paket Latihan', 'Paket Pertandingan', 'Paket Event Sports']
    : category === 'graduation'
      ? ['Paket Wisuda Personal', 'Paket Wisuda Keluarga', 'Paket Wisuda Lengkap']
      : category === 'product'
        ? ['Paket Produk Basic', 'Paket Katalog', 'Paket Campaign']
        : [`Paket ${photographer.styles[0]}`, `Paket ${photographer.styles[1] ?? 'Standard'}`, 'Paket Lengkap'];

  return names.map((name, index) => ({
    name,
    price: photographer.priceNum * (index + 2),
    popular: index === 1,
    features: [
      `${index + 2} Jam Sesi Foto`,
      '1 Fotografer Profesional',
      `${30 + index * 20} Foto Edit`,
      'File Digital via G-Drive',
    ],
  }));
}

export default async function PhotographerProfileDetail({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ from?: string; category?: string }>;
}) {
  const { id } = await params;
  const { from, category: fromCategory } = await searchParams;
  const photographer = getPhotographerById(id);

  if (!photographer) {
    return (
      <div className="flex min-h-svh w-full flex-col items-center justify-center bg-gray-50 px-6 text-center">
        <h1 className="text-xl font-bold text-gray-900">Fotografer tidak ditemukan</h1>
        <p className="mt-2 text-sm text-gray-500">Profil fotografer yang kamu cari tidak tersedia.</p>
        <Link href="/connect" className="mt-5 rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-bold text-white">Kembali ke Connect</Link>
      </div>
    );
  }

  let profileHref = `/photographer/${id}`;
  if (from) {
    profileHref += `?from=${encodeURIComponent(from)}`;
    if (fromCategory) {
      profileHref += `&category=${encodeURIComponent(fromCategory)}`;
    }
  }
  const consultationHref = `/messages/${photographer.id}?from=${encodeURIComponent(profileHref)}`;
  const category = getPrimaryCategory(photographer);
  const portfolio = portfolioSeeds[category] ?? portfolioSeeds.personal;
  const packages = getPackages(photographer);
  const location = photographer.location ?? 'Surabaya';
  const responseTime = photographer.response.replace('jam', ' jam');
  const startingPrice = photographer.price.replace('/jam', '').trim();

  return (
    <div className="min-h-svh w-full bg-gray-50 pb-24">
      {/* Fixed Back Button */}
      <div className="fixed top-0 left-1/2 z-50 flex w-full max-w-[390px] -translate-x-1/2 p-4 pointer-events-none" style={{ paddingTop: 'max(16px, env(safe-area-inset-top))' }}>
        <div className="pointer-events-auto">
          <ProfileBackButton source={from} category={fromCategory} />
        </div>
      </div>

      {/* Header and cover */}
      <div className="relative">
        <div className="relative h-[210px] w-full overflow-hidden bg-violet-900">
          <Image src={`https://picsum.photos/seed/${category}-${photographer.id}-cover/800/500`} alt={`Portofolio ${photographer.name}`} fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-black/55" />
        </div>
        <div className="absolute top-0 right-0 z-10 flex w-full items-center justify-end p-4 pointer-events-none text-white" style={{ paddingTop: 'max(16px, env(safe-area-inset-top))' }}>
          <div className="flex gap-2 pointer-events-auto">
            <button type="button" aria-label="Bagikan profil" className="flex items-center justify-center rounded-full bg-black/25 p-2 backdrop-blur-sm transition-colors hover:bg-black/35"><Share2 className="h-5 w-5" /></button>
            <button type="button" aria-label="Simpan favorit" className="flex items-center justify-center rounded-full bg-black/25 p-2 backdrop-blur-sm transition-colors hover:bg-black/35"><Heart className="h-5 w-5" /></button>
          </div>
        </div>
      </div>

      {/* Profile information */}
      <section className="relative bg-white px-5 pb-6">
        <div className="flex items-end gap-3.5">
          <div className="relative -mt-11 h-[88px] w-[88px] shrink-0 overflow-hidden rounded-full border-4 border-white bg-gray-100 shadow-md">
            <Image src={photographer.avatar} alt={photographer.name} fill className="object-cover" />
          </div>
          <div className="min-w-0 flex-1 pb-1.5 pt-3">
            <div className="flex items-center gap-1.5">
              <h1 className="truncate text-xl font-bold text-gray-900">{photographer.name}</h1>
              {photographer.verified && <BadgeCheck className="h-5 w-5 shrink-0 text-green-500" />}
            </div>
            <p className="mt-0.5 text-[13px] font-medium text-gray-500">{photographer.specialty} · {location}</p>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-3 rounded-2xl bg-gray-50 py-3">
          <div className="flex flex-col items-center border-r border-gray-200">
            <span className="flex items-center gap-1 font-bold text-gray-900"><Star className="h-4 w-4 fill-amber-400 text-amber-400" />{photographer.rating}</span>
            <span className="mt-0.5 text-[11px] text-gray-500">Rating</span>
          </div>
          <div className="flex flex-col items-center border-r border-gray-200">
            <span className="font-bold text-gray-900">{photographer.sessions}</span>
            <span className="mt-0.5 text-[11px] text-gray-500">Sesi</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="flex items-center gap-1 font-bold text-gray-900"><Clock className="h-4 w-4 text-gray-400" />{responseTime}</span>
            <span className="mt-0.5 text-[11px] text-gray-500">Respons</span>
          </div>
        </div>

        <p className="mt-5 text-[14px] leading-relaxed text-gray-600">
          {photographer.name} adalah fotografer profesional berbasis di {location} dengan spesialisasi {photographer.specialty.toLowerCase()}. Gaya utama meliputi {photographer.styles.join(', ').toLowerCase()} untuk menghasilkan dokumentasi yang kuat dan sesuai kebutuhanmu.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {photographer.styles.map((style) => <span key={style} className="rounded-lg border border-gray-100 bg-gray-50 px-3 py-1.5 text-[12px] font-medium text-gray-600">{style}</span>)}
        </div>
      </section>

      {/* Portfolio */}
      <section className="mt-2 bg-white px-5 py-5">
        <div className="mb-3 flex items-end justify-between">
          <h2 className="text-lg font-bold text-gray-900">Portofolio Utama</h2>
          <button type="button" className="text-sm font-medium text-violet-600 hover:underline">Lihat Semua</button>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {portfolio.map((seed, index) => (
            <div key={seed} className="relative aspect-square overflow-hidden rounded-xl bg-gray-100">
              <Image src={`https://picsum.photos/seed/${photographer.id}-${seed}/300/300`} alt={`${photographer.name} portfolio ${index + 1}`} fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* Packages */}
      <section className="mt-2 bg-white py-5">
        <h2 className="px-5 text-lg font-bold text-gray-900">Pilihan Paket</h2>
        <div className="scrollbar-hide mt-3 flex snap-x gap-3 overflow-x-auto px-5 pb-2">
          {packages.map((item) => (
            <div key={item.name} className={`relative min-w-[240px] snap-start rounded-2xl border p-4 ${item.popular ? 'border-violet-500 bg-violet-50/40' : 'border-gray-200 bg-white'}`}>
              {item.popular && <div className="absolute right-0 top-0 rounded-bl-lg rounded-tr-2xl bg-violet-600 px-2 py-1 text-[10px] font-bold text-white">POPULER</div>}
              <h3 className="pr-12 font-bold text-gray-900">{item.name}</h3>
              <p className="mt-1 text-lg font-bold text-violet-600">{formatPrice(item.price)}</p>
              <ul className="mt-3 space-y-2 text-xs text-gray-500">
                {item.features.map((feature) => <li key={feature} className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-violet-600" />{feature}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Sticky customer action */}
      <div className="fixed bottom-0 left-1/2 z-50 flex w-full max-w-[390px] -translate-x-1/2 items-center justify-between border-t border-gray-100 bg-white px-5 pb-[max(16px,env(safe-area-inset-bottom))] pt-3 shadow-[0_-4px_16px_rgba(0,0,0,0.05)]">
        <div className="min-w-0">
          <p className="text-xs text-gray-500">Harga mulai</p>
          <p className="truncate text-base font-bold text-gray-900">{startingPrice}<span className="text-xs font-medium text-gray-500">/jam</span></p>
        </div>
        <Link href={consultationHref} className="ml-3 flex shrink-0 items-center gap-2 rounded-full bg-violet-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-violet-500/25 transition-transform active:scale-95">
          <MessageCircle className="h-4 w-4" /> Konsultasi Dulu
        </Link>
      </div>
    </div>
  );
}
