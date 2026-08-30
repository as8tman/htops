import { useId } from 'react';
import styles from './Select.module.css';

const SIZE_CLASS = {
  medium: styles.medium,
  small: styles.small,
  xSmall: styles.xSmall,
};

export default function Select({
  label,
  placeholder,
  helpText,
  errorText,
  size = 'medium',
  disabled = false,
  className,
  id,
  defaultValue,
  children,
  ...rest
}) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const hasError = Boolean(errorText);

  const fieldClasses = [
    styles.field,
    SIZE_CLASS[size] ?? styles.medium,
    hasError ? styles.error : '',
    disabled ? styles.disabled : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={[styles.wrapper, className].filter(Boolean).join(' ')}>
      {label && (
        <label className={styles.label} htmlFor={inputId}>
          {label}
        </label>
      )}
      <div className={fieldClasses}>
        <select
          id={inputId}
          className={styles.select}
          disabled={disabled}
          defaultValue={defaultValue ?? ''}
          aria-invalid={hasError || undefined}
          {...rest}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {children}
        </select>
        <svg className={styles.chevron} viewBox="0 0 20 20" fill="none">
          <path
            d="M5 7.5l5 5 5-5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {hasError ? (
        <div className={styles.bottomRow}>
          <span className={styles.errorText}>{errorText}</span>
        </div>
      ) : (
        helpText && (
          <div className={styles.bottomRow}>
            <span className={styles.dot} />
            <span className={styles.helpText}>{helpText}</span>
          </div>
        )
      )}
    </div>
  );
}
