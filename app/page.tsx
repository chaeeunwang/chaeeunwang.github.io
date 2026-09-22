/* oxlint-disable nextjs/no-html-link-for-pages -- Native links keep static Pages navigation independent of a client router. */
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  ScanFace,
  Layers,
} from 'lucide-react';
import { PortfolioFooter, PortfolioHeader } from './portfolio-shell';

export default function Home() {
  return (
    <main id="top">
      <PortfolioHeader />
      <section className="home-intro" id="main-content">
        <div className="intro-identity">
          <p className="eyebrow">AI · BACKEND / PRODUCT</p>
          <h1>
            왕채은<span>.</span>
          </h1>
          <p className="intro-tagline">문제를 이해하고, 기술로 풀어냅니다.</p>
        </div>
        <div className="home-intro-note">
          <p>
            물리학과 정보보호를 공부하고,
            <br />
            AI 모델을 실제 서비스로 연결해 왔습니다.
          </p>
          <a className="text-link" href="#work">
            대표 프로젝트 보기 <ArrowDown size={16} aria-hidden="true" />
          </a>
        </div>
        {/* oxlint-disable-next-line nextjs/no-img-element */}
        <img
          className="intro-portrait"
          src="/portrait.jpg"
          alt="왕채은"
          width="350"
          height="450"
        />
      </section>

      <section className="selected-work" id="work" aria-labelledby="work-title">
        <div className="work-heading">
          <h2 id="work-title">
            Selected work<span> / 01—03</span>
          </h2>
          <p>문제, 선택, 그리고 구현의 기록</p>
        </div>

        <article className="featured-project">
          <div className="featured-copy">
            <p className="project-category">01 / AI SAFETY · 2024</p>
            <h3>
              <a href="/pm/#deepshield">DeepShield</a>
            </h3>
            <p className="project-description">
              사진을 공유하기 전 얼굴 영역에 적대적 노이즈를 적용하는 예방형
              필터입니다. 필터 구현과 시각 품질 조정을 맡았습니다.
            </p>
            <p className="contribution">
              <span>담당</span>핵심 필터 설계 · 노이즈 적용 · 시각 품질 개선
            </p>
            <div className="project-evidence">
              <div>
                <strong>앱 출시</strong>
                <span>App Store · 팀 결과</span>
              </div>
              <div>
                <strong>최우수상</strong>
                <span>체인지메이커스 포럼 · 팀 수상</span>
              </div>
            </div>
            <div className="project-links">
              <a className="text-link" href="/pm/#deepshield">
                기획 사례 보기 <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a
                className="source-link"
                href="https://www.news1.kr/society/incident-accident/5546773"
                target="_blank"
                rel="noreferrer"
              >
                개발팀 인터뷰 <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </div>
          </div>
          <figure
            className="project-diagram"
            aria-label="DeepShield 필터 구조: 얼굴 영역을 탐지하고 해당 영역에 노이즈를 적용한 뒤 경계를 조정합니다."
          >
            <div className="diagram-top">
              <span>DEEPSHIELD / FILTER OVERVIEW</span>
              <span>01</span>
            </div>
            <div className="quote-pair">
              <div>
                <span className="quote-mark" aria-hidden="true">
                  <ScanFace size={52} strokeWidth={1.3} />
                </span>
                <strong>얼굴 영역</strong>
                <span>랜드마크로 찾고</span>
              </div>
              <span className="compare-symbol" aria-hidden="true">
                →
              </span>
              <div>
                <span className="quote-mark" aria-hidden="true">
                  <Layers size={52} strokeWidth={1.3} />
                </span>
                <strong>예방 필터</strong>
                <span>노이즈를 적용합니다</span>
              </div>
            </div>
            <div className="diagram-flow" aria-hidden="true">
              <span>얼굴 탐지</span>
              <ArrowRight size={14} />
              <span>영역 한정</span>
              <ArrowRight size={14} />
              <span>노이즈 적용</span>
              <ArrowRight size={14} />
              <span>경계 조정</span>
            </div>
            <p className="diagram-caption">
              Face Landmarks + Adversarial Noise
            </p>
          </figure>
        </article>

        <div className="secondary-projects">
          <article>
            <p className="project-category">02 / AI PRODUCT · 2025</p>
            <h3>
              <a href="/pm/#qdd">Quote Distortion Detection</a>
            </h3>
            <p className="project-description">
              뉴스의 인용문은 원래 발언과 같은 의미일까요? 기사 안에서 인용
              왜곡을 확인하는 Chrome 확장 프로그램입니다.
            </p>
            <p className="contribution">
              <span>담당</span>서비스 기획 · 처리 흐름 설계 · React 화면
            </p>
            <div className="project-recognition">
              <span>F1 Macro 0.8667 · 팀 평가</span>
              <span>아이디어·구현 대회 팀 수상</span>
            </div>
            <div className="project-links">
              <a className="text-link" href="/pm/#qdd">
                기획 사례 보기 <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a className="text-link" href="/developer/#qdd">
                개발 사례 보기 <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a
                className="source-link"
                href="https://github.com/chaeeunwang/Quote-Distortion-Detection"
                target="_blank"
                rel="noreferrer"
              >
                GitHub <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </div>
          </article>
          <article>
            <p className="project-category">03 / BACKEND · INTERNSHIP</p>
            <h3>
              <a href="/developer/#chatbot">sLLM 챗봇 백엔드</a>
            </h3>
            <p className="project-description">
              공공사업부 인턴으로 질문 분류와 모델 라우팅, 세션 문맥 관리,
              개인정보 마스킹 개발을 보조했습니다.
            </p>
            <p className="contribution">
              <span>담당</span>모델 라우팅 · Redis 세션 · 개인정보 마스킹
            </p>
            <div
              className="mini-flow"
              aria-label="챗봇 담당 기능: 개인정보 보호, 모델 라우팅, 대화 문맥 관리"
            >
              <span>Privacy</span>
              <span aria-hidden="true">·</span>
              <span>Routing</span>
              <span aria-hidden="true">·</span>
              <span>Context</span>
            </div>
            <a className="text-link" href="/developer/#chatbot">
              개발 사례 보기 <ArrowRight size={16} aria-hidden="true" />
            </a>
          </article>
        </div>
      </section>

      <section className="perspectives" aria-labelledby="perspectives-title">
        <div>
          <p className="eyebrow">TWO PERSPECTIVES</p>
          <h2 id="perspectives-title">
            기획의 이유부터,
            <br />
            구현의 디테일까지.
          </h2>
        </div>
        <div className="perspective-links">
          <a href="/pm/">
            <div>
              <h3>Product Manager</h3>
              <p>DeepShield · QDD의 문제와 선택</p>
            </div>
            <ArrowRight size={24} aria-hidden="true" />
          </a>
          <a href="/developer/">
            <div>
              <h3>AI & Backend Developer</h3>
              <p>QDD · HR 업무 챗봇 · 인턴 경험의 구현과 검증</p>
            </div>
            <ArrowRight size={24} aria-hidden="true" />
          </a>
        </div>
      </section>
      <PortfolioFooter />
    </main>
  );
}
