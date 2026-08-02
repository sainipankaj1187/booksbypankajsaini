import type { PropsWithChildren } from 'react';
import type { PageKey } from '../types';

const navItems: Array<{ href: string; label: string; keys: PageKey[] }> = [
  { href: '/books/', label: 'Books', keys: ['books', 'badoga', 'marbella', 'ambakvid', 'aragbat'] },
  { href: '/universe/', label: 'Universe', keys: ['universe'] },
  { href: '/writing/', label: 'Writing', keys: ['writing'] },
  { href: '/about/', label: 'About', keys: ['about'] },
];

export function SiteLayout({ page, children }: PropsWithChildren<{ page: PageKey }>) {
  return (
    <div className="site-frame">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <a className="wordmark" href="/" aria-label="Pankaj Saini, home">
          <span>Pankaj Saini</span>
          <small>Writer · Music Men</small>
        </a>
        <nav className="site-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={item.keys.includes(page) ? 'page' : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>
      <main id="main">{children}</main>
      <footer className="site-footer">
        <div>
          <strong>Pankaj Saini</strong>
          <p>Fantasy, superheroes, music and stories from before history learned to remember.</p>
        </div>
        <div className="footer-links" aria-label="Footer navigation">
          <a href="/books/">Books</a>
          <a href="/universe/">Universe</a>
          <a href="/writing/">Writing</a>
          <a href="/about/">About</a>
        </div>
        <p className="copyright">© 2026 Pankaj Saini. All rights reserved.</p>
      </footer>
    </div>
  );
}

export function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {copy ? <p>{copy}</p> : null}
    </div>
  );
}
