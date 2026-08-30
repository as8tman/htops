import styles from './IconButton.module.css';

const SIZE_CLASS = {
  large: styles.large,
  medium: styles.medium,
  small: styles.small,
};

export default function IconButton({
  children,
  icon,
  size = 'medium',
  variant = 'primary',
  disabled = false,
  type = 'button',
  className,
  'aria-label': ariaLabel,
  ...rest
}) {
  const classes = [
    styles.button,
    SIZE_CLASS[size] ?? styles.medium,
    styles[variant],
    disabled ? styles.disabled : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      aria-label={ariaLabel ?? '아이콘 버튼'}
      {...rest}
    >
      {icon
        ? typeof icon === 'string'
          ? <img className={styles.icon} src={icon} alt="" />
          : <span className={styles.icon}>{icon}</span>
        : children || <span className={styles.icon}>{'(icon)'}</span>}
    </button>
  );
}
