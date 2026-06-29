'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const benefits = [
  {
    icon: '🌐',
    title: 'Jangkau Lebih Banyak Klien',
    desc: 'Profilmu tampil di pencarian ribuan pengguna aktif di Surabaya dan sekitarnya.',
    bg: '#F5F3FF',
    accent: '#6B21F5',
    border: '#DDD6FE',
  },
  {
    icon: '📅',
    title: 'Atur Jadwalmu Sendiri',
    desc: 'Kamu yang menentukan kapan tersedia. Tidak ada paksaan jadwal dari siapapun.',
    bg: '#F0FDF4',
    accent: '#16a34a',
    border: '#BBF7D0',
  },
  {
    icon: '🔒',
    title: 'Pembayaran 100% Aman',
    desc: 'Dana klien ditahan escrow hingga sesi selesai. Tidak ada risiko tidak dibayar.',
    bg: '#FFFBEB',
    accent: '#D97706',
    border: '#FDE68A',
  },
  {
    icon: '💬',
    title: 'Konsultasi Sebelum Booking',
    desc: 'Chat langsung dengan klien sebelum deal untuk memastikan ekspektasi sesuai.',
    bg: '#FFF1F2',
    accent: '#E11D48',
    border: '#FECDD3',
  },
  {
    icon: '🏆',
    title: 'Bangun Portofolio Profesional',
    desc: 'Tampilkan karyamu dengan galeri portofolio terstruktur yang menarik klien baru.',
    bg: '#EFF6FF',
    accent: '#1D4ED8',
    border: '#BFDBFE',
  },
];

const stats = [
  { value: '2.000+', label: 'Klien Aktif' },
  { value: '98%', label: 'Kepuasan' },
  { value: '0%', label: 'Komisi Awal' },
];

export default function OnboardingIntroPage() {
  const router = useRouter();

  return (
    <div className="relative flex h-svh flex-col bg-gray-50">
      {/* Scrollable area */}
      <div className="flex-1 overflow-y-auto pb-28">

        {/* Hero header */}
        <div
          className="relative px-4 pt-12 pb-8"
          style={{ background: 'linear-gradient(160deg, #6B21F5 0%, #4C1D95 70%, #2E1065 100%)' }}
        >
          {/* Back button */}
          <button
            onClick={() => router.back()}
            className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M15 19l-7-7 7-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Logo */}
          <div className="flex justify-center mb-5">
            <Image
              src="/images/FOTOIN LOGO.png"
              alt="FOTOIN"
              width={150}
              height={38}
              priority
              className="object-contain"
            />
          </div>

          {/* Title */}
          <div className="text-center">
            <div className="inline-block rounded-full bg-green-400/20 px-3 py-1 text-xs font-semibold text-green-300 mb-3">
              Untuk Fotografer
            </div>
            <h1 className="text-[22px] font-bold leading-snug text-white">
              Bergabung sebagai<br />Fotografer FOTOIN
            </h1>
            <p className="mt-2 text-sm text-white/70">
              Gratis selamanya. Tanpa biaya pendaftaran.
            </p>
          </div>

          {/* Stats row */}
          <div className="mt-6 grid grid-cols-3 gap-3">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center rounded-2xl py-3 px-2"
                style={{ background: 'rgba(255,255,255,0.12)' }}
              >
                <span className="text-[20px] font-extrabold text-white">{s.value}</span>
                <span className="text-[11px] text-white/70 mt-0.5">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="px-4 pt-5">
          <p className="mb-3 text-[13px] font-semibold uppercase tracking-wide text-gray-400">
            Keuntungan bergabung
          </p>
          <div className="flex flex-col gap-3">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="flex items-start gap-4 rounded-2xl border px-4 py-4"
                style={{ backgroundColor: b.bg, borderColor: b.border }}
              >
                <div
                  className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-[12px] text-xl"
                  style={{ background: b.accent + '22' }}
                >
                  {b.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[15px] font-bold" style={{ color: b.accent }}>
                    {b.title}
                  </div>
                  <div className="mt-1 text-[13px] leading-relaxed text-gray-500">
                    {b.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="mx-4 mt-5 rounded-2xl border border-violet-100 bg-white p-4">
          <div className="mb-3 flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <p className="text-[14px] leading-relaxed text-gray-700 italic">
            "Sejak join FOTOIN, jadwal booking saya penuh 3 minggu ke depan. Sistem escrow-nya bikin saya tenang karena pembayaran pasti cair setelah sesi."
          </p>
          <div className="mt-3 flex items-center gap-3">
            <div
              className="h-10 w-10 rounded-full border-2 border-violet-200 bg-violet-100"
              style={{ backgroundImage: 'url(https://i.pravatar.cc/40?img=11)', backgroundSize: 'cover' }}
            />
            <div>
              <div className="text-[13px] font-bold text-gray-900">Rizki Pratama</div>
              <div className="text-[11px] text-gray-400">Wedding Photographer · Surabaya</div>
            </div>
            <div className="ml-auto rounded-full bg-green-100 px-2.5 py-1 text-[11px] font-bold text-green-700">
              Verified
            </div>
          </div>
        </div>

        <div className="h-2" />
      </div>

      {/* Fixed CTA */}
      <div
        className="absolute bottom-0 left-0 right-0 px-4 pb-8 pt-4"
        style={{ background: 'linear-gradient(to top, white 60%, transparent)' }}
      >
        <button
          onClick={() => router.push('/photographer/onboarding')}
          className="w-full rounded-2xl py-4 text-base font-bold text-white transition-transform active:scale-[0.98]"
          style={{
            background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
            boxShadow: '0 8px 28px rgba(34,197,94,0.35)',
          }}
        >
          Daftar Sekarang — Gratis!
        </button>
        <p className="mt-2 text-center text-xs text-gray-400">
          Tidak ada biaya tersembunyi · Bisa berhenti kapanpun
        </p>
      </div>
    </div>
  );
}
