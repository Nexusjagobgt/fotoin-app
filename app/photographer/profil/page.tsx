'use client';
import Link from 'next/link';
import BottomNav from '@/components/BottomNav';

export default function PhotographerProfilPage() {
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
          </Link>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pb-6">
        {/* Profile Card */}
        <div className="bg-white px-5 py-6 mb-2 border-b border-gray-100">
          <div className="flex flex-col items-center">
            <div className="h-24 w-24 rounded-full border-4 border-gray-50 shadow-sm relative mb-3">
              <div className="absolute inset-0 rounded-full" style={{ backgroundImage: 'url(https://i.pravatar.cc/150?img=11)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
              <div className="absolute bottom-0 right-0 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 border-2 border-white text-white">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
            </div>
            
            <div className="flex items-center gap-1.5 mb-1">
              <h2 className="text-xl font-bold text-gray-900">Rizki Pratama</h2>
            </div>
            
            <div className="flex items-center gap-2 mb-2">
              <span className="rounded bg-violet-100 px-2 py-0.5 text-[10px] font-bold text-violet-700">Fotografer</span>
            </div>
            
            <p className="text-[13px] text-gray-600 mb-2 font-medium">Wedding Specialist · Surabaya</p>
            
            <div className="flex items-center gap-1 mb-5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#FACC15" className="text-yellow-400"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              <span className="text-[13px] font-bold text-gray-900">4.9</span>
              <span className="text-[13px] text-gray-500">· 127 sesi</span>
            </div>
            
            <div className="flex w-full gap-3">
              <Link href="/p/rizki-pratama" className="flex-1 flex justify-center items-center rounded-xl border border-gray-200 bg-white py-2.5 text-[13px] font-bold text-gray-700 active:bg-gray-50 transition-colors">
                Lihat Profil Publik
              </Link>
              <Link href="/photographer/profil/edit" className="flex-1 flex justify-center items-center rounded-xl bg-gray-900 py-2.5 text-[13px] font-bold text-white active:scale-[0.98] transition-transform">
                Edit Profil
              </Link>
            </div>
          </div>
        </div>

        {/* Mode Akun */}
        <div className="px-5 py-4">
          <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3 ml-1">Mode Akun</h3>
          <div className="rounded-2xl bg-blue-50 border border-blue-100 p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm text-gray-700">Saat ini:</span>
              <span className="text-sm font-bold text-blue-700">Fotografer</span>
            </div>
            <p className="text-xs text-gray-600 mb-4 leading-relaxed">
              Gunakan FOTOIN sebagai customer untuk mencari fotografer dan melakukan booking.
            </p>
            <Link href="/home" className="inline-flex items-center gap-1.5 rounded-xl bg-blue-600 px-4 py-2.5 text-[13px] font-bold text-white shadow-sm transition-transform active:scale-95">
              <span>Beralih ke Customer</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </Link>
          </div>
        </div>

        {/* Profil & Bisnis */}
        <div className="px-5 pb-4">
          <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3 ml-1">Profil & Bisnis</h3>
          <div className="rounded-2xl bg-white border border-gray-100 overflow-hidden shadow-sm">
            <Link href="/photographer/profil/edit" className="flex w-full items-center justify-between p-4 border-b border-gray-50 active:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                </div>
                <span className="text-[15px] font-semibold text-gray-900">Edit Profil</span>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </Link>
            <Link href="/photographer/portfolio" className="flex w-full items-center justify-between p-4 border-b border-gray-50 active:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                </div>
                <span className="text-[15px] font-semibold text-gray-900">Portofolio</span>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </Link>
            <Link href="/photographer/layanan" className="flex w-full items-center justify-between p-4 border-b border-gray-50 active:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                </div>
                <span className="text-[15px] font-semibold text-gray-900">Layanan & Harga</span>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </Link>
            <Link href="/photographer/area-layanan" className="flex w-full items-center justify-between p-4 border-b border-gray-50 active:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <span className="text-[15px] font-semibold text-gray-900">Area Layanan</span>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </Link>
            <Link href="/photographer/jadwal" className="flex w-full items-center justify-between p-4 active:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                </div>
                <span className="text-[15px] font-semibold text-gray-900">Jadwal Ketersediaan</span>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </Link>
          </div>
        </div>

        {/* Keuangan */}
        <div className="px-5 pb-4">
          <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3 ml-1">Keuangan</h3>
          <div className="rounded-2xl bg-white border border-gray-100 overflow-hidden shadow-sm">
            <Link href="/photographer/earnings" className="flex w-full items-center justify-between p-4 border-b border-gray-50 active:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-green-50 text-green-600">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                </div>
                <span className="text-[15px] font-semibold text-gray-900">Saldo</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-gray-900">Rp3.500.000</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </div>
            </Link>
            <Link href="/photographer/earnings" className="flex w-full items-center justify-between p-4 border-b border-gray-50 active:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-50 text-gray-600">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="8 17 12 21 16 17"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path></svg>
                </div>
                <span className="text-[15px] font-semibold text-gray-900">Riwayat Transaksi</span>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </Link>
            <Link href="/photographer/rekening" className="flex w-full items-center justify-between p-4 border-b border-gray-50 active:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-50 text-gray-600">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                </div>
                <span className="text-[15px] font-semibold text-gray-900">Rekening Pencairan</span>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </Link>
            <Link href="/photographer/tarik-dana" className="flex w-full items-center justify-between p-4 active:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-green-50 text-green-600">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                </div>
                <span className="text-[15px] font-semibold text-gray-900">Tarik Dana</span>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </Link>
          </div>
        </div>

        {/* Pengaturan */}
        <div className="px-5 py-2">
          <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3 ml-1">Pengaturan</h3>
          <div className="rounded-2xl bg-white border border-gray-100 overflow-hidden shadow-sm">
            <Link href="/photographer/notifikasi" className="flex w-full items-center justify-between p-4 border-b border-gray-50 active:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-50 text-gray-600">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                </div>
                <span className="text-[15px] font-semibold text-gray-900">Notifikasi</span>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </Link>
            <Link href="/photographer/privasi" className="flex w-full items-center justify-between p-4 border-b border-gray-50 active:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-50 text-gray-600">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                </div>
                <span className="text-[15px] font-semibold text-gray-900">Privasi & Keamanan</span>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </Link>
            <Link href="/photographer/bantuan" className="flex w-full items-center justify-between p-4 active:bg-gray-50 transition-colors">
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

      <BottomNav mode="photographer" />
    </div>
  );
}
