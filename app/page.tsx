/* oxlint-disable nextjs/no-html-link-for-pages -- Native links avoid the deployed Vinext RSC navigation failure. */
import { ArrowDown, ArrowRight, ArrowUpRight } from 'lucide-react';
import { PortfolioFooter, PortfolioHeader } from './portfolio-shell';

export default function Home() {
  return (
    <main id="top">
      <PortfolioHeader />
      <section className="home-intro" id="main-content">
        <div>
          <p className="eyebrow">WANG CHAEEUN · PORTFOLIO</p>
          <h1>
            문제를 이해하고,
            <br />
            기술로 풀어냅니다<span>.</span>
          </h1>
        </div>
        <div className="home-intro-note">
          <div className="intro-profile">
            {/* oxlint-disable-next-line nextjs/no-img-element */}
            <img src="/portrait.jpg" alt="왕채은" width="42" height="54" />
            <span>
              왕채은<small>AI · BACKEND / PRODUCT</small>
            </span>
          </div>
          <p>
            물리학과 정보보호를 공부하고,
            <br />
            AI 모델을 실제 서비스로 연결해 왔습니다.
          </p>
          <a className="text-link" href="#work">
            제가 만든 것들 <ArrowDown size={16} aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className="selected-work" id="work" aria-labelledby="work-title">
        <div className="work-heading">
          <h2 id="work-title">
            Selected work<span> / 01—03</span>
          </h2>
          <p>문제, 선택, 그리고 구현의 기록</p>
        </div>

        <article className="featured-project">
          <figure
            className="project-diagram"
            aria-label="인용 왜곡 탐지 구조: 기사 속 인용문을 추출하고 원 발언을 검색한 뒤 문장을 정렬하고 의미 왜곡을 분류합니다."
          >
            <div className="diagram-top">
              <span>QDD / SYSTEM OVERVIEW</span>
              <span>01</span>
            </div>
            <div className="quote-pair">
              <div>
                <span className="quote-mark" aria-hidden="true">
                  “
                </span>
                <strong>기사 속 인용문</strong>
                <span>문맥을 확인하고</span>
              </div>
              <span className="compare-symbol" aria-hidden="true">
                ↔
              </span>
              <div>
                <span className="quote-mark" aria-hidden="true">
                  “
                </span>
                <strong>실제 발언</strong>
                <span>의미를 비교합니다</span>
              </div>
            </div>
            <div className="diagram-flow" aria-hidden="true">
              <span>인용문 추출</span>
              <ArrowRight size={14} />
              <span>원문 검색</span>
              <ArrowRight size={14} />
              <span>문장 정렬</span>
              <ArrowRight size={14} />
              <span>왜곡 분류</span>
            </div>
            <p className="diagram-caption">Chrome Extension + NLP</p>
          </figure>
          <div className="featured-copy">
            <p className="project-category">01 / AI PRODUCT · 2025</p>
            <h3>Quote Distortion Detection</h3>
            <p className="project-description">
              뉴스의 인용문은 원래 발언과 같은 의미일까요? 기사 안에서 인용
              왜곡을 확인하는 Chrome 확장 프로그램입니다.
            </p>
            <p className="contribution">
              <span>담당</span>서비스 기획 · 처리 흐름 설계 · React 화면
            </p>
            <div className="project-evidence">
              <strong>
                0.8667<span>F1 Macro · 팀 평가</span>
              </strong>
              <p>
                공개 README 기준
                <br />
                MPNet 분류 결과
              </p>
            </div>
            <div className="project-links">
              <a className="text-link" href="/pm#qdd">
                제품 기획 <ArrowUpRight size={16} aria-hidden="true" />
              </a>
              <a className="text-link" href="/developer#qdd">
                구현 과정 <ArrowUpRight size={16} aria-hidden="true" />
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
          </div>
        </article>

        <div className="secondary-projects">
          <article>
            <p className="project-category">02 / BACKEND · INTERNSHIP</p>
            <h3>sLLM 챗봇 백엔드</h3>
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
            <a className="text-link" href="/developer#chatbot">
              구현 과정 보기 <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </article>
          <article>
            <p className="project-category">03 / AI SAFETY · 2024</p>
            <h3>DeepShield</h3>
            <p className="project-description">
              사진을 공유하기 전 얼굴 영역에 적대적 노이즈를 적용하는 예방형
              필터입니다. 필터 구현과 시각 품질 조정을 맡았습니다.
            </p>
            <p className="contribution">
              <span>담당</span>핵심 필터 설계 · 노이즈 적용 · 시각 품질 개선
            </p>
            <div className="project-recognition">
              <span>팀 결과 · App Store 출시</span>
              <span>체인지메이커스 포럼 최우수상</span>
            </div>
            <a className="text-link" href="/pm#deepshield">
              문제와 해결 과정 <ArrowUpRight size={16} aria-hidden="true" />
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
          <a href="/pm">
            <div>
              <h3>Product Manager</h3>
              <p>QDD · 스사싣 · DeepShield의 문제와 선택</p>
            </div>
            <ArrowUpRight size={24} aria-hidden="true" />
          </a>
          <a href="/developer">
            <div>
              <h3>AI & Backend Developer</h3>
              <p>HR 업무 챗봇 · 인턴 경험 · NLP 구현과 검증</p>
            </div>
            <ArrowUpRight size={24} aria-hidden="true" />
          </a>
        </div>
      </section>
      <PortfolioFooter />
    </main>
  );
}
