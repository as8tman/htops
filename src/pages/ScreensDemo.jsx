// 화면 데모 뷰어
// 구현한 각 화면(SCR-001 ~ SCR-006, 로그인)을 iOS 프레임에 넣어 미리보기한다.
// (프로젝트에 라우터 라이브러리가 없으므로 state 기반 선택으로 구성)
import { useState } from 'react';
import IosFrame from './ios-frame.jsx';
import Login from './SCR-003.jsx';
import MainNonApplicant from './SCR-001.jsx';
import MainApplicant from './SCR-002.jsx';
import Mypage from './SCR-004.jsx';
import MypageEdit from './SCR-005.jsx';
import ApplicationStage from './SCR-006.jsx';
import { Chips } from '../components';
import styles from './screens.module.css';

const SCREENS = [
  { value: 'login', label: '로그인 (SCR-003)', Element: Login },
  { value: 'main-non', label: '메인·미지원자 (SCR-001)', Element: MainNonApplicant },
  { value: 'main-app', label: '메인·지원자 (SCR-002)', Element: MainApplicant },
  { value: 'mypage', label: '마이페이지 (SCR-004)', Element: Mypage },
  { value: 'edit', label: '마이페이지 정보수정 (SCR-005)', Element: MypageEdit },
  { value: 'stage', label: '나의 지원 단계 (SCR-006)', Element: ApplicationStage },
];

export default function ScreensDemo() {
  const [active, setActive] = useState('mypage');
  const current = SCREENS.find((s) => s.value === active) ?? SCREENS[0];

  return (
    <section className="section">
      <div className="section-heading">
        <h2>화면 시안 (iOS 미리보기)</h2>
        <p>기존 디자인 시스템 컴포넌트로 구현한 화면을 하단 선택지로 전환해 확인합니다.</p>
      </div>

      <Chips options={SCREENS} value={active} onChange={setActive} />

      <div className={styles.viewer}>
        <IosFrame label={current.label}>
          <current.Element />
        </IosFrame>
      </div>
    </section>
  );
}
