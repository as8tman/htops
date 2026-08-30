// SCR-006 나의 지원단계
// 지원 프로세스 전체 단계와 각 단계별 상태, 세부 내용을 보여준다.
import {
  Content,
  Screen,
  TopBar,
  SectionRow,
  iconChevronRight,
} from './support.jsx';
import { IconButton, Header, Stepper, ProgressBar, Lists, Banner, Divider, Link } from '../components';
import styles from './screens.module.css';

const STAGES = [
  {
    title: '정보 입력',
    status: '완료',
    desc: '신청자 기본 정보를 입력했어요.',
    state: 'done',
  },
  {
    title: '보장 확인',
    status: '진행 중',
    desc: '보장 내용과 청약 조건을 확인 중이에요.',
    state: 'active',
  },
  {
    title: '본인 인증',
    status: '대기',
    desc: '생체정보 인증으로 신원을 확인하는 단계예요.',
    state: 'upcoming',
  },
  {
    title: '지원 완료',
    status: '대기',
    desc: '모든 단계가 끝나면 지원이 완료됩니다.',
    state: 'upcoming',
  },
];

export default function ApplicationStage() {
  return (
    <Screen>
      <TopBar
        leading={
          <IconButton icon={iconChevronRight} size="small" variant="neutral" aria-label="뒤로"
            style={{ transform: 'rotate(180deg)' }} />
        }
        title="나의 지원 단계"
      />

      <Content>
        <Header
          size="medium"
          title="김한화 님의 지원 현황"
          description="아래 단계 표시와 함께 현재 진행 상황을 확인할 수 있어요."
        />

        {/* 전체 단계 요약 */}
        <div className={styles.stageCard}>
          <Stepper current={1} size="medium" steps={STAGES.map((s) => s.title)} />
          <ProgressBar label="전체 진행률" value={50} />
        </div>

        {/* 단계별 세부 목록 */}
        <SectionRow title="단계별 진행 내용" trailing={<Link href="#" color="body">보관함</Link>} />
        <Lists
          variant="card"
          onClickItem={(item) => console.log('선택:', item.title)}
          items={STAGES.map((s) => ({
            title: s.title,
            subtitle: s.status,
            description: s.desc,
            leading: (
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 28,
                  height: 28,
                  borderRadius: 'var(--radius-full)',
                  fontSize: 12,
                  fontWeight: 'var(--weight-bold)',
                  color: 'var(--text-body-0)',
                  background:
                    s.state === 'done'
                      ? 'var(--surface-primary)'
                      : s.state === 'active'
                        ? 'var(--surface-secondary)'
                        : 'var(--surface-neutral-3)',
                }}
              >
                {s.state === 'active' ? '·' : s.state === 'done' ? '✓' : ''}
              </span>
            ),
            chevron: true,
            divider: true,
          }))}
        />

        <Divider />

        {/* 인증 안내 배너 */}
        <Banner variant="warning" icon title="본인 인증 전 유의사항">
          신분증과 본인 명의 휴대폰이 필요합니다. 인증은 안전하게 처리돼요.
        </Banner>
      </Content>
    </Screen>
  );
}

