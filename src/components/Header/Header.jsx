import styles from './Header.module.css';

const SIZE_CLASS = {
  large: styles.large,
  medium: styles.medium,
  small: styles.small,
};

export default function Header({
  children,
  title,
  subtitle,
  description,
  eyebrow,
  size = 'medium',
  align = 'start',
  leading,
  trailing,
  className,
  ...rest
}) {
  const classes = [
    styles.header,
    SIZE_CLASS[size] ?? styles.medium,
    styles[`align-${align}`],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <header className={classes} {...rest}>
      {leading && <div className={styles.leading}>{leading}</div>}
      <div className={styles.content}>
        {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
        <h2 className={styles.title}>{title}</h2>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        {description && <p className={styles.description}>{description}</p>}
        {children}
      </div>
      {trailing && <div className={styles.trailing}>{trailing}</div>}
    </header>
  );
}
