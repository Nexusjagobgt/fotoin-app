'use client';
import Link from 'next/link';
import Image from 'next/image';

// Simple mock data fallback for the detail view
const getMockBookingDetail = (id: string) => {
  return {
    id,
    name: 'Christian',
    service: 'Wedding Photography',
    status: 'Terkonfirmasi',
    date: '15 April 2026',
    time: '09:00 - 14:00 WIB',
    duration: '5 jam',
    location: 'Universitas Petra, Surabaya',
    package: 'Wedding 5 Jam',
    price: 'Rp2.000.000',
    note: '“Mohon dokumentasi akad dan resepsi.”',
    paymentStatus: 'Sudah Dibayar',
    avatar: 'https://i.pravatar.cc/150?img=33'
  };
};

export default function BookingDetailPage({ params }: { params: { id: string } }) {
  const booking = getMockBookingDetail(params.id);

  return (
    <div className="flex flex-col h-svh bg-gray-50">
      {/* Header */}
      <div className="bg-white px-4 py-3 border-b border-gray-100 flex items-center justify-between shrink-0 shadow-sm z-10 sticky top-0">
        <div className="flex items-center gap-2">
          <Link href="/photographer/pesanan" className="p-2 -ml-2 rounded-full hover:bg-gray-50 active:bg-gray-100 transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          </Link>
          <h1 className="font-bold text-[16px] text-gray-900">Detail Pesanan</h1>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pb-24">
        {/* Status Banner */}
        <div className="bg-green-50 px-5 py-3 border-b border-green-100 flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-green-500"></div>
          <span className="text-[12px] font-bold text-green-700">Terkonfirmasi</span>
        </div>

        <div className="px-5 py-5 flex flex-col gap-5">
          {/* Customer Info */}
          <div>
            <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3">Customer</h3>
            <div className="flex items-center justify-between bg-white p-3.5 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gray-100 relative shrink-0">
                  <Image src={booking.avatar} alt={booking.name} fill className="object-cover rounded-full" />
                </div>
                <div className="font-bold text-[15px] text-gray-900">{booking.name}</div>
              </div>
              <Link href={`/photographer/konsultasi/${booking.id}?from=pesanan-aktif`} className="px-3 py-1.5 bg-violet-50 text-violet-700 text-[11px] font-bold rounded-lg active:bg-violet-100 transition-colors">
                Chat
              </Link>
            </div>
          </div>

          {/* Booking Details */}
          <div>
            <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3">Informasi Pesanan</h3>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] overflow-hidden">
              <div className="p-4 border-b border-gray-50">
                <div className="text-[11px] text-gray-500 font-medium mb-1">Layanan</div>
                <div className="font-bold text-[14px] text-gray-900">{booking.service}</div>
              </div>
              
              <div className="p-4 border-b border-gray-50 flex items-start gap-3">
                <div className="mt-0.5 text-gray-400">📅</div>
                <div>
                  <div className="text-[11px] text-gray-500 font-medium mb-1">Jadwal</div>
                  <div className="font-bold text-[14px] text-gray-900">{booking.date}</div>
                  <div className="text-[13px] text-gray-600 font-medium">{booking.time}</div>
                </div>
              </div>

              <div className="p-4 border-b border-gray-50 flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 text-gray-400">📍</div>
                  <div>
                    <div className="text-[11px] text-gray-500 font-medium mb-1">Lokasi</div>
                    <div className="font-bold text-[14px] text-gray-900">{booking.location}</div>
                  </div>
                </div>
                <button className="px-3 py-1.5 bg-gray-100 text-gray-700 text-[11px] font-bold rounded-lg shrink-0 mt-3 active:bg-gray-200 transition-colors">
                  Buka Maps
                </button>
              </div>

              <div className="p-4 border-b border-gray-50">
                <div className="text-[11px] text-gray-500 font-medium mb-1">Paket yang dipilih</div>
                <div className="font-bold text-[14px] text-gray-900">{booking.package}</div>
              </div>

              <div className="p-4 bg-amber-50/50">
                <div className="text-[11px] text-amber-700 font-bold mb-1">Catatan Customer</div>
                <div className="font-medium text-[13px] text-gray-800 italic">{booking.note}</div>
              </div>
            </div>
          </div>

          {/* Payment Info */}
          <div>
            <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3">Pembayaran</h3>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] p-4">
              <div className="flex justify-between items-center mb-3">
                <div className="text-[13px] font-bold text-gray-900">Total Harga</div>
                <div className="text-[18px] font-extrabold text-gray-900">{booking.price}</div>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-[12px] text-gray-500 font-medium">Status Pembayaran</div>
                <div className="px-2 py-1 bg-green-50 text-green-700 text-[10px] font-bold rounded border border-green-100">
                  {booking.paymentStatus}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Actions */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-5 py-4 pb-safe shadow-[0_-5px_15px_rgba(0,0,0,0.02)]">
        <div className="flex gap-3">
          <Link href="/photographer/jadwal" className="flex-1 flex justify-center items-center py-3.5 rounded-xl border border-gray-200 text-[13px] font-bold text-gray-700 bg-white active:bg-gray-50 transition-colors">
            Kelola Jadwal
          </Link>
          <Link href={`/photographer/konsultasi/${booking.id}?from=pesanan-aktif`} className="flex-1 flex justify-center items-center py-3.5 rounded-xl text-[13px] font-bold text-white bg-violet-600 shadow-sm active:bg-violet-700 transition-colors">
            Chat Customer
          </Link>
        </div>
      </div>
    </div>
  );
}
