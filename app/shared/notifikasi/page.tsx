import Link from 'next/link';

export default function Notifikasi({ mode = 'photographer' }: { mode?: string }) {
  const backTo = mode === 'photographer' ? '/photographer/profil' : '/profil';
  return (
    <div className="flex h-svh flex-col bg-gray-50">
      <div className="bg-white px-5 pt-6 pb-5 border-b border-gray-100 flex items-center gap-3">
        <Link href={backTo} className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 active:scale-95 transition-transform">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </Link>
        <h1 className="text-xl font-bold text-gray-900">Pengaturan Notifikasi</h1>
      </div>
      <div className="flex-1 p-5 overflow-y-auto">
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
          {['Booking Baru', 'Pesan Masuk', 'Update Pembayaran', 'Promo & Penawaran'].map((item, i) => (
            <div key={item} className="p-4 border-b border-gray-50 flex justify-between items-center last:border-0">
              <span className="font-semibold text-gray-900 text-sm">{item}</span>
              <div className={`w-10 h-6 rounded-full flex items-center px-1 ${i < 3 ? 'bg-violet-600 justify-end' : 'bg-gray-200 justify-start'}`}><div className="w-4 h-4 bg-white rounded-full shadow-sm"></div></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}