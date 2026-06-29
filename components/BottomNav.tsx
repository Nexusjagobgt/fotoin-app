'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Mode = 'client' | 'photographer';

const clientTabs = [
  {
    label: 'Home',
    href: '/home',
    activeIcon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M3 12L12 4l9 8v8a1 1 0 01-1 1H5a1 1 0 01-1-1v-8z" fill="#7C3AED" />
      </svg>
    ),
    inactiveIcon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M3 12L12 4l9 8v8a1 1 0 01-1 1H5a1 1 0 01-1-1v-8z" stroke="#9CA3AF" strokeWidth="1.8" fill="none" />
      </svg>
    ),
  },
  {
    label: 'Connect',
    href: '/connect',
    activeIcon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" fill="#7C3AED" />
        <path d="M12 8v4M10 12h4" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    inactiveIcon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#9CA3AF" strokeWidth="1.8" />
        <path d="M12 8v4M10 12h4" stroke="#9CA3AF" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'Sports',
    href: '/sports',
    activeIcon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="#7C3AED" stroke="#7C3AED" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    inactiveIcon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#9CA3AF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'Bookings',
    href: '/bookings',
    activeIcon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="18" rx="2" fill="#7C3AED" />
        <path d="M16 2v4M8 2v4M3 10h18" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    inactiveIcon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="18" rx="2" stroke="#9CA3AF" strokeWidth="1.8" />
        <path d="M16 2v4M8 2v4M3 10h18" stroke="#9CA3AF" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'Messages',
    href: '/messages',
    activeIcon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" fill="#7C3AED" />
      </svg>
    ),
    inactiveIcon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="#9CA3AF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const photographerTabs = [
  clientTabs[0],
  clientTabs[1],
  { ...clientTabs[2], href: '/photographer/sports' },
  clientTabs[3],
  {
    label: 'Profil',
    href: '/photographer/portfolio',
    activeIcon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="7" r="4" fill="#7C3AED" />
        <path d="M4 21v-1a8 8 0 0116 0v1" fill="#7C3AED" />
      </svg>
    ),
    inactiveIcon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="7" r="4" stroke="#9CA3AF" strokeWidth="1.8" />
        <path d="M4 21v-1a8 8 0 0116 0v1" stroke="#9CA3AF" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function BottomNav({ mode = 'client' }: { mode?: Mode }) {
  const pathname = usePathname();
  const tabs = mode === 'photographer' ? photographerTabs : clientTabs;

  return (
    <div className="flex items-center justify-around border-t border-gray-100 bg-white pt-2 pb-4">
      {tabs.map((tab) => {
        const isActive = pathname === tab.href || pathname.startsWith(tab.href + '/');
        return (
          <Link key={tab.href} href={tab.href} className="flex flex-col items-center gap-[3px]">
            {isActive ? tab.activeIcon : tab.inactiveIcon}
            <span className="text-[10px] leading-3" style={{ color: isActive ? '#7C3AED' : '#9CA3AF', fontWeight: isActive ? 600 : 400 }}>
              {tab.label}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
