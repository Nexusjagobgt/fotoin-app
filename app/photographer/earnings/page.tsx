import Link from 'next/link';

const transactions = [
  { name: 'Christian · Event', date: '15 Apr · ✅ Selesai', gross: '+Rp 945.000', fee: '–Rp 105.000 fee', avatar: 'https://i.pravatar.cc/40?img=33' },
  { name: 'Anisa · Wedding', date: '12 Apr · ✅ Selesai', gross: '+Rp 1.215.000', fee: '–Rp 135.000 fee', avatar: 'https://i.pravatar.cc/40?img=25' },
  { name: 'Fajar · Product', date: '8 Apr · ✅ Selesai', gross: '+Rp 567.000', fee: '–Rp 63.000 fee', avatar: 'https://i.pravatar.cc/40?img=15' },
];

const bars = [
  { label: 'Mg 1', val: 750, max: 1100 },
  { label: 'Mg 2', val: 1100, max: 1100 },
  { label: 'Mg 3', val: 850, max: 1100 },
  { label: 'Mg 4', val: 900, max: 1100 },
];

export default function EarningsPage() {
  return (
    <div className="flex min-h-svh flex-col bg-white">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-gray-100 px-4 py-3">
        <Link href="/photographer/dashboard" className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M19 12H5M12 19l-7-7 7-7" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </Link>
        <span className="text-base font-bold text-gray-900">Penghasilan</span>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4">
        {/* Period tabs */}
        <div className="flex gap-2 mb-4">
          {['Bulan Ini', 'Minggu Ini', '3 Bulan', 'Custom'].map((t, i) => (
            <button
              key={t}
              className="rounded-full px-3 py-1.5 text-xs font-medium"
              style={{ backgroundColor: i === 0 ? '#7C3AED' : 'white', color: i === 0 ? 'white' : '#374151', border: i > 0 ? '1px solid #E5E7EB' : 'none' }}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Summary stats */}
        <div className="mb-4 grid grid-cols-3 gap-3">
          {[
            { label: 'Total', val: 'Rp 3,5jt', sub: '+8%', subColor: '#16A34A' },
            { label: 'Sesi Selesai', val: '18', sub: '', subColor: '' },
            { label: 'Rata-rata', val: '194rb', sub: '', subColor: '' },
          ].map((s) => (
            <div key={s.label} className="rounded-xl border border-gray-100 bg-gray-50 p-3 text-center">
              <div className="text-[10px] text-gray-400">{s.label}</div>
              <div className="text-base font-extrabold" style={{ color: s.label === 'Total' ? '#7C3AED' : '#111827' }}>{s.val}</div>
              {s.sub && <div className="text-[10px] font-semibold" style={{ color: s.subColor }}>{s.sub}</div>}
            </div>
          ))}
        </div>

        {/* Weekly bar chart */}
        <div className="mb-4 rounded-2xl border border-gray-100 bg-gray-50 p-4">
          <div className="mb-3 text-sm font-bold text-gray-900">Penghasilan per Minggu</div>
          <div className="flex items-end gap-3 h-24">
            {bars.map((bar) => (
              <div key={bar.label} className="flex flex-1 flex-col items-center gap-1">
                <div className="text-[9px] text-gray-400">{bar.val >= 1000 ? `${bar.val/1000}jt` : `${bar.val}rb`}</div>
                <div
                  className="w-full rounded-t-xl"
                  style={{
                    height: `${(bar.val / bar.max) * 64}px`,
                    backgroundColor: bar.val === bar.max ? '#7C3AED' : '#EDE9FE',
                  }}
                />
                <div className="text-[9px] text-gray-400">{bar.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Transactions */}
        <div className="mb-4">
          <div className="mb-3 text-sm font-bold text-gray-900">Riwayat Transaksi</div>
          {transactions.map((tx) => (
            <div key={tx.name} className="flex items-center gap-3 py-3 border-b border-gray-50 last:border-0">
              <div className="h-10 w-10 flex-shrink-0 rounded-full" style={{ backgroundImage: `url(${tx.avatar})`, backgroundSize: 'cover' }} />
              <div className="flex-1">
                <div className="text-sm font-semibold text-gray-900">{tx.name}</div>
                <div className="text-xs text-gray-400">{tx.date}</div>
              </div>
              <div className="text-right">
                <div className="text-sm font-bold text-green-600">{tx.gross}</div>
                <div className="text-[10px] text-gray-400">{tx.fee}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Balance + withdraw */}
        <div className="rounded-2xl bg-gray-50 border border-gray-100 p-4 flex items-center justify-between">
          <div>
            <div className="text-xs text-gray-400">Saldo Tersedia</div>
            <div className="text-xl font-extrabold text-gray-900">Rp 3.500.000</div>
          </div>
          <button className="rounded-xl bg-green-500 px-4 py-2.5 text-sm font-bold text-white">
            💰 Tarik Dana
          </button>
        </div>
      </div>
    </div>
  );
}
