import styles from './ButtonFixed.module.css';

export default function ButtonFixed({
  children,
  variant = 'primary',
  visible = true,
  disabled = false,
  className,
  ...rest
}) {
  const classes = [styles.fixed, !visible ? styles.hidden : '', className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} aria-hidden={!visible}>
      <button
        type="button"
        className={[styles.button, styles[variant], disabled ? styles.disabled : '']
          .filter(Boolean)
          .join(' ')}
        disabled={disabled}
        {...rest}
      >
        {children}
      </button>
    </div>
  );
}
