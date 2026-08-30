// SCR-002 메인 (지원자)
// 이미 지원을 진행 중인 사용자의 홈.
// 현재 지원 단계(Stepper/ProgressBar) + 최근 활동 + 혜택 배너 + 서비스 메뉴를 보여준다.
import {
  Content,
  Screen,
  SectionRow,
  iconBell,
  iconBenefit,
  iconContract,
  iconUser,
  iconEdit,
  iconDocument,
} from './support.jsx';
import {
  Header,
  IconButton,
  Stepper,
  ProgressBar,
  Banner,
  Link,
  Button,
  BottomNavigation,
  Lists,
  Divider,
} from '../components';
import styles from './screens.module.css';

const NAV = [
  { label: '홈', value: '홈', icon: iconUser },
  { label: '조회', value: '조회', icon: iconContract },
  { label: '혜택', value: '혜택', icon: iconBenefit },
  { label: '내정보', value: '내정보', icon: iconEdit },
];

export default function MainApplicant() {
  return (
    <Screen>
      <div className={styles.mainHead}>
        <span style={{ fontSize: 'var(--font-size-title4)', fontWeight: 'var(--weight-bold)' }}>
          H-TOPS
        </span>
        <IconButton icon={iconBell} size="small" variant="neutral" aria-label="알림" />
      </div>

      <Content>
        <Header size="large" title="김한화 님, 안녕하세요" description="지원 진행 상황을 한눈에 확인해보세요." />

        {/* 지원 단계 요약 카드 */}
        <div className={styles.stageCard}>
          <div className={styles.stageHeader}>
            <span className={styles.stageTitle}>나의 지원 단계</span>
            <Link href="#" underline={false}>상세 보기</Link>
          </div>
          <Stepper
            current={1}
            steps={['정보 입력', '보장 확인', '본인 인증', '지원 완료']}
          />
          <p className={styles.stageDesc}>현재 「보장 확인」 단계입니다. 다음 단계는 생체정보 인증이에요.</p>
          <ProgressBar label="전체 진행률" value={50} />
        </div>

        {/* 진행 안내 배너 */}
        <Banner variant="info" icon title="계속 이어서 진행하기" action={<Link href="#" underline={false}>이동</Link>}>
          앞서 입력한 정보를 바탕으로 보장 확인을 진행해주세요.
        </Banner>

        <Divider />

        {/* 최근 활동 */}
        <SectionRow title="최근 활동" trailing={<Link href="#" color="body">전체보기</Link>} />
        <Lists
          variant="card"
          onClickItem={(item) => console.log('선택:', item.title)}
          items={[
            { title: '보장 확인 단계 진입', description: '2분 전 · 진행 중', chevron: true, divider: true },
            { title: '청약서 정보 입력 완료', description: '어제 · 완료', leading: iconDocument, chevron: true, divider: true },
            { title: '지원 프로세스 시작', description: '3일 전 · 완료', leading: iconEdit, chevron: true },
          ]}
        />

        {/* 혜택 배너 */}
        <div className={styles.benefitCard}>
          <div style={{ fontSize: 'var(--font-size-title4)', fontWeight: 'var(--weight-bold)' }}>
            보장 확정 시 혜택
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

