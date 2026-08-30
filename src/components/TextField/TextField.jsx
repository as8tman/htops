import { useId } from 'react';
import styles from './TextField.module.css';

const SIZE_CLASS = {
  medium: styles.medium,
  small: styles.small,
  xSmall: styles.xSmall,
};

export default function TextField({
  label,
  placeholder,
  suffix,
  helpText,
  errorText,
  size = 'medium',
  disabled = false,
  className,
  id,
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
        <input
          id={inputId}
          className={styles.input}
          placeholder={placeholder}
          disabled={disabled}
          aria-invalid={hasError || undefined}
          {...rest}
        />
        {suffix && <span className={styles.suffix}>{suffix}</span>}
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
