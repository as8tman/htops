import AppDrawer from '../components/AppDrawer/AppDrawer.jsx';
import { iconChevronRight } from './icons.jsx';
import { DRAWER_MENU } from './drawerMenu.js';
import styles from './AppMenuDrawer.module.css';

export default function AppMenuDrawer({ open, onClose, onNavigate, logo = 'LIFE MD' }) {
  function handleSelect(route) {
    onClose?.();
    if (route) onNavigate?.(route);
  }

  return (
    <AppDrawer
      open={open}
      onClose={onClose}
      header={
        <span className={styles.logo}>{logo}</span>
      }
    >
      <nav className={styles.menu}>
        {DRAWER_MENU.map((group) => (
          <div className={styles.group} key={group.title}>
            <div className={styles.groupTitle}>{group.title}</div>
            <ul className={styles.list}>
              {group.items.map((item) => (
                <li key={item.label}>
                  <button
                    type="button"
                    className={styles.item}
                    onClick={() => handleSelect(item.route)}
                    disabled={!item.route}
                  >
                    <span className={styles.itemLabel}>{item.label}</span>
                    {item.route && <span className={styles.chevron}>{iconChevronRight}</span>}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </AppDrawer>
  );
}
