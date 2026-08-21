import Link from 'next/link';

export default function AreaLayanan() {
  return (
    <div className="flex h-svh flex-col bg-gray-50">
      <div className="bg-white px-5 pt-6 pb-5 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/photographer/profil" className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 active:scale-95 transition-transform">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
          <h1 className="text-xl font-bold text-gray-900">Area Layanan</h1>
        </div>
      </div>
      <div className="flex-1 p-5 overflow-y-auto">
        <div className="bg-white rounded-2xl border border-gray-100 p-1 mb-4 flex items-center">
          <span className="px-3 text-gray-400">🔍</span>
          <input type="text" placeholder="Cari kota/daerah..." className="flex-1 py-2.5 outline-none text-sm font-medium" />
        </div>
        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Area Aktif</h3>
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
          <div className="p-4 border-b border-gray-50 flex justify-between items-center">
            <span className="font-semibold text-gray-900">Surabaya</span>
            <div className="w-10 h-6 bg-violet-600 rounded-full flex items-center justify-end px-1"><div className="w-4 h-4 bg-white rounded-full"></div></div>
          </div>
          <div className="p-4 border-b border-gray-50 flex justify-between items-center">
            <span className="font-semibold text-gray-900">Sidoarjo</span>
            <div className="w-10 h-6 bg-violet-600 rounded-full flex items-center justify-end px-1"><div className="w-4 h-4 bg-white rounded-full"></div></div>
          </div>
          <div className="p-4 flex justify-between items-center">
            <span className="font-semibold text-gray-900">Gresik</span>
            <div className="w-10 h-6 bg-gray-200 rounded-full flex items-center px-1"><div className="w-4 h-4 bg-white rounded-full shadow-sm"></div></div>
          </div>
        </div>
      </div>
    </div>
  );
}