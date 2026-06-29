import Image from 'next/image';
import Link from 'next/link';
import BottomNav from '@/components/BottomNav';

const stats = [
  { val: '18', label: 'Booking', trend: '+12%' },
  { val: '3,5jt', label: 'Penghasilan', trend: '+8%' },
  { val: '342', label: 'Dilihat', trend: '+24%' },
  { val: '94%', label: 'Response', trend: '+2%' },
];

const consultations = [
  { name: 'Maya Rahmawati', preview: 'Saya tertarik paket wedding...', time: '5 mnt', avatar: 'https://i.pravatar.cc/40?img=25' },
  { name: 'Dito Pranoto', preview: 'Apakah masih ada slot April?', time: '1 jam', avatar: 'https://i.pravatar.cc/40?img=15' },
  { name: 'Sari Putri', preview: 'Budget saya sekitar 1 juta...', time: '2 jam', avatar: 'https://i.pravatar.cc/40?img=5' },
];

export default function PhotographerHomePage() {
  return (
    <div className="flex h-svh flex-col bg-gray-50">
      {/* Top bar */}
      <div
        className="flex flex-col px-4 pt-3 pb-3 gap-2"
        style={{ background: 'linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)' }}
      >
        <div className="flex items-center justify-between">
          <Link href="/"><Image src="/images/FOTOIN LOGO.png" alt="FOTOIN" width={110} height={28} priority className="object-contain" style={{ filter: 'brightness(0) invert(1)' }} /></Link>
          <div className="flex items-center gap-2">
            <div
              className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold"
              style={{ backgroundColor: '#22C55E', color: 'white' }}
            >
              <div className="h-2 w-2 rounded-full bg-white" />
              Aktif
            </div>
            <Link href="/home" className="rounded-full border border-white/40 bg-white/20 px-2.5 py-1">
              <span className="text-xs font-medium text-white">Fotografer</span>
            </Link>
          </div>
        </div>
        <div>
          <div className="text-xl font-bold text-white">Halo, Rizki 📷</div>
          <div className="text-sm text-white/70">Semangat kerja hari ini!</div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Stats */}
        <div className="mx-4 mt-3 grid grid-cols-4 gap-2">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center rounded-xl bg-white px-2 py-3">
              <div className="text-base font-extrabold" style={{ color: '#7C3AED' }}>{s.val}</div>
              <div className="text-[10px] text-gray-400">{s.label}</div>
              <div className="text-[10px] font-semibold text-green-600">{s.trend}</div>
            </div>
          ))}
        </div>

        {/* Today's schedule */}
        <div className="mx-4 mt-3 rounded-2xl bg-white p-4">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-sm font-bold text-gray-900">Jadwal Hari Ini</span>
            <Link href="/photographer/schedule" className="text-xs font-semibold" style={{ color: '#7C3AED' }}>Lihat Semua →</Link>
          </div>
          <div className="rounded-xl border-l-4 border-violet-500 bg-violet-50 px-3 py-3">
            <div className="flex items-start gap-2.5">
              <div className="h-9 w-9 flex-shrink-0 rounded-full" style={{ backgroundImage: 'url(https://i.pravatar.cc/40?img=33)', backgroundSize: 'cover' }} />
              <div className="flex-1">
                <div className="text-sm font-bold text-gray-900">Christian Wijaya</div>
                <div className="text-[11px] text-gray-500">Wedding · 09:00 – 13:00 WIB</div>
                <div className="flex items-center gap-1 mt-0.5 text-[11px] text-gray-500">
                  <span>📍</span><span>Universitas Petra, SBY</span>
                </div>
              </div>
              <div className="rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-bold text-green-700">Confirmed</div>
            </div>
          </div>
        </div>

        {/* Waiting consultations */}
        <div className="mx-4 mt-3 rounded-2xl bg-white p-4">
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-gray-900">Konsultasi Menunggu</span>
              <div className="rounded-full bg-amber-400 px-2 py-0.5 text-[10px] font-bold text-white">3 baru</div>
            </div>
            <Link href="/messages" className="text-xs font-semibold" style={{ color: '#7C3AED' }}>Balas →</Link>
          </div>
          {consultations.map((c) => (
            <Link key={c.name} href="/messages" className="flex items-center gap-3 py-2.5 border-b border-gray-50 last:border-0 hover:bg-gray-50 rounded-xl px-1">
              <div className="h-10 w-10 flex-shrink-0 rounded-full" style={{ backgroundImage: `url(${c.avatar})`, backgroundSize: 'cover' }} />
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold text-gray-900">{c.name}</div>
                <div className="text-xs text-gray-400 truncate">{c.preview}</div>
              </div>
              <span className="flex-shrink-0 text-xs text-gray-400">{c.time}</span>
            </Link>
          ))}
        </div>

        {/* Quick actions */}
        <div className="mx-4 mt-3 mb-3 grid grid-cols-4 gap-2">
          {[
            { label: 'Atur Jadwal', href: '/photographer/schedule', color: '#7C3AED', icon: '📅' },
            { label: 'Edit Profil', href: '/photographer/onboarding', color: '#F59E0B', icon: '✏️' },
            { label: 'Tarik Dana', href: '/photographer/earnings', color: '#22C55E', icon: '💰' },
            { label: 'Portofolio', href: '/photographer/portfolio', color: '#F59E0B', icon: '📁' },
          ].map((action) => (
            <Link
              key={action.label}
              href={action.href}
              className="flex flex-col items-center gap-1.5 rounded-2xl py-3 px-2 text-center"
              style={{ backgroundColor: action.color }}
            >
              <span className="text-xl">{action.icon}</span>
              <span className="text-[10px] font-bold text-white leading-tight">{action.label}</span>
            </Link>
          ))}
        </div>
      </div>

      <BottomNav mode="photographer" />
    </div>
  );
}
