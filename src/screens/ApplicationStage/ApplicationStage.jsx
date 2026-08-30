import { useState } from 'react';
import { NavBar, Stepper, Tag, Button, Texts } from '../../components';
import { iconChevronDown, iconChevronUp, iconInfoOutline } from '../icons.jsx';
import { APPLICATION_STEPS, CURRENT_STEP_INDEX } from '../applicationSteps.js';
import styles from './ApplicationStage.module.css';

const STEP_DETAILS = [
  { label: '지원', status: 'done', trailingText: '완료일 2024.06.01' },
  {
    label: '시험신청',
    status: 'active',
    expandable: true,
    description: '안내 문구 텍스트가 노출됩니다.',
    action: '시험 신청하기',
  },
  { label: '합격여부', status: 'upcoming' },
  { label: '위촉교육', status: 'upcoming' },
  { label: '위촉', status: 'upcoming' },
];

const STATUS_LABEL = { done: '완료', active: '진행중', upcoming: '대기' };

export default function ApplicationStage({ onNavigate }) {
  const [expanded, setExpanded] = useState(() =>
    STEP_DETAILS.reduce((acc, step, i) => {
      if (step.expandable) acc[i] = true;
      return acc;
    }, {}),
  );

  return (
    <div className={styles.screen}>
      <NavBar title="나의 지원단계" onBack={() => onNavigate?.('main-applicant')} />

      <div className={styles.content}>
        <div className={styles.stepperSection}>
          <Stepper steps={APPLICATION_STEPS} current={CURRENT_STEP_INDEX} size="medium" />
        </div>

        <div className={styles.stepList}>
          {STEP_DETAILS.map((step, index) => {
            const isOpen = Boolean(expanded[index]);
            return (
              <div key={step.label} className={styles.stepRow}>
                <div className={styles.stepHead}>
                  <div className={styles.stepHeadLeft}>
                    <Texts variant="subtitle2" weight="bold">{step.label}</Texts>
                    {step.status === 'upcoming' ? (
                      <Texts variant="body2" weight="light" color="body3">{STATUS_LABEL.upcoming}</Texts>
                    ) : (
                      <Tag shape="rounded" color="var(--surface-primary)" style={{ color: '#fff' }}>
                        {STATUS_LABEL[step.status]}
                      </Tag>
                    )}
                  </div>
                  {step.trailingText && (
                    <Texts variant="body2" weight="light" color="body3">{step.trailingText}</Texts>
                  )}
                  {step.expandable && (
                    <button
                      type="button"
                      className={styles.expandToggle}
                      aria-label={isOpen ? '접기' : '펼치기'}
                      onClick={() => setExpanded((prev) => ({ ...prev, [index]: !prev[index] }))}
                    >
                      {isOpen ? iconChevronUp : iconChevronDown}
                    </button>
                  )}
                </div>

                {step.expandable && isOpen && (
                  <div className={styles.stepBody}>
                    <Texts as="p" variant="body2" weight="light" color="body2" className={styles.stepDesc}>
                      {step.description}
                    </Texts>
                    <Button
                      variant="outlineSecondary"
                      size="medium"
                      fullWidth
                      onClick={() => onNavigate?.('main-applicant')}
                    >
                      {step.action}
                    </Button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className={styles.footerNote}>
          <span className={styles.footerNoteIcon}>{iconInfoOutline}</span>
          <Texts variant="caption" weight="light" color="body3">
            단계별 알림 예정 채널: 알림톡 · SMS · 이메일
          </Texts>
        </div>
      </div>

      <div className={styles.fixedFooter}>
        <Button variant="primary" size="large" fullWidth onClick={() => onNavigate?.('main-applicant')}>
          시험 신청하기
        </Button>
      </div>
    </div>
  );
}
