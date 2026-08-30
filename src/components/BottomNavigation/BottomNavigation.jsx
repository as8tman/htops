import { useState } from 'react';
import styles from './BottomNavigation.module.css';

export default function BottomNavigation({
  items = [],
  value,
  defaultValue,
  onChange,
  className,
  ...rest
}) {
  const [internal, setInternal] = useState(defaultValue);
  const current = value !== undefined ? value : internal;

  return (
    <nav className={[styles.nav, className].filter(Boolean).join(' ')} {...rest} aria-label="하단 내비게이션">
      {items.map((item) => {
        const itemValue = typeof item === 'object' ? item.value : item;
        const itemLabel = typeof item === 'object' ? item.label : item;
        const itemIcon = typeof item === 'object' ? item.icon : undefined;
        const active = current === itemValue;
        return (
          <button
            key={itemValue}
            type="button"
            className={[styles.item, active ? styles.itemActive : ''].filter(Boolean).join(' ')}
            aria-current={active ? 'page' : undefined}
            onClick={() => {
              setInternal(itemValue);
              onChange?.(itemValue);
            }}
          >
            {itemIcon && <span className={styles.icon}>{itemIcon}</span>}
            <span className={styles.label}>{itemLabel}</span>
          </button>
        );
      })}
    </nav>
  );
}
