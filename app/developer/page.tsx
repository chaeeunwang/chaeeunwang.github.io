/**
 * 파일명: Developer Portfolio
 *
 * 역할:
 * 개발 직무 채용 담당자에게 AI·백엔드 구현 경험과 기술적 판단, 검증 결과를 전달한다.
 *
 * 처리 흐름:
 * 기술 정체성 -> 핵심 역량 -> 구현 사례 -> 경력/기술 스택 -> 연락
 */
import { ArrowLeft, ArrowUpRight, Braces, Code2, Mail } from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    id: 'P01',
    title: 'sLLM 챗봇 백엔드',
    label: 'Aphrosys · Backend Intern',
    summary: '질문 분류부터 세션 문맥 유지, 개인정보 마스킹까지 공공 서비스용 챗봇 백엔드 흐름을 구현했습니다.',
    architecture: ['Client request', 'Masking', 'Topic classifier', 'LLM router', 'Redis context', 'Response'],
    decisions: [
      ['Session context', 'user ID + session ID 키와 TTL·flush 조건을 설계해 멀티 세션 문맥을 분리했습니다.'],
      ['Privacy by design', 'KoELECTRA NER와 YAML 정규식을 결합해 모델 탐지의 빈틈과 규칙 유지보수 문제를 함께 다뤘습니다.'],
      ['Graceful fallback', '분류 점수와 입력 충분성을 판단해 적합한 모델로 라우팅하거나 Clarifying Question을 생성했습니다.'],
    ],
    stack: ['Python', 'FastAPI', 'Redis', 'LangChain', 'KoELECTRA', 'YAML'],
    result: '대화 일관성 · 개인정보 보호 · 불완전 질문 대응을 하나의 파이프라인으로 통합',
  },
  {
    id: 'P02',
    title: 'Quote Distortion Detection',
    label: 'NLP · Chrome Extension',
    summary: '기사 직접인용문과 원 발언을 정렬하고 의미 왜곡을 판별하는 End-to-End 시스템을 설계·구현했습니다.',
    architecture: ['Quote regex', 'KO→EN translation', 'Source search', 'SBERT align', 'MPNet classify', 'React extension'],
    decisions: [
      ['Retrieval pipeline', '정규식 추출, 번역, Google Search 후보 수집, SBERT 유사도 정렬을 단계별로 분리했습니다.'],
      ['Data imbalance', '정상 2,510건·왜곡 849건의 불균형을 확인하고 왜곡 데이터 2,136건을 증강했습니다.'],
      ['Model selection', '후보 모델을 비교해 MPNet을 채택하고 초기 F1 0.71에서 최종 0.86으로 개선했습니다.'],
    ],
    stack: ['Python', 'SBERT', 'MPNet', 'React', 'JavaScript', 'Git'],
    result: 'F1-score 0.86 · Chrome Extension 구현 · 2개 대회 수상',
    href: 'https://github.com/chaeeunwang/Quote-Distortion-Detection',
  },
  {
    id: 'P03',
    title: '위험 대화 탐지 모델',
    label: 'AI Security · NLP',
    summary: '익명 커뮤니티의 게시글·댓글에서 성범죄 위험 신호를 문맥 기반으로 사전 탐지하는 모델을 실험했습니다.',
    architecture: ['Crawling', 'PII masking', 'BERT embedding', 'RF / SVM', 'Evaluation'],
    decisions: [
      ['Safe collection', 'Selenium·BeautifulSoup 수집 단계에서 정규식 개인정보 마스킹을 먼저 적용했습니다.'],
      ['Experiment design', 'BERT 단일 분류와 임베딩+머신러닝 결합을 동일 데이터에서 비교했습니다.'],
      ['Measured iteration', '단일 BERT 정확도 0.71의 한계를 확인하고 SVM 결합으로 최대 0.91을 달성했습니다.'],
    ],
    stack: ['Python', 'KoBERT', 'SVM', 'RandomForest', 'Selenium', 'BeautifulSoup'],
    result: '약 1,000건 데이터셋 · 3개 구조 비교 · 최대 정확도 0.91',
  },
] as const;

export default function DeveloperPortfolio() {
  return (
    <main className="detail-main developer-theme">
      <header className="site-header">
        <Link className="wordmark" href="/" aria-label="포트폴리오 선택 화면으로 이동">CEW<span>.</span></Link>
        <nav aria-label="페이지 내 이동">
          <a href="#projects">Projects</a>
          <Link href="/pm">PM view <ArrowUpRight size={14} aria-hidden="true" /></Link>
        </nav>
      </header>

      <section className="detail-hero developer-hero">
        <Link className="back-link" href="/"><ArrowLeft size={16} aria-hidden="true" /> Portfolio home</Link>
        <div className="detail-title-row">
          <div>
            <p className="kicker">AI · BACKEND DEVELOPER PORTFOLIO</p>
            <h1>모델을 서비스로,<br /><em>아이디어를 시스템으로.</em></h1>
          </div>
          <Braces className="hero-icon" size={96} strokeWidth={1.1} aria-hidden="true" />
        </div>
        <div className="detail-intro-grid">
          <p className="lead">
            AI 모델의 점수에서 멈추지 않습니다. API, 상태 관리, 개인정보 보호,
            실패 흐름과 사용자 화면까지 연결해 실제로 동작하는 서비스를 만듭니다.
          </p>
          <div className="code-card" aria-label="개발 원칙">
            <code><span>const</span> build = {'{'}</code>
            <code>&nbsp;&nbsp;input: <b>&apos;real problem&apos;</b>,</code>
            <code>&nbsp;&nbsp;process: <b>&apos;design → implement → verify&apos;</b>,</code>
            <code>&nbsp;&nbsp;output: <b>&apos;working service&apos;</b></code>
            <code>{'};'}</code>
          </div>
        </div>
      </section>

      <section className="capability-grid" aria-label="핵심 개발 역량">
        <article><span>01 / AI ENGINEERING</span><h2>NLP 모델과 데이터를<br />문제에 맞게 설계</h2><p>KoBERT, SBERT, MPNet, KoELECTRA를 실험하고 데이터 편향·라벨링·평가 지표를 함께 다룹니다.</p></article>
        <article><span>02 / BACKEND</span><h2>상태와 실패까지 고려한<br />서비스 파이프라인</h2><p>FastAPI, Redis, LangChain으로 세션 문맥, 모델 라우팅, fallback과 개인정보 보호 흐름을 구현합니다.</p></article>
        <article><span>03 / PRODUCT DELIVERY</span><h2>사용자가 만나는 화면까지<br />End-to-End 구현</h2><p>React 기반 Extension과 웹 인터페이스로 모델 결과를 이해하고 행동할 수 있는 경험으로 연결합니다.</p></article>
      </section>

      <section className="project-section" id="projects">
        <div className="section-heading">
          <p className="kicker">SELECTED ENGINEERING WORK</p>
          <h2>구현과 판단의 기록</h2>
          <p>무엇을 만들었는지뿐 아니라, 왜 그 구조를 선택했고 어떻게 검증했는지를 정리했습니다.</p>
        </div>

        {projects.map((project) => (
          <article className="engineering-project" key={project.id}>
            <div className="project-side">
              <span>{project.id}</span>
              <p>{project.label}</p>
              {'href' in project && project.href ? (
                <a href={project.href} target="_blank" rel="noreferrer">Repository <ArrowUpRight size={15} aria-hidden="true" /></a>
              ) : null}
            </div>
            <div className="project-content">
              <div className="project-title">
                <h3>{project.title}</h3>
                <Code2 size={27} strokeWidth={1.5} aria-hidden="true" />
              </div>
              <p className="project-summary">{project.summary}</p>

              <div className="architecture-flow" aria-label="처리 흐름">
                {project.architecture.map((step, index) => (
                  <div key={step}><span>{String(index + 1).padStart(2, '0')}</span><b>{step}</b></div>
                ))}
              </div>

              <div className="decision-list">
                {project.decisions.map(([title, description]) => (
                  <article key={title}><h4>{title}</h4><p>{description}</p></article>
                ))}
              </div>

              <div className="result-note"><strong>RESULT</strong><span>{project.result}</span></div>
              <ul className="tag-list" aria-label="사용 기술">
                {project.stack.map((technology) => <li key={technology}>{technology}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="stack-section">
        <div>
          <p className="kicker">TECH STACK</p>
          <h2>필요한 기술을 빠르게 익히고,<br />근거를 남기며 적용합니다.</h2>
        </div>
        <div className="stack-groups">
          <article><h3>Languages & Frameworks</h3><p>Python · Java · Spring · FastAPI · React · JavaScript</p></article>
          <article><h3>AI & Data</h3><p>NLP · LangChain · KoBERT · SBERT · MPNet · TensorFlow</p></article>
          <article><h3>Data & Tools</h3><p>Redis · MySQL · MongoDB · Oracle · Git · Figma · Notion</p></article>
        </div>
      </section>

      <section className="contact-panel developer-contact">
        <p className="kicker">BUILD WITH ME</p>
        <h2>복잡한 흐름을<br /><em>안정적인 시스템으로.</em></h2>
        <div className="contact-links">
          <a href="mailto:imchaen@gmail.com"><Mail size={18} aria-hidden="true" /> imchaen@gmail.com</a>
          <a href="https://github.com/chaeeunwang" target="_blank" rel="noreferrer"><Code2 size={18} aria-hidden="true" /> GitHub</a>
        </div>
      </section>
    </main>
  );
}
