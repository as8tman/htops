// SCR-003 로그인
// 브랜드 헤더 + 아이디/비밀번호 입력 + 로그인 & 회원가입 진입.
// 기존 컴포넌트(TextField, Button, Checkbox, Link, Feedback)와 공통 레이아웃을 사용한다.
import {
  Content,
  Screen,
  FixedAction,
} from './support.jsx';
import { Checkbox } from '../components';
import { TextField } from '../components';
import { Button } from '../components';
import { Link } from '../components';
import { Feedback } from '../components';
import styles from './screens.module.css';

export default function Login() {
  return (
    <Screen>
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          padding: 'var(--spacing-xlarge) var(--spacing-large)',
          color: 'var(--text-body)',
        }}
      >
        {/* 브랜드 영역 */}
        <div style={{ marginTop: 'var(--spacing-xxlarge)', marginBottom: 'var(--spacing-large)' }}>
          <span className={styles.kicker}>H-TOPS</span>
          <h1
            style={{
              margin: '8px 0 4px',
              fontSize: 'var(--font-size-title1)',
              fontWeight: 'var(--weight-bold)',
              lineHeight: 1.3,
            }}
          >
            지원 프로세스를
            <br />
            한곳에서 편리하게
          </h1>
          <p style={{ fontSize: 'var(--font-size-body2)', color: 'var(--text-body-3)' }}>
            보험 설계 지원 플랫폼에 오신 것을 환영합니다.
          </p>
        </div>

        {/* 안내 피드백 */}
        <div style={{ marginBottom: 'var(--spacing-medium)' }}>
          <Feedback variant="info">
            회원가입 없이 기존 설계사 계정으로 바로 이용할 수 있어요.
          </Feedback>
        </div>

        {/* 로그인 입력 폼 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-small)' }}>
          <TextField label="아이디" placeholder="아이디를 입력해주세요" defaultValue="ktwook" />
          <TextField
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요"
            type="password"
            defaultValue="password1!"
            helpText="비밀번호는 8자 이상, 영문·숫자 조합입니다."
          />
        </div>

        {/* 자동 로그인 / 아이디 저장 */}
        <div
          style={{
            display: 'flex',
            gap: 'var(--spacing-medium)',
            margin: 'var(--spacing-small) 0 var(--spacing-large)',
          }}
        >
          <Checkbox label="자동 로그인" name="auto-login" />
          <Checkbox label="아이디 저장" name="save-id" defaultChecked />
        </div>

        <Button variant="primary" size="large" fullWidth>
          로그인
        </Button>

        {/* 로그인 하단 유틸 */}
        <div
          className={styles.loginFooter}
          style={{ margin: 'var(--spacing-medium) 0 0' }}
        >
          <Link href="#">아이디 찾기</Link>
          <span className={styles.dividerDot} />
          <Link href="#">비밀번호 찾기</Link>
        </div>
      </div>

      <FixedAction>
        <Button variant="outlinePrimary" size="large" fullWidth>
          회원가입
        </Button>
      </FixedAction>
    </Screen>
  );
}
