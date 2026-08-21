import os

pages = {
    "app/photographer/profil/edit/page.tsx": """import Link from 'next/link';

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
}""",
    "app/profil/edit/page.tsx": """import Link from 'next/link';

export default function CustomerEditProfil() {
  return (
    <div className="flex h-svh flex-col bg-gray-50">
      <div className="bg-white px-5 pt-6 pb-5 border-b border-gray-100 flex items-center gap-3">
        <Link href="/profil" className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 active:scale-95 transition-transform">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </Link>
        <h1 className="text-xl font-bold text-gray-900">Data Pribadi</h1>
      </div>
      <div className="flex-1 p-5 overflow-y-auto">
        <div className="flex flex-col items-center mb-6">
          <div className="h-24 w-24 rounded-full border-4 border-white shadow-sm mb-3" style={{ backgroundImage: 'url(https://i.pravatar.cc/150?img=33)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <button className="text-violet-600 text-sm font-bold">Ubah Foto</button>
        </div>
        <div className="space-y-4">
          <div><label className="text-xs font-bold text-gray-500 mb-1.5 block">Nama Lengkap</label><input type="text" defaultValue="Christian" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-bold text-gray-900 outline-none focus:border-violet-500" /></div>
          <div><label className="text-xs font-bold text-gray-500 mb-1.5 block">Email</label><input type="email" defaultValue="user@email.com" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-bold text-gray-900 outline-none focus:border-violet-500" /></div>
          <div><label className="text-xs font-bold text-gray-500 mb-1.5 block">No. Telepon</label><input type="tel" defaultValue="081234567890" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-bold text-gray-900 outline-none focus:border-violet-500" /></div>
        </div>
      </div>
      <div className="p-5 bg-white border-t border-gray-100">
        <Link href="/profil" className="flex w-full justify-center rounded-xl bg-violet-600 py-3.5 text-sm font-bold text-white shadow-sm active:scale-95 transition-transform">Simpan Perubahan</Link>
      </div>
    </div>
  );
}""",
    "app/photographer/layanan/page.tsx": """import Link from 'next/link';

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
}""",
    "app/photographer/area-layanan/page.tsx": """import Link from 'next/link';

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
}""",
    "app/photographer/rekening/page.tsx": """import Link from 'next/link';

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
}""",
    "app/photographer/tarik-dana/page.tsx": """import Link from 'next/link';

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
}""",
    "app/shared/notifikasi/page.tsx": """import Link from 'next/link';

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
}""",
    "app/shared/privasi/page.tsx": """import Link from 'next/link';

export default function Privasi({ mode = 'photographer' }: { mode?: string }) {
  const backTo = mode === 'photographer' ? '/photographer/profil' : '/profil';
  return (
    <div className="flex h-svh flex-col bg-gray-50">
      <div className="bg-white px-5 pt-6 pb-5 border-b border-gray-100 flex items-center gap-3">
        <Link href={backTo} className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 active:scale-95 transition-transform">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </Link>
        <h1 className="text-xl font-bold text-gray-900">Privasi & Keamanan</h1>
      </div>
      <div className="flex-1 p-5 overflow-y-auto">
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm mb-4">
          <div className="p-4 border-b border-gray-50">
            <h3 className="font-bold text-gray-900 mb-1">Ubah Password</h3>
            <p className="text-xs text-gray-500">Perbarui kata sandi secara berkala</p>
          </div>
          <div className="p-4 border-b border-gray-50 flex justify-between items-center">
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Face Recognition Data</h3>
              <p className="text-xs text-gray-500">Data wajah untuk pencarian</p>
            </div>
            <button className="text-xs font-bold text-red-600 bg-red-50 px-3 py-1.5 rounded-lg">Hapus Data</button>
          </div>
          <div className="p-4 flex justify-between items-center">
            <span className="font-semibold text-gray-900 text-sm">Autentikasi Dua Langkah</span>
            <div className="w-10 h-6 bg-gray-200 rounded-full flex items-center px-1"><div className="w-4 h-4 bg-white rounded-full shadow-sm"></div></div>
          </div>
        </div>
      </div>
    </div>
  );
}""",
    "app/shared/bantuan/page.tsx": """import Link from 'next/link';

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
}""",
    "app/tentang/page.tsx": """import Link from 'next/link';
import Image from 'next/image';

export default function Tentang() {
  return (
    <div className="flex h-svh flex-col bg-gray-50">
      <div className="bg-white px-5 pt-6 pb-5 border-b border-gray-100 flex items-center gap-3">
        <button onClick={() => window.history.back()} className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 active:scale-95 transition-transform">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <h1 className="text-xl font-bold text-gray-900">Tentang FOTOIN</h1>
      </div>
      <div className="flex-1 p-5 overflow-y-auto flex flex-col items-center justify-center pb-20">
        <div className="w-24 h-24 bg-violet-600 rounded-3xl flex items-center justify-center mb-6 shadow-lg shadow-violet-200">
          <span className="text-white font-extrabold text-3xl">F</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-1">FOTOIN</h2>
        <p className="text-gray-500 font-medium mb-6">Versi 1.0.0</p>
        <p className="text-center text-sm text-gray-600 max-w-[280px] leading-relaxed">
          Platform terbaik untuk menemukan dan menyewa fotografer profesional di sekitarmu dengan mudah dan aman.
        </p>
      </div>
    </div>
  );
}""",
    "app/profil/pembayaran/page.tsx": """import Link from 'next/link';

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
}""",
    "app/profil/favorit/page.tsx": """import Link from 'next/link';

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
}""",
    "app/photographer/notifikasi/page.tsx": "export { default } from '../../shared/notifikasi/page';",
    "app/profil/notifikasi/page.tsx": "import Notif from '../../shared/notifikasi/page'; export default function P() { return <Notif mode='client' />; }",
    "app/photographer/privasi/page.tsx": "export { default } from '../../shared/privasi/page';",
    "app/profil/privasi/page.tsx": "import Privasi from '../../shared/privasi/page'; export default function P() { return <Privasi mode='client' />; }",
    "app/photographer/bantuan/page.tsx": "export { default } from '../../shared/bantuan/page';",
    "app/profil/bantuan/page.tsx": "import Bantuan from '../../shared/bantuan/page'; export default function P() { return <Bantuan mode='client' />; }",
}

for path, content in pages.items():
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

print("Created all pages.")
