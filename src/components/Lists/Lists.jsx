import styles from './Lists.module.css';

const VARIANT_CLASS = {
  plain: styles.plain,
  grouped: styles.grouped,
  card: styles.card,
};

function ListItem({ item, onClick }) {
  const {
    leading,
    title,
    subtitle,
    description,
    trailing,
    chevron = false,
    disabled = false,
    divider = false,
  } = item;

  const children = (
    <>
      {leading && <span className={styles.leading}>{leading}</span>}
      <span className={styles.text}>
        <span className={styles.title}>{title}</span>
        {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
        {description && <span className={styles.description}>{description}</span>}
      </span>
      {trailing && <span className={styles.trailing}>{trailing}</span>}
      {chevron && (
        <span className={styles.chevron} aria-hidden="true">
          <svg viewBox="0 0 20 20" fill="none">
            <path d="M7.5 5l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      )}
    </>
  );

  const classes = [
    styles.item,
    onClick ? styles.clickable : '',
    disabled ? styles.disabled : '',
    divider ? styles.withDivider : '',
  ].filter(Boolean).join(' ');

  if (onClick) {
    return (
      <li className={styles.wrapper}>
        <button
          type="button"
          className={classes}
          onClick={onClick}
          disabled={disabled}
        >
          {children}
        </button>
      </li>
    );
  }

  return (
    <li className={styles.wrapper}>
      <div className={classes}>{children}</div>
    </li>
  );
}

export default function Lists({
  items = [],
  variant = 'plain',
  onClickItem,
  className,
  ...rest
}) {
  const variantClass = VARIANT_CLASS[variant] ?? styles.plain;

  return (
    <ul className={[styles.list, variantClass, className].filter(Boolean).join(' ')} {...rest}>
      {items.map((item, index) => (
        <ListItem
          key={item.id ?? index}
          item={item}
          onClick={onClickItem ? () => onClickItem(item, index) : null}
        />
      ))}
    </ul>
  );
}
