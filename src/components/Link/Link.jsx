import styles from './Link.module.css';

export default function Link({
  children,
  href = '#',
  target,
  underline = true,
  icon,
  color = 'primary',
  disabled = false,
  className,
  ...rest
}) {
  const classes = [styles.link, styles[color], underline ? styles.underline : '',
    icon ? styles.withIcon : '', disabled ? styles.disabled : '', className]
    .filter(Boolean)
    .join(' ');

  if (disabled) {
    return <span className={classes} aria-disabled="true">{children}</span>;
  }

  return (
    <a className={classes} href={href} target={target}
      {...(target ? { rel: 'noreferrer' } : {})} {...rest}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </a>
  );
}
