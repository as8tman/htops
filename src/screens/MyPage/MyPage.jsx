import { NavBar, Stepper, Lists, Button, BottomNavigation, Texts } from '../../components';
import { iconAvatar, iconChevronRight, BOTTOM_NAV_ITEMS } from '../icons.jsx';
import { APPLICATION_STEPS, CURRENT_STEP_INDEX, CURRENT_STEP_CAPTION } from '../applicationSteps.js';
import styles from './MyPage.module.css';

export default function MyPage({ onNavigate }) {
  return (
    <div className={styles.screen}>
      <NavBar title="마이페이지" onBack={() => onNavigate?.('main-applicant')} />

      <div className={styles.content}>
        <div className={styles.profile}>
          <div className={styles.avatar}>{iconAvatar}</div>
          <div className={styles.profileText}>
            <Texts variant="title5" weight="bold">홍길동</Texts>
            <Texts variant="body2" weight="light" color="body3">010-1234-5678</Texts>
          </div>
        </div>

        <div className={styles.statusCard}>
          <div className={styles.statusHeading}>
            <Texts variant="subtitle2" weight="bold" color="white">나의 지원 단계</Texts>
            <button type="button" className={styles.statusLink} onClick={() => onNavigate?.('stage')}>
              <Texts variant="caption" weight="light" style={{ color: 'inherit' }}>지원단계 보기</Texts>
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
          <Texts as="p" variant="caption" weight="light" className={styles.caption} style={{ color: 'rgba(255,255,255,0.6)' }}>
            {CURRENT_STEP_CAPTION}
          </Texts>
        </div>

        <div className={styles.thickDivider} />

        <div className={styles.listSection}>
          <Lists
            onClickItem={(item) => item.value === 'edit' && onNavigate?.('mypage-edit')}
            items={[
              { title: '개인정보', chevron: true, divider: true, value: 'edit' },
              { title: '위촉계약서', chevron: true, divider: true },
              { title: '명함', chevron: true, divider: true },
              { title: '알림 설정', chevron: true },
            ]}
          />
        </div>

        <div className={styles.thickDivider} />

        <div className={styles.actions}>
          <Button variant="secondary" size="medium" fullWidth onClick={() => onNavigate?.('mypage-edit')}>
            수정하기
          </Button>
          <Button variant="outlineSecondary" size="medium" fullWidth onClick={() => onNavigate?.('main-guest')}>
            로그아웃
          </Button>
        </div>
      </div>

      <BottomNavigation
        items={BOTTOM_NAV_ITEMS}
        value="mypage"
        onChange={(v) => v === 'main' && onNavigate?.('main-applicant')}
      />
    </div>
  );
}
