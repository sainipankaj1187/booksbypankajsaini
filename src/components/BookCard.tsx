import type { Book } from '../types';

export function BookCard({ book, featured = false }: { book: Book; featured?: boolean }) {
  return (
    <article className={`book-card${featured ? ' book-card--featured' : ''}`}>
      <a className="book-card__cover" href={`/books/${book.slug}/`} aria-label={`Read about ${book.title}`}>
        <img src={book.cover} alt={`${book.title} book-cover artwork`} loading={featured ? 'eager' : 'lazy'} />
      </a>
      <div className="book-card__body">
        <p className="book-meta">{book.seriesLabel} · {book.format}</p>
        <h3><a href={`/books/${book.slug}/`}>{book.title}</a></h3>
        <p>{book.shortDescription}</p>
        <div className="book-card__actions">
          <a className="text-link" href={`/books/${book.slug}/`}>Explore the book <span aria-hidden="true">→</span></a>
          {book.amazonIndia ? (
            <a className="button button--small" href={book.amazonIndia} target="_blank" rel="noopener noreferrer">
              Buy on Amazon
            </a>
          ) : (
            <span className="status-chip">Coming soon</span>
          )}
        </div>
      </div>
    </article>
  );
}
