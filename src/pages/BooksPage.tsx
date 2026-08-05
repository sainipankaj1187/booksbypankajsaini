import { BookCard } from '../components/BookCard';
import { SiteLayout } from '../components/Layout';
import { books } from '../data/books';

export function BooksPage() {
  return (
    <SiteLayout page="books">
      <header className="page-hero section-shell">
        <p className="eyebrow">The Music Men collection</p>
        <h1>Books about power, damage, music and becoming.</h1>
        <p>Start in modern Bangalore with Badoga, meet Marbella, explore Ambakvid’s origin tale, or go back to the beginning with the upcoming Aragbat.</p>
      </header>
      <section className="section-shell section-block">
        <div className="reading-order" aria-label="Suggested reading order">
          <span>Suggested reading order</span>
          <ol>
            <li>Badoga</li><li>Marbella</li><li>Ambakvid</li><li>Aragbat</li>
          </ol>
        </div>
        <div className="book-list">
          {books.map((book) => <BookCard key={book.slug} book={book} />)}
        </div>
      </section>
    </SiteLayout>
  );
}
