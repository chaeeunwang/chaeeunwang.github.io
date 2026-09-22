import { ArrowUpRight } from 'lucide-react';
import { PortfolioHeader, PortfolioFooter } from '../portfolio-shell';

const projects = [
  {
    id: 'P01',
    anchor: 'chatbot',
    title: 'sLLM 챗봇 백엔드',
    label: 'Aphrosys · Backend Intern',
    summary:
      '질문 분류부터 세션 문맥 유지, 개인정보 마스킹까지 공공 서비스용 챗봇 백엔드 흐름을 구현했습니다.',
    architecture: [
      'Client request',
      'Masking',
      'Topic classifier',
      'LLM router',
      'Redis context',
      'Response',
    ],
    decisions: [
      [
        'Session context',
        'user ID + session ID 키와 TTL·flush 조건을 설계해 멀티 세션 문맥을 분리했습니다.',
      ],
      [
        'Privacy by design',
        'KoELECTRA NER와 YAML 정규식을 결합해 모델 탐지의 빈틈과 규칙 유지보수 문제를 함께 다뤘습니다.',
      ],
      [
        'Graceful fallback',
        '분류 점수와 입력 충분성을 판단해 적합한 모델로 라우팅하거나 Clarifying Question을 생성했습니다.',
      ],
    ],
    stack: ['Python', 'FastAPI', 'Redis', 'LangChain', 'KoELECTRA', 'YAML'],
    result:
      '대화 일관성 · 개인정보 보호 · 불완전 질문 대응을 하나의 파이프라인으로 통합',
  },
  {
    id: 'P02',
    anchor: 'qdd',
    title: 'Quote Distortion Detection',
    label: 'NLP · Chrome Extension',
    summary:
      '기사 직접인용문과 원 발언을 정렬하고 의미 왜곡을 판별하는 End-to-End 시스템을 설계·구현했습니다.',
    architecture: [
      'Quote regex',
      'KO→EN translation',
      'Source search',
      'SBERT align',
      'MPNet classify',
      'React extension',
    ],
    decisions: [
      [
        'Retrieval pipeline',
        '정규식 추출, 번역, Google Search 후보 수집, SBERT 유사도 정렬을 단계별로 분리했습니다.',
      ],
      [
        'Data imbalance',
        '데이터 증강으로 라벨 불균형을 보완하고, 정상 2,510건·왜곡 2,136건으로 학습 데이터를 구성했습니다.',
      ],
      [
        'Model selection',
        '후보 모델을 비교해 MPNet을 채택하고 초기 F1 0.71에서 최종 0.86으로 개선했습니다.',
      ],
    ],
    stack: ['Python', 'SBERT', 'MPNet', 'React', 'JavaScript', 'Git'],
    result: 'F1 Macro 0.86 · Chrome Extension 구현 · 2개 대회 수상',
    href: 'https://github.com/chaeeunwang/Quote-Distortion-Detection',
  },
  {
    id: 'P03',
    anchor: 'risk-detection',
    title: '위험 대화 탐지 모델',
    label: 'AI Security · NLP',
    summary:
      '익명 커뮤니티의 게시글·댓글에서 성범죄 위험 신호를 문맥 기반으로 사전 탐지하는 모델을 실험했습니다.',
    architecture: [
      'Crawling',
      'PII masking',
      'BERT embedding',
      'RF / SVM',
      'Evaluation',
    ],
    decisions: [
      [
        'Safe collection',
        'Selenium·BeautifulSoup 수집 단계에서 정규식 개인정보 마스킹을 먼저 적용했습니다.',
      ],
      [
        'Experiment design',
        'BERT 단일 분류와 임베딩+머신러닝 결합을 동일 데이터에서 비교했습니다.',
      ],
      [
        'Measured iteration',
        '단일 BERT 정확도 0.71의 한계를 확인하고 SVM 결합으로 최대 0.91을 달성했습니다.',
      ],
    ],
    stack: [
      'Python',
      'KoBERT',
      'SVM',
      'RandomForest',
      'Selenium',
      'BeautifulSoup',
    ],
    result: '약 1,000건 데이터셋 · 3개 구조 비교 · 최대 정확도 0.91',
  },
] as const;

export default function DeveloperPortfolio() {
  return (
    <main className="detail-main" id="top">
      <PortfolioHeader active="developer" />

      <section className="detail-hero" id="main-content">
        <p className="eyebrow">AI · BACKEND DEVELOPER</p>
        <h1>
          모델에서 서비스까지,
          <br />
          흐름을 구현합니다.
        </h1>
        <p className="lead">
          API와 상태 관리, 개인정보 보호, 사용자 화면을 연결합니다. NLP 모델
          실험부터 서비스 통합까지 직접 구현한 과정을 담았습니다.
        </p>
        <nav className="case-navigation" aria-label="구현 사례 바로가기">
          {projects.map((project) => (
            <a key={project.anchor} href={`#${project.anchor}`}>
              {project.title} <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          ))}
        </nav>
      </section>

      <section className="project-section" id="projects">
        <div className="section-heading">
          <p className="eyebrow">SELECTED WORK</p>
          <h2>구현과 판단의 기록</h2>
          <p>
            서비스의 처리 흐름과 기술을 선택한 이유, 검증 결과를 정리했습니다.
          </p>
        </div>

        {projects.map((project) => (
          <article
            className="engineering-project"
            id={project.anchor}
            key={project.id}
          >
            <div className="project-side">
              <span>{project.id}</span>
              <p>{project.label}</p>
              {'href' in project && project.href ? (
                <a
                  className="source-link"
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub에서 코드·결과 보기{' '}
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              ) : null}
            </div>
            <div className="project-content">
              <div className="project-title">
                <h3>{project.title}</h3>
              </div>
              <p className="project-summary">{project.summary}</p>

              <div className="architecture-flow" aria-label="처리 흐름">
                {project.architecture.map((step, index) => (
                  <div key={step}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <b>{step}</b>
                  </div>
                ))}
              </div>

              <div className="decision-list">
                {project.decisions.map(([title, description]) => (
                  <article key={title}>
                    <h4>{title}</h4>
                    <p>{description}</p>
                  </article>
                ))}
              </div>

              <div className="result-note">
                <strong>결과</strong>
                <span>{project.result}</span>
              </div>
              <ul className="tag-list" aria-label="사용 기술">
                {project.stack.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="capability-grid" aria-label="핵심 개발 역량">
        <article>
          <span>01 / AI ENGINEERING</span>
          <h2>문제에 맞는 모델과 데이터</h2>
          <p>
            KoBERT, SBERT, MPNet, KoELECTRA를 실험하고 데이터 편향·라벨링·평가
            지표를 함께 다룹니다.
          </p>
        </article>
        <article>
          <span>02 / BACKEND</span>
          <h2>상태와 실패를 고려한 구조</h2>
          <p>
            FastAPI, Redis, LangChain으로 세션 문맥, 모델 라우팅, fallback과
            개인정보 보호 흐름을 구현합니다.
          </p>
        </article>
        <article>
          <span>03 / PRODUCT DELIVERY</span>
          <h2>사용자 화면까지 연결</h2>
          <p>
            React 기반 Extension과 웹 인터페이스로 모델 결과를 이해하고 행동할
            수 있는 경험으로 연결합니다.
          </p>
        </article>
      </section>

      <section className="stack-section">
        <div>
          <p className="eyebrow">TECH STACK</p>
          <h2>사용 기술</h2>
        </div>
        <div className="stack-groups">
          <article>
            <h3>Languages & Frameworks</h3>
            <p>Python · Java · Spring · FastAPI · React · JavaScript</p>
          </article>
          <article>
            <h3>AI & Data</h3>
            <p>NLP · LangChain · KoBERT · SBERT · MPNet · TensorFlow</p>
          </article>
          <article>
            <h3>Data & Tools</h3>
            <p>Redis · MySQL · MongoDB · Oracle · Git · Figma · Notion</p>
          </article>
        </div>
      </section>

      <PortfolioFooter />
    </main>
  );
}
