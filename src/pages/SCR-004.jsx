// SCR-004 마이페이지
// 내 계정/정보 탭. 프로필 카드 + 바로가기 + 계정 관리/세부 설정 목록을 보여준다.
import {
  Content,
  Screen,
  TopBar,
  SectionRow,
  iconSettings,
  iconBell,
  iconUser,
  iconContract,
  iconDocument,
  iconChevronRight,
} from './support.jsx';
import { IconButton, Header, Lists, Divider } from '../components';
import styles from './screens.module.css';

export default function Mypage() {
  return (
    <Screen>
      <TopBar
        leading={
          <IconButton icon={iconChevronRight} size="small" variant="neutral" aria-label="뒤로"
            style={{ transform: 'rotate(180deg)' }} />
        }
        title="마이페이지"
        trailing={<IconButton icon={iconSettings} size="small" variant="neutral" aria-label="설정" />}
      />

      <Content>
        {/* 프로필 카드 */}
        <div className={styles.profileCard}>
          <span className={styles.avatar}>김</span>
          <div className={styles.profileInfo}>
            <span className={styles.profileName}>김한화</span>
            <span className={styles.profileMeta}>설계사 · 설계 번호 2024-0817</span>
          </div>
        </div>

        <Divider />

        {/* 지원 현황 */}
        <SectionRow title="나의 지원" />
        <Lists
          variant="card"
          onClickItem={(item) => console.log('선택:', item.title)}
          items={[
            { title: '나의 지원 단계', leading: iconContract, description: '보장 확인 단계', chevron: true, divider: true },
            { title: '제출한 서류', leading: iconDocument, description: '외 2건 제출 완료', chevron: true },
          ]}
        />

        <Divider />

        {/* 계정 관리 */}
        <SectionRow title="계정 관리" />
        <Lists
          variant="card"
          onClickItem={(item) => console.log('선택:', item.title)}
          items={[
            { title: '정보 수정', leading: iconUser, chevron: true, divider: true },
            { title: '알림 설정', leading: iconBell, chevron: true, divider: true },
            { title: '비밀번호 변경', leading: iconSettings, chevron: true },
          ]}
        />
      </Content>
    </Screen>
  );
}
