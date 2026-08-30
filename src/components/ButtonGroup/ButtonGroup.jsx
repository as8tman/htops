import styles from './ButtonGroup.module.css';

export default function ButtonGroup({
  children,
  layout = 'horizontal',
  gap = 'xsmall',
  fullWidth = false,
  className,
  ...rest
}) {
  const gapClass = styles[`gap-${gap}`] ?? styles['gap-xsmall'];

  const classes = [
    styles.group,
    layout === 'vertical' ? styles.vertical : styles.horizontal,
    gapClass,
    fullWidth ? styles.fullWidth : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
}
