/**
 * 파일명: Portfolio Gateway
 *
 * 역할:
 * 채용 담당자가 왕채은의 PM·개발자 포트폴리오 중 목적에 맞는 관점을 선택하는 시작 화면이다.
 *
 * 주요 기능:
 * - 두 직무 포트폴리오의 차이를 첫 화면에서 설명
 * - 검증 가능한 대표 성과와 연락 수단 제공
 * - 각 상세 포트폴리오로 명확한 진입점 제공
 */
import { ArrowUpRight, Braces, Code2, Mail, Workflow } from 'lucide-react';
import Link from 'next/link';

const tracks = [
  {
    href: '/pm',
    eyebrow: 'PRODUCT MANAGER',
    title: '문제를 정의하고\n제품의 방향을 설계합니다.',
    description:
      '사용자 문제를 구조화하고, 데이터와 기술 제약을 연결해 실행 가능한 제품으로 만드는 과정을 담았습니다.',
    icon: Workflow,
    accent: 'coral',
    proof: ['문제 정의', '데이터 전략', '제품 설계', '협업과 실행'],
  },
  {
    href: '/developer',
    eyebrow: 'AI · BACKEND DEVELOPER',
    title: '모델을 넘어\n동작하는 시스템을 만듭니다.',
    description:
      'AI 모델, API, 세션, 개인정보 보호 로직을 서비스 흐름으로 연결한 구현 경험을 담았습니다.',
    icon: Braces,
    accent: 'mint',
    proof: ['Python · FastAPI', 'NLP · LLM', 'Redis', 'React'],
  },
] as const;

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="왕채은 포트폴리오 홈">
          CEW<span>.</span>
        </a>
        <nav aria-label="연락 및 외부 링크">
          <a href="mailto:imchaen@gmail.com">Contact</a>
          <a href="https://github.com/chaeeunwang" target="_blank" rel="noreferrer">
            GitHub <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </nav>
      </header>

      <section className="gateway-hero" id="top">
        <div className="hero-copy">
          <p className="kicker">WANG CHAEEUN · PORTFOLIO 2026</p>
          <h1>
            기술을 이해하고,
            <br />
            <em>제품으로 완성하는 사람.</em>
          </h1>
          <p className="hero-summary">
            물리학의 분석력과 정보보호의 관점으로 문제를 보고,
            <br className="desktop-only" /> AI와 백엔드 기술을 활용해 실제 사용 가능한 서비스로 연결합니다.
          </p>
        </div>

        <div className="profile-stamp" aria-label="왕채은 프로필">
          {/* 정적 로컬 이미지는 현재 Sites 런타임의 Next Image 클라이언트 충돌을 피하기 위해 직접 제공한다. */}
          {/* oxlint-disable-next-line nextjs/no-img-element */}
          <img
            src="/profile.png"
            alt="왕채은 프로필 사진"
            width="96"
            height="96"
          />
          <span>Available for opportunities</span>
        </div>
      </section>

      <section className="track-grid" aria-label="포트폴리오 선택">
        {tracks.map((track, index) => {
          const Icon = track.icon;
          return (
            <Link className={`track-card ${track.accent}`} href={track.href} key={track.href}>
              <div className="track-topline">
                <span>0{index + 1}</span>
                <Icon size={26} strokeWidth={1.7} aria-hidden="true" />
              </div>
              <p className="track-eyebrow">{track.eyebrow}</p>
              <h2>{track.title}</h2>
              <p className="track-description">{track.description}</p>
              <ul aria-label={`${track.eyebrow} 핵심 역량`}>
                {track.proof.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="track-cta">
                포트폴리오 보기 <ArrowUpRight size={18} aria-hidden="true" />
              </div>
            </Link>
          );
        })}
      </section>

      <section className="proof-strip" aria-label="대표 성과">
        <div><strong>0.86</strong><span>인용 왜곡 탐지 F1-score</span></div>
        <div><strong>0.91</strong><span>위험 대화 탐지 정확도</span></div>
        <div><strong>3</strong><span>프로젝트 수상</span></div>
        <div><strong>E2E</strong><span>기획부터 서비스 구현까지</span></div>
      </section>

      <footer>
        <p>문제를 구조화하고, 끝까지 구현합니다.</p>
        <div>
          <a href="mailto:imchaen@gmail.com"><Mail size={16} aria-hidden="true" /> imchaen@gmail.com</a>
          <a href="https://github.com/chaeeunwang" target="_blank" rel="noreferrer"><Code2 size={16} aria-hidden="true" /> chaeeunwang</a>
        </div>
      </footer>
    </main>
  );
}
