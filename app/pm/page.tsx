/**
 * 파일명: PM Portfolio
 *
 * 역할:
 * 제품 직무 채용 담당자에게 문제 정의, 우선순위, 데이터 전략, 실행 결과를 중심으로 경험을 전달한다.
 *
 * 처리 흐름:
 * 직무 관점 요약 -> 대표 제품 사례 -> 실행 방식 -> 경력/교육 -> 연락
 */
import { ArrowLeft, ArrowUpRight, Mail, Workflow } from 'lucide-react';
import Link from 'next/link';

const cases = [
  {
    number: '01',
    title: 'Quote Distortion Detection',
    subtitle: '뉴스 인용 왜곡을 사용자가 즉시 검증하는 Chrome Extension',
    period: '2025.08 — 2025.12 · 3인 팀',
    role: '문제 정의 · 서비스 기획 총괄 · 시스템 설계 · 프론트엔드 구현',
    problem:
      '기존 팩트체크는 사실 여부에 집중해, 실제 발언의 의미가 기사에서 축소·확장·변형되는 문제를 사용자가 바로 확인하기 어려웠습니다.',
    decisions: [
      '기사 소비 흐름을 방해하지 않는 Chrome Extension을 핵심 접점으로 선택',
      '인용문 추출 → 원문 탐색 → 문장 정렬 → 왜곡 판단의 E2E 사용자 흐름 설계',
      '왜곡 데이터 부족을 핵심 리스크로 정의하고 GPT 기반 증강·라벨링 기준 수립',
      '모델 후보를 비교해 성능과 서비스 적용 가능성이 가장 높은 MPNet 채택',
    ],
    outcomes: [
      ['0.86', '최종 F1-score'],
      ['4,985', '구축·증강 데이터'],
      ['2회', '아이디어·구현 대회 수상'],
    ],
    tags: ['Product Strategy', 'User Flow', 'Data Strategy', 'Figma', 'React'],
    href: 'https://github.com/chaeeunwang/Quote-Distortion-Detection',
  },
  {
    number: '02',
    title: 'DeepShield',
    subtitle: '딥페이크 피해를 사후 탐지가 아닌 사전 예방으로 전환',
    period: '2024.09 — 2024.12 · 3인 팀',
    role: '문제 정의 · 핵심 필터 기술 설계 · 품질 개선',
    problem:
      '딥페이크 대응이 생성 이후 탐지에 머무는 상황에서, 사용자가 사진을 공유하기 전에 얼굴 특징을 보호할 수 있는 예방형 접근이 필요했습니다.',
    decisions: [
      '사용자 사진의 얼굴 영역에만 Adversarial 노이즈를 적용하는 방식 선택',
      '랜드마크 기반 영역 탐지로 불필요한 이미지 훼손 최소화',
      'Feathering·Blur를 적용해 보호 성능과 시각 품질 사이의 균형 조정',
      '기술 데모를 앱 형태로 연결하고 사회적 문제와 사용자 효용을 함께 제시',
    ],
    outcomes: [
      ['App Store', '정식 출시'],
      ['최우수상', '체인지메이커스 포럼'],
      ['언론 보도', '사회적 관심 확보'],
    ],
    tags: ['Problem Framing', 'MVP', 'Risk & Trade-off', 'AI Safety'],
    href: 'https://www.news1.kr/society/incident-accident/5546773',
  },
] as const;

export default function PmPortfolio() {
  return (
    <main className="detail-main pm-theme">
      <header className="site-header">
        <Link className="wordmark" href="/" aria-label="포트폴리오 선택 화면으로 이동">CEW<span>.</span></Link>
        <nav aria-label="페이지 내 이동">
          <a href="#cases">Case studies</a>
          <Link href="/developer">Developer view <ArrowUpRight size={14} aria-hidden="true" /></Link>
        </nav>
      </header>

      <section className="detail-hero">
        <Link className="back-link" href="/"><ArrowLeft size={16} aria-hidden="true" /> Portfolio home</Link>
        <div className="detail-title-row">
          <div>
            <p className="kicker">PRODUCT MANAGER PORTFOLIO</p>
            <h1>좋은 기술보다 먼저,<br /><em>풀어야 할 문제를 찾습니다.</em></h1>
          </div>
          <Workflow className="hero-icon" size={92} strokeWidth={1.1} aria-hidden="true" />
        </div>
        <div className="detail-intro-grid">
          <p className="lead">
            사용자 문제를 구조화하고, 데이터와 기술의 가능성·제약을 함께 고려해
            팀이 실행할 수 있는 제품의 방향으로 바꿉니다.
          </p>
          <dl className="snapshot">
            <div><dt>Strength</dt><dd>AI 제품 기획 + 직접 구현</dd></div>
            <div><dt>Background</dt><dd>물리학 · 정보보호</dd></div>
            <div><dt>Focus</dt><dd>문제 정의 · 데이터 전략 · E2E 실행</dd></div>
          </dl>
        </div>
      </section>

      <section className="principles" aria-label="제품 기획 원칙">
        <article><span>01</span><h2>문제를 관찰합니다</h2><p>기술에서 시작하지 않고, 사용자가 겪는 불편과 기존 해결 방식의 빈틈을 먼저 정의합니다.</p></article>
        <article><span>02</span><h2>판단 기준을 만듭니다</h2><p>사용자 가치, 데이터 품질, 구현 비용과 리스크를 비교해 우선순위를 명확히 합니다.</p></article>
        <article><span>03</span><h2>끝까지 연결합니다</h2><p>기획서에 머물지 않고 프로토타입·모델·API·화면이 하나의 흐름으로 동작하도록 구현합니다.</p></article>
      </section>

      <section className="case-section" id="cases">
        <div className="section-heading">
          <p className="kicker">SELECTED WORK</p>
          <h2>문제에서 제품까지</h2>
          <p>각 사례는 기능 목록이 아니라, 어떤 판단으로 제품의 방향을 정했는지를 보여줍니다.</p>
        </div>

        {cases.map((item) => (
          <article className="case-study" key={item.number}>
            <div className="case-index">{item.number}</div>
            <div className="case-body">
              <div className="case-header">
                <div>
                  <p className="case-meta">{item.period}</p>
                  <h3>{item.title}</h3>
                  <p className="case-subtitle">{item.subtitle}</p>
                </div>
                <a className="round-link" href={item.href} target="_blank" rel="noreferrer" aria-label={`${item.title} 외부 자료 보기`}>
                  <ArrowUpRight size={22} aria-hidden="true" />
                </a>
              </div>

              <div className="role-note"><strong>MY ROLE</strong><span>{item.role}</span></div>
              <div className="case-columns">
                <div><h4>Problem</h4><p>{item.problem}</p></div>
                <div><h4>Key decisions</h4><ol>{item.decisions.map((decision) => <li key={decision}>{decision}</li>)}</ol></div>
              </div>
              <div className="outcome-grid">
                {item.outcomes.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
              </div>
              <ul className="tag-list" aria-label={`${item.title} 역량`}>
                {item.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="experience-band">
        <div>
          <p className="kicker">EXPERIENCE</p>
          <h2>기술과 제품 사이를<br />직접 연결해 왔습니다.</h2>
        </div>
        <div className="timeline">
          <article><time>2025.02 — 05</time><h3>아프로시스 공공사업부 인턴</h3><p>sLLM 라우팅, Redis 세션, 개인정보 마스킹을 서비스 요구사항에서 구현 구조로 구체화</p></article>
          <article><time>2025.08 — 12</time><h3>고려대학교 지능정보 SW 아카데미</h3><p>문제 정의부터 데이터·모델·Chrome Extension까지 전 과정을 주도하고 2개 대회 수상</p></article>
          <article><time>2019.03 — 2025.08</time><h3>고려대학교</h3><p>물리학과 · 정보보호 융합전공 학사</p></article>
        </div>
      </section>

      <section className="contact-panel">
        <p className="kicker">LET&apos;S TALK</p>
        <h2>복잡한 문제를 함께<br /><em>실행 가능한 제품으로.</em></h2>
        <a href="mailto:imchaen@gmail.com"><Mail size={18} aria-hidden="true" /> imchaen@gmail.com</a>
      </section>
    </main>
  );
}
