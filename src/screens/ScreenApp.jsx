import { useState } from 'react';
import { Button } from '../components';
import {
  MainGuest,
  MainApplicant,
  Login,
  MyPage,
  MyPageEdit,
  ApplicationStage,
} from './index.js';
import styles from './ScreenApp.module.css';

const SCREENS = {
  'main-guest': MainGuest,
  'main-applicant': MainApplicant,
  login: Login,
  mypage: MyPage,
  'mypage-edit': MyPageEdit,
  stage: ApplicationStage,
};

export default function ScreenApp({ onShowShowcase }) {
  const [screen, setScreen] = useState('main-guest');
  const Screen = SCREENS[screen] ?? MainGuest;

  return (
    <div className={styles.wrapper}>
      <div className={styles.viewport}>
        <Screen onNavigate={setScreen} />
      </div>
      {onShowShowcase && (
        <div className={styles.showcaseLink}>
          <Button variant="neutral1" size="small" onClick={onShowShowcase}>
            컴포넌트 쇼케이스 보기
          </Button>
        </div>
      )}
    </div>
  );
}
