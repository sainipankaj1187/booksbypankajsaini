import { BookCard } from '../components/BookCard';
import { SiteLayout } from '../components/Layout';
import { books } from '../data/books';
import type { Book, PageKey } from '../types';

export function BookDetailPage({ book }: { book: Book }) {
  const related = books.filter((candidate) => candidate.slug !== book.slug).slice(0, 3);
  return (
    <SiteLayout page={book.slug as PageKey}>
      <section className="book-hero section-shell">
        <div className="book-hero__cover"><img src={book.cover} alt={`${book.title} cover artwork`} /></div>
        <div className="book-hero__copy">
          <p className="eyebrow">{book.seriesLabel}</p>
          <h1>{book.title}</h1>
          <p className="book-hero__dek">{book.shortDescription}</p>
          <div className="button-row">
            {book.amazonIndia ? (
              <a className="button" href={book.amazonIndia} target="_blank" rel="noopener noreferrer">Buy on Amazon India</a>
            ) : (
              <span className="button button--disabled">Coming soon</span>
            )}
            <a className="button button--ghost" href="/books/">All books</a>
          </div>
        </div>
      </section>

      <section className="section-shell book-content-grid section-block">
        <div className="prose-block">
          <p className="eyebrow">About the book</p>
          {book.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <div className="theme-list" aria-label="Themes">
            {book.themes.map((theme) => <span key={theme}>{theme}</span>)}
          </div>
        </div>
        <aside className="book-facts">
          <h2>Book details</h2>
          <dl>
            {book.details.map(([term, value]) => <div key={term}><dt>{term}</dt><dd>{value}</dd></div>)}
          </dl>
        </aside>
      </section>

      {book.slug === 'aragbat' ? (
        <section className="quote-band">
          <div className="section-shell">
            <p className="eyebrow">The premise</p>
            <blockquote>Aragbat is not the strongest Aranav, the wisest or the most gifted. He is simply the one who keeps walking.</blockquote>
          </div>
        </section>
      ) : null}

      <section className="section-shell section-block">
        <div className="section-heading"><p className="eyebrow">Continue exploring</p><h2>More from Music Men</h2></div>
        <div className="book-grid">{related.map((candidate) => <BookCard key={candidate.slug} book={candidate} />)}</div>
      </section>
    </SiteLayout>
  );
}
