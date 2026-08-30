// H-TOPS 화면 구현용 공통 헬퍼 (JSX 포함)
// 기존 디자인 시스템 컴포넌트(components/)를 조합해 화면을 구성하는 데 쓰이는
// 공용 아이콘, 공통 레이아웃(화면 스크롤 프레임, 섹션 헤더, 상단 유틸 바) 등을 제공한다.

import styles from './screens.module.css';

/* ----------------------------------------------------------------
 * 아이콘 (SVG)
 * ---------------------------------------------------------------- */

function Svg({ size = 20, viewBox = '0 0 20 20', children }) {
  return (
    <svg viewBox={viewBox} width={size} height={size} fill="none" aria-hidden="true">
      {children}
    </svg>
  );
}

export const iconHome = (
  <Svg>
    <path d="M3 9.5 10 3l7 6.5V17a1 1 0 0 1-1 1h-4v-4h-4v4H4a1 1 0 0 1-1-1V9.5z" fill="currentColor" />
  </Svg>
);

export const iconHomeOutline = (
  <Svg>
    <path d="M3 9.5 10 3l7 6.5V17a1 1 0 0 1-1 1h-4v-4h-4v4H4a1 1 0 0 1-1-1V9.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </Svg>
);

export const iconSearch = (
  <Svg>
    <circle cx="9" cy="9" r="5.5" stroke="currentColor" strokeWidth="1.6" />
    <path d="M13.5 13.5 17 17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </Svg>
);

export const iconSearchOutline = (
  <Svg>
    <circle cx="9" cy="9" r="5.5" stroke="currentColor" strokeWidth="1.4" />
    <path d="M13.5 13.5 17 17" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </Svg>
);

export const iconBenefit = (
  <Svg>
    <path d="M10 3l2.1 4.26 4.7.68-3.4 3.32.8 4.68L10 13.9l-4.2 2.04.8-4.68-3.4-3.32 4.7-.68L10 3z" fill="currentColor" />
  </Svg>
);

export const iconBenefitOutline = (
  <Svg>
    <path d="M10 3l2.1 4.26 4.7.68-3.4 3.32.8 4.68L10 13.9l-4.2 2.04.8-4.68-3.4-3.32 4.7-.68L10 3z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
  </Svg>
);

export const iconUser = (
  <Svg>
    <circle cx="10" cy="7" r="3.5" stroke="currentColor" strokeWidth="1.6" />
    <path d="M3.5 17a6.5 6.5 0 0 1 13 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </Svg>
);

export const iconUserFilled = (
  <Svg>
    <path d="M10 3.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7z" fill="currentColor" />
    <path d="M3.5 17a6.5 6.5 0 0 1 13 0" fill="currentColor" />
  </Svg>
);

export const iconBell = (
  <Svg>
    <path d="M10 3a4.5 4.5 0 0 0-4.5 4.5c0 3-1.2 4-1.5 4.5h12c-.3-.5-1.5-1.5-1.5-4.5A4.5 4.5 0 0 0 10 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M8.5 15.5a1.5 1.5 0 0 0 3 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </Svg>
);

export const iconBellOutline = (
  <Svg>
    <path d="M10 3a4.5 4.5 0 0 0-4.5 4.5c0 3-1.2 4-1.5 4.5h12c-.3-.5-1.5-1.5-1.5-4.5A4.5 4.5 0 0 0 10 3z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
    <path d="M8.5 15.5a1.5 1.5 0 0 0 3 0" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
  </Svg>
);

export const iconSettings = (
  <Svg>
    <circle cx="10" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.6" />
    <path d="M10 3v2M10 15v2M3 10h2M15 10h2M5.2 5.2l1.4 1.4M13.4 13.4l1.4 1.4M14.8 5.2l-1.4 1.4M6.6 13.4l-1.4 1.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </Svg>
);

export const iconEdit = (
  <Svg>
    <path d="M4 16.5l.5-2 8-8 2 2-8 8-2 .5zM13 5.5l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </Svg>
);

export const iconChevronRight = (
  <Svg>
    <path d="M7.5 5l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

export const iconLock = (
  <Svg>
    <rect x="4.5" y="9" width="11" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M7 9V7a3 3 0 0 1 6 0v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </Svg>
);

export const iconEye = (
  <Svg>
    <path d="M2.5 10S5.5 5.5 10 5.5 17.5 10 17.5 10 14.5 14.5 10 14.5 2.5 10 2.5 10z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <circle cx="10" cy="10" r="2.2" stroke="currentColor" strokeWidth="1.5" />
  </Svg>
);

export const iconEyeOff = (
  <Svg>
    <path d="M4 4l12 12M9.5 6.1A9.4 9.4 0 0 1 10 6c4.5 0 7.5 4 7.5 4a13.6 13.6 0 0 1-2.3 2.6M13.9 14C12.7 14.7 11.4 15 10 15c-4.5 0-7.5-4-7.5-4a13.7 13.7 0 0 1 3-3.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

export const iconContract = (
  <Svg>
    <path d="M6.5 3h7a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8 7h4M8 10h4M8 13h2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </Svg>
);

export const iconDocument = (
  <Svg>
    <path d="M6 3h5l4 4v10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M11 3v4h4" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </Svg>
);

export const iconArrowRight = (
  <Svg>
    <path d="M4 10h12M11 5.5 15.5 10 11 14.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

export const iconLogout = (
  <Svg>
    <path d="M9 3.5H5a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h4M13.5 6.5 17 10l-3.5 3.5M17 10H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

/* ----------------------------------------------------------------
 * 공통 레이아웃
 * ---------------------------------------------------------------- */

/**
 * 앱 화면을 감싸는 세로형 스크롤 콘테이너.
 * 실제 모바일 화면 안 단일 화면을 구현할 때 사용한다.
 */
export function Screen({ children, className, ...rest }) {
  return (
    <div className={[styles.screen, className].filter(Boolean).join(' ')} {...rest}>
      {children}
    </div>
  );
}

/**
 * 화면 상단 유틸 바 (돌아가기/닫기 등 좌측, 액션 우측)
 */
export function TopBar({ leading, title, trailing, className, ...rest }) {
  return (
    <div className={[styles.topBar, className].filter(Boolean).join(' ')} {...rest}>
      {leading ? <div className={styles.topBarSide}>{leading}</div> : <span />}
      {title ? <div className={styles.topBarTitle}>{title}</div> : null}
      {trailing ? <div className={styles.topBarSide}>{trailing}</div> : <span />}
    </div>
  );
}

/**
 * 컨텐츠 위아래 여백을 주는 본문 영역
 */
export function Content({ children, className, ...rest }) {
  return (
    <div className={[styles.content, className].filter(Boolean).join(' ')} {...rest}>
      {children}
    </div>
  );
}

/**
 * 섹션 로우 타이틀 (+ 선택적 트레일링)
 */
export function SectionRow({ title, trailing, className, ...rest }) {
  return (
    <div className={[styles.sectionRow, className].filter(Boolean).join(' ')} {...rest}>
      <span className={styles.sectionRowTitle}>{title}</span>
      {trailing && <span className={styles.sectionRowTrailing}>{trailing}</span>}
    </div>
  );
}

/**
 * 하단 고정 버튼 영역 (ButtonFixed 와 함께 사용)
 */
export function FixedAction({ children }) {
  return <div className={styles.fixedAction}>{children}</div>;
}
