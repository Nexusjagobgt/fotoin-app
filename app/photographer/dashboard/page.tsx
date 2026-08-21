'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BottomNav from '@/components/BottomNav';


const upcomingBookings = [
  { date: '15', month: 'APR', name: 'Christian', type: 'Wedding', time: '09:00', venue: 'Univ. Petra', status: 'Confirmed', statusColor: '#16A34A', statusBg: '#DCFCE7', avatar: 'https://i.pravatar.cc/40?img=33' },
  { date: '18', month: 'APR', name: 'Maya', type: 'Wedding', time: '10:00', venue: 'Hotel Majapahit', status: 'Confirmed', statusColor: '#16A34A', statusBg: '#DCFCE7', avatar: 'https://i.pravatar.cc/40?img=25' },
  { date: '22', month: 'APR', name: 'Dito', type: 'Product', time: '13:00', venue: 'Studio TBD', status: 'Pending', statusColor: '#92400E', statusBg: '#FEF3C7', avatar: 'https://i.pravatar.cc/40?img=15' },
];

export default function DashboardPage() {
  const [sportsUpload] = useState(() => {
    if (typeof window === 'undefined') return { photoCount: 3847, price: 25000 };
    try {
      const value = JSON.parse(window.localStorage.getItem('fotoin-sports-upload-marathon-2026') ?? '{}') as { lastBatchCount?: number; price?: number };
      return { photoCount: 3847 + (value.lastBatchCount ?? 0), price: value.price ?? 25000 };
    } catch {
      return { photoCount: 3847, price: 25000 };
    }
  });

  return (
    <div className="flex h-svh flex-col bg-gray-50">
      {/* Header */}
      <div className="bg-white px-5 pt-3 pb-3 shrink-0">
        {/* Top Row */}
        <div className="flex items-center justify-between mb-4">
          <Link href="/">
            <Image src="/images/FOTOIN LOGO.png" alt="FOTOIN" width={110} height={28} priority className="object-contain" />
          </Link>
          <div className="flex items-center gap-3">
            <button className="relative">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
              <div className="absolute top-0 right-0 h-2.5 w-2.5 rounded-full bg-red-500 border-2 border-white" />
            </button>
            <Link href="/photographer/profil" className="inline-flex items-center rounded-full bg-violet-50 px-2.5 py-1">
              <span className="text-[10px] font-bold text-violet-700">Fotografer</span>
            </Link>
            <Link href="/photographer/profil" className="h-8 w-8 rounded-full overflow-hidden shrink-0 bg-gray-100 relative ml-0.5">
              <Image src="https://i.pravatar.cc/150?img=11" alt="Avatar" fill className="object-cover" />
            </Link>
          </div>
        </div>

        {/* Greeting Row */}
        <div>
          <div className="text-xl font-bold text-gray-900">Halo, Rizki 👋</div>
          <div className="text-[13px] text-gray-500 font-medium mt-0.5">20 Agustus 2026</div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pb-6">
        {/* Performance Summary */}
        <div className="mt-4 mx-5 rounded-2xl bg-gradient-to-br from-violet-100 via-violet-50 to-white border border-violet-100 p-5 shadow-sm relative overflow-hidden">
          {/* Decorative subtle shape in background */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-violet-200/40 rounded-full blur-2xl"></div>
          
          <div className="flex flex-col items-center border-b border-violet-100/60 pb-4 mb-4 relative z-10">
            <span className="text-[28px] font-extrabold text-gray-900 mb-0.5">Rp3.500.000</span>
            <span className="text-[12px] text-gray-600 font-medium mb-2">Pendapatan bulan ini</span>
            <span className="text-[11px] font-bold text-green-700 bg-green-100/80 px-2.5 py-0.5 rounded-full backdrop-blur-sm shadow-[0_1px_2px_rgba(0,0,0,0.02)]">↑ 8% dari bulan lalu</span>
          </div>
          <div className="flex justify-between items-center text-center px-1 relative z-10">
            <div className="flex flex-col flex-1">
              <span className="text-[17px] font-extrabold text-gray-900">18</span>
              <span className="text-[11px] text-violet-700/80 font-semibold mt-0.5">Booking</span>
            </div>
            <div className="w-px h-8 bg-violet-200/60"></div>
            <div className="flex flex-col flex-1">
              <span className="text-[17px] font-extrabold text-gray-900">342</span>
              <span className="text-[11px] text-violet-700/80 font-semibold mt-0.5">Profil Dilihat</span>
            </div>
            <div className="w-px h-8 bg-violet-200/60"></div>
            <div className="flex flex-col flex-1">
              <span className="text-[17px] font-extrabold text-gray-900">94%</span>
              <span className="text-[11px] text-violet-700/80 font-semibold mt-0.5">Response</span>
            </div>
          </div>
        </div>

        {/* Booking Berikutnya */}
        <div className="mt-5 mx-5">
          <h2 className="text-[15px] font-bold text-gray-900 mb-3 ml-1">Booking Berikutnya</h2>
          <div className="rounded-2xl bg-white border border-gray-100 border-l-[3px] border-l-violet-500 p-4 shadow-[0_2px_10px_rgba(0,0,0,0.03)]">
            <div className="flex items-start gap-3 mb-3">
              <div className="flex flex-col items-center justify-center h-12 w-12 rounded-xl bg-violet-50 text-violet-600 shrink-0 border border-violet-100">
                <span className="text-[15px] font-extrabold">15</span>
                <span className="text-[10px] font-bold">APR</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <div className="font-bold text-[14px] text-gray-900 truncate">Christian <span className="font-medium text-gray-500 text-[12px]">· Wedding</span></div>
                </div>
                <div className="text-[12px] text-gray-600 font-medium mt-0.5">09:00 WIB</div>
                <div className="text-[12px] text-gray-600 font-medium mt-0.5">Universitas Petra, Surabaya</div>
              </div>
            </div>
            <div className="mb-4">
              <span className="inline-block px-2 py-1 rounded-md text-[10px] font-bold bg-green-50 text-green-700 border border-green-100">Terkonfirmasi</span>
            </div>
            <div className="flex gap-2">
              <Link href="/photographer/konsultasi/christian?from=dashboard" className="flex-1 flex justify-center items-center py-2.5 rounded-xl border border-gray-200 text-[12px] font-bold text-gray-700 active:bg-gray-50 transition-colors">
                Chat
              </Link>
              <Link href="/photographer/pesanan" className="flex-1 flex justify-center items-center py-2.5 rounded-xl border border-gray-200 text-[12px] font-bold text-gray-700 active:bg-gray-50 transition-colors">
                Lihat Detail
              </Link>
            </div>
          </div>
        </div>

        {/* Event Olahraga Aktif */}
        <div className="mt-5 mx-5">
          <div className="mb-3 ml-1 mr-1 flex items-center justify-between">
            <h2 className="text-[15px] font-bold text-gray-900">Event Olahraga Aktif</h2>
            <Link href="/photographer/sports" className="flex items-center gap-0.5 text-[12px] font-bold text-violet-600">
              Lihat Semua
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
            </Link>
          </div>
          <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-[0_2px_10px_rgba(0,0,0,0.03)]">
            <div className="flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" /><line x1="4" y1="22" x2="4" y2="15" /></svg>
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[14px] font-bold text-gray-900">Surabaya City Marathon 2026</div>
                <div className="mt-0.5 text-[12px] font-medium text-gray-500">15 Mar · Surabaya</div>
                <div className="mt-2 flex flex-wrap items-center gap-1.5 text-[11px]">
                  <span className="rounded-full bg-violet-50 px-2 py-0.5 font-semibold text-violet-700">{new Intl.NumberFormat('id-ID').format(sportsUpload.photoCount)} foto terunggah</span>
                  <span className="font-semibold text-gray-600">Rp{new Intl.NumberFormat('id-ID').format(sportsUpload.price)}/foto</span>
                </div>
              </div>
            </div>
            <Link href="/photographer/sports/marathon-2026/upload" className="mt-3 flex w-full items-center justify-center rounded-xl bg-violet-600 py-2.5 text-[12px] font-bold text-white active:scale-95 transition-transform">
              {sportsUpload.photoCount > 3847 ? 'Upload Foto Lagi' : 'Upload Foto'}
            </Link>
          </div>
        </div>

        {/* Konsultasi */}
        <div className="mt-5 mx-5">
          <div className="flex justify-between items-center mb-3 ml-1 mr-1">
            <div className="flex items-center gap-2">
              <h2 className="text-[15px] font-bold text-gray-900">Konsultasi</h2>
              <span className="bg-amber-50 text-amber-700 text-[10px] font-bold px-1.5 py-0.5 rounded border border-amber-200">3 baru</span>
            </div>
            <Link href="/photographer/konsultasi" className="text-[12px] font-bold text-violet-600 flex items-center gap-0.5">Lihat Semua <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></Link>
          </div>
          <Link href="/photographer/konsultasi" className="rounded-2xl bg-white border border-gray-100 p-4 shadow-[0_2px_10px_rgba(0,0,0,0.03)] flex items-center gap-3 active:bg-gray-50 transition-colors">
            <div className="flex shrink-0">
              {['https://i.pravatar.cc/40?img=25', 'https://i.pravatar.cc/40?img=15', 'https://i.pravatar.cc/40?img=5'].map((av, i) => (
                <div key={i} className="h-8 w-8 rounded-full border-2 border-white bg-gray-100" style={{ backgroundImage: `url(${av})`, backgroundSize: 'cover', marginLeft: i > 0 ? '-12px' : '0' }} />
              ))}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[12px] font-semibold text-gray-700 leading-tight">Maya, Dito, Sari & 3 lainnya menunggu balasan</p>
            </div>
          </Link>
        </div>

        {/* Jadwal Berikutnya */}
        <div className="mt-5 mx-5">
          <h2 className="text-[15px] font-bold text-gray-900 mb-3 ml-1">Jadwal Berikutnya</h2>
          <div className="rounded-2xl bg-white border border-gray-100 p-4 shadow-[0_2px_10px_rgba(0,0,0,0.03)]">
            <div className="flex items-center gap-3 pb-3 border-b border-gray-50">
              <div className="flex flex-col items-center justify-center w-12 bg-violet-50 text-violet-700 rounded-xl py-1.5 shrink-0 border border-violet-100/50">
                <span className="font-extrabold text-[13px] leading-tight">18</span>
                <span className="font-bold text-[9px] leading-tight">APR</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-bold text-[13px] text-gray-900 truncate">Maya <span className="font-medium text-gray-500">· Wedding</span></div>
                <div className="text-[11px] text-gray-500 font-medium mt-0.5">10:00 · Hotel Majapahit</div>
              </div>
            </div>
            <div className="flex items-center gap-3 pt-3 mb-4">
              <div className="flex flex-col items-center justify-center w-12 bg-violet-50 text-violet-700 rounded-xl py-1.5 shrink-0 border border-violet-100/50">
                <span className="font-extrabold text-[13px] leading-tight">22</span>
                <span className="font-bold text-[9px] leading-tight">APR</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-bold text-[13px] text-gray-900 truncate">Dito <span className="font-medium text-gray-500">· Product</span></div>
                <div className="text-[11px] text-gray-500 font-medium mt-0.5">13:00 · Studio TBD</div>
              </div>
            </div>
            <Link href="/photographer/jadwal" className="w-full flex justify-center items-center py-2.5 rounded-xl border border-gray-200 text-[12px] font-bold text-gray-700 active:bg-gray-50 transition-colors">
              Lihat Semua Jadwal →
            </Link>
          </div>
        </div>

        {/* Performa Profil */}
        <div className="mt-5 mx-5">
          <h2 className="text-[15px] font-bold text-gray-900 mb-3 ml-1">Performa Profil</h2>
          <div className="rounded-2xl bg-gradient-to-br from-violet-50/60 to-white border border-violet-100 p-5 shadow-[0_2px_10px_rgba(0,0,0,0.03)]">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[22px] font-extrabold text-violet-700">78<span className="text-[14px] text-violet-400">/100</span></span>
              <span className="text-[10px] font-bold text-green-700 bg-green-100/80 px-2 py-1 rounded-md border border-green-200/50">Sangat Baik</span>
            </div>
            <div className="flex flex-col gap-2.5 mb-5">
              <div className="flex items-start gap-2">
                <span className="text-green-500 font-bold mt-0.5">✓</span>
                <span className="text-[12px] text-gray-700 font-medium">Response rate tinggi</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-500 font-bold mt-0.5">⚠</span>
                <span className="text-[12px] text-gray-700 font-medium">Lengkapi portofolio (min. 10 foto)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-500 font-bold mt-0.5">✓</span>
                <span className="text-[12px] text-gray-700 font-medium">Jadwal diperbarui</span>
              </div>
            </div>
            <Link href="/photographer/profil" className="w-full flex justify-center items-center py-2.5 rounded-xl bg-violet-100/60 text-[12px] font-bold text-violet-700 active:bg-violet-100 transition-colors border border-violet-100">
              Tingkatkan Profil →
            </Link>
          </div>
        </div>

        {/* Aksi Cepat */}
        <div className="mt-5 mx-5 mb-6">
          <h2 className="text-[15px] font-bold text-gray-900 mb-3 ml-1">Aksi Cepat</h2>
          <div className="grid grid-cols-2 gap-3">
            <Link href="/photographer/jadwal" className="flex flex-col items-center justify-center gap-1.5 rounded-2xl bg-violet-50 border border-violet-100 py-3.5 active:bg-violet-100 transition-colors shadow-[0_2px_10px_rgba(0,0,0,0.03)]">
              <span className="text-xl">📅</span>
              <span className="text-[10px] font-bold text-violet-700">Atur Jadwal</span>
            </Link>
            <Link href="/photographer/profil" className="flex flex-col items-center justify-center gap-1.5 rounded-2xl bg-orange-50 border border-orange-100 py-3.5 active:bg-orange-100 transition-colors shadow-[0_2px_10px_rgba(0,0,0,0.03)]">
              <span className="text-xl">🖼️</span>
              <span className="text-[10px] font-bold text-orange-700">Portofolio</span>
            </Link>
            <Link href="/photographer/sports" className="flex flex-col items-center justify-center gap-1.5 rounded-2xl border border-violet-100 bg-violet-50 py-3.5 shadow-[0_2px_10px_rgba(0,0,0,0.03)] transition-colors active:bg-violet-100">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6B21F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><path d="m17 8-5-5-5 5M12 3v12" /></svg>
              <span className="text-[10px] font-bold text-violet-700">Upload Foto Event</span>
            </Link>
            <Link href="/photographer/profil" className="flex flex-col items-center justify-center gap-1.5 rounded-2xl bg-green-50 border border-green-100 py-3.5 active:bg-green-100 transition-colors shadow-[0_2px_10px_rgba(0,0,0,0.03)]">
              <span className="text-xl">💰</span>
              <span className="text-[10px] font-bold text-green-700">Tarik Dana</span>
            </Link>
          </div>
        </div>
      </div>


      <BottomNav mode="photographer" />

    </div>
  );
}
