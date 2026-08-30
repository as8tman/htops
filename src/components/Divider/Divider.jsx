import styles from './Divider.module.css';

export default function Divider({
  orientation = 'horizontal',
  thickness = 'normal',
  color,
  label,
  className,
  ...rest
}) {
  const thicknessClass = styles[`thickness-${thickness}`] ?? styles['thickness-normal'];
  const orientationClass = orientation === 'vertical' ? styles.vertical : styles.horizontal;

  if (!label) {
    return (
      <div
        className={[styles.plain, orientationClass, thicknessClass, className]
          .filter(Boolean)
          .join(' ')}
        style={color ? { background: color } : undefined}
        role="separator"
        {...rest}
      />
    );
  }

  return (
    <div
      className={[styles.withLabel, orientationClass, className].filter(Boolean).join(' ')}
      role="separator"
      {...rest}
    >
      <span className={[styles.line, thicknessClass].filter(Boolean).join(' ')}
        style={color ? { background: color } : undefined} />
      <span className={styles.label}>{label}</span>
      <span className={[styles.line, thicknessClass].filter(Boolean).join(' ')}
        style={color ? { background: color } : undefined} />
    </div>
  );
}
