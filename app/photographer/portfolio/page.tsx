'use client';
import { useState } from 'react';
import Link from 'next/link';
import BottomNav from '@/components/BottomNav';

const photos = [
  { id: 1, title: 'Wedding Intimate', badge: '✓ Consent', visibility: 'Publik', badgeColor: '#16A34A', badgeBg: '#DCFCE7', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=200&h=200&fit=crop', span: 1 },
  { id: 2, title: 'Fashion', badge: null, visibility: 'Publik', badgeColor: '', badgeBg: '', img: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=200&h=200&fit=crop', span: 1 },
  { id: 3, title: 'Street Life', badge: null, visibility: 'Privat', badgeColor: '', badgeBg: '', img: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=200&h=200&fit=crop', span: 1 },
  { id: 4, title: 'Pre-Wedding', badge: '✓ Consent', visibility: 'Publik', badgeColor: '#16A34A', badgeBg: '#DCFCE7', img: null, span: 1 },
  { id: 5, title: 'Corporate Event', badge: '✓ Consent', visibility: 'Publik', badgeColor: '#16A34A', badgeBg: '#DCFCE7', img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=200&h=200&fit=crop', span: 1 },
  { id: 6, title: 'Outdoor Keluarga', badge: null, visibility: 'Draft', badgeColor: '#92400E', badgeBg: '#FEF3C7', img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&fit=crop', span: 1 },
];

const tabs = ['Semua', 'Publik', 'Privat', 'Draft'];

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState('Semua');

  return (
    <div className="flex h-svh flex-col bg-white">
      {/* Status bar */}
      <div className="flex items-center justify-between px-5 pt-3 pb-1">
        <span className="text-xs font-semibold text-gray-900">9:41</span>
        <div className="flex items-center gap-1">
          <svg width="15" height="11" viewBox="0 0 15 11" fill="none"><path d="M7.5 2.5C9.5 2.5 11.3 3.3 12.6 4.6L13.8 3.4C12.2 1.8 9.96 0.8 7.5 0.8C5.04 0.8 2.8 1.8 1.2 3.4L2.4 4.6C3.7 3.3 5.5 2.5 7.5 2.5Z" fill="#111827" /><circle cx="7.5" cy="9.5" r="1.5" fill="#111827" /></svg>
          <div className="flex items-center rounded-sm border border-gray-300 px-0.5"><div className="h-2.5 w-5 rounded-sm bg-gray-900" /></div>
        </div>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <Link href="/photographer/home" className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M19 12H5M12 19l-7-7 7-7" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
          <div>
            <div className="text-base font-bold text-gray-900">Portofolio Saya</div>
            <div className="text-xs text-gray-400">24 foto · 3 album</div>
          </div>
        </div>
        <button className="flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-semibold text-white" style={{ backgroundColor: '#7C3AED' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="white" strokeWidth="2.5" strokeLinecap="round" /></svg>
          Tambah Foto
        </button>
      </div>

      {/* Filter tabs */}
      <div className="flex gap-2 px-4 py-3 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className="flex-shrink-0 rounded-full px-3.5 py-1.5 text-xs font-medium"
            style={{ backgroundColor: activeTab === tab ? '#7C3AED' : '#F3F4F6', color: activeTab === tab ? 'white' : '#374151' }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Photo grid */}
      <div className="flex-1 overflow-y-auto">
        <div className="grid grid-cols-2 gap-1 px-3 pb-20">
          {photos.map((photo) => (
            <div key={photo.id} className="relative overflow-hidden rounded-2xl aspect-square bg-gray-100">
              {photo.img ? (
                <div className="h-full w-full" style={{ backgroundImage: `url(${photo.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
              ) : (
                <div className="h-full w-full bg-gray-300" />
              )}
              {/* Overlay */}
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)' }} />

              {/* Consent badge */}
              {photo.badge && (
                <div className="absolute top-2 left-2 rounded-full px-2 py-0.5 text-[10px] font-bold" style={{ backgroundColor: photo.badgeBg, color: photo.badgeColor }}>
                  {photo.badge}
                </div>
              )}

              {/* Visibility badge */}
              <div className="absolute top-2 right-2 flex items-center gap-1 rounded-full bg-black/30 px-2 py-0.5">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" stroke="white" strokeWidth="2" /><path d="M2 12C4 7 7.8 4 12 4s8 3 10 8c-2 5-5.8 8-10 8s-8-3-10-8z" stroke="white" strokeWidth="2" /></svg>
                <span className="text-[10px] text-white">{photo.visibility}</span>
              </div>

              {/* Draft badge */}
              {photo.visibility === 'Draft' && (
                <div className="absolute top-2 right-2 rounded-full px-2 py-0.5 text-[10px] font-bold" style={{ backgroundColor: '#F59E0B', color: 'white' }}>Draft</div>
              )}

              {/* Title + actions */}
              <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
                <span className="text-[11px] font-bold text-white">{photo.title}</span>
                <div className="flex gap-1.5">
                  <button className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" stroke="white" strokeWidth="2" strokeLinecap="round" /><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" stroke="white" strokeWidth="2" strokeLinecap="round" /></svg>
                  </button>
                  <button className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500/80">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6" stroke="white" strokeWidth="2" strokeLinecap="round" /></svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAB */}
      <div className="fixed bottom-20 right-4">
        <button className="flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg" style={{ backgroundColor: '#7C3AED', boxShadow: '0 4px 20px rgba(124,58,237,0.5)' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="white" strokeWidth="2.5" strokeLinecap="round" /></svg>
        </button>
      </div>

      <BottomNav mode="photographer" />
    </div>
  );
}
