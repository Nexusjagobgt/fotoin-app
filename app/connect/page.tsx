'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BottomNav from '@/components/BottomNav';
import { Heart, GraduationCap, Cake, Crown, PartyPopper, Trophy, Package, Utensils, Building2, User, Search } from 'lucide-react';

const categories = [
  { slug: 'wedding',    name: 'Wedding Photography',        icon: <Heart className="w-5 h-5 text-white/90" />, desc: 'Abadikan hari istimewamu',          seed: 'wedding-ceremony' },
  { slug: 'graduation', name: 'Graduation Photography',     icon: <GraduationCap className="w-5 h-5 text-white/90" />, desc: 'Momen wisuda tak terlupakan',       seed: 'graduation'       },
  { slug: 'birthday',   name: 'Birthday Photography',       icon: <Cake className="w-5 h-5 text-white/90" />, desc: 'Rayakan momen ulang tahunmu',       seed: 'party'            },
  { slug: 'sweet17',    name: 'Sweet Seventeen Photography',icon: <Crown className="w-5 h-5 text-white/90" />, desc: 'Momen sweet seventeen yang berkesan',seed: 'celebration'     },
  { slug: 'event',      name: 'Event Documentation',        icon: <PartyPopper className="w-5 h-5 text-white/90" />, desc: 'Dokumentasi acara profesional',     seed: 'concert'          },
  { slug: 'sports-photography', name: 'Sports Photography', icon: <Trophy className="w-5 h-5 text-white/90" />, desc: 'Abadikan aksi & pertandingan', seed: 'sports-action' },
  { slug: 'product',    name: 'Product Photography',        icon: <Package className="w-5 h-5 text-white/90" />, desc: 'Foto produk untuk bisnis online',   seed: 'product'          },
  { slug: 'food',       name: 'Food Photography',           icon: <Utensils className="w-5 h-5 text-white/90" />, desc: 'Tampilkan menu terbaikmu',          seed: 'food'             },
  { slug: 'corporate',  name: 'Corporate Photography',      icon: <Building2 className="w-5 h-5 text-white/90" />, desc: 'Foto profesional untuk bisnis',     seed: 'office'           },
  { slug: 'personal',   name: 'Personal Photoshoot',        icon: <User className="w-5 h-5 text-white/90" />, desc: 'Ekspresikan dirimu',                seed: 'portrait'         },
];

export default function ConnectPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const visibleCategories = categories.filter((category) => {
    const sportsSearchTerms = category.slug === 'sports-photography' ? ' olahraga running marathon futsal football cycling' : '';
    return `${category.name} ${category.desc}${sportsSearchTerms}`.toLowerCase().includes(normalizedQuery);
  });

  return (
    <div className="flex h-svh flex-col bg-gray-50">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-100 bg-white px-4 py-3 shrink-0">
        <div className="flex items-center gap-1.5">
          <Image src="/images/FOTOIN LOGO.png" alt="FOTOIN" width={76} height={20} priority className="object-contain" />
          <span className="text-base font-bold text-gray-900 leading-none mt-0.5">Connect</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="absolute top-2 right-2 h-1.5 w-1.5 rounded-full bg-red-500 border border-white"></div>
          </div>
          <Link
            href="/photographer/home"
            className="inline-flex items-center rounded-full border border-violet-600 bg-white px-2.5 py-0.5 text-xs font-medium text-violet-700 active:bg-violet-50 transition-colors"
          >
            Customer
          </Link>
          <Image src="https://i.pravatar.cc/150?img=33" alt="Avatar" width={28} height={28} className="rounded-full border border-gray-200" />
        </div>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto px-4 pt-4 pb-6">
        {/* Headline */}
        <div className="mb-3">
          <h1 className="text-[22px] font-bold text-gray-900 leading-tight">Mau foto apa hari ini?</h1>
          <p className="mt-1 text-sm text-gray-500">Pilih kategori untuk menemukan fotografer terbaik</p>
        </div>

        {/* Search bar */}
        <div className="mb-4 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-[18px] w-[18px] text-gray-400" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            className="block w-full pl-9 pr-3 py-2.5 border border-transparent rounded-xl text-[14px] bg-gray-100 text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors"
            placeholder="Cari kategori fotografi..."
          />
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-2 gap-3">
          {visibleCategories.map((cat) => {
            const isPopular = cat.slug === 'personal';
            return (
              <Link
                key={cat.slug}
                href={`/connect/${cat.slug}`}
                className="group relative h-36 overflow-hidden rounded-2xl shadow-sm transition-all duration-200 active:scale-[0.98] active:opacity-95"
              >
                <div
                  className="absolute inset-0 group-hover:scale-105 transition-transform duration-500"
                  style={{
                    backgroundImage: `url(https://picsum.photos/seed/${cat.seed}/400/250)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                <div
                  className="absolute inset-0 transition-opacity duration-200 group-active:bg-black/10"
                  style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.7) 100%)' }}
                />
                
                <div className="absolute left-3 top-3">{cat.icon}</div>
                <div className="absolute bottom-3 left-3 right-3">
                  {isPopular && (
                    <div className="mb-1 inline-flex items-center rounded-sm bg-[#6236FF] px-1.5 py-0.5 text-[9px] font-bold tracking-wide text-white shadow-sm">
                      POPULAR
                    </div>
                  )}
                  <div className="mb-1 line-clamp-2 font-bold text-sm leading-tight text-white">{cat.name}</div>
                  <div className="line-clamp-2 text-[12px] leading-snug text-white/80">{cat.desc}</div>
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
