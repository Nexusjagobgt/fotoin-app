import Image from 'next/image';
import Link from 'next/link';
import BottomNav from '@/components/BottomNav';

const events = [
  {
    id: 'marathon-2026',
    name: 'Surabaya City Marathon 2026',
    date: '15 Mar',
    location: 'Surabaya',
    photos: '3.847',
    photographers: '12',
    price: 'Rp 25.000/foto',
    active: true,
    img: 'https://picsum.photos/seed/marathon/400/300',
  },
  {
    id: 'cycling-2026',
    name: 'Gran Fondo Surabaya',
    date: '22 Feb',
    location: 'Surabaya',
    photos: '1.203',
    photographers: '6',
    price: 'Rp 25.000/foto',
    active: false,
    img: 'https://picsum.photos/seed/cycling/400/300',
  },
  {
    id: 'campus-fun-run',
    name: 'Campus Fun Run Petra',
    date: '2 Mar',
    location: 'Surabaya',
    photos: '934',
    photographers: '4',
    price: 'Rp 20.000/foto',
    active: false,
    img: 'https://picsum.photos/seed/running/400/300',
  },
  {
    id: 'night-run',
    name: 'Surabaya Night Run',
    date: '8 Feb',
    location: 'Surabaya',
    photos: '2.156',
    photographers: '8',
    price: 'Rp 25.000/foto',
    active: false,
    img: 'https://picsum.photos/seed/nightrun/400/300',
  },
];

function EventCard({ ev }: { ev: (typeof events)[number] }) {
  return (
    <Link href={`/sports/${ev.id}/check`} className="overflow-hidden rounded-2xl bg-gray-900 shadow-sm">
      <div className="relative aspect-[4/3] w-full">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${ev.img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0) 55%)' }}
        />
        {ev.active && (
          <div className="absolute left-2 top-2 rounded-full bg-green-500 px-2 py-0.5 text-[9px] font-bold text-white">
            AKTIF
          </div>
        )}
        <div className="absolute bottom-2 left-2 right-2">
          <div className="mb-0.5 line-clamp-2 text-[11px] font-bold leading-tight text-white">{ev.name}</div>
          <div className="text-[9px] text-white/70">📅 {ev.date} · 📍 {ev.location}</div>
          <div className="text-[9px] text-white/70">{ev.photos} foto · {ev.photographers} fotografer</div>
          <div className="mt-0.5 text-[9px] font-semibold text-violet-300">{ev.price}</div>
        </div>
      </div>
      <div className="px-2.5 pb-2.5 pt-2">
        <div
          className="w-full rounded-xl py-1.5 text-center text-xs font-semibold text-white"
          style={{ backgroundColor: '#6B21F5' }}
        >
          Cari Fotoku
        </div>
      </div>
    </Link>
  );
}

export default function SportsPage() {
  return (
    <div className="flex h-svh flex-col bg-gray-900">
      {/* Hero */}
      <div className="relative h-52 flex-shrink-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=400&h=250&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(17,24,39,0.95) 100%)' }}
        />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <div className="mb-3 flex items-center gap-2">
            <Image src="/images/FOTOIN LOGO.png" alt="FOTOIN" width={90} height={22} priority className="object-contain" style={{ filter: 'brightness(0) invert(1)' }} />
            <span className="text-sm font-bold text-amber-400">⚡ Sports</span>
          </div>
          <h1 className="mb-3 text-[20px] font-bold leading-tight text-white">
            Temukan Fotomu dari<br />Event Olahraga
          </h1>
          <p className="mb-4 text-xs text-white/70">
            Cocokkan wajahmu dari ribuan foto event secara otomatis — cepat &amp; akurat
          </p>
          <Link
            href="/sports/marathon-2026/check"
            className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-gray-900"
          >
            Mulai Cari Fotoku
          </Link>
        </div>
      </div>

      {/* How it works */}
      <div className="flex flex-shrink-0 justify-around bg-gray-800 px-4 py-3">
        {[
          { icon: '🏃', text: 'Ikuti event\nolahraga' },
          { icon: '🤖', text: 'AI cocokkan\nfotomu' },
          { icon: '🛒', text: 'Preview &\nbeli foto' },
        ].map(({ icon, text }) => (
          <div key={text} className="flex flex-col items-center gap-1 text-center">
            <span className="text-2xl">{icon}</span>
            <span className="whitespace-pre-line text-[10px] leading-tight text-white/60">{text}</span>
          </div>
        ))}
      </div>

      {/* Events */}
      <div className="flex-1 overflow-y-auto bg-white">
        <div className="px-4 pb-4">
          <div className="flex items-center justify-between py-4">
            <span className="text-base font-bold text-gray-900">Event Tersedia</span>
            <span className="text-xs font-semibold" style={{ color: '#6B21F5' }}>Lihat Semua →</span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {events.map((ev) => (
              <EventCard key={ev.id} ev={ev} />
            ))}
          </div>
        </div>
      </div>

      <BottomNav mode="client" />
    </div>
  );
}
