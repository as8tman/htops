// 전체 메뉴 구조 (SCR 기준)
// 구현된 화면(route)이 있는 항목은 클릭 시 이동하고,
// 아직 미구현 화면(route 없음)은 메뉴에 표시만 합니다.
export const DRAWER_MENU = [
  {
    title: '메인',
    items: [
      { label: '메인 홈', route: 'main-guest' },
      { label: '나의 지원단계', route: 'stage' },
    ],
  },
  {
    title: '마이페이지',
    items: [
      { label: '마이페이지 · 사용자정보', route: 'mypage' },
      { label: '정보 수정', route: 'mypage-edit' },
      { label: '알림함' },
    ],
  },
  {
    title: '콘텐츠 · 소개',
    items: [
      { label: 'LIFE MD 잡 소개 · 내용탐색' },
      { label: 'LIFE CANVAS 소개 · 멀티잡' },
      { label: '커뮤니티' },
    ],
  },
  {
    title: '온라인 지원 · 시험',
    items: [
      { label: '지원 유형 선택' },
      { label: '동의 · 인증' },
      { label: '정보입력 · 직접입력' },
      { label: '신분증 OCR 촬영' },
      { label: '완료 · 적격/경력 조회 결과' },
      { label: '핀번호 설정/입력' },
      { label: '시험 일정 · 캘린더' },
      { label: '시험 신청 · 장소/응시일' },
      { label: '시험 신청 완료' },
      { label: '학습하기 · AI 학습 모듈' },
      { label: 'Quick Learning 모드' },
      { label: '시험 응시 안내 · D-day' },
      { label: '합격 안내' },
      { label: '보험연수원 교육 안내' },
    ],
  },
  {
    title: '위촉 · 산재',
    items: [
      { label: '위촉 · 본인인증/정보동의' },
      { label: '위촉 · 서류 확인/전자서명' },
      { label: '위촉 완료 · 설계사코드 발급' },
      { label: '산재보험 신청/적용제외 안내' },
    ],
  },
  {
    title: '보장 · 니즈분석',
    items: [
      { label: '보장분석 홈' },
      { label: '보장분석 결과 · AS-IS' },
      { label: '보장분석 보고서 · 웹' },
      { label: 'TO-BE 보장분석 · 추천 반영' },
      { label: '보고서 전송' },
      { label: '니즈분석 · 간단 서베이' },
      { label: '니즈분석 보고서' },
      { label: 'FP 추천 · 상담 연결' },
    ],
  },
  {
    title: '상품 · 가입설계',
    items: [
      { label: 'AI 상품추천' },
      { label: '추천 옵션 설정' },
      { label: '간편설계' },
      { label: 'FP 수수료 정보' },
      { label: '가입설계 반영 · 원수사 연계' },
    ],
  },
  {
    title: '관리 · 사후관리',
    items: [
      { label: '수금관리' },
      { label: '사후관리 · 모니터링' },
      { label: 'Dash Board' },
    ],
  },
  {
    title: '고객 · 일정',
    items: [
      { label: '고객 셀프등록 · URL 진입' },
      { label: '고객 직접등록 · SFP' },
      { label: '고객 인증 · 동의 · 일괄' },
      { label: '고객 세부조회' },
      { label: '일정관리 · 캘린더' },
      { label: '일정 추가' },
      { label: '디지털콘텐츠 발송' },
      { label: '콘텐츠 자동발송 설정' },
      { label: '미니보험 선물' },
      { label: '타겟고객 리스트' },
    ],
  },
];
