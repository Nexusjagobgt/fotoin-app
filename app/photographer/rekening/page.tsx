import Link from 'next/link';

export default function Rekening() {
  return (
    <div className="flex h-svh flex-col bg-gray-50">
      <div className="bg-white px-5 pt-6 pb-5 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/photographer/profil" className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 active:scale-95 transition-transform">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
          <h1 className="text-xl font-bold text-gray-900">Rekening Pencairan</h1>
        </div>
      </div>
      <div className="flex-1 p-5 overflow-y-auto">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 mb-4 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-24 h-24 bg-blue-50 rounded-bl-full opacity-50"></div>
          <div className="font-bold text-gray-900 mb-1 relative z-10">Bank BCA</div>
          <div className="text-xl font-mono text-gray-900 mb-3 tracking-widest relative z-10">**** **** 8990</div>
          <div className="text-xs text-gray-500 uppercase tracking-widest relative z-10">Rizki Pratama</div>
        </div>
        <button className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl border-2 border-dashed border-gray-200 text-sm font-bold text-gray-600 bg-white">
          <span>+ Tambah Rekening Lain</span>
        </button>
      </div>
    </div>
  );
}