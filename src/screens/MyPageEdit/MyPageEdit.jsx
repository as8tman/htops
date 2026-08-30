import { NavBar, TextField, Select, DatePicker, Button } from '../../components';
import styles from './MyPageEdit.module.css';

export default function MyPageEdit({ onNavigate }) {
  return (
    <div className={styles.screen}>
      <NavBar title="정보 수정" onBack={() => onNavigate?.('mypage')} />

      <div className={styles.content}>
        <TextField label="성명" defaultValue="홍길동" disabled />

        <TextField
          label="주민등록번호"
          defaultValue="900101-1******"
          disabled
          helpText="수정 불가 항목입니다"
        />

        <TextField label="연락처" type="tel" defaultValue="010-1234-5678" />

        <TextField label="이메일" type="email" defaultValue="hong@example.com" />

        <TextField label="주소" placeholder="주소를 입력해주세요" />

        <Select label="직업" placeholder="선택해주세요" defaultValue="office">
          <option value="office">회사원</option>
          <option value="self">자영업</option>
          <option value="student">학생</option>
          <option value="etc">기타</option>
        </Select>

        <DatePicker label="생년월일" defaultValue="1990-01-01" />
      </div>

      <div className={styles.fixedFooter}>
        <Button variant="primary" size="large" fullWidth onClick={() => onNavigate?.('mypage')}>
          저장
        </Button>
      </div>
    </div>
  );
}
