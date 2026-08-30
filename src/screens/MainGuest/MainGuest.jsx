import { useEffect, useState } from 'react';
import { NavBar, IconButton, Indicator, Lists, Button, BottomNavigation, Texts } from '../../components';
import { iconBell, iconMenu, iconChevronRight, BOTTOM_NAV_ITEMS } from '../icons.jsx';
import AppMenuDrawer from '../AppMenuDrawer.jsx';
import styles from './MainGuest.module.css';

const KEY_POINTS = [
  { label: 'Key point 1', desc: '설명 텍스트' },
  { label: 'Key point 2', desc: '설명 텍스트' },
  { label: 'Key point 3', desc: '설명 텍스트' },
];

const HERO_SLIDES = [
  {
    badge: '관리자 등록 문구 1',
    title: (
      <>
        히어로 배너 1
        <br />
              (관리자 등록 문구)
      </>
    ),
  },
  {
    badge: '관리자 등록 문구 2',
    title: (
      <>
        히어로 배너 2
        <br />
        (이벤트 안내 문구)
      </>
    ),
  },
  {
    badge: '관리자 등록 문구 3',
    title: (
      <>
        히어로 배너 3
        <br />
        (공지사항 문구)
      </>
    ),
  },
];

const SLIDE_INTERVAL = 4000;

export default function MainGuest({ onNavigate }) {
  const [current, setCurrent] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.screen}>
      <NavBar
        logo="LIFE MD"
        actions={
          <>
              <IconButton icon={iconBell} variant="ghost" aria-label="알림" />
              <IconButton icon={iconMenu} variant="ghost" aria-label="전체 메뉴" onClick={() => setMenuOpen(true)} />
            </>
          }
        />

      <div className={styles.content}>
        <div className={styles.heroWrap}>
          <div
            className={styles.heroTrack}
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {HERO_SLIDES.map((slide, index) => (
              <div className={styles.hero} key={index} aria-hidden={current !== index}>
                <div className={styles.heroText}>
                  <Texts variant="caption" color="body3">{slide.badge}</Texts>
                  <Texts variant="title5" weight="bold">
                    {slide.title}
                  </Texts>
    </div>
                <div className={styles.heroImage}>
                  <span className={styles.placeholderLabel}>이미지 영역</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.indicatorRow}>
          <Indicator count={HERO_SLIDES.length} current={current} variant="dots" />
        </div>

        <div className={styles.section}>
          <Texts as="p" variant="title5" weight="bold" style={{ marginBottom: 16 }}>
            LIFE MD 픽 · Key point
          </Texts>
          <div className={styles.keyPoints}>
            {KEY_POINTS.map((kp) => (
              <div key={kp.label} className={styles.keyPoint}>
                <div className={styles.keyPointIcon}>
                  <span className={styles.placeholderLabel}>icon</span>
                </div>
                <Texts variant="body2">{kp.label}</Texts>
                <Texts variant="caption" color="body3">{kp.desc}</Texts>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.listSection}>
          <Lists
            items={[
              { title: 'LIFE MD 시각', description: 'LIFE MD잡 시각 콘텐츠', divider: true },
              { title: 'LIFE CANVAS', description: '멀티잡 콘텐츠 시각' },
            ]}
          />
        </div>

        <div className={styles.thickDivider} />

        <div className={styles.section} style={{ paddingTop: 20 }}>
          <div className={styles.sectionHeading}>
            <Texts variant="title5" weight="bold">이벤트 · 프로모션</Texts>
            <Texts variant="caption" color="body3">관리자 제어</Texts>
          </div>
          <button type="button" className={styles.eventCard}>
            <div className={styles.eventText}>
              <Texts variant="body1" weight="bold">이벤트 배너 타이틀</Texts>
              <Texts variant="caption" color="body3">이벤트 설명 텍스트</Texts>
            </div>
            <span className={styles.eventChevron}>{iconChevronRight}</span>
          </button>
        </div>
      </div>

      <div className={styles.fixedFooter}>
        <Button variant="primary" size="large" fullWidth onClick={() => onNavigate?.('login')}>
          온라인 지원하기
        </Button>
      </div>

      <BottomNavigation
        items={BOTTOM_NAV_ITEMS}
        value="main"
        onChange={(v) => v === 'mypage' && onNavigate?.('mypage')}
      />

      <AppMenuDrawer
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        onNavigate={onNavigate}
      />
    </div>
  );
}

