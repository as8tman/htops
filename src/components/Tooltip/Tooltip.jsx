import styles from './Tooltip.module.css';

export default function Tooltip({
  content,
  children,
  placement = 'top',
  delay = 300,
  disabled = false,
  className,
  ...rest
}) {
  const [visible, setVisible] = useState(false);
  const timeoutRef = useRef(null);
  function show() {
    if (disabled) return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setVisible(true), delay);
  }
  function hide() {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setVisible(false);
  }

  return (
    <span
      className={[styles.wrapper, className].filter(Boolean).join(' ')}
      onMouseEnter={show}
      onMouseLeave={hide}
      onClick={hide}
      {...rest}
    >
      {children}
      <span
        className={[styles.tooltip, styles[placement], visible ? styles.visible : ''].filter(Boolean).join(' ')}
        role="tooltip"
        aria-hidden={!visible}
      >
        {content}
      </span>
    </span>
  );
}

