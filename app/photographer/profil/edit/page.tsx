import Link from 'next/link';

export default function EditProfil() {
  return (
    <div className="flex h-svh flex-col bg-gray-50">
      <div className="bg-white px-5 pt-6 pb-5 border-b border-gray-100 flex items-center gap-3">
        <Link href="/photographer/profil" className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 active:scale-95 transition-transform">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </Link>
        <h1 className="text-xl font-bold text-gray-900">Edit Profil</h1>
      </div>
      <div className="flex-1 p-5 overflow-y-auto">
        <div className="flex flex-col items-center mb-6">
          <div className="h-24 w-24 rounded-full border-4 border-white shadow-sm mb-3" style={{ backgroundImage: 'url(https://i.pravatar.cc/150?img=11)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <button className="text-violet-600 text-sm font-bold">Ubah Foto</button>
        </div>
        <div className="space-y-4">
          <div><label className="text-xs font-bold text-gray-500 mb-1.5 block">Nama Lengkap</label><input type="text" defaultValue="Rizki Pratama" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-bold text-gray-900 outline-none focus:border-violet-500" /></div>
          <div><label className="text-xs font-bold text-gray-500 mb-1.5 block">Spesialisasi</label><input type="text" defaultValue="Wedding Specialist" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-bold text-gray-900 outline-none focus:border-violet-500" /></div>
          <div><label className="text-xs font-bold text-gray-500 mb-1.5 block">Lokasi</label><input type="text" defaultValue="Surabaya" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-bold text-gray-900 outline-none focus:border-violet-500" /></div>
          <div><label className="text-xs font-bold text-gray-500 mb-1.5 block">Bio</label><textarea rows={3} defaultValue="Fotografer profesional dengan pengalaman lebih dari 5 tahun di bidang pernikahan." className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 outline-none focus:border-violet-500"></textarea></div>
        </div>
      </div>
      <div className="p-5 bg-white border-t border-gray-100">
        <Link href="/photographer/profil" className="flex w-full justify-center rounded-xl bg-violet-600 py-3.5 text-sm font-bold text-white shadow-sm active:scale-95 transition-transform">Simpan Perubahan</Link>
      </div>
    </div>
  );
}