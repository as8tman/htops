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
  IconButton,
  TextButton,
  ButtonGroup,
  ButtonFixed,
  Chips,
  Segment,
  Search,
  Keypad,
  Rating,
  Accordion,
  Banner,
  Divider,
  Stepper,
  BottomNavigation,
  Tabs,
  Link,
  Indicator,
  BottomSheet,
  Spinner,
  Tooltip,
  ProgressBar,
  Header,
  Lists,
  Texts,
  Feedback,
} from './components';
import { ScreensDemo } from './pages';
import { screenRoutes, usePathname } from './pages/router.jsx';
import RouteScreen from './pages/RouteScreen.jsx';
import DemoHeader from './pages/DemoHeader.jsx';
import './App.css';

const NAV_ITEMS = [
  { id: 'tokens', label: '토큰' },
  { id: 'typography', label: '타이포그래피' },
  { id: 'button', label: 'Button' },
  { id: 'button-actions', label: 'Button 계열' },
  { id: 'chips', label: 'Chips' },
  { id: 'segment', label: 'Segment' },
  { id: 'search', label: 'Search' },
  { id: 'keypad', label: 'Keypad' },
  { id: 'rating', label: 'Rating' },
  { id: 'accordion', label: 'Accordion' },
  { id: 'banner', label: 'Banner' },
  { id: 'divider', label: 'Divider' },
  { id: 'stepper', label: 'Stepper' },
  { id: 'bottomnav', label: 'BottomNavigation' },
  { id: 'tabs', label: 'Tabs' },
  { id: 'link', label: 'Link' },
  { id: 'indicator', label: 'Indicator' },
  { id: 'bottomsheet', label: 'BottomSheet' },
  { id: 'spinner', label: 'Spinner' },
  { id: 'tooltip', label: 'Tooltip' },
  { id: 'progress', label: 'ProgressBar' },
  { id: 'header', label: 'Header' },
  { id: 'lists', label: 'Lists' },
  { id: 'texts', label: 'Texts' },
  { id: 'feedback', label: 'Feedback' },
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

const iconStar = (
  <svg viewBox="0 0 20 20" fill="none" width="20" height="20">
    <path
      d="M10 3l2.1 4.26 4.7.68-3.4 3.32.8 4.68L10 13.9l-4.2 2.04.8-4.68-3.4-3.32 4.7-.68L10 3z"
      fill="currentColor"
    />
  </svg>
);

const iconHome = (
  <svg viewBox="0 0 20 20" fill="none" width="20" height="20">
    <path d="M3 9.5 10 3l7 6.5V17a1 1 0 0 1-1 1h-4v-4h-4v4H4a1 1 0 0 1-1-1V9.5z" fill="currentColor" />
  </svg>
);

const iconSearchNav = (
  <svg viewBox="0 0 20 20" fill="none" width="20" height="20">
    <circle cx="9" cy="9" r="5.5" stroke="currentColor" strokeWidth="1.6" />
    <path d="M13.5 13.5 17 17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const iconUser = (
  <svg viewBox="0 0 20 20" fill="none" width="20" height="20">
    <circle cx="10" cy="7" r="3.5" stroke="currentColor" strokeWidth="1.6" />
    <path d="M3.5 17a6.5 6.5 0 0 1 13 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

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
  const [sheetOpen, setSheetOpen] = useState(false);
  const [view, setView] = useState('screens');
  const pathname = usePathname();

  // /SCR-001 ~ /SCR-006 등으로 접근하면 해당 실화면만 보여준다. (데모 상단 UI 제외)
  if (screenRoutes[pathname]) {
    return <RouteScreen pathname={pathname} />;
  }

  return (
    <div className="page">
      <DemoHeader view={view} onViewChange={setView} />

      {view === 'components' ? (
        <nav className="page-nav">
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}

      <main className="page-main">
        {view === 'screens' ? (
          <ScreensDemo />
        ) : (
          <>
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

        <Section id="button-actions" title="Button 계열">
          <div className="control-stack">
            <div className="control-row">
              <span className="control-row-label">IconButton</span>
              <div className="inline-row">
                <IconButton icon={iconStar} size="medium" variant="primary" />
                <IconButton icon={iconStar} size="small" variant="neutral" />
                <IconButton icon={iconStar} size="small" variant="outline" />
                <IconButton icon={iconStar} size="small" variant="primary" disabled />
              </div>
            </div>
            <div className="control-row">
              <span className="control-row-label">TextButton</span>
              <div className="inline-row">
                <TextButton size="large">텍스트 버튼</TextButton>
                <TextButton size="medium">텍스트 버튼</TextButton>
                <TextButton size="medium" underline>밑줄 버튼</TextButton>
                <TextButton size="medium" color="neutral">중립</TextButton>
                <TextButton size="medium" disabled>비활성</TextButton>
              </div>
            </div>
            <div className="control-row">
              <span className="control-row-label">ButtonGroup</span>
              <ButtonGroup gap="small">
                <Button variant="secondary" size="medium">취소</Button>
                <Button variant="primary" size="medium">확인</Button>
              </ButtonGroup>
            </div>
            <div className="control-row">
              <span className="control-row-label">ButtonFixed (하단 고정 CTA)</span>
              <ButtonFixed variant="primary">다음</ButtonFixed>
            </div>
          </div>
        </Section>

        <Section id="chips" title="Chips">
          <div className="card-grid">
            <div className="choice-card">
              <h3>Chips 기본</h3>
              <Chips options={['전체', '공지', '이벤트', '사용법']} />
            </div>
            <div className="choice-card">
              <h3>Chips 다중 선택</h3>
              <Chips options={['A', 'B', 'C', 'D']} multiple />
            </div>
          </div>
        </Section>

        <Section id="segment" title="Segment">
          <div className="card-grid">
            <div className="choice-card">
              <h3>Segment</h3>
              <Segment options={['기본 정보', '보장 내용', '청약 안내']} />
            </div>
          </div>
        </Section>

        <Section id="search" title="Search">
          <div className="card-grid">
            <Search placeholder="검색어를 입력하세요" />
          </div>
        </Section>

        <Section id="keypad" title="Keypad">
          <div className="choice-card">
            <h3>보안 키패드</h3>
            <Keypad onComplete={(v) => console.log('입력 완료:', v)} />
          </div>
        </Section>

        <Section id="rating" title="Rating">
          <div className="inline-row">
            <Rating size="medium" />
            <Rating size="small" defaultValue={3} />
          </div>
        </Section>

        <Section id="accordion" title="Accordion">
          <Accordion
            items={[
              { title: '보장 내용 확인', content: '보장 항목에 대한 텍스트를 입력해주세요.' },
              { title: '청약 안내', content: '청약 시 유의사항에 대한 텍스트를 입력해주세요.' },
              { title: '고객센터', content: '고객센터 안내 텍스트를 입력해주세요.' },
            ]}
          />
        </Section>

        <Section id="banner" title="Banner">
          <div className="card-grid">
            <Banner title="프로모션" variant="primary">이벤트 배너 텍스트를 입력해주세요.</Banner>
            <Banner title="안내" variant="info" onClose={() => {}}>안내 배너 텍스트를 입력해주세요.</Banner>
            <Banner title="경고" variant="warning">주의 배너 텍스트를 입력해주세요.</Banner>
          </div>
        </Section>

        <Section id="divider" title="Divider">
          <div className="card-grid">
            <div>
              <Divider />
              <Divider label="구분선" />
            </div>
          </div>
        </Section>

        <Section id="stepper" title="Stepper">
          <div className="choice-card">
            <Stepper current={2} steps={['신청', '보장내용', '입력', '완료']} />
          </div>
        </Section>

        <Section id="bottomnav" title="BottomNavigation">
          <BottomNavigation
            defaultValue="홈"
            items={[
              { label: '홈', value: '홈', icon: iconHome },
              { label: '조회', value: '조회', icon: iconSearchNav },
              { label: '혜택', value: '혜택', icon: iconStar },
              { label: '내정보', value: '내정보', icon: iconUser },
            ]}
          />
        </Section>

        <Section id="tabs" title="Tabs">
          <div className="choice-card">
            <h3>underline</h3>
            <Tabs defaultValue="1" items={['1', '2', '3', '4']} />
          </div>
          <div className="choice-card">
            <h3>rounded</h3>
            <Tabs defaultValue="1" variant="rounded" items={['1', '2', '3']} />
          </div>
        </Section>

        <Section id="link" title="Link">
          <div className="inline-row">
            <Link href="#">기본 링크</Link>
            <Link href="#" color="body">본문 링크</Link>
            <Link href="#" underline={false}>밑줄 없는 링크</Link>
            <Link href="#" disabled>비활성 링크</Link>
          </div>
        </Section>

        <Section id="indicator" title="Indicator">
          <div className="inline-row">
            <Indicator count={4} current={1} variant="dots" />
            <Indicator count={4} current={1} variant="pager" />
          </div>
        </Section>

        <Section id="bottomsheet" title="BottomSheet">
          <div className="inline-row">
            <Button size="small" onClick={() => setSheetOpen(true)}>
              바텀시트 열기
            </Button>
          </div>
          <BottomSheet open={sheetOpen} onClose={() => setSheetOpen(false)} title="바텀 시트">
            <p>바텀 시트 내용을 입력해주세요.</p>
          </BottomSheet>
        </Section>

        <Section id="spinner" title="Spinner">
          <div className="inline-row">
            <Spinner size="small" />
            <Spinner size="medium" />
            <Spinner size="large" />
          </div>
        </Section>

        <Section id="tooltip" title="Tooltip">
          <div className="inline-row">
            <Tooltip content="도움말을 입력해주세요" placement="top">
              <Button size="small" variant="outlinePrimary">상단 툴팁</Button>
            </Tooltip>
            <Tooltip content="오른쪽 툴팁" placement="right">
              <Button size="small" variant="neutral1">오른쪽 툴팁</Button>
            </Tooltip>
          </div>
        </Section>

        <Section id="progress" title="ProgressBar">
          <div className="choice-card">
            <ProgressBar label="진행률" value={60} />
            <ProgressBar label="완료" value={100} status="success" />
          </div>
        </Section>

        <Section
          id="header"
          title="Header"
          description="화면 상단에 사용하는 제목/설명 헤더 컴포넌트입니다."
        >
          <div className="control-stack">
            <div className="choice-card">
              <Header
                eyebrow="H-TOPS"
                title="보험 안내"
                subtitle="부가설명 텍스트를 입력해주세요"
                description="상세 설명 텍스트를 입력해주세요. 상세 설명 텍스트를 입력해주세요."
              />
            </div>
            <div className="choice-card">
              <h3>large / trailing</h3>
              <Header
                size="large"
                title="마이페이지"
                leading={
                  <IconButton icon={iconStar} size="small" variant="neutral" />
                }
                trailing={
                  <IconButton icon={iconUser} size="small" variant="outline" />
                }
              />
            </div>
            <div className="choice-card">
              <h3>small / align-center</h3>
              <Header
                size="small"
                align="center"
                title="안내 문구 제목"
                description="중앙정렬 스몰 헤더입니다. 중앙정렬 스몰 헤더입니다."
              />
            </div>
          </div>
        </Section>

        <Section
          id="lists"
          title="Lists"
          description="목록을 구성하는 리스트 컴포넌트입니다. plain/grouped/card variant를 지원합니다."
        >
          <div className="card-grid">
            <div>
              <h3>card + clickable</h3>
              <Lists
                variant="card"
                onClickItem={(item) => console.log('선택:', item.title)}
                items={[
                  { title: '계약 조회', leading: iconStar, chevron: true, divider: true },
                  { title: '보험료 납입', leading: iconStar, chevron: true, divider: true },
                  { title: '청약 안내', leading: iconStar, chevron: true },
                ]}
              />
            </div>
            <div>
              <h3>grouped (subtitle/trailing)</h3>
              <Lists
                variant="grouped"
                items={[
                  { title: '한화생명', subtitle: '담당자', trailing: '박상무' },
                  { title: '주소', subtitle: '수령지', trailing: '서울시 강남구' },
                  { title: '연락처', subtitle: '처리시간', trailing: '평일 9:00-18:00' },
                ]}
              />
            </div>
            <div>
              <h3>plain + description</h3>
              <Lists
                items={[
                  { title: '준비물', description: '신분증과 청약서가 필요합니다.', divider: true },
                  { title: '절차', description: '심사 후 순차적으로 안내합니다.', divider: true },
                  { title: '문의', description: '고객센터 1588-0000으로 연락주세요.' },
                ]}
              />
            </div>
          </div>
        </Section>

        <Section
          id="texts"
          title="Texts"
          description="타이포그래피 스타일을 적용하는 텍스트 컴포넌트입니다."
        >
          <div className="card-grid">
            <div className="choice-card">
              <Texts variant="title1" weight="bold">title1 heading</Texts>
              <Texts variant="title3" weight="bold">title3 heading</Texts>
              <Texts variant="subtitle2">subtitle2 텍스트</Texts>
              <Texts variant="body2" color="body2">body2 본문 텍스트를 입력해주세요.</Texts>
              <Texts variant="caption" color="neutral">caption 보조 텍스트</Texts>
            </div>
            <div className="choice-card">
              <h3>weights</h3>
              <Texts variant="body1" weight="light">weight lighter</Texts>
              <Texts variant="body1" weight="regular">weight regular</Texts>
              <Texts variant="body1" weight="bold">weight bold</Texts>
            </div>
            <div className="choice-card">
              <h3>colors</h3>
              <Texts variant="body2" color="primary">primary 텍스트</Texts>
              <Texts variant="body2" color="error">error 텍스트</Texts>
              <Texts variant="body2" color="info">info 텍스트</Texts>
              <Texts variant="body2" color="body3">body3 텍스트</Texts>
            </div>
          </div>
        </Section>

        <Section
          id="feedback"
          title="Feedback"
          description="화면 내 안내/상태 메시지를 위한 피드백 컴포넌트입니다."
        >
          <div className="toast-stack">
            <Feedback title="확인되었습니다" variant="success">
              요청하신 정보가 정상적으로 저장되었습니다.
            </Feedback>
            <Feedback title="안내" variant="info" onClose={() => {}}>
              심사가 완료되면 문자로 안내해 드립니다.
            </Feedback>
            <Feedback title="주의" variant="warning" action={<Link href="#">자세히 보기</Link>}>
              상품별 보장 금액이 다를 수 있습니다.
            </Feedback>
            <Feedback variant="error">필수 항목을 모두 입력해주세요.</Feedback>
            <Feedback
              variant="neutral"
              icon={false}
              title="알아두세요"
            >
              중립 스타일 피드백 텍스트를 입력해주세요.
            </Feedback>
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
          </>
        )}
      </main>

      <footer className="page-footer">
        <p>Copyright ⓒ 한화생명 디지털프로덕트팀. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
