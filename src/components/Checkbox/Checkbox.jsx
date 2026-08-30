import { useId } from 'react';
import styles from './Checkbox.module.css';

export default function Checkbox({
  label,
  size = 'medium',
  disabled = false,
  className,
  id,
  ...rest
}) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const sizeClass = size === 'small' ? styles.small : styles.medium;

  return (
    <label
      htmlFor={inputId}
      className={[
        styles.wrapper,
        sizeClass,
        disabled ? styles.disabled : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <input
        id={inputId}
        type="checkbox"
        className={styles.input}
        disabled={disabled}
        {...rest}
      />
      <span className={styles.box}>
        <svg className={styles.check} viewBox="0 0 24 24" fill="none">
          <path
            d="M5 12.5l4.5 4.5L19 7.5"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
}
