import { useState } from 'react';
import { NavBar, TextField, Button, IconButton, Texts } from '../../components';
import { iconEye } from '../icons.jsx';
import styles from './Login.module.css';

export default function Login({ onNavigate }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={styles.screen}>
      <NavBar onBack={() => onNavigate?.('main-guest')} />

      <div className={styles.content}>
        <Texts as="h1" variant="title1" weight="bold" className={styles.title}>로그인</Texts>
        <Texts as="p" variant="body2" weight="light" color="body3" className={styles.subtitle}>
          LIFE MD APP과 동일한 인증으로 로그인합니다.
        </Texts>

        <TextField
          className={styles.field}
          label="레이블"
          placeholder="레이블을 입력해주세요"
        />

        <TextField
          className={styles.field}
          label="레이블"
          type={showPassword ? 'text' : 'password'}
          defaultValue="password"
          suffix={
            <IconButton
              icon={iconEye}
              variant="ghost"
              size="small"
              aria-label={showPassword ? '비밀번호 숨기기' : '비밀번호 표시'}
              onClick={() => setShowPassword((v) => !v)}
            />
          }
        />

        <Button
          variant="primary"
          size="large"
          fullWidth
          className={styles.loginButton}
          onClick={() => onNavigate?.('main-applicant')}
        >
          로그인
        </Button>

        <div className={styles.links}>
          <button type="button" className={styles.linkButton}>핀번호 재설정</button>
          <span className={styles.linkDivider} />
          <button type="button" className={styles.linkButton}>링크 테스트</button>
        </div>
      </div>
    </div>
  );
}
