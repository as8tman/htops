import { useState, useRef, useEffect, useId } from 'react';
import styles from './DatePicker.module.css';

const WEEKDAYS = ['일', '월', '화', '수', '목', '금', '토'];
const MONTHS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function pad(n) {
  return String(n).padStart(2, '0');
}

function toDateString(d) {
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

function startOfMonth(year, month) {
  return new Date(year, month, 1);
}

function buildCalendar(year, month) {
  const firstDay = startOfMonth(year, month).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const prevDays = new Date(year, month, 0).getDate();

  const cells = [];

  for (let i = firstDay - 1; i >= 0; i -= 1) {
    cells.push({ day: prevDays - i, prev: true });
  }
  for (let d = 1; d <= daysInMonth; d += 1) {
    cells.push({ day: d });
  }
  const remaining = cells.length % 7 === 0 ? 0 : 7 - (cells.length % 7);
  for (let i = 1; i <= remaining; i += 1) {
    cells.push({ day: i, next: true });
  }

  return cells;
}

const SIZE_CLASS = {
  medium: styles.medium,
  small: styles.small,
  xSmall: styles.xSmall,
};

export default function DatePicker({
  label,
  placeholder,
  value,
  defaultValue,
  onChange,
  helpText,
  errorText,
  size = 'medium',
  disabled = false,
  className,
  id,
  minDate,
  maxDate,
  ...rest
}) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const hasError = Boolean(errorText);

  const [selected, setSelected] = useState(() =>
    new Date(defaultValue ?? value ?? Date.now())
  );

  const [inputValue, setInputValue] = useState(() => {
    const base = new Date(defaultValue ?? value ?? Date.now());
    return toDateString(base);
  });

  const [viewYear, setViewYear] = useState(selected.getFullYear());
  const [viewMonth, setViewMonth] = useState(selected.getMonth());
  const [open, setOpen] = useState(false);

  const wrapRef = useRef(null);
  const popupRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (
        popupRef.current &&
        !popupRef.current.contains(e.target) &&
        !e.target.closest(`[data-datefield]`)
      ) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  useEffect(() => {
    if (open && popupRef.current) {
      const active = popupRef.current.querySelector(`[data-today]`);
      if (active) active.focus();
    }
  }, [open, viewYear, viewMonth]);

  function isDisabled(dayDate) {
    if (!dayDate) return true;
    const t = dayDate.getTime();
    if (minDate && t < new Date(minDate).setHours(0, 0, 0, 0)) return true;
    if (maxDate && t > new Date(maxDate).setHours(23, 59, 59, 999)) return true;
    return false;
  }

  function handleSelect(dayDate) {
    if (isDisabled(dayDate)) return;
    setSelected(dayDate);
    setInputValue(toDateString(dayDate));
    onChange?.(toDateString(dayDate), dayDate);
    setOpen(false);
  }

  function handleInputChange(e) {
    setInputValue(e.target.value);
    const parsed = new Date(e.target.value);
    if (!Number.isNaN(parsed.getTime())) {
      setSelected(parsed);
      setViewYear(parsed.getFullYear());
      setViewMonth(parsed.getMonth());
    }
  }

  function handleInputBlur() {
    const parsed = new Date(inputValue);
    if (!Number.isNaN(parsed.getTime())) {
      setSelected(parsed);
      setViewYear(parsed.getFullYear());
      setViewMonth(parsed.getMonth());
      setInputValue(toDateString(parsed));
      onChange?.(toDateString(parsed), parsed);
    }
  }

  function prevMonth() {
    setViewMonth((m) => {
      if (m === 0) {
        setViewYear((y) => y - 1);
        return 11;
      }
      return m - 1;
    });
  }

  function nextMonth() {
    setViewMonth((m) => {
      if (m === 11) {
        setViewYear((y) => y + 1);
        return 0;
      }
      return m + 1;
    });
  }

  const cells = buildCalendar(viewYear, viewMonth);
  const today = new Date();
  const todayStr = toDateString(today);
  const selectedStr = toDateString(selected);

  const fieldClasses = [
    styles.field,
    SIZE_CLASS[size] ?? styles.medium,
    open ? styles.focus : '',
    hasError ? styles.error : '',
    disabled ? styles.disabled : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={[styles.wrapper, className].filter(Boolean).join(' ')}>
      {label && (
        <label className={styles.label} htmlFor={inputId}>
          {label}
        </label>
      )}

      <div
        className={fieldClasses}
        data-datefield
        ref={wrapRef}
      >
        <input
          id={inputId}
          className={styles.input}
          value={inputValue}
          onChange={handleInputChange}
          onFocus={() => !disabled && setOpen(true)}
          onBlur={handleInputBlur}
          placeholder={placeholder ?? 'YYYY-MM-DD'}
          disabled={disabled}
          aria-invalid={hasError || undefined}
          aria-haspopup="dialog"
          aria-expanded={open}
          {...rest}
        />
        <button
          type="button"
          className={styles.calendarIcon}
          onClick={() => !disabled && setOpen((v) => !v)}
          aria-label="날짜 선택 열기"
          tabIndex={-1}
        >
          <svg viewBox="0 0 20 20" fill="none">
            <path
              d="M6 2.5v3M14 2.5v3M3.5 8h13M4.5 4h11a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {open && !disabled && (
        <div className={styles.popup} role="dialog" aria-label="달력 날짜 선택" ref={popupRef}>
          <div className={styles.popupHeader}>
            <button
              type="button"
              className={styles.nav}
              onClick={prevMonth}
              aria-label="이전 달"
            >
              <svg viewBox="0 0 20 20" fill="none">
                <path
                  d="M12 5l-5 5 5 5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className={styles.popupTitle}>
              <span className={styles.monthLabel}>{viewYear}년</span>
              <span className={styles.monthValue}>{viewMonth + 1}월</span>
            </div>
            <button
              type="button"
              className={styles.nav}
              onClick={nextMonth}
              aria-label="다음 달"
            >
              <svg viewBox="0 0 20 20" fill="none">
                <path
                  d="M8 5l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className={styles.weekdays}>
            {WEEKDAYS.map((wd) => (
              <div key={wd} className={styles.weekday}>
                {wd}
              </div>
            ))}
          </div>

          <div className={styles.grid}>
            {cells.map((cell, index) => {
              const dayDate = cell.prev
                ? new Date(viewYear, viewMonth - 1, cell.day)
                : cell.next
                  ? new Date(viewYear, viewMonth + 1, cell.day)
                  : new Date(viewYear, viewMonth, cell.day);

              const dateStr = toDateString(dayDate);
              const isDisabledDay = isDisabled(dayDate);

              const classNames = [
                styles.day,
                cell.prev || cell.next ? styles.outside : '',
                dateStr === todayStr ? styles.today : '',
                dateStr === selectedStr ? styles.selected : '',
                isDisabledDay ? styles.disabledDay : '',
              ]
                .filter(Boolean)
                .join(' ');

              return (
                <button
                  key={index}
                  type="button"
                  className={classNames}
                  onClick={() => handleSelect(dayDate)}
                  disabled={isDisabledDay}
                  data-today={dateStr === todayStr ? '' : undefined}
                >
                  {cell.day}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {hasError ? (
        <div className={styles.bottomRow}>
          <span className={styles.errorText}>{errorText}</span>
        </div>
      ) : (
        helpText && (
          <div className={styles.bottomRow}>
            <span className={styles.dot} />
            <span className={styles.helpText}>{helpText}</span>
          </div>
        )
      )}
    </div>
  );
}
