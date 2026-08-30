// iOS 디바이스 프레임. 화면 데모에서 각 화면(Pages)을 실제 핸드폰처럼 감싸 보여준다.
import styles from './screens.module.css';

/**
 * 상단 상태 바 (시각적 프리뷰용)
 */
function StatusBar() {
  return (
    <div
      style={{
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 34,
        padding: '6px 16px 0',
        fontSize: 12,
        fontWeight: 700,
        color: 'var(--text-body)',
        background: 'var(--background-0)',
      }}
    >
      <span>9:41</span>
      <i style={{ display: 'block', width: 120, height: 20, borderRadius: 999 }} aria-hidden="true" />
      <span style={{ letterSpacing: 1 }}>LTE</span>
    </div>
  );
}

/**
 * iOS 프레임
 * @param {object} props
 * @param {React.ReactNode} [props.children] 프레임 안에 렌더할 화면(= Screen 컴포넌트)
 * @param {string} [props.label] 접근성 설명 / 헤더 표기 라벨
 */
export default function IosFrame({ children, label, ...rest }) {
  return (
    <div className={styles.frame} role="group" aria-label={label} {...rest}>
      <StatusBar />
      {children}
    </div>
  );
}
