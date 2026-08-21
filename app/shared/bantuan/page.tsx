import Link from 'next/link';

export default function Bantuan({ mode = 'photographer' }: { mode?: string }) {
  const backTo = mode === 'photographer' ? '/photographer/profil' : '/profil';
  return (
    <div className="flex h-svh flex-col bg-gray-50">
      <div className="bg-white px-5 pt-6 pb-5 border-b border-gray-100 flex items-center gap-3">
        <Link href={backTo} className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 active:scale-95 transition-transform">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </Link>
        <h1 className="text-xl font-bold text-gray-900">Bantuan</h1>
      </div>
      <div className="flex-1 p-5 overflow-y-auto">
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm mb-4">
          <button className="w-full text-left p-4 border-b border-gray-50 active:bg-gray-50">
            <h3 className="font-bold text-gray-900 text-sm">Pusat Bantuan (FAQ)</h3>
          </button>
          <button className="w-full text-left p-4 border-b border-gray-50 active:bg-gray-50">
            <h3 className="font-bold text-gray-900 text-sm">Hubungi Customer Service</h3>
          </button>
          <button className="w-full text-left p-4 active:bg-gray-50">
            <h3 className="font-bold text-gray-900 text-sm">Syarat & Ketentuan</h3>
          </button>
        </div>
      </div>
    </div>
  );
}