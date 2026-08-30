// SCR-005 마이페이지 정보수정
// 내 기본 정보를 수정하는 폼 화면. 하단 고정 버튼으로 저장한다.
import { Content, Screen, TopBar, iconChevronRight } from './support.jsx';
import { IconButton, Header, TextField, Select, ButtonFixed } from '../components';
import styles from './screens.module.css';

export default function MypageEdit() {
  return (
    <Screen>
      <TopBar
        leading={
          <IconButton icon={iconChevronRight} size="small" variant="neutral" aria-label="뒤로"
            style={{ transform: 'rotate(180deg)' }} />
        }
        title="정보 수정"
      />

      <Content>
        <Header
          size="small"
          title="기본 정보를 수정해주세요"
          description="저장 후 변경사항이 바로 반영됩니다."
        />

        {/* 기본 정보 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-small)' }}>
          <TextField label="이름" defaultValue="김한화" placeholder="이름을 입력해주세요" />
          <TextField label="휴대폰 번호" defaultValue="010-1234-5678" suffix="인증됨" />
          <TextField label="이메일" defaultValue="hanwha@htops.co.kr" helpText="이메일로 알림을 받을 수 있어요." />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-small)' }}>
          <Select label="지역" placeholder="지역을 선택해주세요" defaultValue="서울">
            <option value="서울">서울</option>
            <option value="경기">경기</option>
            <option value="인천">인천</option>
            <option value="부산">부산</option>
          </Select>
          <TextField label="주소" defaultValue="서울특별시 중구 세종대로 000" placeholder="상세 주소를 입력해주세요" />
        </div>
      </Content>

      <ButtonFixed variant="primary">저장하기</ButtonFixed>
    </Screen>
  );
}

