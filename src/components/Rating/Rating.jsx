import { useState } from 'react';
import styles from './Rating.module.css';

export default function Rating({
  value,
  defaultValue = 0,
  onChange,
  max = 5,
  size = 'medium',
  readOnly = false,
  disabled = false,
  className,
  ...rest
}) {
  const [internal, setInternal] = useState(defaultValue);
  const [hover, setHover] = useState(0);
  const current = value !== undefined ? value : internal;

  function handleSelect(i) {
    if (readOnly || disabled) return;
    setInternal(i);
    onChange?.(i);
  }

  const sizeClass = styles[size] ?? styles.medium;

  return (
    <div
      className={[styles.rating, sizeClass, disabled ? styles.disabled : '', className]
        .filter(Boolean)
        .join(' ')}
      role="radiogroup"
      aria-label="평점"
      {...rest}
    >
      {Array.from({ length: max }, (_, idx) => {
        const starValue = idx + 1;
        const filled = starValue <= (hover || current);
        return (
          <button
            key={starValue}
            type="button"
            role="radio"
            aria-checked={current === starValue}
            aria-label={`${starValue}점`}
            className={styles.star}
            disabled={disabled || readOnly}
            onClick={() => handleSelect(starValue)}
            onMouseEnter={() => !readOnly && !disabled && setHover(starValue)}
            onMouseLeave={() => !readOnly && !disabled && setHover(0)}
          >
            <svg viewBox="0 0 20 20" fill={filled ? 'currentColor' : 'none'} aria-hidden="true">
              <path
                d="M10 2.2l2.4 4.86 5.36.78-3.88 3.78.92 5.34L10 14.6l-4.8 2.52.92-5.34-3.88-3.78 5.36-.78L10 2.2z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        );
      })}
    </div>
  );
}
