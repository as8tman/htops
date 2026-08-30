import styles from './Banner.module.css';

const VARIANT_CLASS = {
  primary: styles.primary,
  info: styles.info,
  warning: styles.warning,
  neutral: styles.neutral,
  secondary: styles.secondary,
};

export default function Banner({
  children,
  title,
  variant = 'primary',
  icon,
  action,
  onClose,
  className,
  ...rest
}) {
  const classes = [styles.banner, VARIANT_CLASS[variant] ?? styles.primary, className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} {...rest}>
      {icon && <span className={styles.icon}>{icon}</span>}
      <div className={styles.content}>
        {title && <p className={styles.title}>{title}</p>}
        {children && <div className={styles.text}>{children}</div>}
      </div>
      {action && <span className={styles.action}>{action}</span>}
      {onClose && (
        <button type="button" className={styles.close} aria-label="닫기" onClick={onClose}>
          <svg viewBox="0 0 20 20" fill="none">
            <path d="M6 6l8 8M14 6l-8 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>
      )}
    </div>
  );
}
