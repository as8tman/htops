import { useState } from 'react';
import styles from './Keypad.module.css';

const KEYS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'clear', '0', 'backspace'];

export default function Keypad({
  onInput,
  onComplete,
  maxLength = 6,
  hidden = true,
  shuffle = false,
  disabled = false,
  className,
  ...rest
}) {
  const [value, setValue] = useState('');
  const display = hidden ? value.replace(/./g, '•') : value;

  let keys = KEYS;
  if (shuffle) {
    const digits = ['1','2','3','4','5','6','7','8','9','0'];
    const shuffled = digits.sort(() => Math.random() - 0.5);
    keys = [...shuffled.slice(0, 9), 'clear', shuffled[9], 'backspace'];
  }

  function handleKey(key) {
    if (disabled) return;
    if (key === 'backspace') {
      const next = value.slice(0, -1);
      setValue(next);
      onInput?.(next);
      return;
    }
    if (key === 'clear') {
      setValue('');
      onInput?.('');
      return;
    }
    if (value.length >= maxLength) return;
    const next = value + key;
    setValue(next);
    onInput?.(next);
    if (next.length === maxLength) {
      onComplete?.(next);
    }
  }

  return (
    <div className={[styles.container, className].filter(Boolean).join(' ')} {...rest}>
      <div className={styles.display} aria-live="polite" data-testid="keypad-display">
        {display || '·'}
      </div>
      <div className={styles.grid}>
        {keys.map((key) => (
          <button
            key={key}
            type="button"
            className={[styles.key, key === 'clear' || key === 'backspace' ? styles.keyAction : '']
              .filter(Boolean)
              .join(' ')}
            disabled={disabled}
            onClick={() => handleKey(key)}
            aria-label={key === 'backspace' ? '지우기' : key === 'clear' ? '전체 지우기' : key}
          >
            {key === 'backspace' ? (
              <svg viewBox="0 0 20 20" fill="none">
                <path d="M8 5 3 10l5 5M4 10h11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : key === 'clear' ? (
              <span className={styles.clearLabel}>전체지움</span>
            ) : (
              key
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
