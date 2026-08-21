'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BottomNav from '@/components/BottomNav';

export default function JadwalPage() {
  const [showSheet, setShowSheet] = useState(false);

  // Generate a mock calendar grid for August 2026 (starts on Saturday)
  const daysInMonth = 31;
  const startDay = 5; // 0=Mon, 1=Tue, ... 5=Sat
  const days = [];
  for (let i = 0; i < startDay; i++) days.push(null);
  for (let i = 1; i <= daysInMonth; i++) days.push(i);

  // Mock states for dates
  const bookedDates = [15, 18];
  const pendingDates = [22];
  const availableDates = [16, 17, 19, 20, 23, 24];
  const unavailableDates = [21];

  return (
    <div className="flex h-svh flex-col bg-gray-50 relative">
      {/* Header (Same as Dashboard) */}
      <div className="bg-white px-5 pt-3 pb-4 shrink-0 shadow-sm z-10 relative">
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

        {/* Title */}
        <div>
          <h1 className="text-xl font-bold text-gray-900">Jadwal Saya</h1>
          <p className="text-[13px] text-gray-500 font-medium mt-0.5">Atur waktu tersedia dan lihat jadwal booking</p>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto pb-6">
        
        {/* Calendar Section */}
        <div className="bg-white px-5 py-5 border-b border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
          {/* Month Navigation */}
          <div className="flex items-center justify-between mb-5 px-2">
            <button className="p-1.5 rounded-full hover:bg-gray-50 text-gray-600 active:scale-95 transition-transform">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>
            <h2 className="text-[16px] font-extrabold text-gray-900">Agustus 2026</h2>
            <button className="p-1.5 rounded-full hover:bg-gray-50 text-gray-600 active:scale-95 transition-transform">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
          </div>

          {/* Weekdays */}
          <div className="grid grid-cols-7 mb-2 text-center">
            {['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'].map(day => (
              <div key={day} className="text-[11px] font-bold text-gray-400">{day}</div>
            ))}
          </div>

          {/* Days Grid */}
          <div className="grid grid-cols-7 gap-y-2 text-center">
            {days.map((day, idx) => {
              if (!day) return <div key={`empty-${idx}`} className="h-10"></div>;
              
              const isSelected = day === 15;
              const isBooked = bookedDates.includes(day);
              const isPending = pendingDates.includes(day);
              const isAvailable = availableDates.includes(day);
              const isUnavailable = unavailableDates.includes(day);
              
              let containerClass = "h-10 w-10 mx-auto rounded-full flex flex-col items-center justify-center relative ";
              let textClass = "text-[14px] font-bold z-10 ";
              let indicator = null;

              if (isSelected) {
                containerClass += "bg-violet-600 ";
                textClass += "text-white ";
              } else if (isUnavailable) {
                textClass += "text-gray-300 ";
              } else {
                textClass += "text-gray-700 ";
                
                if (isBooked) {
                  indicator = <div className="absolute bottom-1.5 w-1.5 h-1.5 rounded-full bg-violet-600"></div>;
                } else if (isPending) {
                  indicator = <div className="absolute bottom-1.5 w-1.5 h-1.5 rounded-full bg-amber-500"></div>;
                } else if (isAvailable) {
                  indicator = <div className="absolute bottom-1.5 w-1.5 h-1.5 rounded-full bg-green-500"></div>;
                }
              }

              return (
                <div key={day} className="h-12 flex justify-center items-center">
                  <button className={containerClass}>
                    <span className={textClass} style={{ marginTop: indicator ? '-4px' : '0' }}>{day}</span>
                    {indicator}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Legend */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mt-5 px-2">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
              <span className="text-[11px] font-medium text-gray-500">Tersedia</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-violet-600"></div>
              <span className="text-[11px] font-medium text-gray-500">Booking</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
              <span className="text-[11px] font-medium text-gray-500">Pending</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-gray-200 border border-gray-300"></div>
              <span className="text-[11px] font-medium text-gray-500">Libur</span>
            </div>
          </div>
        </div>

        {/* Selected Day Details */}
        <div className="mt-5 mx-5">
          <h2 className="text-[15px] font-bold text-gray-900 mb-3 ml-1">Jadwal 15 Agustus</h2>
          <div className="rounded-2xl bg-white border border-gray-100 p-1 shadow-[0_2px_10px_rgba(0,0,0,0.03)] overflow-hidden">
            
            {/* Slot 1: Booking */}
            <div className="p-4 border-b border-gray-50 flex items-start gap-3">
              <div className="w-12 text-[12px] font-bold text-gray-900 shrink-0 mt-0.5">
                09:00<br/><span className="text-gray-400 font-medium">11:00</span>
              </div>
              <div className="w-px h-14 bg-violet-200 shrink-0"></div>
              <div className="flex-1 min-w-0">
                <div className="font-bold text-[13px] text-gray-900 truncate">Christian <span className="font-medium text-gray-500">· Wedding</span></div>
                <div className="text-[11px] text-gray-500 font-medium mt-0.5 mb-1.5">Universitas Petra, Surabaya</div>
                <span className="inline-block px-2 py-0.5 rounded text-[9px] font-bold bg-green-50 text-green-700 border border-green-100">Terkonfirmasi</span>
              </div>
            </div>
            
            {/* Slot 2: Available */}
            <div className="p-4 flex items-start gap-3">
              <div className="w-12 text-[12px] font-bold text-gray-900 shrink-0 mt-0.5">
                13:00<br/><span className="text-gray-400 font-medium">17:00</span>
              </div>
              <div className="w-px h-6 bg-green-200 shrink-0"></div>
              <div className="flex-1 min-w-0 flex items-center h-8">
                <span className="font-bold text-[13px] text-green-600">Tersedia</span>
              </div>
            </div>
            
          </div>
          
          <button 
            onClick={() => setShowSheet(true)}
            className="mt-3 w-full flex justify-center items-center py-3 rounded-xl bg-violet-50 text-[13px] font-bold text-violet-700 active:bg-violet-100 transition-colors border border-violet-100"
          >
            + Atur Ketersediaan
          </button>
        </div>

        {/* Upcoming Bookings */}
        <div className="mt-6 mx-5">
          <div className="flex justify-between items-center mb-3 ml-1 mr-1">
            <h2 className="text-[15px] font-bold text-gray-900">Booking Mendatang</h2>
            <Link href="/photographer/pesanan" className="text-[12px] font-bold text-violet-600 flex items-center gap-0.5">Lihat Semua <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></Link>
          </div>
          
          <div className="rounded-2xl bg-white border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.03)] p-1 overflow-hidden">
            {/* Booking 1 */}
            <div className="p-3.5 border-b border-gray-50 flex items-center gap-3">
              <div className="flex flex-col items-center justify-center w-11 bg-violet-50 text-violet-700 rounded-xl py-1.5 shrink-0 border border-violet-100/50">
                <span className="font-extrabold text-[13px] leading-tight">15</span>
                <span className="font-bold text-[9px] leading-tight">AGU</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start mb-0.5">
                  <div className="font-bold text-[13px] text-gray-900 truncate">Christian <span className="font-medium text-gray-500">· Wedding</span></div>
                </div>
                <div className="text-[11px] text-gray-500 font-medium">09:00 · Univ. Petra</div>
              </div>
            </div>
            
            {/* Booking 2 */}
            <div className="p-3.5 border-b border-gray-50 flex items-center gap-3">
              <div className="flex flex-col items-center justify-center w-11 bg-violet-50 text-violet-700 rounded-xl py-1.5 shrink-0 border border-violet-100/50">
                <span className="font-extrabold text-[13px] leading-tight">18</span>
                <span className="font-bold text-[9px] leading-tight">AGU</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start mb-0.5">
                  <div className="font-bold text-[13px] text-gray-900 truncate">Maya <span className="font-medium text-gray-500">· Wedding</span></div>
                </div>
                <div className="text-[11px] text-gray-500 font-medium">10:00 · Hotel Majapahit</div>
              </div>
            </div>

            {/* Booking 3 */}
            <div className="p-3.5 flex items-center gap-3">
              <div className="flex flex-col items-center justify-center w-11 bg-amber-50 text-amber-700 rounded-xl py-1.5 shrink-0 border border-amber-100/50">
                <span className="font-extrabold text-[13px] leading-tight">22</span>
                <span className="font-bold text-[9px] leading-tight">AGU</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start mb-0.5">
                  <div className="font-bold text-[13px] text-gray-900 truncate">Dito <span className="font-medium text-gray-500">· Product</span></div>
                  <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded ml-2">Menunggu</span>
                </div>
                <div className="text-[11px] text-gray-500 font-medium">13:00 · Studio TBD</div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Availability Bottom Sheet Prototype */}
      {showSheet && (
        <div className="absolute inset-0 z-50 flex flex-col justify-end bg-gray-900/40 backdrop-blur-sm transition-opacity">
          <div className="bg-white rounded-t-3xl shadow-xl w-full max-h-[90vh] flex flex-col overflow-hidden transform transition-transform">
            <div className="flex justify-center pt-3 pb-2">
              <div className="w-12 h-1.5 bg-gray-200 rounded-full"></div>
            </div>
            
            <div className="px-5 pb-3 flex items-center justify-between border-b border-gray-100">
              <div>
                <h3 className="text-lg font-bold text-gray-900">Atur Ketersediaan</h3>
                <p className="text-[13px] text-gray-500 font-medium">15 Agustus 2026</p>
              </div>
              <button onClick={() => setShowSheet(false)} className="p-2 rounded-full bg-gray-100 text-gray-600 active:bg-gray-200 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>
            
            <div className="p-5 overflow-y-auto">
              <div className="flex gap-2 p-1 bg-gray-100 rounded-xl mb-5">
                <button className="flex-1 py-2 text-[13px] font-bold bg-white text-gray-900 rounded-lg shadow-sm">Tersedia</button>
                <button className="flex-1 py-2 text-[13px] font-bold text-gray-500">Tidak Tersedia</button>
              </div>
              
              <div className="space-y-3 mb-5">
                {/* Slot 1 */}
                <div className="flex items-center gap-3">
                  <div className="flex-1">
                    <label className="block text-[11px] font-bold text-gray-500 mb-1 ml-1">Jam Mulai</label>
                    <div className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-[14px] font-bold text-gray-900">13:00</div>
                  </div>
                  <div className="text-gray-400 font-bold mt-4">-</div>
                  <div className="flex-1">
                    <label className="block text-[11px] font-bold text-gray-500 mb-1 ml-1">Jam Selesai</label>
                    <div className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-[14px] font-bold text-gray-900">17:00</div>
                  </div>
                  <button className="mt-4 p-2 text-gray-400 hover:text-red-500 transition-colors">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                  </button>
                </div>
              </div>
              
              <button className="flex items-center justify-center w-full py-3 border-2 border-dashed border-violet-200 rounded-xl text-[13px] font-bold text-violet-600 bg-violet-50/50 mb-6 active:bg-violet-50 transition-colors">
                Tambah Slot +
              </button>
              
              <button onClick={() => setShowSheet(false)} className="w-full py-3.5 rounded-xl bg-violet-600 text-[14px] font-bold text-white shadow-sm active:scale-[0.98] transition-transform">
                Simpan Jadwal
              </button>
            </div>
          </div>
        </div>
      )}

      <BottomNav mode="photographer" />
    </div>
  );
}
