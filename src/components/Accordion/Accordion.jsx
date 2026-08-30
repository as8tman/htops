import { useState } from 'react';
import { useId } from 'react';
import styles from './Accordion.module.css';

export default function Accordion({
  items = [],
  defaultOpenIndex = null,
  multiple = false,
  disabled = false,
  className,
  ...rest
}) {
  const baseId = useId();
  const [openIndexes, setOpenIndexes] = useState(
    () => (defaultOpenIndex !== null ? [defaultOpenIndex] : [])
  );

  function toggle(index) {
    if (disabled) return;
    setOpenIndexes((prev) => {
      if (multiple) {
        return prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index];
      }
      return prev.includes(index) ? [] : [index];
    });
  }

  return (
    <div className={[styles.container, className].filter(Boolean).join(' ')} {...rest}>
      {items.map((item, index) => {
        const isOpen = openIndexes.includes(index);
        const panelId = `${baseId}-${index}-panel`;
        const buttonId = `${baseId}-${index}-button`;
        return (
          <div key={item.id ?? index} className={[styles.item, isOpen ? styles.itemOpen : ''].filter(Boolean).join(' ')}>
            <button
              id={buttonId}
              type="button"
              className={styles.header}
              aria-expanded={isOpen}
              aria-controls={panelId}
              disabled={disabled}
              onClick={() => toggle(index)}
            >
              <span className={styles.headerContent}>
                {item.title}
              </span>
              <span className={[styles.icon, isOpen ? styles.iconOpen : ''].filter(Boolean).join(' ')} aria-hidden="true">
                <svg viewBox="0 0 20 20" fill="none">
                  <path d="M5 7.5l5 5 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>
            <div id={panelId} role="region" aria-labelledby={buttonId}
              className={[styles.panel, isOpen ? styles.panelOpen : ''].filter(Boolean).join(' ')}>
              <div className={styles.body}>{item.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
