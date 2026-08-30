import styles from './ProgressBar.module.css';

export default function ProgressBar({
  value = 0,
  max = 100,
  size = 'medium',
  label,
  status,
  className,
  ...rest
}) {
  const percent = max > 0 ? Math.min(100, Math.max(0, (value / max) * 100)) : 0;
  const sizeClass = styles[size] ?? styles.medium;

  return (
    <div className={[styles.wrapper, sizeClass, className].filter(Boolean).join(' ')} {...rest}>
      {(label || typeof value === 'number') && (
        <div className={styles.topRow}>
          {label && <span className={styles.label}>{label}</span>}
          <span className={styles.value}>{Math.round(percent)}%</span>
        </div>
      )}
      <div className={styles.track} role="progressbar"
        aria-valuenow={Math.round(percent)} aria-valuemin={0} aria-valuemax={100}
        aria-label={label}>
        <div className={[styles.fill, status ? styles[status] : ''].filter(Boolean).join(' ')}
          style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}
