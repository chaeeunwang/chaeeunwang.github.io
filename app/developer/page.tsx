import { ArrowUpRight } from 'lucide-react';
import { PortfolioHeader, PortfolioFooter } from '../portfolio-shell';

const projects = [
  {
    id: 'P01',
    anchor: 'qdd',
    title: 'Quote Distortion Detection',
    label: '2025.08–12 · NLP · 3인 팀',
    summary:
      '기사의 인용문을 원 발언과 비교하는 Chrome 확장 프로그램입니다. 원문을 찾는 과정과 의미 왜곡을 판단하는 과정을 나누고, 결과를 비교할 수 있는 화면을 만들었습니다.',
    role: '문제 정의·서비스 기획·전체 처리 흐름 설계·React 확장 프로그램 화면 구현, 데이터 구성·모델 선정 참여',
    architecture: [
      '인용문 추출',
      '번역 · 원 발언 검색',
      'SBERT 문장 정렬',
      'MPNet 왜곡 분류',
      'React 확장 프로그램',
    ],
    decisions: [
      [
        '검색과 판단을 분리',
        '잘못 찾은 원문을 비교하면 분류 결과도 믿기 어렵습니다. 원 발언 후보 검색과 SBERT 정렬, MPNet 분류를 구분해 전체 처리 흐름을 설계했습니다.',
      ],
      [
        '비교 근거를 화면에 표시',
        '왜곡 여부만 보여주는 대신 기사 인용문 하이라이트와 원문 비교, 분류 결과를 연결하는 React 확장 프로그램 화면을 구현했습니다.',
      ],
      [
        '팀의 데이터·모델 검토에 참여',
        '데이터 증강·라벨링 기준과 모델 선정에 참여했습니다. 공개 README의 전체 데이터는 정상 2,510건·왜곡 2,136건으로 총 4,646건입니다.',
      ],
    ],
    stack: ['Python', 'SBERT', 'MPNet', 'React', 'JavaScript', 'Git'],
    result:
      '팀 평가 결과 F1 Macro 0.8667 · 전체 데이터 4,646건 · Chrome 확장 프로그램 구현',
    scope:
      '공개 README 기준으로 학습 3,717건·검증 929건을 사용한 팀 평가입니다. 모델 가중치가 공개되어 있지 않아 평가를 별도로 재현하지는 않았습니다.',
    href: 'https://github.com/chaeeunwang/Quote-Distortion-Detection',
  },
  {
    id: 'P02',
    anchor: 'hr-leave-assistant',
    title: 'HR Leave Assistant',
    label: '2026.08 · SKALA 개인 실습 확장',
    summary:
      '규정을 답하는 챗봇이 실제 연차 데이터를 바꿀 때, 권한과 중복 실행을 어떻게 통제할지 구현한 로컬 데모입니다.',
    role: '교육용 기반을 확장한 연차 업무 Tool·대화 흐름·비동기 정합성 처리와 검증',
    architecture: [
      'Spring AI · RAG',
      'ToolContext · 권한',
      '연차 업무 Tool',
      'H2 · 트랜잭션',
      'Outbox · RabbitMQ',
      'JDBC 대화 메모리',
    ],
    decisions: [
      [
        '권한은 서버에서 결정',
        '모델이 넘긴 사용자 ID를 신뢰하지 않고 인증된 tenantId·userId를 ToolContext로 전달했습니다. 조회·취소 시 신청 소유권을 검사합니다.',
      ],
      [
        '재전달에도 한 번만 처리',
        'DB 저장 뒤 메시지가 유실되지 않도록 job과 Outbox를 함께 저장했습니다. 업무 식별자와 멱등 처리로 재전달 때 신청·차감·복원이 반복되지 않게 했습니다.',
      ],
      [
        '업무 결과는 DB에서 확정',
        '규정 질문과 연차 신청을 구분하고 날짜·사유를 대화에서 확인합니다. Tool의 returnDirect로 확정된 신청번호·상태를 모델이 다시 쓰지 않게 했습니다.',
      ],
    ],
    stack: [
      'Java 21',
      'Spring Boot',
      'Spring AI',
      'Spring Security',
      'RabbitMQ',
      'JDBC · H2',
      'JUnit 5',
    ],
    result:
      '공개 README 2026.09.22 기준: 인증·소유권·동시 신청·중복 요청·Outbox 복구 관련 80개 자동 테스트 통과, 실행 JAR 패키징 성공',
    scope:
      '교육용 로컬 데모입니다. 실제 인사·결재 시스템 연동이나 운영 성과는 없으며, 공개본 준비 때 외부 모델·RabbitMQ를 포함한 대화 흐름은 재실행하지 않았습니다.',
    href: 'https://github.com/chaeeunwang/hr-leave-assistant',
  },
  {
    id: 'P03',
    anchor: 'chatbot',
    title: 'sLLM 챗봇 백엔드',
    label: '2025.02–05 · Aphrosys 인턴',
    summary:
      '공공 서비스용 챗봇의 백엔드 개발을 보조하며, 세션 문맥 구분과 개인정보 마스킹, 불충분한 질문에 대한 응답 처리를 다뤘습니다.',
    role: '공공사업부 sLLM 백엔드 개발 보조: 질문 분류·라우팅, Redis 문맥 관리, 개인정보 처리',
    architecture: [
      'FastAPI · LangChain',
      '질문 분류',
      '모델 라우팅',
      'Redis 세션 문맥',
      'NER · 정규식',
      '추가 질문',
    ],
    decisions: [
      [
        '세션별 문맥 구분',
        '사용자와 대화 세션의 문맥이 섞이지 않도록 user ID와 session ID를 조합한 Redis 키, TTL·초기화 조건을 다뤘습니다.',
      ],
      [
        '모델과 규칙의 역할 분리',
        '개인정보 탐지·마스킹에 KoELECTRA NER와 YAML 정규식을 함께 사용해 모델 탐지와 명시적 패턴 처리를 결합했습니다.',
      ],
      [
        '답변 전에 질문 확인',
        '분류 점수와 질문의 충분성에 따라 모델을 선택하거나 추가 질문을 생성해, 불완전한 입력을 그대로 답변으로 넘기지 않도록 했습니다.',
      ],
    ],
    stack: ['Python', 'FastAPI', 'Redis', 'LangChain', 'KoELECTRA', 'YAML'],
    result:
      '질문 분류·모델 라우팅, 세션 문맥 구분, 개인정보 탐지·마스킹 관련 백엔드 개발 보조',
    scope:
      '공개 이력과 업무 기록에 근거한 담당 기능입니다. 위 구성은 기능의 묶음이며 실제 호출 순서를 뜻하지 않습니다.',
  },
  {
    id: 'P04',
    anchor: 'risk-detection',
    title: '위험 대화 탐지 모델',
    label: '2024.07–11 · AI보안 교육 프로젝트',
    summary:
      '익명 커뮤니티 게시글·댓글의 위험 대화 패턴을 분류한 NLP 프로젝트입니다. 수집 데이터의 개인정보를 마스킹하고 BERT 분류와 임베딩 기반 모델을 비교했습니다.',
    role: '데이터 수집·개인정보 마스킹·위험 대화 패턴 분류 실험',
    architecture: [
      'Selenium · BeautifulSoup',
      '정규식 마스킹',
      '데이터 · 라벨',
      'BERT 분류 · 임베딩',
      'RandomForest · SVM',
    ],
    decisions: [
      [
        '수집 데이터의 개인정보 처리',
        '게시글·댓글을 수집하는 과정에 정규식 마스킹을 적용해 개인정보가 포함된 텍스트를 그대로 학습에 사용하지 않도록 했습니다.',
      ],
      [
        '분류 방식 비교',
        '문맥 정보를 활용하기 위해 BERT 단일 분류와 BERT 임베딩에 RandomForest·SVM을 결합하는 구조를 실험했습니다.',
      ],
      [
        '탐지 결과의 해석 범위',
        '모델이 분류하는 대상은 텍스트의 위험 패턴입니다. 이를 실제 범죄 가능성이나 개인에 대한 확정 판단으로 확대하지 않습니다.',
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
    result:
      '기존 프로젝트 기록 기준 약 1,000건의 데이터로 BERT 단일 분류·임베딩 결합 구조를 비교 실험',
    scope:
      '데이터 분할과 모델별 평가 수치를 재확인해야 해, 현재는 데이터 처리와 분류 실험 범위를 소개합니다.',
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
          모델의 응답을 사용자 화면과 실제 업무 처리로 연결합니다. 권한과 상태,
          중복 실행을 다룬 구현을 중심으로, 제가 맡은 역할과 확인한 결과를
          구분해 정리했습니다.
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
            해결하려던 문제와 구현 판단, 개인 역할과 프로젝트 결과를 함께
            정리했습니다.
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

              <div className="role-note">
                <strong>내 역할</strong>
                <span>{project.role}</span>
              </div>

              <div className="architecture-flow" aria-label="주요 구성">
                {project.architecture.map((component) => (
                  <div key={component}>
                    <b>{component}</b>
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
              <p className="project-summary">
                <strong>확인 범위</strong> · {project.scope}
              </p>
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
          <h2>모델 응답과 업무 판단의 연결</h2>
          <p>
            규정 검색에는 RAG를, 데이터 변경에는 권한을 확인하는 Tool을
            사용합니다. 모델의 응답과 DB에서 확정한 업무 결과를 구분합니다.
          </p>
        </article>
        <article>
          <span>02 / BACKEND</span>
          <h2>중복 실행과 실패를 고려한 구조</h2>
          <p>
            Spring Boot·RabbitMQ에서 Outbox와 멱등 처리를 구현하고, 소유권·동시
            신청·롤백·복구를 자동 테스트로 확인했습니다.
          </p>
        </article>
        <article>
          <span>03 / PRODUCT DELIVERY</span>
          <h2>판단 근거를 보여주는 화면</h2>
          <p>
            React 확장 프로그램에서 인용문과 원문을 비교하고 분류 결과를
            확인하도록 구성했습니다. 분류 결과와 함께 사용자가 살펴볼 근거를
            연결합니다.
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
            <p>
              Java · Spring Boot · Spring Security · Python · FastAPI · React
            </p>
          </article>
          <article>
            <h3>AI & Data</h3>
            <p>
              Spring AI · RAG · LangChain · KoBERT · SBERT · MPNet · KoELECTRA
            </p>
          </article>
          <article>
            <h3>Storage & Verification</h3>
            <p>RabbitMQ · JDBC · H2 · Redis · JUnit 5 · GitHub Actions · Git</p>
          </article>
        </div>
      </section>

      <PortfolioFooter />
    </main>
  );
}
