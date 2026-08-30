import { useState, useId } from 'react';
import styles from './Tabs.module.css';

export default function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  variant = 'underline',
  size = 'medium',
  className,
  ...rest
}) {
  const baseId = useId();
  const [internal, setInternal] = useState(defaultValue);
  const current = value !== undefined ? value : internal;

  return (
    <div className={[styles.tabs, styles[variant], styles[size], className]
      .filter(Boolean).join(' ')} role="tablist" {...rest}>
      {items.map((tab) => {
        const tabValue = typeof tab === 'object' ? tab.value : tab;
        const tabLabel = typeof tab === 'object' ? tab.label : tab;
        const itemId = `${baseId}-${tabValue}`;
        const active = current === tabValue;
        return (
          <button
            key={tabValue}
            id={itemId}
            type="button"
            role="tab"
            aria-selected={active}
            className={[styles.tab, active ? styles.tabActive : ''].filter(Boolean).join(' ')}
            onClick={() => {
              setInternal(tabValue);
              onChange?.(tabValue);
            }}
          >
            {tabLabel}
          </button>
        );
      })}
    </div>
  );
}
