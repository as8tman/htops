import { useState } from 'react';
import styles from './Chips.module.css';

export default function Chips({
  options = [],
  value,
  defaultValue,
  onChange,
  multiple = false,
  disabled = false,
  className,
  ...rest
}) {
  const initial = defaultValue ?? value ?? (multiple ? [] : '');
  const [selected, setSelected] = useState(initial);

  function isActive(itemValue) {
    if (multiple) {
      return Array.isArray(selected) && selected.includes(itemValue);
    }
    return selected === itemValue;
  }

  function handleClick(itemValue) {
    let next;
    if (multiple) {
      next = Array.isArray(selected)
        ? selected.includes(itemValue)
          ? selected.filter((v) => v !== itemValue)
          : [...selected, itemValue]
        : [itemValue];
    } else {
      next = isActive(itemValue) ? '' : itemValue;
    }
    setSelected(next);
    onChange?.(next);
  }

  return (
    <div className={[styles.group, className].filter(Boolean).join(' ')} {...rest}>
      {options.map((opt) => {
        const itemValue = typeof opt === 'object' ? opt.value : opt;
        const itemLabel = typeof opt === 'object' ? opt.label : opt;
        const active = isActive(itemValue);
        return (
          <button
            key={itemValue}
            type="button"
            disabled={disabled}
            className={[styles.chip, active ? styles.active : '', disabled ? styles.disabled : '']
              .filter(Boolean)
              .join(' ')}
            aria-pressed={active}
            onClick={() => handleClick(itemValue)}
          >
            {itemLabel}
          </button>
        );
      })}
    </div>
  );
}
