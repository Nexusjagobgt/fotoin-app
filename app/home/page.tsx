'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BottomNav from '@/components/BottomNav';
import { 
  Search, Bell, MapPin, ChevronDown, Star, Zap, ShieldCheck, 
  Heart, SlidersHorizontal, ArrowRight, Grid 
} from 'lucide-react';

const featuredPhotographers = [
  { id: 'rizki-pratama', name: 'Rizki Pratama', specialty: 'Wedding', rating: '4.9', sessions: '127', price: 'Rp400.000', available: 'Tersedia hari ini', availableStatus: 'green', km: '1.2 km', avatar: 'https://i.pravatar.cc/150?img=11', cover: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=600&auto=format&fit=crop' },
  { id: 'dinda-aulia', name: 'Dinda Aulia', specialty: 'Graduation', rating: '4.8', sessions: '89', price: 'Rp300.000', available: 'Tersedia besok', availableStatus: 'yellow', km: '2.5 km', avatar: 'https://i.pravatar.cc/150?img=5', cover: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=600&auto=format&fit=crop' },
  { id: 'bagas-firmansyah', name: 'Bagas Firmansyah', specialty: 'Event', rating: '4.7', sessions: '203', price: 'Rp350.000', available: 'Tersedia hari ini', availableStatus: 'green', km: '3.1 km', avatar: 'https://i.pravatar.cc/150?img=8', cover: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=600&auto=format&fit=crop' },
];

const categories = [
  { name: 'Wedding', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600&auto=format&fit=crop', slug: 'wedding' },
  { name: 'Graduation', img: 'https://picsum.photos/seed/graduation/600/400', slug: 'graduation' },
  { name: 'Product', img: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=600&auto=format&fit=crop', slug: 'product' },
];

export default function HomePage() {
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const toggleFavorite = (e: React.MouseEvent, id: string) => {
    e.preventDefault(); // Prevent link navigation when clicking heart
    const newFavs = new Set(favorites);
    if (newFavs.has(id)) {
      newFavs.delete(id);
    } else {
      newFavs.add(id);
    }
    setFavorites(newFavs);
  };

  return (
    <div className="flex h-svh flex-col bg-white md:max-w-md md:mx-auto md:shadow-2xl relative overflow-hidden text-gray-900">
      
      {/* HEADER */}
      <header className="flex items-center justify-between px-4 py-3 sticky top-0 z-20 bg-white/95 backdrop-blur-md shrink-0">
        <Link href="/">
          <Image src="/images/FOTOIN LOGO.png" alt="FOTOIN" width={110} height={28} priority className="object-contain" />
        </Link>
        <div className="flex items-center gap-4">
          <button className="relative">
            <Bell className="w-6 h-6 text-gray-700" strokeWidth={1.5} />
            <div className="absolute top-0 right-0 h-2.5 w-2.5 rounded-full bg-red-500 border-2 border-white" />
          </button>
          <Link href="/messages" className="relative">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"></path></svg>
            <div className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#6236FF] border-2 border-white">
              <span className="text-[8px] font-bold text-white leading-none">2</span>
            </div>
          </Link>
          <Link
            href="/photographer/home"
            className="inline-flex items-center rounded-full border border-violet-600 bg-white px-2.5 py-0.5 text-xs font-medium text-violet-700 active:bg-violet-50 transition-colors"
          >
            Customer
          </Link>
          <Link href="/profil" className="h-8 w-8 rounded-full overflow-hidden shrink-0 bg-gray-100 relative ml-1">
            <Image src="https://i.pravatar.cc/150?img=33" alt="Avatar" fill className="object-cover" />
          </Link>
        </div>
      </header>


      {/* MAIN SCROLLABLE CONTENT */}
      <main className="flex-1 overflow-y-auto scrollbar-hide pb-6">
        
        {/* 1. GREETING & SEARCH */}
        <section className="px-4 pt-2 pb-5">
          <h1 className="text-2xl font-bold leading-tight">Halo, Christian 👋</h1>
          
          <div className="flex items-center gap-1 mt-1 text-gray-500">
            <MapPin className="w-3.5 h-3.5" />
            <span className="text-xs font-medium">Surabaya, Jawa Timur</span>
            <ChevronDown className="w-3.5 h-3.5" />
          </div>

          <p className="text-[15px] text-gray-800 mt-5 mb-2.5 font-semibold">Mau cari fotografer untuk apa?</p>

          <div className="flex items-center gap-2">
            <Link href="/connect" className="flex-1 flex items-center gap-2 rounded-full bg-gray-100 px-4 py-3.5 active:bg-gray-200 transition-colors">
              <Search className="w-5 h-5 text-gray-500" />
              <span className="text-[13px] text-gray-500 flex-1 truncate">Cari fotografer, layanan, atau lokasi...</span>
            </Link>
            <button className="p-3.5 bg-gray-100 rounded-full active:bg-gray-200 transition-colors text-gray-700">
              <SlidersHorizontal className="w-5 h-5" />
            </button>
          </div>
        </section>

        {/* 2. KATEGORI LAYANAN */}
        <section className="px-4 py-2">
          <h2 className="text-lg font-bold mb-4 text-gray-900">Jelajahi Kategori</h2>
          
          <div className="grid grid-cols-2 gap-3">
            {categories.map((cat) => (
              <Link key={cat.slug} href={`/connect/${cat.slug}`} className="relative aspect-video rounded-2xl overflow-hidden group active:scale-[0.98] transition-transform">
                <Image src={cat.img} alt={cat.name} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <span className="absolute bottom-3 left-3 text-white font-bold text-sm tracking-wide">{cat.name}</span>

              </Link>
            ))}

            {/* Last Tile: Lihat Semua (Blurred Background) */}
            <Link href="/connect" className="relative flex flex-col items-center justify-center aspect-video rounded-2xl overflow-hidden group active:scale-[0.98] transition-transform">
              <Image 
                src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?q=80&w=600&auto=format&fit=crop" 
                alt="Lihat Semua Kategori" 
                fill 
                className="object-cover blur-[2px] brightness-75 group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
              
              <div className="relative z-10 flex flex-col items-center">
                <div className="bg-white/20 backdrop-blur-md p-2 rounded-full border border-white/30 text-white mb-2 group-hover:scale-110 transition-transform shadow-sm">
                  <Grid className="w-5 h-5" />
                </div>
                <span className="text-sm font-bold text-white drop-shadow-md">Lihat Semua</span>
                <span className="text-[11px] font-medium text-white/90 mt-0.5 drop-shadow-md">6+ kategori</span>
              </div>
            </Link>
          </div>
        </section>

        {/* 3. PROMOTIONAL BANNER */}
        <section className="px-4 py-5 mt-2">
          <Link href="/sports" className="relative block w-full rounded-2xl overflow-hidden shadow-sm h-32 group active:scale-[0.98] transition-transform">
            <div className="absolute inset-0">
              <Image src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=600&auto=format&fit=crop" alt="Sports" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/90 via-[#1E293B]/70 to-transparent" />
            
            <div className="relative p-4 h-full flex flex-col justify-between">
              <div className="self-start inline-flex items-center gap-1 rounded-full bg-white/20 backdrop-blur-md px-2 py-0.5 border border-white/10">
                <Zap className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                <span className="text-[10px] font-bold text-white">AI-Powered</span>
              </div>
              
              <div className="flex items-end justify-between mt-auto">
                <div>
                  <h3 className="text-white font-bold text-sm">Cari Fotomu di Event Olahraga</h3>
                  <p className="text-[10px] text-gray-300 mt-0.5 max-w-[180px]">Temukan foto kamu dari event terbaru.</p>
                </div>
                <div className="bg-white rounded-full px-3 py-1.5 text-[11px] font-bold text-gray-900 shadow-sm shrink-0">
                  Lihat Event →
                </div>
              </div>
            </div>
          </Link>
        </section>

        {/* 4. FOTOGRAFER PILIHAN */}
        <section className="px-4 pt-3 pb-3">
          <h2 className="text-lg font-bold mb-4 text-gray-900">Fotografer Pilihan</h2>
          
          <div className="flex overflow-x-auto gap-4 pb-4 px-4 -mx-4 scrollbar-hide snap-x scroll-pl-4" style={{ scrollbarWidth: 'none' }}>
            {featuredPhotographers.map((p) => (
              <Link key={p.id} href={`/photographer/${p.id}?from=home`} className="w-[260px] shrink-0 bg-white rounded-2xl overflow-hidden snap-start flex flex-col shadow-[0_2px_12px_rgba(0,0,0,0.06)] active:scale-[0.98] transition-transform relative">
                
                {/* Cover Image & Favorite */}
                <div className="relative h-32 w-full bg-gray-100">
                  <Image src={p.cover} alt="Cover" fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/10" />
                  
                  {/* Favorite Toggle */}
                  <button 
                    onClick={(e) => toggleFavorite(e, p.id)}
                    className="absolute top-3 right-3 p-1.5 bg-black/30 backdrop-blur-md rounded-full text-white hover:bg-black/40 transition-colors"
                  >
                    <Heart className={`w-4 h-4 ${favorites.has(p.id) ? 'fill-red-500 text-red-500' : ''}`} />
                  </button>
                  
                  {/* Avatar overlapping */}
                  <div className="absolute -bottom-5 left-4">
                    <div className="h-12 w-12 rounded-full border-2 border-white overflow-hidden bg-gray-100 shadow-sm relative">
                      <Image src={p.avatar} alt={p.name} fill className="object-cover" />
                    </div>
                  </div>
                </div>
                
                <div className="p-4 pt-6 flex flex-col">
                  {/* Name + Verified */}
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-bold text-[15px] text-gray-900 leading-none">{p.name}</h3>
                    <ShieldCheck className="w-4 h-4 text-blue-500" />
                  </div>
                  
                  {/* Rating + Review Count */}
                  <div className="flex items-center gap-1 mt-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-[13px] font-bold text-gray-900">{p.rating}</span>
                    <span className="text-[13px] text-gray-600 font-medium ml-1">({p.sessions} sesi)</span>
                  </div>

                  {/* Service Category */}
                  <div className="mt-2 flex">
                    <div className="inline-flex items-center bg-purple-50 px-2.5 py-1 rounded-md text-xs font-semibold text-[#6236FF]">
                      {p.specialty}
                    </div>
                  </div>
                  
                  {/* Price */}
                  <div className="mt-2">
                    <span className="font-bold text-[17px] text-gray-900">{p.price}</span>
                    <span className="text-[13px] text-gray-500 font-medium"> / jam</span>
                  </div>
                  
                  {/* Status & Location */}
                  <div className="mt-2 flex items-center justify-between text-[13px]">
                    <div className="flex items-center gap-1.5 font-medium">
                      <span className={`w-2.5 h-2.5 rounded-full ${p.availableStatus === 'green' ? 'bg-green-500' : 'bg-yellow-500'}`}></span>
                      <span className="text-gray-800">{p.available}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-500 font-medium">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{p.km}</span>
                    </div>
                  </div>
                  
                  {/* CTA */}
                  <div className="mt-3 pt-2.5 border-t border-gray-100 flex items-center justify-between text-[#6236FF] font-bold text-[13px] group">
                    <span>Lihat Profil</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
            <div className="w-px shrink-0" /> {/* Explicit right padding spacer for Safari */}
          </div>
        </section>
      </main>

      {/* 5. BOTTOM NAVIGATION */}
      <nav className="shrink-0 z-30 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] bg-white relative">
        <BottomNav mode="client" />
      </nav>
    </div>
  );
}
