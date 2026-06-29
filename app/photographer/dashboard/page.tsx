import Link from 'next/link';
import BottomNav from '@/components/BottomNav';

const upcomingBookings = [
  { date: '15', month: 'APR', name: 'Christian', type: 'Wedding', time: '09:00', venue: 'Univ. Petra', status: 'Confirmed', statusColor: '#16A34A', statusBg: '#DCFCE7', avatar: 'https://i.pravatar.cc/40?img=33' },
  { date: '18', month: 'APR', name: 'Maya', type: 'Wedding', time: '10:00', venue: 'Hotel Majapahit', status: 'Confirmed', statusColor: '#16A34A', statusBg: '#DCFCE7', avatar: 'https://i.pravatar.cc/40?img=25' },
  { date: '22', month: 'APR', name: 'Dito', type: 'Product', time: '13:00', venue: 'Studio TBD', status: 'Pending', statusColor: '#92400E', statusBg: '#FEF3C7', avatar: 'https://i.pravatar.cc/40?img=15' },
];

export default function DashboardPage() {
  return (
    <div className="flex h-svh flex-col bg-gray-50">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-100 bg-white px-4 py-3">
        <div>
          <div className="text-lg font-bold text-gray-900">Dashboard Fotografer</div>
          <div className="text-xs text-gray-400">Maret 2026</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 2a7 7 0 00-7 7v4l-2 2v1h18v-1l-2-2V9a7 7 0 00-7-7z" stroke="#374151" strokeWidth="1.8" /><path d="M10 19a2 2 0 004 0" stroke="#374151" strokeWidth="1.8" /></svg>
          </div>
          <div className="rounded-full border border-green-500 bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-700">Fotografer</div>
          <div className="h-8 w-8 rounded-full" style={{ backgroundImage: 'url(https://i.pravatar.cc/40?img=11)', backgroundSize: 'cover' }} />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Stats */}
        <div className="mt-3 mx-4 grid grid-cols-4 gap-2">
          {[
            { val: '18', label: 'Booking', sub: '+12% vs\nbulan lalu', color: '#7C3AED' },
            { val: 'Rp 3,5jt', label: 'Penghasilan', sub: '+8% vs\nbulan lalu', color: '#7C3AED' },
            { val: '342', label: 'Profil Dilihat', sub: '+24%', color: '#7C3AED' },
            { val: '94%', label: 'Response', sub: '+2%', color: '#7C3AED' },
          ].map((s) => (
            <div key={s.label} className="flex flex-col rounded-xl bg-white p-2.5 text-center">
              <div className="text-sm font-extrabold" style={{ color: s.color }}>{s.val}</div>
              <div className="text-[9px] text-gray-400 leading-tight">{s.label}</div>
              <div className="text-[9px] font-semibold text-green-600 leading-tight whitespace-pre-line">{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Exposure score */}
        <div className="mt-3 mx-4 rounded-2xl bg-white p-4">
          <div className="flex items-center gap-4">
            <div className="relative h-20 w-20 flex-shrink-0">
              <svg width="80" height="80" viewBox="0 0 80 80">
                <circle cx="40" cy="40" r="32" fill="none" stroke="#F3F4F6" strokeWidth="8" />
                <circle cx="40" cy="40" r="32" fill="none" stroke="#7C3AED" strokeWidth="8" strokeDasharray={`${(78/100)*201} 201`} strokeLinecap="round" transform="rotate(-90 40 40)" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-lg font-extrabold text-gray-900">78</span>
                <span className="text-[9px] text-gray-400">/100</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="text-sm font-bold text-gray-900">Skor Eksposur FOTOIN</div>
              <div className="text-xs text-gray-400 mb-2">Booking didistribusikan secara adil</div>
              <div className="inline-block rounded-full bg-green-100 px-2.5 py-0.5 text-[10px] font-bold text-green-700 mb-1">Sangat Baik</div>
              <div className="text-[11px] text-gray-500">✅ Response rate tinggi</div>
              <div className="text-[11px] text-amber-600">⚠️ Lengkapi portofolio (min. 10 foto)</div>
              <div className="text-[11px] text-gray-500">✅ Jadwal diperbarui</div>
            </div>
          </div>
        </div>

        {/* Pending consultations */}
        <div className="mt-3 mx-4 rounded-2xl bg-white p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-gray-900">Konsultasi Menunggu</span>
              <div className="rounded-full bg-amber-400 px-2 py-0.5 text-[10px] font-bold text-white">3 baru</div>
            </div>
            <Link href="/messages" className="text-xs font-semibold" style={{ color: '#7C3AED' }}>Balas —</Link>
          </div>
          <div className="flex items-center gap-2">
            {['https://i.pravatar.cc/40?img=25', 'https://i.pravatar.cc/40?img=15', 'https://i.pravatar.cc/40?img=5'].map((av, i) => (
              <div key={i} className="h-8 w-8 rounded-full border-2 border-white" style={{ backgroundImage: `url(${av})`, backgroundSize: 'cover', marginLeft: i > 0 ? '-8px' : '0' }} />
            ))}
            <span className="text-xs text-gray-500 ml-2">Maya, Dito, Sari & 3 lainnya sedang menunggu</span>
          </div>
        </div>

        {/* Upcoming bookings */}
        <div className="mt-3 mx-4 mb-3 rounded-2xl bg-white p-4">
          <div className="mb-3 text-sm font-bold text-gray-900">Booking Mendatang</div>
          {upcomingBookings.map((b) => (
            <div key={`${b.name}-${b.date}`} className="flex items-center gap-3 py-2.5 border-b border-gray-50 last:border-0">
              <div className="flex h-10 w-10 flex-shrink-0 flex-col items-center justify-center rounded-xl" style={{ backgroundColor: '#EDE9FE' }}>
                <span className="text-[10px] font-bold text-violet-600">{b.date}</span>
                <span className="text-[9px] text-violet-400">{b.month}</span>
              </div>
              <div className="h-8 w-8 flex-shrink-0 rounded-full" style={{ backgroundImage: `url(${b.avatar})`, backgroundSize: 'cover' }} />
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold text-gray-900 truncate">{b.name} · {b.type}</div>
                <div className="text-xs text-gray-400">{b.time} · {b.venue}</div>
              </div>
              <div className="rounded-full px-2 py-0.5 text-[10px] font-bold flex-shrink-0" style={{ backgroundColor: b.statusBg, color: b.statusColor }}>{b.status}</div>
            </div>
          ))}
        </div>

        {/* Quick actions */}
        <div className="mx-4 mb-4 grid grid-cols-3 gap-2">
          <Link href="/photographer/schedule" className="flex flex-col items-center gap-1 rounded-2xl py-3 text-center bg-violet-600">
            <span className="text-lg">📅</span><span className="text-[11px] font-bold text-white">Atur Jadwal</span>
          </Link>
          <Link href="/photographer/onboarding" className="flex flex-col items-center gap-1 rounded-2xl py-3 text-center bg-amber-50 border border-amber-200">
            <span className="text-lg">✏️</span><span className="text-[11px] font-bold text-amber-700">Edit Profil</span>
          </Link>
          <Link href="/photographer/earnings" className="flex flex-col items-center gap-1 rounded-2xl py-3 text-center bg-green-500">
            <span className="text-lg">💰</span><span className="text-[11px] font-bold text-white">Tarik Dana</span>
          </Link>
        </div>
      </div>

      <BottomNav mode="photographer" />
    </div>
  );
}
