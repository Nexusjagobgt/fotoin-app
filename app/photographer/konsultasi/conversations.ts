export type ConversationMessage = {
  id: string;
  sender: 'customer' | 'photographer';
  text: string;
  time: string;
  read?: boolean;
};

export type ConsultationConversation = {
  id: string;
  name: string;
  avatar: string;
  service: string;
  eventDetail: string;
  lastMessage: string;
  time: string;
  unreadCount: number;
  messages: ConversationMessage[];
};

export const consultations: ConsultationConversation[] = [
  {
    id: 'maya', name: 'Maya Kusuma', avatar: 'https://i.pravatar.cc/150?img=5', service: 'Wedding Photography',
    eventDetail: '15 April 2026 · Surabaya', lastMessage: 'Saya tertarik paket wedding, bisa diskusi?', time: '10:42', unreadCount: 1,
    messages: [
      { id: 'maya-1', sender: 'customer', text: 'Halo kak, saya tertarik paket wedding. Bisa diskusi?', time: '10:42' },
      { id: 'maya-2', sender: 'photographer', text: 'Halo kak, tentu bisa 😊 Untuk acaranya rencana tanggal berapa ya?', time: '10:45', read: true },
      { id: 'maya-3', sender: 'customer', text: 'Tanggal 15 April, di Surabaya.', time: '10:50' },
      { id: 'maya-4', sender: 'photographer', text: 'Baik kak. Untuk tanggal itu saya masih available. Apakah kakak butuh dokumentasi akad, resepsi, atau keduanya?', time: '10:52', read: true },
      { id: 'maya-5', sender: 'customer', text: 'Kemungkinan akad dan resepsi. Ada paket 5 jam?', time: '10:55' },
      { id: 'maya-6', sender: 'photographer', text: 'Ada kak. Nanti saya bisa jelaskan detail paket dan estimasi harganya ya.', time: '11:00' },
    ],
  },
  {
    id: 'christian', name: 'Christian', avatar: 'https://i.pravatar.cc/150?img=33', service: 'Graduation Photography',
    eventDetail: '15 April 2026 · Universitas Petra', lastMessage: 'Kak, untuk wisuda tanggal 15 April masih available?', time: '09:15', unreadCount: 1,
    messages: [
      { id: 'christian-1', sender: 'customer', text: 'Kak, untuk wisuda tanggal 15 April masih available?', time: '09:15' },
      { id: 'christian-2', sender: 'photographer', text: 'Masih available. Acaranya di kampus mana dan mulai jam berapa?', time: '09:20', read: true },
      { id: 'christian-3', sender: 'customer', text: 'Di Universitas Petra, mulai sekitar jam 09.00.', time: '09:24' },
    ],
  },
  {
    id: 'dito', name: 'Dito P.', avatar: 'https://i.pravatar.cc/150?img=15', service: 'Product Photography',
    eventDetail: '22 April 2026 · Studio Surabaya', lastMessage: 'Saya mau foto produk skincare, bisa indoor studio?', time: 'Kemarin', unreadCount: 0,
    messages: [
      { id: 'dito-1', sender: 'customer', text: 'Saya mau foto produk skincare, bisa indoor studio?', time: '14:10' },
      { id: 'dito-2', sender: 'photographer', text: 'Bisa kak. Berapa jumlah produknya dan konsep fotonya seperti apa?', time: '14:18', read: true },
      { id: 'dito-3', sender: 'customer', text: 'Ada 12 produk, konsepnya clean dengan latar putih.', time: '14:25' },
    ],
  },
  {
    id: 'sari', name: 'Sari Dewi', avatar: 'https://i.pravatar.cc/150?img=25', service: 'Sweet Seventeen Photography',
    eventDetail: '5 April 2026 · Tunjungan Plaza', lastMessage: 'Kalau paket 3 jam include edit foto ya?', time: 'Kemarin', unreadCount: 0,
    messages: [
      { id: 'sari-1', sender: 'customer', text: 'Kalau paket 3 jam include edit foto ya?', time: '16:30' },
      { id: 'sari-2', sender: 'photographer', text: 'Iya kak, termasuk foto pilihan yang sudah diedit.', time: '16:36', read: true },
      { id: 'sari-3', sender: 'customer', text: 'Baik, acaranya di Tunjungan Plaza tanggal 5 April.', time: '16:40' },
    ],
  },
  {
    id: 'siska', name: 'Siska', avatar: 'https://i.pravatar.cc/150?img=20', service: 'Pre-Wedding',
    eventDetail: '10 April 2026 · Kebun Raya', lastMessage: 'Untuk pre-wedding konsep outdoor bisa kan?', time: '09:00', unreadCount: 0,
    messages: [
      { id: 'siska-1', sender: 'customer', text: 'Halo kak, untuk pre-wedding konsep outdoor bisa kan?', time: '08:50' },
      { id: 'siska-2', sender: 'photographer', text: 'Bisa banget kak Siska, di Kebun Raya sangat cocok.', time: '08:55', read: true },
      { id: 'siska-3', sender: 'customer', text: 'Oke sip, saya tunggu ya.', time: '09:00' },
    ],
  },
  {
    id: 'rendra', name: 'Rendra', avatar: 'https://i.pravatar.cc/150?img=11', service: 'Corporate Event',
    eventDetail: '12 April 2026 · Hotel Majapahit', lastMessage: 'Baik, lokasi tetap di Hotel Majapahit.', time: '08:30', unreadCount: 1,
    messages: [
      { id: 'rendra-1', sender: 'customer', text: 'Halo kak, untuk corporate event tanggal 12 April sudah siap ya?', time: '08:00' },
      { id: 'rendra-2', sender: 'photographer', text: 'Siap Pak Rendra, jadwal sudah saya catat jam 09:00.', time: '08:15', read: true },
      { id: 'rendra-3', sender: 'customer', text: 'Baik, lokasi tetap di Hotel Majapahit.', time: '08:30' },
    ],
  },
  {
    id: 'budi', name: 'Budi Santoso', avatar: 'https://i.pravatar.cc/150?img=11', service: 'Sports Photography',
    eventDetail: '20 April 2026 · Stadion Gelora', lastMessage: 'Untuk event lari 20 April, cara bookingnya gimana?', time: 'Senin', unreadCount: 0,
    messages: [
      { id: 'budi-1', sender: 'customer', text: 'Untuk event lari 20 April, cara bookingnya gimana?', time: '08:05' },
      { id: 'budi-2', sender: 'photographer', text: 'Bisa buat booking event Sports, lalu kirim detail rute dan jadwal start ya kak.', time: '08:12', read: true },
      { id: 'budi-3', sender: 'customer', text: 'Start jam 07.00 di Stadion Gelora, durasinya sekitar 3 jam.', time: '08:18' },
    ],
  },
  {
    id: 'fajar', name: 'Fajar Nugraha', avatar: 'https://i.pravatar.cc/150?img=59', service: 'Food Photography',
    eventDetail: '24 April 2026 · Cafe Darmo', lastMessage: 'Saya butuh foto menu cafe untuk katalog.', time: '4 hr', unreadCount: 0,
    messages: [
      { id: 'fajar-1', sender: 'customer', text: 'Saya butuh foto menu cafe untuk katalog.', time: '11:05' },
      { id: 'fajar-2', sender: 'photographer', text: 'Siap kak. Ada berapa menu yang perlu difoto?', time: '11:12', read: true },
      { id: 'fajar-3', sender: 'customer', text: 'Sekitar 20 menu makanan dan minuman.', time: '11:17' },
    ],
  },
  {
    id: 'olivia', name: 'Olivia Tan', avatar: 'https://i.pravatar.cc/150?img=47', service: 'Corporate Photography',
    eventDetail: '27 April 2026 · Hotel Majapahit', lastMessage: 'Apakah bisa dokumentasi seminar kantor?', time: '5 hr', unreadCount: 0,
    messages: [
      { id: 'olivia-1', sender: 'customer', text: 'Apakah bisa dokumentasi seminar kantor?', time: '10:10' },
      { id: 'olivia-2', sender: 'photographer', text: 'Bisa. Berapa lama seminar dan perkiraan jumlah pesertanya?', time: '10:16', read: true },
      { id: 'olivia-3', sender: 'customer', text: 'Seminarnya 6 jam dengan sekitar 150 peserta.', time: '10:22' },
    ],
  },
  {
    id: 'clara', name: 'Clara Wijaya', avatar: 'https://i.pravatar.cc/150?img=43', service: 'Birthday Photography',
    eventDetail: '3 Mei 2026 · Pakuwon City', lastMessage: 'Kak, available untuk ulang tahun anak minggu depan?', time: '1 mgg', unreadCount: 0,
    messages: [
      { id: 'clara-1', sender: 'customer', text: 'Kak, available untuk ulang tahun anak minggu depan?', time: '13:40' },
      { id: 'clara-2', sender: 'photographer', text: 'Available kak. Acaranya tanggal dan lokasi mana?', time: '13:46', read: true },
      { id: 'clara-3', sender: 'customer', text: 'Tanggal 3 Mei di Pakuwon City.', time: '13:50' },
    ],
  },
];

const legacyBookingConversationIds: Record<string, string> = {
  '1': 'christian',
  '2': 'maya',
  '3': 'dito',
  '4': 'siska',
  '5': 'rendra',
  '6': 'sari',
  '10': 'budi',
};

export function getConsultationById(id: string): ConsultationConversation | undefined {
  const conversationId = legacyBookingConversationIds[id] ?? id;
  return consultations.find((conversation) => conversation.id === conversationId);
}
