import styles from './Tag.module.css';

export default function Tag({
  children,
  size = 'small',
  shape = 'default',
  className,
  style,
  color,
  ...rest
}) {
  const sizeClass = size === 'xSmall' ? styles.xSmall : styles.small;
  const shapeClass = shape === 'rounded' ? styles.rounded : styles.default;

  return (
    <span
      className={[styles.tag, sizeClass, shapeClass, className]
        .filter(Boolean)
        .join(' ')}
      style={color ? { background: color, ...style } : style}
      {...rest}
    >
      {children}
    </span>
  );
}
