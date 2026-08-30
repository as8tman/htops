import styles from './Spinner.module.css';

const SIZE_CLASS = {
  small: styles.small,
  medium: styles.medium,
  large: styles.large,
};

export default function Spinner({
  size = 'medium',
  color = 'primary',
  label = '로딩 중',
  className,
  ...rest
}) {
  return (
    <span
      className={[styles.spinner, SIZE_CLASS[size] ?? styles.medium, className].filter(Boolean).join(' ')}
      role="status"
      aria-label={label}
      {...rest}
    >
      <svg className={[styles.svg, styles[color]].filter(Boolean).join(' ')} viewBox="0 0 24 24" fill="none">
        <circle className={styles.track} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" opacity="0.2" />
        <circle className={styles.spin} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeLinecap="round"
          strokeDasharray="60 80" />
      </svg>
      {label && <span className={styles.srOnly}>{label}</span>}
    </span>
  );
}
