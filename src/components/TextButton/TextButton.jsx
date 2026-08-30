import styles from './TextButton.module.css';

const SIZE_CLASS = {
  large: styles.large,
  medium: styles.medium,
  small: styles.small,
  xSmall: styles.xSmall,
};

export default function TextButton({
  children,
  size = 'medium',
  color = 'primary',
  disabled = false,
  underline = false,
  type = 'button',
  className,
  ...rest
}) {
  const classes = [
    styles.button,
    SIZE_CLASS[size] ?? styles.medium,
    styles[color],
    underline ? styles.underline : '',
    disabled ? styles.disabled : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button type={type} className={classes} disabled={disabled} {...rest}>
      {children}
    </button>
  );
}
