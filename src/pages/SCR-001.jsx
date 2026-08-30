// SCR-001 메인 (미지원자)
// 아직 지원을 시작하지 않은 사용자의 홈.
// 시작 CTA + 혜택 안내 + 서비스 메뉴 배너를 보여준다.
import { Content, Screen, SectionRow, iconBell, iconBenefit, iconContract, iconUser, iconEdit } from './support.jsx';
import { Header, IconButton, Banner, Link, Button, BottomNavigation, Divider } from '../components';
import styles from './screens.module.css';

const NAV = [
  { label: '홈', value: '홈', icon: iconUser },
  { label: '조회', value: '조회', icon: iconContract },
  { label: '혜택', value: '혜택', icon: iconBenefit },
  { label: '내정보', value: '내정보', icon: iconEdit },
];

export default function MainNonApplicant() {
  return (
    <Screen>
      <div className={styles.mainHead}>
        <span style={{ fontSize: 'var(--font-size-title4)', fontWeight: 'var(--weight-bold)' }}>
          H-TOPS
        </span>
        <IconButton icon={iconBell} size="small" variant="neutral" aria-label="알림" />
      </div>

      <Content>
        {/* 시작 유도 헤더 */}
        <Header
          size="large"
          title="지원을 시작해보세요"
          description="몇 가지 정보 입력만으로 간편하게 보험 설계 지원을 시작할 수 있어요."
        />

        {/* 지원 시작 CTA */}
        <div className={styles.heroCard}>
          <span className={styles.kicker} style={{ color: 'rgba(255,255,255,0.7)' }}>
            신규 지원
          </span>
          <div className={styles.heroCardValue}>보험 설계 지원 받기</div>
          <p className={styles.heroCardSub}>
            서류 제출부터 생체정보 인증까지 단계별로 안내해 드려요.
          </p>
          <Button variant="primary" size="large" fullWidth
            style={{ marginTop: 'var(--spacing-xsmall)' }}>
            지원 시작하기
          </Button>
        </div>

        {/* 지원 절차 안내 */}
        <SectionRow title="지원 절차" trailing={<Link href="#" color="body">자세히</Link>} />
        <div className={styles.banners}>
          <Banner title="1. 정보 입력" variant="neutral">
            신청자 기본 정보를 입력해요.
          </Banner>
          <Banner title="2. 보장/청약 확인" variant="neutral">
            보장 내용과 청약 조건을 확인해요.
          </Banner>
          <Banner title="3. 본인 인증" variant="neutral">
            생체정보 인증으로 신원을 확인해요.
          </Banner>
        </div>

        <Divider />

        {/* 혜택 배너 */}
        <div className={styles.benefitCard}>
          <div style={{ fontSize: 'var(--font-size-title4)', fontWeight: 'var(--weight-bold)' }}>
            신규 가입 혜택
          </div>
          <Link href="#" underline={false} style={{ color: 'var(--text-body-0)' }}>
            이벤트 보기
          </Link>
        </div>
      </Content>

      <BottomNavigation items={NAV} defaultValue="홈" />
    </Screen>
  );
}

