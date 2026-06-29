'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import BottomNav from '@/components/BottomNav';

/* ── DATA ─────────────────────────────────────────────────────────── */

type BookingPhoto = {
  id: number;
  photographer: string;
  avatar: string;
  service: string;
  package: string;
  date: string;
  photoCount: number;
  via: string;
  expiresLabel: string;
  daysLeft: number;
};

type SportsPhotoItem = {
  id: number;
  url: string;
  km: string;
  photographer: string;
  daysLeft: number;
};

type SportsCard = {
  id: number;
  event: string;
  date: string;
  category: string;
  photos: SportsPhotoItem[];
  totalPaid: number;
};

const bookingPhotos: BookingPhoto[] = [
  {
    id: 1,
    photographer: 'Rizki Pratama',
    avatar: 'https://i.pravatar.cc/80?img=11',
    service: 'Wedding Photography',
    package: 'Paket Standard',
    date: '15 April 2026',
    photoCount: 150,
    via: 'Google Drive',
    expiresLabel: '15 Mei 2026',
    daysLeft: 28,
  },
  {
    id: 2,
    photographer: 'Dinda Aulia',
    avatar: 'https://i.pravatar.cc/80?img=5',
    service: 'Graduation Photography',
    package: 'Paket Basic',
    date: '2 Maret 2026',
    photoCount: 80,
    via: 'Google Drive',
    expiresLabel: '7 April 2026',
    daysLeft: 5,
  },
];

const sportsCards: SportsCard[] = [
  {
    id: 1,
    event: 'Surabaya City Marathon 2026',
    date: '15 Maret 2026',
    category: '10K',
    photos: [
      { id: 101, url: 'https://images.unsplash.com/photo-1565120130276-05b94d46be21?w=200&h=267&fit=crop', km: 'KM 5.2', photographer: 'Aldi Santoso', daysLeft: 28 },
      { id: 102, url: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=200&h=267&fit=crop', km: 'KM 10.1', photographer: 'Budi Santoso', daysLeft: 28 },
      { id: 103, url: 'https://images.unsplash.com/photo-1461897104016-0b3b00cc81ee?w=200&h=267&fit=crop', km: 'KM 2.4', photographer: 'Aldi Santoso', daysLeft: 28 },
    ],
    totalPaid: 75000,
  },
  {
    id: 2,
    event: 'Campus Fun Run Petra',
    date: '2 Maret 2026',
    category: '5K',
    photos: [
      { id: 201, url: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=200&h=267&fit=crop', km: 'KM 3.1', photographer: 'Rizki Pratama', daysLeft: 5 },
    ],
    totalPaid: 25000,
  },
];

/* ── HELPERS ──────────────────────────────────────────────────────── */

function ExpiryBanner({ daysLeft, expiresLabel }: { daysLeft: number; expiresLabel?: string }) {
  if (daysLeft <= 0) {
    return (
      <div className="flex items-center gap-2 rounded-xl bg-gray-100 px-3 py-2.5">
        <span className="text-sm">❌</span>
        <span className="text-xs text-gray-500">Link sudah tidak aktif</span>
      </div>
    );
  }
  if (daysLeft <= 7) {
    return (
      <div className="flex items-center gap-2 rounded-xl px-3 py-2.5" style={{ backgroundColor: '#FEE2E2' }}>
        <span className="text-sm">🔴</span>
        <span className="text-xs font-bold" style={{ color: '#B91C1C' }}>
          Segera download! Link expired dalam {daysLeft} hari
        </span>
      </div>
    );
  }
  return (
    <div className="flex items-center gap-2 rounded-xl bg-amber-50 px-3 py-2.5">
      <span className="text-sm">⏰</span>
      <span className="text-xs text-amber-700">
        Link aktif sampai {expiresLabel} ({daysLeft} hari lagi)
      </span>
    </div>
  );
}

function ExpiryChip({ daysLeft }: { daysLeft: number }) {
  if (daysLeft <= 7) {
    return (
      <div className="inline-flex items-center gap-0.5 rounded-full px-1.5 py-0.5" style={{ backgroundColor: '#FEE2E2' }}>
        <span className="text-[9px]">🔴</span>
        <span className="text-[9px] font-bold" style={{ color: '#B91C1C' }}>{daysLeft} hari lagi!</span>
      </div>
    );
  }
  return (
    <div className="inline-flex items-center gap-0.5 rounded-full bg-gray-100 px-1.5 py-0.5">
      <span className="text-[9px]">⏰</span>
      <span className="text-[9px] text-gray-500">{daysLeft} hari lagi</span>
    </div>
  );
}

/* ── BOOKING CARD ─────────────────────────────────────────────────── */

function BookingCard({ photo }: { photo: BookingPhoto }) {
  const [downloaded, setDownloaded] = useState(false);
  const expired = photo.daysLeft <= 0;

  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm border border-gray-100">
      {/* Top row */}
      <div className="flex items-start gap-3 mb-3">
        <div
          className="h-10 w-10 flex-shrink-0 rounded-full"
          style={{ backgroundImage: `url(${photo.avatar})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="flex-1 min-w-0">
          <div className="text-sm font-bold text-gray-900">{photo.photographer}</div>
          <div className="text-xs text-gray-500 truncate">{photo.service} · {photo.package}</div>
          <div className="text-xs text-gray-400">📅 {photo.date}</div>
        </div>
      </div>

      <div className="border-t border-gray-50 my-3" />

      {/* Delivery info */}
      <div className="flex flex-col gap-1.5 mb-3">
        <div className="flex items-center gap-2 text-xs text-gray-600">
          <span>📁</span>
          <span>{photo.photoCount} foto hasil edit</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-600">
          <span>🔗</span>
          <span>Tersedia via {photo.via}</span>
        </div>
      </div>

      {/* Expiry banner */}
      <div className="mb-3">
        <ExpiryBanner daysLeft={photo.daysLeft} expiresLabel={photo.expiresLabel} />
      </div>

      {/* Download toggle */}
      <button
        onClick={() => setDownloaded((v) => !v)}
        className="mb-3 flex w-full items-center gap-2.5 rounded-xl border border-gray-100 bg-gray-50 px-3 py-2.5"
      >
        {/* Toggle pill */}
        <div
          className="relative h-5 w-9 flex-shrink-0 rounded-full transition-colors"
          style={{ backgroundColor: downloaded ? '#22C55E' : '#D1D5DB' }}
        >
          <div
            className="absolute top-0.5 h-4 w-4 rounded-full bg-white shadow-sm transition-transform"
            style={{ transform: downloaded ? 'translateX(16px)' : 'translateX(2px)' }}
          />
        </div>
        <span className="text-xs font-medium" style={{ color: downloaded ? '#16A34A' : '#6B7280' }}>
          {downloaded ? '✅ Sudah didownload' : 'Tandai sudah download'}
        </span>
      </button>

      {/* Action button */}
      {expired ? (
        <button className="w-full rounded-xl border border-gray-200 py-3 text-sm font-semibold text-gray-500">
          Hubungi Fotografer
        </button>
      ) : (
        <a
          href="#"
          className="flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold text-white"
          style={{ backgroundColor: '#6B21F5' }}
        >
          <span>📁</span>
          Buka Google Drive
        </a>
      )}
    </div>
  );
}

/* ── SPORTS CARD ──────────────────────────────────────────────────── */

function SportsCard({ card }: { card: SportsCard }) {
  const [downloaded, setDownloaded] = useState<Set<number>>(new Set());

  const toggleDownload = (id: number) => {
    setDownloaded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const downloadAll = () => {
    setDownloaded(new Set(card.photos.map((p) => p.id)));
  };

  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm border border-gray-100">
      {/* Top row */}
      <div className="flex items-start gap-3 mb-3">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-500">
          <span className="text-lg">⚡</span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-sm font-bold text-gray-900 leading-snug">{card.event}</div>
          <div className="text-xs text-gray-400">📅 {card.date}</div>
        </div>
        <div className="rounded-full bg-violet-100 px-2.5 py-0.5 text-xs font-semibold text-violet-700">
          {card.category}
        </div>
      </div>

      {/* Photos grid */}
      <div className="grid grid-cols-2 gap-2 mb-3">
        {card.photos.map((photo) => (
          <div key={photo.id} className="rounded-xl overflow-hidden border border-gray-100">
            {/* Thumbnail */}
            <div
              className="w-full"
              style={{
                backgroundImage: `url(${photo.url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                aspectRatio: '3/4',
              }}
            />
            {/* Info below thumb */}
            <div className="p-2">
              <div className="text-[10px] text-gray-500 mb-0.5">📍 {photo.km}</div>
              <div className="text-[10px] text-gray-500 mb-1.5">📸 {photo.photographer}</div>
              <div className="mb-1.5">
                <ExpiryChip daysLeft={photo.daysLeft} />
              </div>
              <button
                onClick={() => toggleDownload(photo.id)}
                className="w-full rounded-lg py-1.5 text-[10px] font-semibold transition-colors"
                style={{
                  backgroundColor: downloaded.has(photo.id) ? '#DCFCE7' : 'transparent',
                  color: downloaded.has(photo.id) ? '#16A34A' : '#6B21F5',
                  border: `1.5px solid ${downloaded.has(photo.id) ? '#22C55E' : '#6B21F5'}`,
                }}
              >
                {downloaded.has(photo.id) ? '✅ Downloaded' : '📥 Download'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Card bottom */}
      <div className="border-t border-gray-50 pt-3">
        <div className="flex items-center justify-between mb-2.5">
          <div className="text-xs text-gray-500">
            {card.photos.length} foto dibeli · Total{' '}
            <span className="font-semibold text-gray-900">
              Rp {card.totalPaid.toLocaleString('id-ID')}
            </span>
          </div>
        </div>
        <button
          onClick={downloadAll}
          className="w-full rounded-xl py-3 text-sm font-semibold text-white"
          style={{ backgroundColor: '#6B21F5' }}
        >
          Download Semua
        </button>
      </div>
    </div>
  );
}

/* ── EMPTY STATE ──────────────────────────────────────────────────── */

function EmptyState({ tab }: { tab: 'booking' | 'sports' }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
      <div className="text-5xl mb-4">
        {tab === 'booking' ? '📷' : '🏃'}
        <span className="text-3xl">⬇️</span>
      </div>
      <div className="text-base font-bold text-gray-900 mb-2">
        {tab === 'booking' ? 'Belum ada foto dari booking' : 'Belum ada foto dari event olahraga'}
      </div>
      <p className="text-sm text-gray-500 leading-relaxed mb-6">
        {tab === 'booking'
          ? 'Selesaikan sesi foto dan fotografer akan mengirimkan link Google Drive ke sini'
          : 'Beli foto dari event Sports dan akan muncul di sini untuk kamu download'}
      </p>
      <Link
        href={tab === 'booking' ? '/connect' : '/sports'}
        className="rounded-xl px-6 py-3 text-sm font-semibold text-white"
        style={{ backgroundColor: '#6B21F5' }}
      >
        {tab === 'booking' ? 'Cari Fotografer' : 'Lihat Event Sports'}
      </Link>
    </div>
  );
}

/* ── PAGE ─────────────────────────────────────────────────────────── */

const TABS = ['Dari Booking', 'Dari Sports'] as const;

export default function MyPhotosPage() {
  const [activeTab, setActiveTab] = useState<'Dari Booking' | 'Dari Sports'>('Dari Booking');

  const urgentCount = [
    ...bookingPhotos.filter((p) => p.daysLeft <= 7 && p.daysLeft > 0),
    ...sportsCards.flatMap((c) => c.photos.filter((p) => p.daysLeft <= 7 && p.daysLeft > 0)),
  ].length;

  return (
    <div className="flex h-svh flex-col bg-gray-50">
      {/* Top bar */}
      <div className="flex items-center gap-3 border-b border-gray-100 bg-white px-4 py-3">
        <Link href="/home" className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5M12 19l-7-7 7-7" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
        <div className="flex flex-1 items-center justify-center gap-2">
          <span className="text-base font-bold text-gray-900">Foto Saya</span>
          {urgentCount > 0 && (
            <div className="flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold text-white" style={{ backgroundColor: '#EF4444' }}>
              {urgentCount}
            </div>
          )}
        </div>
        {/* spacer to keep title centered */}
        <div className="h-8 w-8" />
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-100 bg-white">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className="flex-1 py-3 text-sm font-medium transition-colors"
            style={{
              color: activeTab === tab ? '#6B21F5' : '#9CA3AF',
              borderBottom: activeTab === tab ? '2px solid #6B21F5' : '2px solid transparent',
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3 pb-24">
        {activeTab === 'Dari Booking' ? (
          bookingPhotos.length === 0 ? (
            <EmptyState tab="booking" />
          ) : (
            bookingPhotos.map((photo) => <BookingCard key={photo.id} photo={photo} />)
          )
        ) : (
          sportsCards.length === 0 ? (
            <EmptyState tab="sports" />
          ) : (
            sportsCards.map((card) => <SportsCard key={card.id} card={card} />)
          )
        )}
      </div>

      <BottomNav mode="client" />
    </div>
  );
}
