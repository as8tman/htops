import { NavBar, IconButton, Indicator, Lists, Button, BottomNavigation, Texts } from '../../components';
import { iconBell, iconMenu, iconChevronRight, BOTTOM_NAV_ITEMS } from '../icons.jsx';
import styles from './MainGuest.module.css';

const KEY_POINTS = [
  { label: 'Key point 1', desc: '설명 텍스트' },
  { label: 'Key point 2', desc: '설명 텍스트' },
  { label: 'Key point 3', desc: '설명 텍스트' },
];

export default function MainGuest({ onNavigate }) {
  return (
    <div className={styles.screen}>
      <NavBar
        logo="LIFE MD"
        actions={
          <>
            <IconButton icon={iconBell} variant="ghost" aria-label="알림" />
            <IconButton icon={iconMenu} variant="ghost" aria-label="전체 메뉴" />
          </>
        }
      />

      <div className={styles.content}>
        <div className={styles.hero}>
          <div className={styles.heroText}>
            <Texts variant="caption" color="body3">관리자 등록 문구</Texts>
            <Texts variant="title5" weight="bold">
              히어로 배너
              <br />
              (관리자 등록 문구)
            </Texts>
          </div>
          <div className={styles.heroImage}>
            <span className={styles.placeholderLabel}>이미지 영역</span>
          </div>
        </div>

        <div className={styles.indicatorRow}>
          <Indicator count={3} current={0} variant="dots" />
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
    </div>
  );
}
