'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import BottomNav from '@/components/BottomNav';

type BookingStatus = 'Pending' | 'Confirmed' | 'Selesai';
type CircleState = 'active' | 'complete' | 'future';

type BookingEntry = {
  name: string;
  type: string;
  status: BookingStatus;
  statusColor: string;
  statusBg: string;
  date: string;
  time: string;
  location: string;
  duration: string;
  total: string;
  avatar: string;
};

const bookingData: Record<string, BookingEntry> = {
  rizki: {
    name: 'Rizki Pratama',
    type: 'Wedding Photography',
    status: 'Confirmed',
    statusColor: '#16A34A',
    statusBg: '#DCFCE7',
    date: 'Sabtu, 15 April 2026',
    time: '09:00 WIB',
    location: 'Universitas Petra, Surabaya',
    duration: '6 jam',
    total: 'Rp 2.500.000',
    avatar: 'https://i.pravatar.cc/80?img=11',
  },
  budi: {
    name: 'Budi Santoso',
    type: 'Sports Photography',
    status: 'Pending',
    statusColor: '#92400E',
    statusBg: '#FEF3C7',
    date: 'Minggu, 20 April 2026',
    time: '07:00 WIB',
    location: 'Stadion Gelora Bung Tomo, SBY',
    duration: '4 jam',
    total: 'Rp 1.200.000',
    avatar: 'https://i.pravatar.cc/80?img=14',
  },
  sari: {
    name: 'Sari Dewi',
    type: 'Event Photography',
    status: 'Selesai',
    statusColor: '#374151',
    statusBg: '#F3F4F6',
    date: 'Sabtu, 5 April 2026',
    time: '10:00 WIB',
    location: 'Hotel Majapahit, Surabaya',
    duration: '8 jam',
    total: 'Rp 3.800.000',
    avatar: 'https://i.pravatar.cc/80?img=5',
  },
};

const escrowPhases = [
  { label: 'Dana Diamankan', icon: '🔒', desc: 'Pembayaran aman di escrow Fotoin' },
  { label: 'Ditahan Selama Sesi', icon: '🛡️', desc: 'Dana dijaga hingga sesi selesai' },
  { label: 'Dilepas ke Fotografer', icon: '✅', desc: 'Fotografer menerima pembayaran' },
];

const STEPS = 30;

export default function BookingDetailPage() {
  const params = useParams<{ id: string }>();
  const id = (params?.id ?? '') as string;
  const booking = bookingData[id];

  const activePhase =
    !booking ? 0
    : booking.status === 'Pending' ? 0
    : booking.status === 'Confirmed' ? 1
    : 2;

  const maxFillStep = activePhase * STEPS;
  const [fillStep, setFillStep] = useState(0);

  useEffect(() => {
    if (maxFillStep === 0) return;
    const interval = setInterval(() => {
      setFillStep((prev) => {
        if (prev >= maxFillStep) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 20);
    return () => clearInterval(interval);
  }, [maxFillStep]);

  const line0Pct = Math.min(100, (fillStep / STEPS) * 100);
  const line1Pct = Math.max(0, Math.min(100, ((fillStep - STEPS) / STEPS) * 100));
  const linesFill = [line0Pct, line1Pct];

  const p0: CircleState =
    activePhase >= 1 && fillStep >= STEPS * 0.5 ? 'complete' : 'active';

  const p1: CircleState =
    activePhase >= 2 && fillStep >= STEPS * 1.5
      ? 'complete'
      : activePhase >= 1 && fillStep >= STEPS
      ? 'active'
      : 'future';

  const p2: CircleState =
    activePhase >= 2 && fillStep >= STEPS * 2 ? 'active' : 'future';

  const phaseStates: CircleState[] = [p0, p1, p2];
  const animSettled = fillStep >= maxFillStep;

  if (!booking) {
    return (
      <div className="flex h-svh flex-col items-center justify-center bg-gray-50">
        <div className="text-4xl mb-3">🔍</div>
        <div className="text-sm font-medium text-gray-500">Booking tidak ditemukan</div>
        <Link href="/bookings" className="mt-4 text-sm font-semibold" style={{ color: '#7C3AED' }}>
          ← Kembali
        </Link>
      </div>
    );
  }

  return (
    <div className="flex h-svh flex-col bg-gray-50">
      {/* Status bar */}
      <div className="flex items-center justify-between bg-white px-5 pt-3 pb-1">
        <span className="text-xs font-semibold text-gray-900">9:41</span>
        <div className="flex items-center gap-1">
          <div className="flex items-center rounded-sm border border-gray-300 px-0.5">
            <div className="h-2.5 w-5 rounded-sm bg-gray-900" />
            <div className="h-1.5 w-0.5 rounded-r-sm bg-gray-400" />
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-white px-4 pb-3 pt-1">
        <div className="flex items-center gap-3 py-2">
          <Link
            href="/bookings"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 active:scale-95 transition-transform"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <h1 className="text-[17px] font-bold text-gray-900">Detail Booking</h1>
        </div>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto px-4 py-3 flex flex-col gap-3">

        {/* Photographer profile card */}
        <div className="rounded-2xl bg-white p-4 border border-gray-100">
          <div className="flex items-center gap-3">
            <div
              className="h-14 w-14 flex-shrink-0 rounded-full border-2 border-violet-100"
              style={{
                backgroundImage: `url(${booking.avatar})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div className="flex-1 min-w-0">
              <div className="text-base font-bold text-gray-900">{booking.name}</div>
              <div className="text-xs text-gray-500 mt-0.5">{booking.type}</div>
              <div className="mt-1.5">
                <span
                  className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold"
                  style={{ backgroundColor: booking.statusBg, color: booking.statusColor }}
                >
                  {booking.status}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Booking info */}
        <div className="rounded-2xl bg-white p-4 border border-gray-100">
          <div className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide mb-3">
            Info Booking
          </div>
          <div className="flex flex-col gap-2.5">
            {[
              { icon: '📅', label: 'Tanggal & Waktu', value: `${booking.date} · ${booking.time}` },
              { icon: '📍', label: 'Lokasi', value: booking.location },
              { icon: '⏱️', label: 'Durasi', value: booking.duration },
            ].map(({ icon, label, value }, i) => (
              <div key={i}>
                {i > 0 && <div className="h-px bg-gray-50 mb-2.5" />}
                <div className="flex items-center gap-2.5">
                  <span className="text-base">{icon}</span>
                  <div>
                    <div className="text-[11px] text-gray-400">{label}</div>
                    <div className="text-sm font-semibold text-gray-800">{value}</div>
                  </div>
                </div>
              </div>
            ))}
            <div className="h-px bg-gray-50" />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="text-base">💳</span>
                <div>
                  <div className="text-[11px] text-gray-400">Total via QRIS</div>
                  <div className="text-sm font-bold" style={{ color: '#7C3AED' }}>
                    {booking.total}
                  </div>
                </div>
              </div>
              <span className="inline-flex items-center rounded-full bg-violet-50 px-2.5 py-0.5 text-[10px] font-semibold text-violet-600">
                Lunas
              </span>
            </div>
          </div>
        </div>

        {/* Escrow stepper */}
        <div className="rounded-2xl bg-white p-4 border border-gray-100">
          <div className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide mb-4">
            Status Escrow Dana
          </div>
          {escrowPhases.map((phase, i) => {
            const state = phaseStates[i];
            const isActive = state === 'active';
            const isComplete = state === 'complete';
            const showRunning = isActive && animSettled;

            return (
              <div key={i} className="flex gap-4">
                {/* Circle + connector line */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-full text-base"
                    style={{
                      backgroundColor: isComplete ? '#DCFCE7' : isActive ? '#EDE9FE' : '#F3F4F6',
                      boxShadow:
                        isActive && animSettled
                          ? '0 0 0 3px rgba(124,58,237,0.18), 0 0 0 6px rgba(124,58,237,0.07)'
                          : 'none',
                      transition: 'box-shadow 0.5s ease, background-color 0.4s ease',
                    }}
                  >
                    {isComplete ? (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M5 12l5 5L20 7"
                          stroke="#16A34A"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : (
                      <span style={{ filter: isActive ? 'none' : 'grayscale(1) opacity(0.4)' }}>
                        {phase.icon}
                      </span>
                    )}
                  </div>
                  {i < 2 && (
                    <div
                      className="relative w-0.5 mt-1"
                      style={{ height: 48, backgroundColor: '#E5E7EB' }}
                    >
                      <div
                        className="absolute top-0 left-0 right-0"
                        style={{ height: `${linesFill[i]}%`, backgroundColor: '#16A34A' }}
                      />
                    </div>
                  )}
                </div>

                {/* Label + desc + running indicator */}
                <div className="flex-1 pt-1.5 pb-4">
                  <div
                    className="text-sm font-semibold"
                    style={{
                      color: isComplete ? '#16A34A' : isActive ? '#7C3AED' : '#9CA3AF',
                      transition: 'color 0.3s ease',
                    }}
                  >
                    {phase.label}
                  </div>
                  <div className="text-xs text-gray-400 mt-0.5">{phase.desc}</div>
                  {showRunning && (
                    <div className="mt-1.5 flex items-center gap-1.5">
                      <div
                        className="h-1.5 w-1.5 rounded-full flex-shrink-0"
                        style={{
                          backgroundColor: booking.status === 'Selesai' ? '#16A34A' : '#7C3AED',
                          animation: 'escrow-pulse 1.2s ease-in-out infinite',
                        }}
                      />
                      <span
                        className="text-[11px] font-semibold"
                        style={{ color: booking.status === 'Selesai' ? '#16A34A' : '#7C3AED' }}
                      >
                        {booking.status === 'Selesai' ? 'Dana Diterima ✓' : 'Sedang berjalan'}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Action buttons */}
      <div className="bg-white border-t border-gray-100 px-4 py-3 flex flex-col gap-2">
        {booking.status === 'Selesai' ? (
          <>
            <Link
              href={`/review/${id}`}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-amber-300 py-3 text-sm font-semibold text-amber-600 hover:bg-amber-50 active:scale-95 transition-transform"
            >
              <span>⭐</span> Beri Ulasan
            </Link>
            <Link
              href="/my-photos"
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-violet-200 py-3 text-sm font-semibold text-violet-700 hover:bg-violet-50 active:scale-95 transition-transform"
            >
              <span>📁</span> Lihat Foto
            </Link>
          </>
        ) : (
          <Link
            href={`/messages/${id}`}
            className="flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold text-white active:scale-95 transition-transform"
            style={{ backgroundColor: '#7C3AED' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Chat dengan Fotografer
          </Link>
        )}
      </div>

      <BottomNav mode="client" />
    </div>
  );
}
