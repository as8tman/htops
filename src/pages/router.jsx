// 경량 URL 라우터 (라이브러리 없음)
// 브라우저 History API(pushState / popstate) 기반으로
// /SCR-001 ~ /SCR-006, /login 과 같은 경로에 각 화면 컴포넌트를 매핑한다.
import { useEffect, useState } from 'react';
import Login from './SCR-003.jsx';
import MainNonApplicant from './SCR-001.jsx';
import MainApplicant from './SCR-002.jsx';
import Mypage from './SCR-004.jsx';
import MypageEdit from './SCR-005.jsx';
import ApplicationStage from './SCR-006.jsx';

/**
 * 경로별 화면 라우트 정의.
 * 경로는 파일명(SCR-###)과 동일하게 유지한다.
 */
export const screenRoutes = {
  '/SCR-001': { name: '메인 · 미지원자', Component: MainNonApplicant },
  '/SCR-002': { name: '메인 · 지원자', Component: MainApplicant },
  '/SCR-003': { name: '로그인', Component: Login },
  '/SCR-004': { name: '마이페이지', Component: Mypage },
  '/SCR-005': { name: '마이페이지 · 정보수정', Component: MypageEdit },
  '/SCR-006': { name: '나의 지원 단계', Component: ApplicationStage },
};

/**
 * 현재 URL pathname을 반환하고, 뒤로가기/앞으로가기(popstate)를 구독한다.
 */
export function usePathname() {
  const [pathname, setPathname] = useState(() => window.location.pathname);

  useEffect(() => {
    const onChange = () => setPathname(window.location.pathname);
    window.addEventListener('popstate', onChange);
    return () => window.removeEventListener('popstate', onChange);
  }, []);

  return pathname;
}

/**
 * 지정한 path로 이동한다. (내비게이션 링크에서 사용)
 */
export function navigate(path) {
  if (window.location.pathname === path) return;
  window.history.pushState(null, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
}
