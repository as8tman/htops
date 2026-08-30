import styles from './Indicator.module.css';

export default function Indicator({
  count,
  current = 0,
  variant = 'dots',
  className,
  ...rest
}) {
  return (
    <div className={[styles.indicator, styles[variant], className].filter(Boolean).join(' ')} role="radiogroup" aria-label="페이지 인디케이터" {...rest}>
      {Array.from({ length: count }, (_, i) => (
        <span
          key={i}
          className={[styles.dot, i === current ? styles.active : styles.inactive]
            .filter(Boolean)
            .join(' ')}
          role="radio"
          aria-checked={i === current}
        >
          {variant === 'pager' ? i + 1 : null}
        </span>
      ))}
    </div>
  );
}

