import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { PortfolioHeader, PortfolioFooter } from '../portfolio-shell';

const cases = [
  {
    id: 'deepshield',
    number: '01',
    title: 'DeepShield',
    subtitle: '딥페이크 피해를 사후 탐지가 아닌 사전 예방으로 전환',
    period: '2024 · 3인 팀',
    role: '문제 정의 · 핵심 필터 설계·구현 · 시각 품질 조정',
    problem:
      '사진이 공유된 뒤 피해에 대응하기 어렵다는 문제에 주목했습니다. 업로드 전에 얼굴 영역에 적대적 노이즈를 적용하는 예방형 필터를 만들었습니다.',
    decisions: [
      '사용자 사진의 얼굴 영역에만 Adversarial 노이즈를 적용하는 방식 선택',
      '랜드마크 기반 영역 탐지로 불필요한 이미지 훼손 최소화',
      'Feathering·Blur로 얼굴 영역 경계와 노이즈의 시각적 이질감 조정',
      '팀으로 필터를 앱에 연결하고 사용자가 사진을 공유하기 전 적용하는 흐름 제시',
    ],
    outcomes: [
      ['App Store', '앱 출시 · 팀 결과'],
      ['최우수상', '체인지메이커스 포럼 · 팀 수상'],
      ['언론 보도', '뉴스1 개발팀 인터뷰'],
    ],
    evidence:
      '담당한 품질 조정은 노이즈의 시각적 이질감을 줄이는 작업입니다. 이를 딥페이크 방어 성능의 정량적 개선으로 제시하지 않습니다.',
    tags: ['Problem Framing', 'MVP', 'Risk & Trade-off', 'AI Safety'],
    href: 'https://www.news1.kr/society/incident-accident/5546773',
    sourceLabel: '개발팀 인터뷰',
  },
  {
    id: 'qdd',
    number: '02',
    title: 'Quote Distortion Detection',
    subtitle: '뉴스 인용 왜곡을 사용자가 즉시 검증하는 Chrome Extension',
    period: '2025.08 — 2025.12 · 3인 팀',
    role: '문제 정의 · 서비스 기획 · 처리 흐름 설계 · React 화면 구현',
    problem:
      '기존 팩트체크는 사실 여부에 집중해, 실제 발언의 의미가 기사에서 축소·확장·변형되는 문제를 사용자가 바로 확인하기 어려웠습니다.',
    decisions: [
      '기사 소비 흐름을 방해하지 않는 Chrome Extension을 핵심 접점으로 선택',
      '인용문 추출 → 원문 탐색 → 문장 정렬 → 왜곡 판단의 흐름을 설계하고 React 화면 구현',
      '원문을 잘못 찾으면 분류 결과도 의미가 없어지므로 원문 검색과 왜곡 분류를 분리해 처리 흐름 설계',
      '왜곡 데이터 부족에 대응하는 증강·라벨링 기준과 팀의 MPNet 모델 선정에 참여',
    ],
    outcomes: [
      ['0.8667', 'F1 Macro · 팀 평가'],
      ['4,646', '전체 데이터 · 팀 구축'],
      ['2회', '아이디어·구현 대회 · 팀 수상'],
    ],
    evidence:
      '공개 README 기준. 학습 3,717건·검증 929건으로 나눴으며, 위 수치는 팀의 모델 평가 결과입니다.',
    tags: ['Product Strategy', 'User Flow', 'Data Strategy', 'Figma', 'React'],
    href: 'https://github.com/chaeeunwang/Quote-Distortion-Detection',
    sourceLabel: 'GitHub',
  },
] as const;

export default function PmPortfolio() {
  return (
    <main className="detail-main" id="top">
      <PortfolioHeader active="pm" />

      <section className="detail-hero" id="main-content">
        <p className="eyebrow">PRODUCT MANAGER</p>
        <h1>
          문제를 정의하고,
          <br />
          제품의 방향을 설계합니다.
        </h1>
        <p className="lead">
          사용자 문제를 구조화하고, 데이터와 기술의 제약을 고려해 팀이 실행할 수
          있는 제품의 방향으로 바꿉니다.
        </p>
        <nav className="case-navigation" aria-label="제품 사례 바로가기">
          {cases.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.title} <ArrowDown size={15} aria-hidden="true" />
            </a>
          ))}
        </nav>
      </section>

      <section className="case-section" id="cases">
        <div className="section-heading">
          <h2>기획 사례</h2>
        </div>

        {cases.map((item) => (
          <article className="case-study" id={item.id} key={item.id}>
            <div className="case-index">{item.number}</div>
            <div className="case-body">
              <div className="case-header">
                <div>
                  <p className="case-meta">{item.period}</p>
                  <h3>{item.title}</h3>
                  <p className="case-subtitle">{item.subtitle}</p>
                </div>
              </div>
              <div className="project-links">
                <a
                  className="source-link"
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.sourceLabel}{' '}
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </div>

              <div className="role-note">
                <strong>담당 역할</strong>
                <span>{item.role}</span>
              </div>
              <div className="outcome-grid">
                {item.outcomes.map(([value, label]) => (
                  <div key={label}>
                    <strong>{value}</strong>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
              <p className="evidence-note">{item.evidence}</p>
              <div className="case-columns">
                <div>
                  <h4>해결할 문제</h4>
                  <p>{item.problem}</p>
                </div>
                <div>
                  <h4>핵심 선택</h4>
                  <ol>
                    {item.decisions.map((decision) => (
                      <li key={decision}>{decision}</li>
                    ))}
                  </ol>
                </div>
              </div>
              <ul className="tag-list" aria-label={`${item.title} 역량`}>
                {item.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="principles" aria-label="제품 기획 원칙">
        <article>
          <span>01</span>
          <h2>문제를 관찰합니다</h2>
          <p>사용자가 겪는 불편과 기존 해결 방식의 빈틈을 먼저 정의합니다.</p>
        </article>
        <article>
          <span>02</span>
          <h2>판단 기준을 만듭니다</h2>
          <p>
            사용자 가치, 데이터 품질, 구현 비용과 리스크를 비교해 우선순위를
            명확히 합니다.
          </p>
        </article>
        <article>
          <span>03</span>
          <h2>구현 범위를 구체화합니다</h2>
          <p>
            사용자 흐름을 화면과 API·데이터 계약으로 옮기고, 구현한 범위와 다음
            검증을 구분합니다.
          </p>
        </article>
      </section>

      <section className="experience-band">
        <div>
          <p className="eyebrow">EXPERIENCE</p>
          <h2>경력과 교육</h2>
        </div>
        <div className="timeline">
          <article>
            <time>2026.07 — 현재</time>
            <h3>SK AX SKALA</h3>
            <p>AI·백엔드 교육 수강 중 · HR 업무 챗봇 구현</p>
          </article>
          <article>
            <time>2025.08 — 12</time>
            <h3>고려대학교 지능정보 SW 아카데미</h3>
            <p>
              QDD 서비스 기획·흐름 설계·React 화면 구현 담당 · 팀으로
              아이디어·구현 대회 수상
            </p>
          </article>
          <article>
            <time>2025.02 — 05</time>
            <h3>아프로시스 공공사업부 인턴</h3>
            <p>sLLM 모델 라우팅, Redis 세션 문맥, 개인정보 마스킹 개발 보조</p>
          </article>
          <article>
            <time>2019.03 — 2025.08</time>
            <h3>고려대학교</h3>
            <p>물리학과 · 정보보호 융합전공 학사</p>
          </article>
        </div>
      </section>

      <PortfolioFooter />
    </main>
  );
}
