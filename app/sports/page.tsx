'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BottomNav from '@/components/BottomNav';

/* ── EVENT DATA ───────────────────────────────────────────────────── */

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
  const faceScanParams = new URLSearchParams({
    source: 'sports',
    eventId: ev.id,
    eventName: ev.name,
    returnTo: '/sports',
  });

  return (
    <Link href={`/verify-face?${faceScanParams.toString()}`} className="group relative flex flex-col overflow-hidden rounded-[18px] shadow-[0_4px_10px_rgba(0,0,0,0.05)] active:scale-[0.98] transition-transform aspect-[11/14] w-full">
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
        style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.95) 100%)' }}
      />
      
      <div className="relative z-10 flex flex-col h-full px-3 pb-3 pt-2.5">
        {/* Top Area: Badge */}
        <div>
          {ev.active && (
            <div className="inline-flex items-center rounded-full bg-green-500/90 backdrop-blur-sm px-2 py-0.5 text-[10px] font-bold tracking-wide text-white">
              AKTIF
            </div>
          )}
        </div>
        
        {/* Spacer */}
        <div className="flex-1" />

        {/* Text Content */}
        <div className="mb-4">
          <div className="mb-1.5 line-clamp-2 text-[14px] font-bold leading-tight text-white">{ev.name}</div>
          <div className="mb-2 flex flex-col gap-1">
            <span className="text-[10px] font-medium text-white/90">📅 {ev.date} · 📍 {ev.location}</span>
            <span className="text-[10px] font-medium text-white/90">📸 {ev.photos} foto · {ev.photographers} fotog.</span>
          </div>
          <div className="text-[12px] font-bold text-violet-300">{ev.price}</div>
        </div>
        
        {/* CTA Button */}
        <div
          className="flex w-full items-center justify-center gap-1.5 rounded-xl py-2 text-[12px] font-bold text-white transition-colors group-active:bg-violet-700"
          style={{ backgroundColor: '#6B21F5' }}
        >
          Cari Fotoku
        </div>
      </div>
    </Link>
  );
}



/* ── ONBOARDING MODAL ─────────────────────────────────────────────── */

const STORAGE_KEY = 'fotoin_sports_onboarding_seen';

const onboardingSteps = [
  {
    icon: '🏃',
    title: 'Ikuti Event Olahraga',
    desc: 'Datang dan ikuti event olahraga yang terdaftar di FOTOIN Sports — marathon, fun run, atau kompetisi lainnya.',
  },
  {
    icon: '📸',
    title: 'Fotografer FOTOIN Sudah Standby',
    desc: 'Fotografer resmi FOTOIN tersebar di titik-titik strategis (garis start, rute, garis finish) — kamu tidak perlu mencari atau berhenti untuk pose, cukup jalani eventnya seperti biasa.',
  },
  {
    icon: '🤖',
    title: 'AI Mencocokkan Otomatis',
    desc: 'Setelah event selesai, AI kami otomatis mendeteksi wajah dan nomor BIB dari ribuan foto yang diambil fotografer.',
  },
  {
    icon: '🛍️',
    title: 'Cari & Beli Fotomu',
    desc: 'Masukkan selfie atau nomor BIB di halaman event untuk menemukan semua fotomu — beli yang kamu suka secara instan.',
  },
];

const N = onboardingSteps.length;

function SportsOnboardingModal({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [closing, setClosing] = useState(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 20);
    return () => clearTimeout(t);
  }, []);

  const dismiss = () => {
    localStorage.setItem(STORAGE_KEY, '1');
    setClosing(true);
    setMounted(false);
    setTimeout(onClose, 290);
  };

  const next = () => { if (step < N - 1) setStep(step + 1); };
  const prev = () => { if (step > 0) setStep(step - 1); };

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(dx) > 48) dx > 0 ? next() : prev();
    touchStartX.current = null;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center"
      style={{
        backgroundColor: mounted ? 'rgba(0,0,0,0.55)' : 'rgba(0,0,0,0)',
        transition: 'background-color 0.3s ease',
      }}
      onClick={(e) => { if (e.target === e.currentTarget) dismiss(); }}
    >
      <div
        className="w-full max-w-[390px] overflow-hidden rounded-t-3xl bg-white"
        style={{
          transform: mounted ? 'translateY(0) scale(1)' : 'translateY(60px) scale(0.95)',
          opacity: mounted ? 1 : 0,
          transition: closing
            ? 'transform 0.25s ease-in, opacity 0.25s ease-in'
            : 'transform 0.38s cubic-bezier(0.34,1.56,0.64,1), opacity 0.3s ease',
          paddingBottom: 'env(safe-area-inset-bottom, 20px)',
        }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Handle */}
        <div className="flex justify-center pt-3 pb-0.5">
          <div className="h-1 w-10 rounded-full bg-gray-200" />
        </div>

        {/* Header row */}
        <div className="flex items-center justify-between px-5 py-2.5">
          <div className="text-[10px] font-bold uppercase tracking-widest text-violet-500">
            Cara Kerja FOTOIN Sports
          </div>
          <button
            onClick={dismiss}
            className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100"
          >
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
              <path d="M1 1l10 10M11 1L1 11" stroke="#6B7280" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden">
          <div
            style={{
              display: 'flex',
              width: `${N * 100}%`,
              transform: `translateX(-${step * (100 / N)}%)`,
              transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1)',
              willChange: 'transform',
            }}
          >
            {onboardingSteps.map((s, i) => (
              <div
                key={i}
                style={{ width: `${100 / N}%` }}
                className="flex flex-col items-center px-6 pb-2 pt-3"
              >
                {/* Icon circle */}
                <div
                  className="mb-4 flex h-[84px] w-[84px] items-center justify-center rounded-full text-[42px]"
                  style={{
                    background: 'linear-gradient(135deg,#6B21F5 0%,#7C3AED 100%)',
                    boxShadow: '0 10px 28px rgba(107,33,245,0.32)',
                    transform: step === i ? 'scale(1)' : 'scale(0.82)',
                    transition: 'transform 0.35s ease',
                  }}
                >
                  {s.icon}
                </div>

                {/* Step label */}
                <div className="mb-1 text-[10px] font-bold uppercase tracking-widest text-violet-400">
                  Langkah {i + 1} dari {N}
                </div>

                {/* Title */}
                <div className="mb-2.5 text-center text-[17px] font-bold leading-snug text-gray-900">
                  {s.title}
                </div>

                {/* Desc */}
                <div className="text-center text-[13px] leading-relaxed text-gray-500">
                  {s.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dot indicators */}
        <div className="mt-4 flex items-center justify-center gap-1.5 mb-5">
          {onboardingSteps.map((_, i) => (
            <button
              key={i}
              onClick={() => setStep(i)}
              className="rounded-full"
              style={{
                width: step === i ? 22 : 7,
                height: 7,
                backgroundColor: step === i ? '#6B21F5' : '#E5E7EB',
                transition: 'width 0.3s ease, background-color 0.3s ease',
              }}
            />
          ))}
        </div>

        {/* Action row */}
        <div className="flex items-center px-5 pb-6 gap-3">
          <button
            onClick={dismiss}
            className="text-sm font-medium text-gray-400 active:text-gray-600"
          >
            Lewati
          </button>
          <div className="flex-1" />
          {step > 0 && (
            <button
              onClick={prev}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 active:scale-95 transition-transform"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M15 18l-6-6 6-6" stroke="#374151" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          )}
          {step < N - 1 ? (
            <button
              onClick={next}
              className="inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-semibold text-white active:scale-95 transition-transform"
              style={{ backgroundColor: '#6B21F5' }}
            >
              Lanjut
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M9 18l6-6-6-6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          ) : (
            <button
              onClick={dismiss}
              className="inline-flex items-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-semibold text-white active:scale-95 transition-transform"
              style={{ backgroundColor: '#22C55E' }}
            >
              Mengerti, Lanjutkan
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M5 12l5 5L20 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

/* ── PAGE ─────────────────────────────────────────────────────────── */

export default function SportsPage() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem(STORAGE_KEY);
    if (!seen) {
      const t = setTimeout(() => setShowModal(true), 450);
      return () => clearTimeout(t);
    }
  }, []);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <>
      <div className="flex h-svh flex-col bg-gray-900">
        <div className="flex-1 overflow-y-auto overflow-x-hidden scroll-smooth bg-gray-900">
          
          {/* Sticky Background Hero Layer */}
          <div className="sticky top-0 w-full z-0 flex flex-col">
            {/* Hero */}
            <div className="relative flex-shrink-0 overflow-hidden flex flex-col min-h-[340px]">
              <div

                className="absolute inset-0"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=600&h=400&fit=crop)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to bottom, rgba(17,24,39,0.7) 0%, rgba(17,24,39,0.85) 50%, rgba(17,24,39,1) 100%)' }}
              />
              
              <div className="relative z-10 flex flex-col h-full w-full">
                {/* Top Bar: Logo (Left) + Cara Kerja (Right) */}
                <div className="flex items-center justify-between px-5 pt-6 pb-4">
                  <div className="flex items-center gap-2">
                    <Image src="/images/FOTOIN LOGO.png" alt="FOTOIN" width={90} height={22} priority className="object-contain" style={{ filter: 'brightness(0) invert(1)' }} />
                    <span className="text-[13px] font-bold text-amber-400">⚡ Sports</span>
                  </div>
                  <button
                    onClick={openModal}
                    className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 backdrop-blur-md active:scale-95 transition-transform border border-white/20"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="2.5" />
                      <path d="M12 8v.5M12 11.5v5" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                    <span className="text-[11px] font-bold text-white tracking-wide">Cara Kerja</span>
                  </button>
                </div>

                {/* Main Center Content */}
                <div className="flex flex-1 flex-col items-center justify-center px-6 text-center pt-2 pb-6">
                  <h1 className="text-[24px] font-bold leading-tight text-white mb-2.5">
                    Temukan Fotomu dari<br />Event Olahraga
                  </h1>
                  <p className="text-[13px] text-white/70 leading-relaxed max-w-[280px] mb-4">
                    Cocokkan wajahmu dari ribuan foto event secara otomatis — cepat &amp; akurat
                  </p>
                  <button
                    onClick={() => document.getElementById('event-tersedia')?.scrollIntoView({ behavior: 'smooth' })}
                    className="rounded-full bg-white px-7 py-3 text-[14px] font-bold text-gray-900 active:scale-[0.98] transition-transform shadow-[0_4px_15px_rgba(255,255,255,0.15)]"
                  >
                    Mulai Cari Fotoku
                  </button>
                </div>
              </div>
            </div>

            {/* How it works */}
            {/* Added pb-12 so the rounded corners of the sliding sheet overlap nicely over the dark background */}
            <div className="flex flex-shrink-0 justify-around px-5 pt-6 pb-12" style={{ backgroundColor: 'rgb(17,24,39)' }}>
              {[
                { icon: '🏃', text: 'Ikuti event\nolahraga' },
                { icon: '🤖', text: 'AI cocokkan\nfotomu' },
                { icon: '🛒', text: 'Preview &\nbeli foto' },
              ].map(({ icon, text }) => (
                <div key={text} className="flex flex-col items-center gap-1.5 text-center flex-1">
                  <span className="text-[28px] mb-1">{icon}</span>
                  <span className="whitespace-pre-line text-[11px] font-medium leading-relaxed text-white/70">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Foreground Sliding Events Section */}
          <div id="event-tersedia" className="relative z-10 w-full bg-white min-h-[500px] mt-[-24px] rounded-t-[24px] shadow-[0_-10px_25px_rgba(0,0,0,0.15)] pb-8">
            <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-5 py-4 rounded-t-[24px] flex items-center justify-between shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
              <span className="text-[17px] font-bold text-gray-900">Event Tersedia</span>
              <button className="text-[13px] font-bold active:opacity-60 transition-opacity" style={{ color: '#6B21F5' }}>
                Lihat Semua →
              </button>
            </div>
            <div className="px-5 pt-4 grid grid-cols-2 gap-3.5">
              {events.map((ev) => (
                <EventCard key={ev.id} ev={ev} />
              ))}
            </div>
          </div>
        </div>

        <BottomNav mode="client" />
      </div>

      {showModal && <SportsOnboardingModal onClose={closeModal} />}
    </>
  );
}
