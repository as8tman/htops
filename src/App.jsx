import { useState } from 'react';
import {
  Button,
  TextField,
  Select,
  Checkbox,
  Radio,
  Switch,
  Badge,
  BadgeDot,
  Tag,
  Toast,
  Dialog,
  DatePicker,
} from './components';
import './App.css';

const NAV_ITEMS = [
  { id: 'tokens', label: '토큰' },
  { id: 'typography', label: '타이포그래피' },
  { id: 'button', label: 'Button' },
  { id: 'textfield', label: 'TextField' },
  { id: 'select', label: 'Select' },
  { id: 'datepicker', label: 'DatePicker' },
  { id: 'choice', label: 'Checkbox / Radio / Switch' },
  { id: 'badge', label: 'Badge / Tag' },
  { id: 'toast', label: 'Toast' },
  { id: 'dialog', label: 'Dialog' },
];

const COLOR_GROUPS = [
  {
    title: 'Surface',
    swatches: [
      ['--surface-primary', 'surface/primary'],
      ['--surface-secondary', 'surface/secondary'],
      ['--surface-neutral-1', 'surface/neutral-1'],
      ['--surface-neutral-2', 'surface/neutral-2'],
      ['--surface-neutral-3', 'surface/neutral-3'],
    ],
  },
  {
    title: 'Text',
    swatches: [
      ['--text-primary', 'text/primary'],
      ['--text-body', 'text/body'],
      ['--text-body-1', 'text/body-1'],
      ['--text-body-2', 'text/body-2'],
      ['--text-body-3', 'text/body-3'],
      ['--text-neutral-1', 'text/neutral-1'],
    ],
  },
  {
    title: 'Border',
    swatches: [
      ['--border-1', 'border/1'],
      ['--border-2', 'border/2'],
      ['--border-3', 'border/3'],
      ['--border-4', 'border/4'],
      ['--border-5', 'border/5'],
    ],
  },
  {
    title: 'Additional / Status',
    swatches: [
      ['--additional-info', 'additional/info'],
      ['--additional-error', 'additional/error'],
      ['--additional-warning', 'additional/warning'],
      ['--additional-neutral', 'additional/neutral'],
      ['--additional-custom-1', 'additional/custom-1'],
    ],
  },
];

const ORANGE_SCALE = [100, 200, 300, 400, 500, 600, 700, 800, 900];

const TYPE_STYLES = [
  ['title1', 'var(--font-size-title1)', 'var(--weight-bold)'],
  ['title2', 'var(--font-size-title2)', 'var(--weight-bold)'],
  ['title3', 'var(--font-size-title3)', 'var(--weight-bold)'],
  ['title4', 'var(--font-size-title4)', 'var(--weight-bold)'],
  ['title5', 'var(--font-size-title5)', 'var(--weight-bold)'],
  ['subtitle1', 'var(--font-size-subtitle1)', 'var(--weight-regular)'],
  ['subtitle2', 'var(--font-size-subtitle2)', 'var(--weight-regular)'],
  ['body1', 'var(--font-size-body1)', 'var(--weight-light)'],
  ['body2', 'var(--font-size-body2)', 'var(--weight-light)'],
  ['caption', 'var(--font-size-caption)', 'var(--weight-light)'],
];

const BUTTON_VARIANTS = [
  'primary',
  'secondary',
  'neutral1',
  'neutral2',
  'outlinePrimary',
  'outlineSecondary',
  'outlineNeutral',
];

function Section({ id, title, description, children }) {
  return (
    <section id={id} className="section">
      <div className="section-heading">
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
      {children}
    </section>
  );
}

export default function App() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [scrollDialogOpen, setScrollDialogOpen] = useState(false);
  const [toastVisible, setToastVisible] = useState(true);

  return (
    <div className="page">
      <header className="page-header">
        <p className="eyebrow">H-TOPS Design System</p>
        <h1>컴포넌트 데모</h1>
        <p className="lead">
          Figma 디자인 시스템에서 추출한 토큰과 핵심 컴포넌트를 확인합니다. 브라우저 폭을
          줄여 반응형 동작을 확인해보세요.
        </p>
      </header>

      <nav className="page-nav">
        <ul>
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <main className="page-main">
        <Section
          id="tokens"
          title="색상 토큰"
          description="Figma 변수에서 추출한 semantic 색상과 primary 컬러 스케일입니다."
        >
          <div className="token-groups">
            {COLOR_GROUPS.map((group) => (
              <div key={group.title} className="token-group">
                <h3>{group.title}</h3>
                <div className="swatch-grid">
                  {group.swatches.map(([variable, name]) => (
                    <div key={variable} className="swatch">
                      <span
                        className="swatch-color"
                        style={{ background: `var(${variable})` }}
                      />
                      <span className="swatch-name">{name}</span>
                      <span className="swatch-var">{variable}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <div className="token-group">
              <h3>Orange scale</h3>
              <div className="scale-row">
                {ORANGE_SCALE.map((step) => (
                  <div key={step} className="scale-chip">
                    <span
                      className="swatch-color"
                      style={{ background: `var(--color-orange-${step})` }}
                    />
                    <span className="swatch-name">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section id="typography" title="타이포그래피">
          <div className="type-list">
            {TYPE_STYLES.map(([name, size, weight]) => (
              <div key={name} className="type-row">
                <span className="type-name">{name}</span>
                <span
                  className="type-sample"
                  style={{ fontSize: size, fontWeight: weight }}
                >
                  한화생명 H-TOPS 시스템재구축
                </span>
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="button"
          title="Button"
          description="7가지 variant와 6단계 size를 지원합니다."
        >
          <div className="control-stack">
            {BUTTON_VARIANTS.map((variant) => (
              <div key={variant} className="control-row">
                <span className="control-row-label">{variant}</span>
                <div className="button-row">
                  <Button variant={variant} size="large">
                    버튼명
                  </Button>
                  <Button variant={variant} size="medium">
                    버튼명
                  </Button>
                  <Button variant={variant} size="small">
                    버튼명
                  </Button>
                  <Button variant={variant} size="xSmall">
                    버튼명
                  </Button>
                  <Button variant={variant} size="large" disabled>
                    disabled
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="textfield" title="TextField">
          <div className="card-grid">
            <TextField label="레이블" placeholder="예시문구" />
            <TextField
              label="헬프텍스트"
              placeholder="레이블을 입력해주세요"
              helpText="헬프텍스트를 입력해주세요"
            />
            <TextField
              label="에러"
              placeholder="레이블을 입력해주세요"
              defaultValue="잘못된 입력"
              errorText="에러텍스트를 입력해주세요"
            />
            <TextField label="Disabled" placeholder="비활성" disabled />
            <TextField label="Small" size="small" placeholder="small 사이즈" />
            <TextField label="xSmall" size="xSmall" placeholder="xSmall 사이즈" />
          </div>
        </Section>

        <Section id="select" title="Select">
          <div className="card-grid">
            <Select label="레이블" placeholder="레이블을 선택해주세요">
              <option value="1">옵션 1</option>
              <option value="2">옵션 2</option>
              <option value="3">옵션 3</option>
            </Select>
            <Select
              label="에러"
              placeholder="레이블을 선택해주세요"
              errorText="옵션을 선택해주세요"
            >
              <option value="1">옵션 1</option>
            </Select>
            <Select label="Disabled" placeholder="비활성" disabled>
              <option value="1">옵션 1</option>
            </Select>
          </div>
        </Section>

        <Section id="datepicker" title="DatePicker">
          <div className="card-grid">
            <DatePicker label="레이블" defaultValue="2024-06-15" helpText="날짜를 선택하거나 직접 입력하세요" />
            <DatePicker
              label="에러"
              errorText="날짜를 확인해주세요"
            />
            <DatePicker label="Disabled" disabled />
            <DatePicker label="Small" size="small" defaultValue="2024-01-01" />
            <DatePicker label="xSmall" size="xSmall" defaultValue="2024-12-31" />
          </div>
        </Section>

        <Section id="choice" title="Checkbox / Radio / Switch">
          <div className="choice-grid">
            <div className="choice-card">
              <h3>Checkbox</h3>
              <Checkbox label="선택 안함" name="demo-checkbox-1" />
              <Checkbox label="선택됨" name="demo-checkbox-2" defaultChecked />
              <Checkbox label="Disabled" name="demo-checkbox-3" disabled />
              <Checkbox
                label="Disabled + 선택"
                name="demo-checkbox-4"
                defaultChecked
                disabled
              />
              <Checkbox label="Small" size="small" name="demo-checkbox-5" defaultChecked />
            </div>
            <div className="choice-card">
              <h3>Radio</h3>
              <Radio label="옵션 A" name="demo-radio" defaultChecked />
              <Radio label="옵션 B" name="demo-radio" />
              <Radio label="Disabled" name="demo-radio-disabled" disabled />
              <Radio label="Small" size="small" name="demo-radio-small" defaultChecked />
            </div>
            <div className="choice-card">
              <h3>Switch</h3>
              <Switch label="Off" name="demo-switch-1" />
              <Switch label="On" name="demo-switch-2" defaultChecked />
              <Switch label="Disabled" name="demo-switch-3" disabled />
              <Switch label="Small" size="small" name="demo-switch-4" defaultChecked />
            </div>
          </div>
        </Section>

        <Section id="badge" title="Badge / Tag">
          <div className="inline-row">
            <Badge>3</Badge>
            <Badge>99+</Badge>
            <Badge type="neutral">2</Badge>
            <BadgeDot />
          </div>
          <div className="inline-row">
            <Tag>태그</Tag>
            <Tag size="xSmall">태그</Tag>
            <Tag shape="rounded">태그</Tag>
            <Tag size="xSmall" shape="rounded">
              태그
            </Tag>
            <Tag color="var(--additional-info)">정보</Tag>
            <Tag color="var(--additional-warning)">경고</Tag>
          </div>
        </Section>

        <Section id="toast" title="Toast">
          <div className="inline-row toast-controls">
            <Button size="small" onClick={() => setToastVisible(true)}>
              토스트 표시
            </Button>
          </div>
          {toastVisible && (
            <div className="toast-stack">
              <Toast variant="warning" actionLabel="확인" onAction={() => setToastVisible(false)}>
                텍스트를 입력해주세요
              </Toast>
              <Toast variant="success">저장되었습니다</Toast>
              <Toast variant="error">오류가 발생했습니다</Toast>
            </div>
          )}
        </Section>

        <Section id="dialog" title="Dialog">
          <div className="inline-row">
            <Button size="small" onClick={() => setDialogOpen(true)}>
              기본 Dialog 열기
            </Button>
            <Button size="small" variant="outlinePrimary" onClick={() => setScrollDialogOpen(true)}>
              스크롤 Dialog 열기
            </Button>
          </div>

          <Dialog
            open={dialogOpen}
            onClose={() => setDialogOpen(false)}
            title="타이틀"
            closeIcon
            actionsLayout="horizontal"
            actions={
              <>
                <Button variant="neutral1" onClick={() => setDialogOpen(false)}>
                  취소
                </Button>
                <Button variant="primary" onClick={() => setDialogOpen(false)}>
                  확인
                </Button>
              </>
            }
          >
            텍스트를 입력해주세요
          </Dialog>

          <Dialog
            open={scrollDialogOpen}
            onClose={() => setScrollDialogOpen(false)}
            title="약관 전문"
            closeIcon
            actions={
              <Button variant="primary" fullWidth onClick={() => setScrollDialogOpen(false)}>
                동의합니다
              </Button>
            }
          >
            {Array.from({ length: 12 }).map((_, index) => (
              <p key={index} style={{ marginBottom: 12 }}>
                {index + 1}. 텍스트를 입력해주세요. 텍스트를 입력해주세요. 텍스트를
                입력해주세요.
              </p>
            ))}
          </Dialog>
        </Section>
      </main>

      <footer className="page-footer">
        <p>Copyright ⓒ 한화생명 디지털프로덕트팀. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
