import Link from 'next/link';

export default function BookingSuccessPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-white px-6">
      {/* Confetti dots */}
      <div className="relative w-full flex justify-center mb-8">
        {[
          { top: '-40px', left: '30px', color: '#FCD34D', size: 8 },
          { top: '-20px', right: '40px', color: '#C4B5FD', size: 6 },
          { top: '10px', left: '60px', color: '#86EFAC', size: 5 },
          { top: '-30px', left: '160px', color: '#FCA5A5', size: 7 },
          { top: '5px', right: '70px', color: '#FCD34D', size: 5 },
        ].map((dot, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              top: dot.top,
              left: 'left' in dot ? dot.left : undefined,
              right: 'right' in dot ? dot.right : undefined,
              width: dot.size,
              height: dot.size,
              backgroundColor: dot.color,
            }}
          />
        ))}

        {/* Success circle */}
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-500" style={{ boxShadow: '0 8px 24px rgba(34,197,94,0.35)' }}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
            <path d="M5 12l5 5L20 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      <h1 className="text-[22px] font-bold text-center text-gray-900 mb-2">Booking Berhasil! 🎉</h1>
      <p className="text-sm text-center text-gray-500 mb-6">Pembayaran dikonfirmasi. Fotografer kamu sudah diberitahu!</p>

      {/* Booking number */}
      <div className="w-full rounded-2xl border border-gray-100 bg-gray-50 p-4 mb-3">
        <div className="text-[11px] text-center text-gray-400 mb-1 uppercase tracking-wide">Nomor Booking</div>
        <div className="text-center text-lg font-bold" style={{ color: '#7C3AED' }}>#FTN-20260415-8472</div>
      </div>

      {/* Date/time */}
      <div className="w-full rounded-2xl border border-gray-100 bg-gray-50 px-4 py-3 mb-8">
        <div className="flex items-center gap-2 justify-center text-sm text-gray-600">
          <span>📅</span>
          <span>Sabtu 15 Apr · 09:00 · Universitas Petra</span>
        </div>
      </div>

      {/* Foto Saya info card */}
      <div className="w-full rounded-2xl border border-violet-100 bg-violet-50 px-4 py-3 mb-4 flex items-start gap-3">
        <span className="text-xl mt-0.5">📸</span>
        <div className="flex-1">
          <div className="text-xs font-semibold text-violet-800 mb-0.5">
            Foto kamu akan tersedia di Foto Saya
          </div>
          <div className="text-xs text-violet-600 leading-relaxed mb-2">
            Setelah sesi selesai dan fotografer upload, foto akan muncul otomatis.
          </div>
          <Link href="/my-photos" className="text-xs font-semibold underline" style={{ color: '#6B21F5' }}>
            Lihat Foto Saya →
          </Link>
        </div>
      </div>

      {/* CTAs */}
      <div className="w-full flex flex-col gap-3">
        <Link
          href="/bookings"
          className="w-full rounded-xl py-4 text-center text-base font-semibold text-white"
          style={{ backgroundColor: '#7C3AED' }}
        >
          Lihat Detail Booking
        </Link>
        <Link
          href="/home"
          className="w-full rounded-xl border border-gray-200 py-4 text-center text-base font-semibold text-gray-700 hover:bg-gray-50"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}
