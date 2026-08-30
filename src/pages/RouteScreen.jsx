// 라우트된 화면 페이지
// /SCR-001 ~ /SCR-006 등으로 접근했을 때 해당 화면을 iOS 프레임으로 보여준다.
import IosFrame from './ios-frame.jsx';
import { screenRoutes, navigate } from './router.jsx';
import styles from './screens.module.css';

export default function RouteScreen({ pathname }) {
  const route = screenRoutes[pathname];
  if (!route) return null;

  const { name, Component } = route;
  const order = Object.keys(screenRoutes);

  const navLink = (p) => (
    <a
      key={p}
      href={p}
      onClick={(e) => {
        e.preventDefault();
        navigate(p);
      }}
      style={{
        padding: '4px 10px',
        borderRadius: '999px',
        textDecoration: 'none',
        fontSize: '12px',
        background: p === pathname ? 'var(--surface-primary)' : 'var(--surface-neutral-2)',
        color: p === pathname ? 'var(--text-body-0)' : 'var(--text-body-2)',
      }}
    >
      {p}
    </a>
  );

  return (
    <section className="section">
      <div className="section-heading">
        {/* <h2>
          {name} <span style={{ color: 'var(--text-body-3)', fontSize: 14 }}>({pathname})</span>
        </h2>
        <p style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>{order.map(navLink)}</p> */}
      </div>

      <div className={styles.viewer}>
        <IosFrame label={name}>
          <Component />
        </IosFrame>
      </div>
    </section>
  );
}
