import styles from './Badge.module.css';

export default function Badge({
  children,
  type = 'primary',
  className,
  ...rest
}) {
  const variantClass = type === 'neutral' ? styles.neutral : styles.primary;
  return (
    <span
      className={[styles.badge, variantClass, className].filter(Boolean).join(' ')}
      {...rest}
    >
      {children}
    </span>
  );
}

export function BadgeDot({ className, ...rest }) {
  return (
    <span
      className={[styles.dot, className].filter(Boolean).join(' ')}
      {...rest}
    />
  );
}
