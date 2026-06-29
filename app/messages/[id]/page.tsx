import Link from 'next/link';

export default async function ChatPage({ params }: PageProps<'/messages/[id]'>) {
  const { id } = await params;

  return (
    <div className="flex h-svh flex-col bg-white">
      {/* Status bar */}
      <div className="flex items-center justify-between px-5 pt-3 pb-1 bg-white">
        <span className="text-xs font-semibold text-gray-900">9:41</span>
        <div className="flex items-center gap-1 text-gray-900">
          <svg width="16" height="12" viewBox="0 0 16 12" fill="#111827"><rect x="0" y="4" width="3" height="8" rx="0.5" /><rect x="4.5" y="2.5" width="3" height="9.5" rx="0.5" /><rect x="9" y="1" width="3" height="11" rx="0.5" /><rect x="13.5" y="0" width="2.5" height="12" rx="0.5" /></svg>
          <div className="flex items-center rounded-sm border border-gray-300 px-0.5"><div className="h-2.5 w-5 rounded-sm bg-gray-900" /><div className="h-1.5 w-0.5 rounded-r-sm bg-gray-400" /></div>
        </div>
      </div>

      {/* Chat header */}
      <div className="flex items-center gap-3 border-b border-gray-100 bg-white px-4 py-2.5">
        <Link href="/messages" className="flex-shrink-0">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5M12 19l-7-7 7-7" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
        <div className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-200" style={{ backgroundImage: 'url(https://i.pravatar.cc/80?img=11)', backgroundSize: 'cover' }} />
        <div className="flex-1">
          <div className="text-sm font-bold text-gray-900">Rizki Pratama</div>
          <div className="text-xs text-green-500 font-medium">● Online</div>
        </div>
        <div className="flex gap-2">
          <button className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="#374151" strokeWidth="1.8" strokeLinecap="round" /></svg>
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="5" r="1.5" fill="#374151" /><circle cx="12" cy="12" r="1.5" fill="#374151" /><circle cx="12" cy="19" r="1.5" fill="#374151" /></svg>
          </button>
        </div>
      </div>

      {/* Session label */}
      <div className="flex items-center justify-between bg-violet-50 px-4 py-2">
        <div className="flex items-center gap-2">
          <span className="text-violet-600">📅</span>
          <span className="text-xs font-semibold text-violet-700">Konsultasi Graduation · 15 April 2026</span>
        </div>
        <span className="text-gray-400">⏰</span>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3">
        <div className="text-center text-xs text-gray-400">Hari ini · 09:28</div>

        {/* Received */}
        <div className="flex items-end gap-2 max-w-[80%]">
          <div className="h-7 w-7 flex-shrink-0 rounded-full bg-gray-200" style={{ backgroundImage: 'url(https://i.pravatar.cc/80?img=11)', backgroundSize: 'cover' }} />
          <div>
            <div className="rounded-2xl rounded-bl-sm bg-gray-100 px-3.5 py-2.5">
              <p className="text-sm text-gray-800">Halo! Terima kasih sudah menghubungi saya. Saya bisa bantu untuk acara graduation. Bisa ceritakan lebih detail kebutuhannya? 😊</p>
            </div>
            <span className="mt-1 text-[10px] text-gray-400">09:28</span>
          </div>
        </div>

        {/* Sent */}
        <div className="flex justify-end">
          <div className="max-w-[75%]">
            <div className="rounded-2xl rounded-br-sm px-3.5 py-2.5 text-white" style={{ backgroundColor: '#7C3AED' }}>
              <p className="text-sm">Hai Rizki! Saya butuh fotografer untuk wisuda di Universitas Petra tanggal 15 April. Sekitar 3 jam acara indoor.</p>
            </div>
            <div className="mt-1 flex justify-end items-center gap-1">
              <span className="text-[10px] text-gray-400">09:30</span>
              <span className="text-[10px] text-violet-400">✓✓</span>
            </div>
          </div>
        </div>

        {/* File attachment */}
        <div className="flex items-end gap-2 max-w-[80%]">
          <div className="h-7 w-7 flex-shrink-0 rounded-full bg-gray-200" style={{ backgroundImage: 'url(https://i.pravatar.cc/80?img=11)', backgroundSize: 'cover' }} />
          <div>
            <div className="rounded-2xl rounded-bl-sm bg-gray-100 px-3.5 py-2.5">
              <p className="text-sm text-gray-800 mb-2">Saya kirim brief lengkap untuk referensi:</p>
              <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-600 flex-shrink-0">
                  <span className="text-xs font-bold text-white">PDF</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-medium text-gray-800 truncate">Brief_Graduation_...</div>
                  <div className="text-[10px] text-gray-400">PDF · 1.2 MB · 4 halaman</div>
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
            </div>
            <span className="mt-1 text-[10px] text-gray-400">09:32</span>
          </div>
        </div>

        {/* Schedule proposal */}
        <div className="flex justify-end">
          <div className="max-w-[80%]">
            <div className="rounded-2xl rounded-br-sm bg-violet-600 px-3.5 py-2.5 text-white">
              <p className="text-sm mb-2">Saya usul jadwal alternatif:</p>
              <div className="rounded-xl bg-white/20 p-3">
                <p className="text-xs font-semibold mb-2 text-white/90">📅 Usulan Jadwal Sesi</p>
                {[
                  { date: 'Sabtu, 15 April 2026', time: '09:00 – 12:00 WIB', avail: true },
                  { date: 'Minggu, 16 April 2026', time: '10:00 – 13:00 WIB', avail: true },
                ].map((slot) => (
                  <div key={slot.date} className="mb-2 flex items-center justify-between rounded-lg bg-white/10 px-3 py-2">
                    <div>
                      <div className="text-xs font-medium text-white">{slot.date}</div>
                      <div className="text-[10px] text-white/70">{slot.time}</div>
                    </div>
                    <span className="rounded-full bg-green-500 px-2 py-0.5 text-[10px] font-semibold text-white">Tersedia</span>
                  </div>
                ))}
                <div className="flex gap-2 mt-2">
                  <button className="flex-1 rounded-lg bg-white py-1.5 text-xs font-semibold text-violet-700">✓ Pilih Sabtu</button>
                  <button className="flex-1 rounded-lg bg-white/10 py-1.5 text-xs font-medium text-white">Lihat Lainnya</button>
                </div>
              </div>
            </div>
            <div className="mt-1 flex justify-end items-center gap-1">
              <span className="text-[10px] text-gray-400">09:35</span>
              <span className="text-[10px] text-violet-400">✓✓</span>
            </div>
          </div>
        </div>

        {/* Location card */}
        <div className="flex items-end gap-2 max-w-[80%]">
          <div className="h-7 w-7 flex-shrink-0 rounded-full bg-gray-200" style={{ backgroundImage: 'url(https://i.pravatar.cc/80?img=11)', backgroundSize: 'cover' }} />
          <div>
            <div className="rounded-2xl rounded-bl-sm bg-gray-100 overflow-hidden w-56">
              <div className="h-24 bg-blue-100 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-6 w-6 rounded-full bg-red-500 flex items-center justify-center">
                    <div className="h-3 w-3 rounded-full bg-white" />
                  </div>
                </div>
                <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'url(https://maps.googleapis.com/maps/api/staticmap?center=-7.32,112.75&zoom=15&size=200x100)', backgroundSize: 'cover' }} />
              </div>
              <div className="p-2.5">
                <div className="flex items-center gap-1.5">
                  <span className="text-pink-500">📍</span>
                  <div>
                    <div className="text-xs font-semibold text-gray-900">Universitas Petra Surabaya</div>
                    <div className="text-[10px] text-gray-400">Jl. Siwalankerto No.121–131, Surabaya</div>
                  </div>
                </div>
              </div>
            </div>
            <span className="mt-1 text-[10px] text-gray-400">09:40</span>
          </div>
        </div>

        {/* Booking summary */}
        <div className="rounded-2xl border border-green-200 bg-green-50 p-3.5">
          <div className="mb-2 flex items-center gap-2">
            <div className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center">
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </div>
            <span className="text-xs font-semibold text-green-800">Konsultasi Selesai!</span>
          </div>
          <p className="text-[11px] text-green-700 mb-2">Detail sesi telah disetujui bersama</p>
          <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-[11px] mb-3">
            <div><div className="text-gray-400 uppercase text-[9px] font-semibold tracking-wide">Tanggal</div><div className="font-semibold text-gray-900">Sabtu, 15 Apr</div></div>
            <div><div className="text-gray-400 uppercase text-[9px] font-semibold tracking-wide">Waktu</div><div className="font-semibold text-gray-900">09:00 – 12:00</div></div>
            <div><div className="text-gray-400 uppercase text-[9px] font-semibold tracking-wide">Paket</div><div className="font-semibold text-gray-900">Standard</div></div>
            <div><div className="text-gray-400 uppercase text-[9px] font-semibold tracking-wide">Total</div><div className="font-semibold" style={{ color: '#7C3AED' }}>Rp 1.350.000</div></div>
          </div>
          <Link href="/booking/terms" className="block w-full rounded-xl py-2.5 text-center text-sm font-semibold text-white" style={{ backgroundColor: '#7C3AED' }}>
            📅 Book Sekarang
            <div className="text-[10px] font-normal opacity-80">Lanjut ke Syarat &amp; Ketentuan</div>
          </Link>
        </div>
      </div>

      {/* Input bar */}
      <div className="flex items-center gap-2 border-t border-gray-100 bg-white px-4 py-3">
        <button className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gray-100">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="#374151" strokeWidth="2" strokeLinecap="round" /></svg>
        </button>
        <div className="flex-1 rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-400">Ketik pesan...</div>
        <button className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gray-100">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#374151" strokeWidth="1.8" /><path d="M12 7v5l3 3" stroke="#374151" strokeWidth="1.8" strokeLinecap="round" /></svg>
        </button>
        <button className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: '#7C3AED' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M22 2L11 13M22 2L15 22 11 13 2 9l20-7z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
      </div>
    </div>
  );
}
