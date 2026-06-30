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
    active: true,
    img: 'https://picsum.photos/seed/marathon/400/300',
    uploaded: 47,
  },
  {
    id: 'cycling-2026',
    name: 'Gran Fondo Surabaya',
    date: '22 Feb',
    location: 'Surabaya',
    photos: '1.203',
    photographers: '6',
    active: false,
    img: 'https://picsum.photos/seed/cycling/400/300',
    uploaded: 23,
  },
  {
    id: 'campus-fun-run',
    name: 'Campus Fun Run Petra',
    date: '2 Mar',
    location: 'Surabaya',
    photos: '934',
    photographers: '4',
    active: false,
    img: 'https://picsum.photos/seed/running/400/300',
    uploaded: 12,
  },
  {
    id: 'night-run',
    name: 'Surabaya Night Run',
    date: '8 Feb',
    location: 'Surabaya',
    photos: '2.156',
    photographers: '8',
    active: false,
    img: 'https://picsum.photos/seed/nightrun/400/300',
    uploaded: 35,
  },
];

export default function PhotographerSportsPage() {
  const totalUploaded = events.reduce((sum, e) => sum + e.uploaded, 0);

  return (
    <div className="flex h-svh flex-col bg-gray-50">
      {/* Status bar */}
      <div className="flex items-center justify-between bg-white px-5 pt-3 pb-1" style={{ background: 'linear-gradient(135deg, #6B21F5 0%, #4C1D95 100%)' }}>
        <span className="text-xs font-semibold text-white">9:41</span>
        <div className="flex items-center gap-1">
          <div className="flex items-center rounded-sm border border-white/40 px-0.5">
            <div className="h-2.5 w-5 rounded-sm bg-white" />
            <div className="h-1.5 w-0.5 rounded-r-sm bg-white/50" />
          </div>
        </div>
      </div>

      {/* Purple header */}
      <div
        className="flex flex-col px-4 pt-3 pb-4 gap-1.5 flex-shrink-0"
        style={{ background: 'linear-gradient(135deg, #6B21F5 0%, #4C1D95 100%)' }}
      >
        <div className="flex items-center justify-between">
          <Link href="/"><Image
            src="/images/FOTOIN LOGO.png"
            alt="FOTOIN"
            width={100}
            height={26}
            priority
            className="object-contain"
            style={{ filter: 'brightness(0) invert(1)' }}
          /></Link>
          <div className="inline-flex items-center rounded-full bg-white/20 px-2.5 py-0.5 text-[11px] font-semibold text-white">
            {totalUploaded} foto diunggah
          </div>
        </div>
        <div className="mt-0.5">
          <div className="text-lg font-bold text-white">Upload Event Sports</div>
          <div className="text-xs text-white/70">Kelola & upload fotomu ke event olahraga</div>
        </div>
      </div>

      {/* Event list */}
      <div className="flex-1 overflow-y-auto px-4 py-3 flex flex-col gap-3">
        {events.map((ev) => (
          <div key={ev.id} className="rounded-2xl bg-white border border-gray-100 overflow-hidden">
            <div className="flex gap-3 p-3.5">
              {/* Thumbnail */}
              <div
                className="h-16 w-16 flex-shrink-0 rounded-xl"
                style={{
                  backgroundImage: `url(${ev.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div className="text-sm font-bold text-gray-900 leading-snug">{ev.name}</div>
                  {ev.active && (
                    <div className="inline-flex items-center flex-shrink-0 rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-bold text-green-700">
                      Event Aktif
                    </div>
                  )}
                </div>
                <div className="mt-0.5 flex items-center gap-1 text-xs text-gray-400">
                  <span>📅 {ev.date}</span>
                  <span>·</span>
                  <span>📍 {ev.location}</span>
                </div>
                <div className="mt-1 flex items-center gap-1.5">
                  <div className="flex items-center gap-1 rounded-full bg-violet-50 px-2 py-0.5">
                    <span className="text-[10px] font-bold text-violet-700">{ev.uploaded} foto</span>
                    <span className="text-[10px] text-violet-400">sudah diupload</span>
                  </div>
                  <span className="text-[10px] text-gray-300">·</span>
                  <span className="text-[10px] text-gray-400">{ev.photos} total</span>
                </div>
              </div>
            </div>

            {/* Upload button */}
            <div className="border-t border-gray-50 px-3.5 py-2.5">
              <Link
                href={`/photographer/sports/${ev.id}/upload`}
                className="flex w-full items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-semibold text-white active:scale-95 transition-transform"
                style={{ backgroundColor: '#6B21F5' }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Upload Foto
              </Link>
            </div>
          </div>
        ))}
      </div>

      <BottomNav mode="photographer" />
    </div>
  );
}
