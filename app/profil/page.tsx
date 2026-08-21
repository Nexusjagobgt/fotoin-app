'use client';
import Link from 'next/link';
import BottomNav from '@/components/BottomNav';

export default function ProfilPage() {
  return (
    <div className="flex h-svh flex-col bg-gray-50">
      {/* Header */}
      <div className="bg-white px-5 pt-6 pb-5 border-b border-gray-100 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Profil</h1>
        <div className="flex items-center gap-3">
          <Link href="/messages" className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 active:scale-95 transition-transform">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="absolute top-2 right-2 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-violet-600 border-2 border-gray-100">
              <span className="text-[8px] font-bold text-white leading-none">2</span>
            </div>
          </Link>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pb-6">
        {/* Profile Card */}
        <div className="bg-white px-5 py-6 mb-2 border-b border-gray-100">
          <div className="flex items-center gap-4">
            <div className="h-20 w-20 rounded-full border-4 border-gray-50 shadow-sm" style={{ backgroundImage: 'url(https://i.pravatar.cc/150?img=33)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <h2 className="text-[19px] font-bold text-gray-900 truncate">Christian</h2>
                <span className="rounded bg-violet-100 px-1.5 py-0.5 text-[10px] font-bold text-violet-700">Customer</span>
              </div>
              <p className="text-[13px] text-gray-500 mb-3 truncate">user@email.com</p>
              <Link href="/profil/edit" className="inline-block rounded-lg bg-gray-900 px-4 py-2 text-xs font-bold text-white transition-transform active:scale-95 w-fit">
                Edit Profil
              </Link>
            </div>
          </div>
        </div>

        {/* Mode Akun */}
        <div className="px-5 py-4">
          <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3 ml-1">Mode Akun</h3>
          <div className="rounded-2xl bg-violet-50 border border-violet-100 p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm text-gray-700">Saat ini:</span>
              <span className="text-sm font-bold text-violet-700">Customer</span>
            </div>
            <p className="text-xs text-gray-600 mb-4 leading-relaxed">
              Ingin menawarkan jasa fotografi melalui FOTOIN?
            </p>
            <Link href="/photographer/dashboard" className="inline-flex items-center gap-1.5 rounded-xl bg-violet-600 px-4 py-2.5 text-[13px] font-bold text-white shadow-sm transition-transform active:scale-95">
              <span>Beralih ke Photographer</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </Link>
          </div>
        </div>

        {/* Akun Saya */}
        <div className="px-5 pb-4">
          <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3 ml-1">Akun Saya</h3>
          <div className="rounded-2xl bg-white border border-gray-100 overflow-hidden shadow-sm">
            <Link href="/profil/edit" className="flex w-full items-center justify-between p-4 border-b border-gray-50 active:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                </div>
                <span className="text-[15px] font-semibold text-gray-900">Data Pribadi</span>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </Link>
            <Link href="/profil/pembayaran" className="flex w-full items-center justify-between p-4 border-b border-gray-50 active:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
                </div>
                <span className="text-[15px] font-semibold text-gray-900">Metode Pembayaran</span>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </Link>
            <Link href="/profil/favorit" className="flex w-full items-center justify-between p-4 active:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                </div>
                <span className="text-[15px] font-semibold text-gray-900">Fotografer Favorit</span>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </Link>
          </div>
        </div>

        {/* Pengaturan */}
        <div className="px-5 py-2">
          <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3 ml-1">Pengaturan</h3>
          <div className="rounded-2xl bg-white border border-gray-100 overflow-hidden shadow-sm">
            <Link href="/profil/notifikasi" className="flex w-full items-center justify-between p-4 border-b border-gray-50 active:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-50 text-gray-600">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                </div>
                <span className="text-[15px] font-semibold text-gray-900">Notifikasi</span>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </Link>
            <Link href="/profil/privasi" className="flex w-full items-center justify-between p-4 border-b border-gray-50 active:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-50 text-gray-600">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                </div>
                <span className="text-[15px] font-semibold text-gray-900">Privasi & Keamanan</span>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </Link>
            <Link href="/profil/bantuan" className="flex w-full items-center justify-between p-4 active:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-50 text-gray-600">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                </div>
                <span className="text-[15px] font-semibold text-gray-900">Bantuan</span>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </Link>
          </div>
        </div>

        {/* Lainnya */}
        <div className="px-5 py-4 mb-4">
          <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3 ml-1">Lainnya</h3>
          <div className="rounded-2xl bg-white border border-gray-100 overflow-hidden shadow-sm">
            <Link href="/tentang" className="flex w-full items-center justify-between p-4 border-b border-gray-50 active:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-50 text-gray-600">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                </div>
                <span className="text-[15px] font-semibold text-gray-900">Tentang FOTOIN</span>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </Link>
            <Link href="/login" className="flex w-full items-center justify-between p-4 active:bg-red-50 transition-colors group">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-50 text-red-600 transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                </div>
                <span className="text-[15px] font-semibold text-red-600">Keluar</span>
              </div>
            </Link>
          </div>
        </div>

      </div>

      <BottomNav mode="client" />
    </div>
  );
}
