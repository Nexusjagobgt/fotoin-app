import Link from 'next/link';
import { getPhotographerById } from '@/lib/mockData';

export default async function ChatPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ from?: string; category?: string }>;
}) {
  const { id } = await params;
  const { from, category } = await searchParams;
  const photographer = getPhotographerById(id);

  if (!photographer) {
    return (
      <div className="flex h-svh flex-col items-center justify-center bg-white px-6 text-center">
        <h1 className="text-lg font-bold text-gray-900">Percakapan tidak ditemukan</h1>
        <p className="mt-2 text-sm text-gray-500">Fotografer untuk percakapan ini tidak tersedia.</p>
        <Link href="/connect" className="mt-5 rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-bold text-white">Kembali ke Connect</Link>
      </div>
    );
  }

  let safeReturnTo = '/messages';
  if (from?.startsWith('/photographer/') || from?.startsWith('/connect') || from?.startsWith('/bookings')) {
    safeReturnTo = from;
  } else if (from === 'home') {
    safeReturnTo = '/home';
  } else if (from === 'connect') {
    safeReturnTo = category ? `/connect/${category}` : '/connect';
  } else if (from === 'bookings') {
    safeReturnTo = '/bookings';
  }
  const firstName = photographer.name.split(' ')[0];
  const sessionTotal = photographer.priceNum * 3;

  return (
    <div className="flex h-svh flex-col bg-white">
      {/* Chat header */}
      <div className="flex items-center gap-3 border-b border-gray-100 bg-white px-4 py-2.5">
        <Link href={safeReturnTo} className="flex-shrink-0" aria-label="Kembali">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M19 12H5M12 19l-7-7 7-7" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </Link>
        <Link href={`/photographer/${id}?from=messages`} className="flex min-w-0 flex-1 items-center gap-3">
          <div className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-200" style={{ backgroundImage: `url(${photographer.avatar})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <div className="min-w-0 flex-1">
            <div className="truncate text-sm font-bold text-gray-900">{photographer.name}</div>
            <div className="text-xs font-medium text-green-500">● Online · {photographer.response}</div>
          </div>
        </Link>
        <div className="flex gap-2">
          <button type="button" className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="#374151" strokeWidth="1.8" strokeLinecap="round" /></svg>
          </button>
          <button type="button" className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="5" r="1.5" fill="#374151" /><circle cx="12" cy="12" r="1.5" fill="#374151" /><circle cx="12" cy="19" r="1.5" fill="#374151" /></svg>
          </button>
        </div>
      </div>

      {/* Consultation context */}
      <div className="flex items-center justify-between bg-violet-50 px-4 py-2">
        <div className="flex min-w-0 items-center gap-2">
          <span className="text-violet-600">📅</span>
          <span className="truncate text-xs font-semibold text-violet-700">Konsultasi {photographer.specialty}</span>
        </div>
        <span className="text-[10px] font-medium text-violet-500">Mulai {photographer.price}</span>
      </div>

      {/* Messages */}
      <div className="flex flex-1 flex-col gap-3 overflow-y-auto px-4 py-4">
        <div className="text-center text-xs text-gray-400">Hari ini</div>

        {id === 'sari-dewi' || id === 'sari' ? (
          <>
            <div className="flex justify-end">
              <div className="max-w-[75%]">
                <div className="rounded-2xl rounded-br-sm bg-violet-600 px-3.5 py-2.5 text-white">
                  <p className="text-sm">Hai Kak Sari, bagaimana hasil fotonya?</p>
                </div>
                <div className="mt-1 flex items-center justify-end gap-1"><span className="text-[10px] text-gray-400">09:30</span><span className="text-[10px] text-violet-400">✓✓</span></div>
              </div>
            </div>
            <div className="flex max-w-[80%] items-end gap-2">
              <div className="h-7 w-7 flex-shrink-0 rounded-full bg-gray-200" style={{ backgroundImage: `url(${photographer.avatar})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
              <div>
                <div className="rounded-2xl rounded-bl-sm bg-gray-100 px-3.5 py-2.5">
                  <p className="text-sm text-gray-800">Terima kasih sudah booking, hasil edit selesai ya kak.</p>
                </div>
                <span className="mt-1 text-[10px] text-gray-400">09:32</span>
              </div>
            </div>
          </>
        ) : id === 'maya-kusuma' || id === 'maya' ? (
          <>
            <div className="flex max-w-[80%] items-end gap-2">
              <div className="h-7 w-7 flex-shrink-0 rounded-full bg-gray-200" style={{ backgroundImage: `url(${photographer.avatar})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
              <div>
                <div className="rounded-2xl rounded-bl-sm bg-gray-100 px-3.5 py-2.5">
                  <p className="text-sm text-gray-800">Halo, saya minat untuk paket wedding. Bisa diskusi dulu?</p>
                </div>
                <span className="mt-1 text-[10px] text-gray-400">09:28</span>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="max-w-[75%]">
                <div className="rounded-2xl rounded-br-sm bg-violet-600 px-3.5 py-2.5 text-white">
                  <p className="text-sm">Tentu, boleh. Untuk tanggal berapa?</p>
                </div>
                <div className="mt-1 flex items-center justify-end gap-1"><span className="text-[10px] text-gray-400">09:30</span><span className="text-[10px] text-violet-400">✓✓</span></div>
              </div>
            </div>
          </>
        ) : id === 'fajar-nugraha' || id === 'fajar-sports' || id === 'fajar' ? (
          <>
            <div className="flex justify-end">
              <div className="max-w-[75%]">
                <div className="rounded-2xl rounded-br-sm bg-violet-600 px-3.5 py-2.5 text-white">
                  <p className="text-sm">Halo Kak Fajar, hasil foto produknya sudah selesai?</p>
                </div>
                <div className="mt-1 flex items-center justify-end gap-1"><span className="text-[10px] text-gray-400">09:30</span><span className="text-[10px] text-violet-400">✓✓</span></div>
              </div>
            </div>
            <div className="flex max-w-[80%] items-end gap-2">
              <div className="h-7 w-7 flex-shrink-0 rounded-full bg-gray-200" style={{ backgroundImage: `url(${photographer.avatar})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
              <div>
                <div className="rounded-2xl rounded-bl-sm bg-gray-100 px-3.5 py-2.5">
                  <p className="text-sm text-gray-800">Sudah kak, foto produk sudah dikirim via Drive ya!</p>
                </div>
                <span className="mt-1 text-[10px] text-gray-400">09:32</span>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex max-w-[80%] items-end gap-2">
              <div className="h-7 w-7 flex-shrink-0 rounded-full bg-gray-200" style={{ backgroundImage: `url(${photographer.avatar})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
              <div>
                <div className="rounded-2xl rounded-bl-sm bg-gray-100 px-3.5 py-2.5">
                  <p className="text-sm text-gray-800">Halo! Saya {photographer.name}. Terima kasih sudah menghubungi saya untuk kebutuhan {photographer.specialty.toLowerCase()}. Bisa ceritakan detail sesi yang kamu inginkan? 😊</p>
                </div>
                <span className="mt-1 text-[10px] text-gray-400">09:28</span>
              </div>
            </div>

            <div className="flex justify-end">
              <div className="max-w-[75%]">
                <div className="rounded-2xl rounded-br-sm bg-violet-600 px-3.5 py-2.5 text-white">
                  <p className="text-sm">Hai {firstName}! Saya ingin konsultasi tentang jadwal, konsep, dan paket foto yang tersedia.</p>
                </div>
                <div className="mt-1 flex items-center justify-end gap-1"><span className="text-[10px] text-gray-400">09:30</span><span className="text-[10px] text-violet-400">✓✓</span></div>
              </div>
            </div>

            <div className="flex max-w-[80%] items-end gap-2">
              <div className="h-7 w-7 flex-shrink-0 rounded-full bg-gray-200" style={{ backgroundImage: `url(${photographer.avatar})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
              <div>
                <div className="rounded-2xl rounded-bl-sm bg-gray-100 px-3.5 py-2.5">
                  <p className="text-sm text-gray-800">Siap, saya akan bantu menyiapkan sesi dengan gaya {photographer.styles.join(', ').toLowerCase()}. Harga mulai dari {photographer.price}.</p>
                </div>
                <span className="mt-1 text-[10px] text-gray-400">09:32</span>
              </div>
            </div>
          </>
        )}

        <div className="rounded-2xl border border-green-200 bg-green-50 p-3.5">
          <div className="mb-2 flex items-center gap-2">
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500"><svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
            <span className="text-xs font-semibold text-green-800">Siap buat booking dengan {firstName}</span>
          </div>
          <p className="mb-2 text-[11px] text-green-700">Contoh estimasi sesi 3 jam</p>
          <div className="mb-3 grid grid-cols-2 gap-x-4 gap-y-1 text-[11px]">
            <div><div className="text-[9px] font-semibold uppercase tracking-wide text-gray-400">Layanan</div><div className="font-semibold text-gray-900">{photographer.specialty}</div></div>
            <div><div className="text-[9px] font-semibold uppercase tracking-wide text-gray-400">Lokasi</div><div className="font-semibold text-gray-900">{photographer.location ?? 'Surabaya'}</div></div>
            <div><div className="text-[9px] font-semibold uppercase tracking-wide text-gray-400">Durasi</div><div className="font-semibold text-gray-900">3 jam</div></div>
            <div><div className="text-[9px] font-semibold uppercase tracking-wide text-gray-400">Estimasi</div><div className="font-semibold text-violet-600">Rp {sessionTotal.toLocaleString('id-ID')}</div></div>
          </div>
          <Link href={`/booking/terms?p=${photographer.id}`} className="block w-full rounded-xl bg-violet-600 py-2.5 text-center text-sm font-semibold text-white">
            Book Sekarang
            <div className="text-[10px] font-normal opacity-80">Lanjut ke Syarat &amp; Ketentuan</div>
          </Link>
        </div>
      </div>

      {/* Input bar */}
      <div className="flex items-center gap-2 border-t border-gray-100 bg-white px-4 py-3">
        <button type="button" className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gray-100"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="#374151" strokeWidth="2" strokeLinecap="round" /></svg></button>
        <div className="flex-1 rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-400">Ketik pesan...</div>
        <button type="button" className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-violet-600"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M22 2L11 13M22 2L15 22 11 13 2 9l20-7z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></button>
      </div>
    </div>
  );
}
