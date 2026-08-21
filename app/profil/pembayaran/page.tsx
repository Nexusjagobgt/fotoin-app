import Link from 'next/link';

export default function Pembayaran() {
  return (
    <div className="flex h-svh flex-col bg-gray-50">
      <div className="bg-white px-5 pt-6 pb-5 border-b border-gray-100 flex items-center gap-3">
        <Link href="/profil" className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 active:scale-95 transition-transform">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </Link>
        <h1 className="text-xl font-bold text-gray-900">Metode Pembayaran</h1>
      </div>
      <div className="flex-1 p-5 overflow-y-auto">
        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Tersimpan</h3>
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm mb-4">
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-6 bg-blue-100 rounded flex items-center justify-center text-[10px] font-bold text-blue-800">BCA</div>
              <div>
                <div className="font-bold text-gray-900 text-sm">BCA Virtual Account</div>
                <div className="text-xs text-gray-500">**** 8990</div>
              </div>
            </div>
            <span className="text-xs font-bold text-red-500">Hapus</span>
          </div>
        </div>
        <button className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl border-2 border-dashed border-gray-200 text-sm font-bold text-gray-600 bg-white">
          <span>+ Tambah Metode Baru</span>
        </button>
      </div>
    </div>
  );
}