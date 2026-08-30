import styles from './Button.module.css';

const VARIANT_CLASS = {
  primary: styles.primary,
  secondary: styles.secondary,
  neutral1: styles.neutral1,
  neutral2: styles.neutral2,
  outlinePrimary: styles.outlinePrimary,
  outlineSecondary: styles.outlineSecondary,
  outlineNeutral: styles.outlineNeutral,
};

const SIZE_CLASS = {
  large: styles.large,
  medium: styles.medium,
  small: styles.small,
  mSmall: styles.mSmall,
  xSmall: styles.xSmall,
  xxSmall: styles.xxSmall,
};

export default function Button({
  children,
  variant = 'primary',
  size = 'large',
  iconLeft = null,
  iconRight = null,
  fullWidth = false,
  disabled = false,
  type = 'button',
  className,
  ...rest
}) {
  const classes = [
    styles.button,
    VARIANT_CLASS[variant] ?? styles.primary,
    SIZE_CLASS[size] ?? styles.large,
    fullWidth ? styles.fullWidth : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button type={type} className={classes} disabled={disabled} {...rest}>
      {iconLeft && <span className={styles.icon}>{iconLeft}</span>}
      <span className={styles.label}>{children}</span>
      {iconRight && <span className={styles.icon}>{iconRight}</span>}
    </button>
  );
}
