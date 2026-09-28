import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { PortfolioHeader, PortfolioFooter } from '../portfolio-shell';

const projects = [
  {
    id: 'P01',
    anchor: 'deepshield',
    title: 'DeepShield',
    label: '2024 · Computer Vision · 3인 팀',
    summary:
      '사진을 공유하기 전에 얼굴 영역에 적대적 노이즈를 적용하는 딥페이크 예방 필터입니다. 사진 전체가 변형되는 문제를 줄이기 위해 적용 영역을 제한하고, 필터 경계와 패턴의 시각적 이질감을 조정했습니다.',
    role: '문제 정의·핵심 필터 설계 및 구현·얼굴 영역 선택 로직·Feathering과 Blur를 이용한 시각 품질 조정',
    architecture: [
      '입력 사진',
      '얼굴 · 랜드마크 탐지',
      '얼굴 영역 선택',
      '적대적 노이즈 적용',
      'Feathering · Blur',
      '앱 결과 이미지',
    ],
    decisions: [
      [
        '사진 전체에서 얼굴 영역으로',
        '노이즈가 얼굴 밖까지 적용되면 배경 등 원래 사진의 모습도 달라집니다. 얼굴 랜드마크를 기반으로 영역을 선택하고, 해당 영역에만 필터를 적용하는 로직을 구현했습니다.',
      ],
      [
        '필터 경계와 패턴을 따로 조정',
        '적용 영역의 경계가 두드러지는 문제에는 Feathering을, 노이즈 패턴의 이질감에는 Blur를 적용했습니다. 사용자가 사진을 일상적으로 활용할 수 있도록 시각적 품질을 다듬었습니다.',
      ],
      [
        '핵심 필터를 앱으로 연결',
        '필터 설계·구현을 맡고 앱 개발·배포 담당 팀원들과 협업했습니다. 팀은 App Store에 앱을 출시했고, 개발 과정과 문제의식이 언론 인터뷰로 소개됐습니다.',
      ],
    ],
    stack: [
      'Python',
      'TensorFlow',
      'Computer Vision',
      '얼굴 랜드마크',
      'Feathering',
      'Blur',
    ],
    result:
      '팀 App Store 출시 · 고려대학교 체인지메이커스 포럼 최우수상(2024.11) · 개발팀 언론 인터뷰',
    scope:
      '핵심 필터 구현은 개인 담당, 앱 출시·수상은 팀 성과입니다. Feathering·Blur는 시각 품질 조정이며, 공격 모델별 방어 성능 수치를 뜻하지 않습니다.',
    href: 'https://www.news1.kr/society/incident-accident/5546773',
    linkLabel: '개발팀 인터뷰',
  },
  {
    id: 'P02',
    anchor: 'particle-cnn',
    title: '입자 궤적 이미지 분류',
    label: '인공지능물리학 · 실험 데이터 · CNN',
    summary:
      '자기장이 걸린 안개상자에서 입자의 궤적을 직접 촬영하고, 이미지로 입자의 종류를 분류한 수업 프로젝트입니다. 관측 사진을 학습 데이터로 가공하고 CNN을 파인튜닝하는 과정을 수행했습니다.',
    role: '안개상자 궤적 촬영·궤적 중심 이미지 추출·데이터셋 구성 및 분할·CNN 파인튜닝',
    architecture: [
      '안개상자 실험 · 촬영',
      '궤적 중심 정사각형 crop',
      '이미지 데이터셋 구성',
      '데이터 분할',
      'CNN 파인튜닝 · 분류',
    ],
    decisions: [
      [
        '관측에서 시작한 데이터셋',
        '완성된 공개 이미지 데이터 대신, 안개상자에서 관측한 알파·베타 입자의 궤적을 직접 촬영했습니다. 물리 실험에서 얻은 관측 대상을 이미지 분류 문제의 입력으로 만들었습니다.',
      ],
      [
        '궤적 중심으로 입력 구성',
        '촬영 사진에서 궤적을 중심으로 일정한 크기의 정사각형 이미지를 잘라 데이터셋을 구성했습니다. 사진을 수집하는 단계와 모델에 넣을 이미지로 가공하는 단계를 연결했습니다.',
      ],
      [
        '데이터 분할 후 CNN 파인튜닝',
        '구성한 데이터를 분할하고 CNN을 파인튜닝해 입자 종류를 분류했습니다. 새로운 모델 구조를 제안하기보다 직접 만든 실험 데이터를 기존 모델의 학습에 활용한 경험입니다.',
      ],
    ],
    stack: ['Python', 'TensorFlow', 'CNN', '이미지 전처리', 'Fine-tuning'],
    result:
      '직접 촬영한 궤적 사진을 이미지 데이터셋으로 구성하고, 전처리·분할·CNN 파인튜닝까지 수행',
    scope:
      '수행 과정은 당시 경험을 정리한 기록에 근거합니다. 원본 코드·평가 로그를 재확인하지 못해 모델명과 정량 성능은 제시하지 않습니다.',
  },
  {
    id: 'P03',
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
    id: 'P04',
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
    id: 'P05',
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
    id: 'P06',
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
          실험 데이터를 학습 입력으로 만들고, 이미지 처리와 모델의 결과를
          서비스로 연결합니다. 백엔드에서는 권한과 상태, 중복 실행을 다룹니다.
        </p>
        <nav className="case-navigation" aria-label="구현 사례 바로가기">
          {projects.map((project) => (
            <a key={project.anchor} href={`#${project.anchor}`}>
              {project.title} <ArrowDown size={15} aria-hidden="true" />
            </a>
          ))}
        </nav>
      </section>

      <section className="project-section" id="projects">
        <div className="section-heading">
          <h2>개발 사례</h2>
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
            </div>
            <div className="project-content">
              <div className="project-title">
                <h3>{project.title}</h3>
              </div>
              <p className="project-summary">{project.summary}</p>
              {'href' in project && project.href ? (
                <div className="project-links">
                  <a
                    className="source-link"
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {'linkLabel' in project ? project.linkLabel : 'GitHub'}{' '}
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                </div>
              ) : null}

              <div className="role-note">
                <strong>내 역할</strong>
                <span>{project.role}</span>
              </div>
              <div className="result-note">
                <strong>결과</strong>
                <span>{project.result}</span>
              </div>
              <p className="evidence-note">
                <strong>확인 범위</strong> · {project.scope}
              </p>

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

              <ul className="tag-list" aria-label="사용 기술">
                {project.stack.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="stack-section" aria-labelledby="stack-title">
        <div>
          <p className="eyebrow">TECH STACK</p>
          <h2 id="stack-title">사용 기술</h2>
        </div>
        <div className="stack-groups">
          <article>
            <h3>언어·프레임워크</h3>
            <p>
              Java · Spring Boot · Spring Security · Python · FastAPI · React
            </p>
          </article>
          <article>
            <h3>AI·데이터</h3>
            <p>
              TensorFlow · CNN · Computer Vision · Spring AI · RAG · LangChain ·
              KoBERT · SBERT · MPNet · KoELECTRA
            </p>
          </article>
          <article>
            <h3>저장소·검증</h3>
            <p>RabbitMQ · JDBC · H2 · Redis · JUnit 5 · GitHub Actions · Git</p>
          </article>
        </div>
      </section>

      <PortfolioFooter />
    </main>
  );
}
