'use client';
import { useState } from 'react';
import Link from 'next/link';
import BottomNav from '@/components/BottomNav';
import { consultations } from './conversations';

const filters = ['Semua', 'Belum Dibalas', 'Wedding', 'Graduation', 'Product'];

export default function KonsultasiPage() {
  const [activeFilter, setActiveFilter] = useState('Semua');

  return (
    <div className="flex h-svh flex-col bg-gray-50 relative">
      {/* Header */}
      <div className="bg-white px-5 pt-4 pb-2 shrink-0 z-10 relative">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold text-gray-900">Konsultasi</h1>
            <span className="text-[11px] text-amber-700 font-bold bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200/50">2 baru</span>
          </div>
          <div>
            <button className="relative">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
              <div className="absolute top-0 right-0 h-2.5 w-2.5 rounded-full bg-red-500 border-2 border-white" />
            </button>
          </div>
        </div>
      </div>


      
      <div className="flex-1 overflow-y-auto pb-6">
        {/* Search & Filters */}
        <div className="bg-white px-5 pt-0 pb-3 border-b border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] sticky top-0 z-10">
          <div className="flex items-center bg-gray-50 rounded-xl border border-gray-100 px-3 py-2.5 mb-3 mt-1">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            <input type="text" placeholder="Cari konsultasi..." className="bg-transparent border-none outline-none ml-2 text-[14px] text-gray-900 w-full placeholder-gray-400" />
          </div>
          

          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`shrink-0 px-3 py-1.5 rounded-full text-[12px] font-bold transition-colors ${
                  activeFilter === filter
                    ? 'bg-violet-600 text-white'
                    : 'bg-white border border-gray-200 text-gray-600 active:bg-gray-50'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Conversation List */}
        <div className="px-5 pt-4 flex flex-col gap-3">
          {consultations.map(chat => (
            <Link key={chat.id} href={`/photographer/konsultasi/${chat.id}?from=konsultasi`} className={`flex gap-3 bg-white p-3.5 rounded-2xl border ${chat.unreadCount > 0 ? 'border-violet-200 shadow-sm' : 'border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)]'} active:bg-gray-50 transition-colors`}>
              <div className="h-12 w-12 rounded-full flex-shrink-0 relative">
                <div className="absolute inset-0 rounded-full bg-gray-100" style={{ backgroundImage: `url(${chat.avatar})`, backgroundSize: 'cover' }} />
                {chat.unreadCount > 0 && (
                  <div className="absolute -top-0.5 -right-0.5 h-3.5 w-3.5 rounded-full bg-red-500 border-2 border-white" />
                )}
              </div>
              <div className="flex-1 min-w-0 flex flex-col justify-center">
                <div className="flex justify-between items-start mb-0.5">
                  <h3 className={`font-bold text-[15px] truncate ${chat.unreadCount > 0 ? 'text-gray-900' : 'text-gray-700'}`}>{chat.name}</h3>
                  <span className={`text-[10px] font-bold shrink-0 ${chat.unreadCount > 0 ? 'text-violet-600' : 'text-gray-400'}`}>{chat.time}</span>
                </div>
                <div className="mb-1">
                  <span className="inline-block px-1.5 py-0.5 bg-violet-50 text-violet-700 text-[9px] font-bold rounded">{chat.service}</span>
                </div>
                <p className={`text-[12px] truncate ${chat.unreadCount > 0 ? 'text-gray-900 font-bold' : 'text-gray-500 font-medium'}`}>
                  {chat.lastMessage}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <BottomNav mode="photographer" />
    </div>
  );
}
