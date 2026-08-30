import { useId, useRef } from 'react';
import styles from './Search.module.css';

const SIZE_CLASS = {
  large: styles.large,
  medium: styles.medium,
  small: styles.small,
};

export default function Search({
  placeholder = '검색어를 입력하세요',
  value,
  defaultValue,
  onChange,
  onSearch,
  size = 'medium',
  disabled = false,
  className,
  id,
  ...rest
}) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const inputRef = useRef(null);

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      onSearch?.(e.currentTarget.value);
    }
  }

  return (
    <div
      className={[styles.wrapper, SIZE_CLASS[size] ?? styles.medium,
        disabled ? styles.disabled : '', className].filter(Boolean).join(' ')}
    >
      <svg className={styles.icon} viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="9" cy="9" r="5.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M13.5 13.5 17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <input
        ref={inputRef}
        id={inputId}
        type="search"
        className={styles.input}
        placeholder={placeholder}
        defaultValue={defaultValue}
        value={value}
        disabled={disabled}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        {...rest}
      />
      {value !== undefined && value !== '' && (
        <button
          type="button"
          className={styles.clear}
          aria-label="검색어 지우기"
          onClick={() => {
            inputRef.current?.focus();
            onChange?.({ target: { value: '' } });
          }}
        >
          <svg viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="7" fill="var(--surface-neutral-3)" />
            <path d="M7.5 7.5l5 5M12.5 7.5l-5 5" stroke="var(--text-body-2)" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      )}
    </div>
  );
}
