import { NavBar, IconButton, Stepper, Button, BottomNavigation, Texts } from '../../components';
import { iconBell, iconMenu, iconChevronRight, BOTTOM_NAV_ITEMS } from '../icons.jsx';
import { APPLICATION_STEPS, CURRENT_STEP_INDEX, CURRENT_STEP_CAPTION } from '../applicationSteps.js';
import styles from './MainApplicant.module.css';

const SIDE_JOBS = [
  { title: '사이드잡 콘텐츠 1', desc: '콘텐츠 설명 텍스트' },
  { title: '사이드잡 콘텐츠 2', desc: '콘텐츠 설명 텍스트' },
];

export default function MainApplicant({ onNavigate }) {
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
        <div className={styles.statusCard}>
          <div className={styles.statusHeading}>
            <Texts variant="title5" weight="bold" color="white">OOO님의 지원 단계</Texts>
            <button type="button" className={styles.statusLink} onClick={() => onNavigate?.('stage')}>
              <Texts variant="body2" weight="light" style={{ color: 'inherit' }}>나의 지원단계</Texts>
              {iconChevronRight}
            </button>
          </div>
          <Stepper
            steps={APPLICATION_STEPS}
            current={CURRENT_STEP_INDEX}
            size="small"
            showLabels={false}
            inverted
          />
          <Texts as="p" variant="body2" weight="light" className={styles.caption} style={{ color: 'rgba(255,255,255,0.7)' }}>
            {CURRENT_STEP_CAPTION}
          </Texts>
        </div>

        <div className={styles.section} style={{ paddingTop: 0 }}>
          <Button variant="primary" size="large" fullWidth onClick={() => onNavigate?.('stage')}>
            시험 신청하기
          </Button>
        </div>

        <div className={styles.section}>
          <div className={styles.sectionHeading}>
            <Texts variant="title5" weight="bold">맞춤 사이드잡 콘텐츠</Texts>
            <Texts variant="caption" color="body3">성별·연령 맞춤</Texts>
          </div>
          <div className={styles.sideJobs}>
            {SIDE_JOBS.map((job) => (
              <div key={job.title} className={styles.sideJobCard}>
                <div className={styles.sideJobImage}>
                  <span className={styles.placeholderLabel}>이미지 영역</span>
                </div>
                <div className={styles.sideJobText}>
                  <Texts variant="body2">{job.title}</Texts>
                  <Texts variant="caption" color="body3">{job.desc}</Texts>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.thickDivider} />

        <div className={styles.section} style={{ paddingBottom: 24 }}>
          <Texts as="p" variant="title5" weight="bold" style={{ marginBottom: 16 }}>이벤트 · 프로모션</Texts>
          <button type="button" className={styles.eventCard}>
            <div className={styles.eventText}>
              <Texts variant="body1" weight="bold">이벤트 배너 타이틀</Texts>
              <Texts variant="caption" color="body3">이벤트 설명 텍스트</Texts>
            </div>
            <span className={styles.eventChevron}>{iconChevronRight}</span>
          </button>
        </div>
      </div>

      <BottomNavigation
        items={BOTTOM_NAV_ITEMS}
        value="main"
        onChange={(v) => v === 'mypage' && onNavigate?.('mypage')}
      />
    </div>
  );
}
