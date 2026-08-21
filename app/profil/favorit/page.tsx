import Link from 'next/link';

export default function Favorit() {
  return (
    <div className="flex h-svh flex-col bg-gray-50">
      <div className="bg-white px-5 pt-6 pb-5 border-b border-gray-100 flex items-center gap-3">
        <Link href="/profil" className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 active:scale-95 transition-transform">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </Link>
        <h1 className="text-xl font-bold text-gray-900">Fotografer Favorit</h1>
      </div>
      <div className="flex-1 p-5 overflow-y-auto flex flex-col items-center justify-center">
        <div className="text-4xl mb-3">⭐</div>
        <h3 className="font-bold text-gray-900 mb-1">Belum ada favorit</h3>
        <p className="text-xs text-gray-500 text-center max-w-[200px]">Kamu belum menyimpan profil fotografer mana pun.</p>
        <Link href="/home" className="mt-5 rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-bold text-white shadow-sm">Cari Fotografer</Link>
      </div>
    </div>
  );
}