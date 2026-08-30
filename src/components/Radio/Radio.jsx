import { useId } from 'react';
import styles from './Radio.module.css';

export default function Radio({
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
        type="radio"
        className={styles.input}
        disabled={disabled}
        {...rest}
      />
      <span className={styles.circle}>
        <span className={styles.dot} />
      </span>
      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
}
