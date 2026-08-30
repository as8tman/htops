// 데모 전용 상단 헤더
// "화면 데모" / "컴포넌트 데모"를 전환하는 상단 UI.
// 실제 화면(SCR 라우트)에서는 사용하지 않으므로, 데모 모드에서만 렌더링한다.
export default function DemoHeader({ view, onViewChange }) {
  const toggleBtn = (active) => ({
    padding: '6px 14px',
    border: 'none',
    borderRadius: 'var(--radius-full)',
    fontFamily: 'inherit',
    fontSize: 'var(--font-size-body2)',
    fontWeight: active ? 'var(--weight-bold)' : 'var(--weight-regular)',
    color: active ? 'var(--text-body-0)' : 'var(--text-body-2)',
    background: active ? 'var(--surface-primary)' : 'var(--surface-neutral-2)',
    cursor: 'pointer',
  });

  return (
    <header className="page-header">
      <p className="eyebrow">H-TOPS Design System</p>
      <h1>{view === 'screens' ? '화면 데모' : '컴포넌트 데모'}</h1>
      <p className="lead">
        {view === 'screens'
          ? '디자인 시스템 컴포넌트로 구현한 화면 시안을 해상도에 맞춰 미리봅니다.'
          : 'Figma 디자인 시스템에서 추출한 토큰과 핵심 컴포넌트를 확인합니다. 브라우저 폭을 줄여 반응형 동작을 확인해보세요.'}
      </p>
      <div className="view-toggle" style={{ marginTop: 'var(--spacing-small)' }}>
        <span className="view-toggle-item" role="group" style={{ display: 'inline-flex', gap: 8 }}>
          <button type="button" onClick={() => onViewChange('screens')} style={toggleBtn(view === 'screens')}>
            화면
          </button>
          <button type="button" onClick={() => onViewChange('components')} style={toggleBtn(view === 'components')}>
            컴포넌트
          </button>
        </span>
      </div>
    </header>
  );
}
