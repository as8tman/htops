export const iconBell = (
  <svg viewBox="0 0 24 24" fill="none" width="24" height="24">
    <path d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13.73 21a2 2 0 01-3.46 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const iconMenu = (
  <svg viewBox="0 0 24 24" fill="none" width="24" height="24">
    <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const iconChevronRight = (
  <svg viewBox="0 0 20 20" fill="none" width="20" height="20">
    <path d="M7.5 5l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const iconChevronDown = (
  <svg viewBox="0 0 20 20" fill="none" width="20" height="20">
    <path d="M5 7.5l5 5 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const iconChevronUp = (
  <svg viewBox="0 0 20 20" fill="none" width="20" height="20">
    <path d="M5 12.5l5-5 5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const iconEye = (
  <svg viewBox="0 0 20 20" fill="none" width="20" height="20">
    <path d="M2.5 10s3-6 7.5-6 7.5 6 7.5 6-3 6-7.5 6S2.5 10 2.5 10z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="10" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.4" />
  </svg>
);

export const iconInfoOutline = (
  <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
    <path d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13.73 21a2 2 0 01-3.46 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const iconAvatar = (
  <svg viewBox="0 0 24 24" fill="none" width="28" height="28">
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

export const iconNavHome = (
  <svg viewBox="0 0 24 24" fill="none" width="24" height="24">
    <path
      d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const iconNavInsight = (
  <svg viewBox="0 0 24 24" fill="none" width="24" height="24">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6" />
    <path d="M12 16v-4M12 8h.01" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

export const iconNavLearn = (
  <svg viewBox="0 0 24 24" fill="none" width="24" height="24">
    <path d="M4 19.5A2.5 2.5 0 016.5 17H20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const iconNavActivity = (
  <svg viewBox="0 0 24 24" fill="none" width="24" height="24">
    <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.6" />
    <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

export const iconNavMy = (
  <svg viewBox="0 0 24 24" fill="none" width="24" height="24">
    <path
      d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

export const BOTTOM_NAV_ITEMS = [
  { label: '홈', value: 'main', icon: iconNavHome },
  { label: '시각', value: 'insight', icon: iconNavInsight },
  { label: '학습', value: 'learn', icon: iconNavLearn },
  { label: '활동', value: 'activity', icon: iconNavActivity },
  { label: '마이', value: 'mypage', icon: iconNavMy },
];
