import Link from 'next/link';

export default function Layanan() {
  return (
    <div className="flex h-svh flex-col bg-gray-50">
      <div className="bg-white px-5 pt-6 pb-5 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/photographer/profil" className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 active:scale-95 transition-transform">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
          <h1 className="text-xl font-bold text-gray-900">Layanan & Harga</h1>
        </div>
        <button className="text-violet-600 text-sm font-bold">+ Tambah</button>
      </div>
      <div className="flex-1 p-5 overflow-y-auto space-y-3">
        <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-bold text-gray-900">Wedding Package Basic</h3>
            <span className="font-bold text-violet-700">Rp2.500.000</span>
          </div>
          <p className="text-xs text-gray-500 mb-3">Durasi 4 Jam · Unlimited Photos · 50 Edited Photos</p>
          <div className="flex gap-2">
            <button className="flex-1 py-2 bg-gray-50 text-gray-700 text-xs font-bold rounded-lg">Edit</button>
            <button className="flex-1 py-2 bg-red-50 text-red-600 text-xs font-bold rounded-lg">Hapus</button>
          </div>
        </div>
      </div>
    </div>
  );
}