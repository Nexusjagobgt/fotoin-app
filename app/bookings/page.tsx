'use client';
import { useState } from 'react';
import Link from 'next/link';
import BottomNav from '@/components/BottomNav';

const bookings = [
  {
    name: 'Rizki Pratama',
    type: 'Wedding Photography',
    status: 'Confirmed',
    statusColor: '#16A34A',
    statusBg: '#DCFCE7',
    date: 'Sabtu, 15 April 2026 · 09:00 WIB',
    location: 'Universitas Petra, Surabaya',
    avatar: 'https://i.pravatar.cc/80?img=11',
    tab: 'upcoming',
    showReview: false,
  },
  {
    name: 'Budi Santoso',
    type: 'Sports Photography',
    status: 'Pending',
    statusColor: '#92400E',
    statusBg: '#FEF3C7',
    date: 'Minggu, 20 April 2026 · 07:00 WIB',
    location: 'Stadion Gelora Bung Tomo, SBY',
    avatar: 'https://i.pravatar.cc/80?img=14',
    tab: 'upcoming',
    showReview: false,
  },
  {
    name: 'Sari Dewi',
    type: 'Event Photography',
    status: 'Selesai',
    statusColor: '#374151',
    statusBg: '#F3F4F6',
    date: 'Sabtu, 5 April 2026 · 10:00 WIB',
    location: 'Hotel Majapahit, Surabaya',
    avatar: 'https://i.pravatar.cc/80?img=5',
    tab: 'selesai',
    showReview: true,
  },
];

const tabs = ['Upcoming', 'Selesai', 'Dibatalkan'];

export default function BookingsPage() {
  const [activeTab, setActiveTab] = useState('Upcoming');
  const filtered = bookings.filter((b) => b.tab === activeTab.toLowerCase().replace(' ', '_') || (activeTab === 'Upcoming' && b.tab === 'upcoming') || (activeTab === 'Selesai' && b.tab === 'selesai'));

  return (
    <div className="flex h-svh flex-col bg-gray-50">
      {/* Status bar */}
      <div className="flex items-center justify-between bg-white px-5 pt-3 pb-1">
        <span className="text-xs font-semibold text-gray-900">9:41</span>
        <div className="flex items-center gap-1">
          <div className="flex items-center rounded-sm border border-gray-300 px-0.5"><div className="h-2.5 w-5 rounded-sm bg-gray-900" /><div className="h-1.5 w-0.5 rounded-r-sm bg-gray-400" /></div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-white px-4 pb-0 pt-1">
        <div className="flex items-center justify-between py-2">
          <h1 className="text-[22px] font-bold text-gray-900">Booking Saya</h1>
          <button className="relative flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="#374151" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
        </div>
        {/* Tabs */}
        <div className="flex border-b border-gray-100">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="flex-1 pb-2.5 pt-1 text-sm font-medium transition-colors"
              style={{
                color: activeTab === tab ? '#7C3AED' : '#9CA3AF',
                borderBottom: activeTab === tab ? '2px solid #7C3AED' : '2px solid transparent',
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Booking cards */}
      <div className="flex-1 overflow-y-auto px-4 py-3 flex flex-col gap-3">
        {bookings.filter((b) => {
          if (activeTab === 'Upcoming') return b.tab === 'upcoming';
          if (activeTab === 'Selesai') return b.tab === 'selesai';
          return b.tab === 'dibatalkan';
        }).map((booking, index) => (
          <div key={booking.name} className="rounded-2xl bg-white p-4 border border-gray-100"
            style={{ animation: 'fade-in-up 0.4s ease both', animationDelay: `${index * 0.1}s` }}>
            {/* Top */}
            <div className="flex items-start gap-3 mb-3">
              <div className="h-11 w-11 flex-shrink-0 rounded-full" style={{ backgroundImage: `url(${booking.avatar})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
              <div className="flex-1">
                <div className="text-sm font-bold text-gray-900">{booking.name}</div>
                <div className="text-xs text-gray-500">{booking.type}</div>
              </div>
              <div className="rounded-full px-2.5 py-1 text-xs font-semibold" style={{ backgroundColor: booking.statusBg, color: booking.statusColor }}>
                {booking.status}
              </div>
            </div>

            {/* Details */}
            <div className="flex flex-col gap-1 mb-3">
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <span>📅</span><span>{booking.date}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <span>📍</span><span>{booking.location}</span>
              </div>
            </div>

            {/* Actions */}
            {booking.showReview ? (
              <div className="flex flex-col gap-2">
                <Link href="/review/sari" className="flex w-full items-center justify-center gap-2 rounded-xl border border-amber-300 py-2.5 text-sm font-semibold text-amber-600 hover:bg-amber-50 active:scale-95 transition-transform">
                  <span>⭐</span> Beri Ulasan
                </Link>
                <Link href="/my-photos" className="flex w-full items-center justify-center gap-2 rounded-xl border border-violet-200 py-2.5 text-sm font-semibold text-violet-700 hover:bg-violet-50 active:scale-95 transition-transform">
                  <span>📁</span> Lihat Foto
                </Link>
              </div>
            ) : (
              <div className="flex gap-2">
                <Link href={`/messages/${booking.name.split(' ')[0].toLowerCase()}`} className="flex-1 flex items-center justify-center gap-1.5 rounded-xl border border-gray-200 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 active:scale-95 transition-transform">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="#374151" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  Chat
                </Link>
                <Link href={`/booking/${booking.name.split(' ')[0].toLowerCase()}`} className="flex-1 flex items-center justify-center rounded-xl border border-gray-200 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 active:scale-95 transition-transform">Detail</Link>
              </div>
            )}
          </div>
        ))}

        {bookings.filter((b) => {
          if (activeTab === 'Upcoming') return b.tab === 'upcoming';
          if (activeTab === 'Selesai') return b.tab === 'selesai';
          return b.tab === 'dibatalkan';
        }).length === 0 && (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="text-4xl mb-3">📭</div>
            <div className="text-sm font-medium text-gray-500">Tidak ada booking {activeTab.toLowerCase()}</div>
          </div>
        )}
      </div>

      <BottomNav mode="client" />
    </div>
  );
}
