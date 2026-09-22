/* oxlint-disable nextjs/no-html-link-for-pages -- Native links avoid the deployed Vinext RSC navigation failure. */
import { ArrowUpRight } from 'lucide-react';

export function PortfolioHeader({
  active = 'home',
}: {
  active?: 'home' | 'pm' | 'developer';
}) {
  return (
    <>
      <a className="skip-link" href="#main-content">
        본문 바로가기
      </a>
      <header className="site-header">
        <a className="wordmark" href="/" aria-label="왕채은 포트폴리오 홈">
          왕채은<span>.</span>
        </a>
        <nav aria-label="포트폴리오 탐색">
          <a
            href="/#work"
            aria-current={active === 'home' ? 'page' : undefined}
          >
            Work
          </a>
          <a href="/pm" aria-current={active === 'pm' ? 'page' : undefined}>
            PM
          </a>
          <a
            href="/developer"
            aria-current={active === 'developer' ? 'page' : undefined}
          >
            Developer
          </a>
          <a className="header-contact" href="#contact">
            Contact <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </nav>
      </header>
    </>
  );
}

export function PortfolioFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-contact">
        <p className="eyebrow">CONTACT</p>
        <h2>함께 만들 이야기가 있다면.</h2>
        <a className="email-link" href="mailto:imchaen@gmail.com">
          imchaen@gmail.com <ArrowUpRight size={22} aria-hidden="true" />
        </a>
      </div>
      <div className="footer-links">
        <a
          href="https://github.com/chaeeunwang"
          target="_blank"
          rel="noreferrer"
        >
          GitHub <ArrowUpRight size={15} aria-hidden="true" />
        </a>
        <a href="#top">맨 위로 ↑</a>
        <p>© 2026 왕채은</p>
      </div>
    </footer>
  );
}
