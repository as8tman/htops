import { useState } from 'react';
import styles from './Segment.module.css';

export default function Segment({
  options = [],
  value,
  defaultValue,
  onChange,
  disabled = false,
  className,
  ...rest
}) {
  const [active, setActive] = useState(defaultValue ?? value ?? '');
  // 항상 options 중 첫 번째를 기본 값으로도 활용 가능하지만, 외부 컨트롤(value)이 우선

  const current = value !== undefined ? value : active;

  function handleClick(itemValue) {
    setActive(itemValue);
    onChange?.(itemValue);
  }

  return (
    <div className={[styles.segment, disabled ? styles.disabled : '', className]
      .filter(Boolean)
      .join(' ')}
      role="group"
      {...rest}
    >
      {options.map((opt) => {
        const itemValue = typeof opt === 'object' ? opt.value : opt;
        const itemLabel = typeof opt === 'object' ? opt.label : opt;
        const isActive = current === itemValue;
        return (
          <button
            key={itemValue}
            type="button"
            disabled={disabled}
            className={[styles.item, isActive ? styles.itemActive : ''].filter(Boolean).join(' ')}
            aria-pressed={isActive}
            onClick={() => handleClick(itemValue)}
          >
            {itemLabel}
          </button>
        );
      })}
    </div>
  );
}
