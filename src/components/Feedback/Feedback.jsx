import styles from './Feedback.module.css';

const VARIANT_CLASS = {
  info: styles.info,
  success: styles.success,
  warning: styles.warning,
  error: styles.error,
  neutral: styles.neutral,
};

const ICONS = {
  info: (
    <svg viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 9v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="10" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  ),
  success: (
    <svg viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6.5 10l2.5 2.5 4.5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  warning: (
    <svg viewBox="0 0 20 20" fill="none">
      <path d="M10 3.5 17.5 16h-15L10 3.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M10 9v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="10" cy="15.5" r="0.5" fill="currentColor" />
    </svg>
  ),
  error: (
    <svg viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7.5 7.5l5 5M12.5 7.5l-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  neutral: (
    <svg viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9.5 6.5h1v1h-1zM9.5 9h1v4h-1z" fill="currentColor" />
    </svg>
  ),
};

export default function Feedback({
  children,
  title,
  variant = 'info',
  icon = true,
  action,
  onClose,
  className,
  ...rest
}) {
  const classes = [styles.feedback, VARIANT_CLASS[variant] ?? styles.info, className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} role="status" {...rest}>
      {(icon === true || typeof icon === 'object') && (
        <span className={styles.icon}>{typeof icon === 'object' ? icon : ICONS[variant] ?? ICONS.info}</span>
      )}
      <div className={styles.content}>
        {title && <p className={styles.title}>{title}</p>}
        {children && <div className={styles.text}>{children}</div>}
      </div>
      {action && <span className={styles.action}>{action}</span>}
      {onClose && (
        <button
          type="button"
          className={styles.close}
          aria-label="닫기"
          onClick={onClose}
        >
          <svg viewBox="0 0 20 20" fill="none">
            <path d="M6 6l8 8M14 6l-8 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>
      )}
    </div>
  );
}
