import IconButton from '../IconButton/IconButton.jsx';
import styles from './NavBar.module.css';

const iconBack = (
  <svg viewBox="0 0 24 24" fill="none" width="24" height="24">
    <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function NavBar({
  logo,
  title,
  onBack,
  actions,
  className,
  ...rest
}) {
  const classes = [styles.navbar, logo ? styles.withLogo : '', className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} {...rest}>
      {logo ? (
        <span className={styles.logo}>{logo}</span>
      ) : (
        <>
          {onBack && (
            <IconButton icon={iconBack} variant="ghost" size="medium" aria-label="뒤로 가기" onClick={onBack} />
          )}
          {title && <span className={styles.title}>{title}</span>}
        </>
      )}
      {actions && <div className={styles.actions}>{actions}</div>}
    </div>
  );
}
