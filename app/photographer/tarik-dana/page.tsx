import Link from 'next/link';

export default function TarikDana() {
  return (
    <div className="flex h-svh flex-col bg-gray-50">
      <div className="bg-white px-5 pt-6 pb-5 border-b border-gray-100 flex items-center gap-3">
        <Link href="/photographer/profil" className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 active:scale-95 transition-transform">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </Link>
        <h1 className="text-xl font-bold text-gray-900">Tarik Dana</h1>
      </div>
      <div className="flex-1 p-5 overflow-y-auto">
        <div className="bg-white rounded-2xl border border-gray-100 p-5 mb-5 text-center">
          <div className="text-xs font-bold text-gray-500 mb-1">Saldo Tersedia</div>
          <div className="text-3xl font-extrabold text-gray-900">Rp3.500.000</div>
        </div>
        <div className="mb-5">
          <label className="text-xs font-bold text-gray-500 mb-2 block">Nominal Penarikan</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold">Rp</span>
            <input type="tel" placeholder="0" className="w-full bg-white border border-gray-200 rounded-xl pl-10 pr-4 py-4 text-xl font-bold text-gray-900 outline-none focus:border-violet-500" />
          </div>
          <button className="text-xs font-bold text-violet-600 mt-2">Tarik Semua Saldo</button>
        </div>
        <div>
          <label className="text-xs font-bold text-gray-500 mb-2 block">Rekening Tujuan</label>
          <div className="bg-white rounded-xl border border-gray-200 p-4 flex justify-between items-center">
            <div>
              <div className="font-bold text-gray-900 text-sm">BCA •••• 8990</div>
              <div className="text-xs text-gray-500">Rizki Pratama</div>
            </div>
            <span className="text-violet-600 text-xs font-bold">Ubah</span>
          </div>
        </div>
      </div>
      <div className="p-5 bg-white border-t border-gray-100">
        <Link href="/photographer/profil" className="flex w-full justify-center rounded-xl bg-violet-600 py-3.5 text-sm font-bold text-white shadow-sm active:scale-95 transition-transform">Konfirmasi Tarik Dana</Link>
      </div>
    </div>
  );
}