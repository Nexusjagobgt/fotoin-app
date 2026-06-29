import Image from 'next/image';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="flex min-h-svh flex-col bg-white">
      {/* Hero image area */}
      <div className="relative flex h-48 items-center justify-center" style={{ background: 'linear-gradient(160deg, #7C3AED 0%, #5B21B6 100%)' }}>
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(124,58,237,0.6) 0%, rgba(91,33,182,0.9) 100%)' }} />
        <div className="relative z-10">
          <Image src="/images/FOTOIN LOGO.png" alt="FOTOIN" width={160} height={40} priority className="object-contain" style={{ filter: 'brightness(0) invert(1)' }} />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 px-6 pt-8">
        <h1 className="text-2xl font-bold text-gray-900">Masuk atau Daftar</h1>
        <p className="mt-1 text-sm text-gray-500">Diperlukan untuk booking dan pesan</p>

        <div className="mt-8 flex flex-col gap-3">
          {/* Google */}
          <Link
            href="/role"
            className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-3.5 text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Lanjutkan dengan Google
          </Link>

          {/* Email */}
          <Link
            href="/role"
            className="flex items-center gap-3 rounded-xl px-4 py-3.5 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#7C3AED' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="4" width="20" height="16" rx="2" stroke="white" strokeWidth="1.8" />
              <path d="M2 8l10 6 10-6" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
            Lanjutkan dengan Email
          </Link>

          {/* Phone */}
          <Link
            href="/role"
            className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-3.5 text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <rect x="5" y="1" width="14" height="22" rx="3" stroke="#374151" strokeWidth="1.8" />
              <circle cx="12" cy="18" r="1" fill="#374151" />
            </svg>
            Lanjutkan dengan Nomor HP
          </Link>
        </div>

        {/* Divider */}
        <div className="my-6 flex items-center gap-4">
          <div className="flex-1 h-px bg-gray-100" />
          <span className="text-xs text-gray-400">atau</span>
          <div className="flex-1 h-px bg-gray-100" />
        </div>

        <Link href="/role" className="text-center text-sm text-gray-500 hover:text-gray-700">
          ← Kembali Jelajahi
        </Link>

        <p className="mt-auto mb-8 text-center text-xs text-gray-400 leading-relaxed">
          Dengan masuk, kamu menyetujui Syarat & Ketentuan dan Kebijakan Privasi FOTOIN
        </p>
      </div>
    </div>
  );
}
