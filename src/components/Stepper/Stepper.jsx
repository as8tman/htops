import styles from './Stepper.module.css';

export default function Stepper({
  steps = [],
  current = 0,
  size = 'medium',
  showLabels = true,
  inverted = false,
  className,
  ...rest
}) {
  const sizeClass = styles[size] ?? styles.medium;

  return (
    <ol
      className={[styles.stepper, sizeClass, inverted ? styles.inverted : '', className]
        .filter(Boolean)
        .join(' ')}
      role="list"
      {...rest}
    >
      {steps.map((step, index) => {
        const state = index < current ? 'done' : index === current ? 'active' : 'upcoming';
        return (
          <li key={step.id ?? index} className={[styles.item, styles[`state-${state}`]].filter(Boolean).join(' ')}>
            <span className={styles.marker} aria-hidden="true">
              {state === 'done' ? (
                <svg viewBox="0 0 20 20" fill="none">
                  <path d="M5 10l3.5 3.5L15.5 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                index + 1
              )}
            </span>
            {showLabels && <span className={styles.label}>{step.label ?? step}</span>}
          </li>
        );
      })}
    </ol>
  );
}
