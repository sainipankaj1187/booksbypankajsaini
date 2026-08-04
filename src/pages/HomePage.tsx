import { BookCard } from '../components/BookCard';
import { SectionHeading, SiteLayout } from '../components/Layout';
import { books } from '../data/books';

export function HomePage() {
  return (
    <SiteLayout page="home">
      <section className="hero section-shell">
        <div className="hero__copy">
          <p className="eyebrow">Pankaj Saini · Indian author</p>
          <h1>Books. Music. Coffee.</h1>
          <p className="hero__lede">
            Coffee enthusiast. I write fantasy fiction and share book recommendations in my Instagram Highlights.
          </p>
          <div className="button-row">
            <a className="button" href="/books/">Explore the books</a>
            <a className="button button--ghost" href="https://www.instagram.com/pankajsaini1187/" target="_blank" rel="noopener noreferrer">Follow on Instagram</a>
          </div>
        </div>
        <div className="hero__art" aria-hidden="true">
          <img src="/images/pankaj-saini-portrait.jpg" alt="" />
          <p>Writer · Reader · Music lover</p>
        </div>
      </section>

      <section className="section-shell section-block">
        <SectionHeading
          eyebrow="The books"
          title="Fantasy, superheroes and unlikely heroes."
          copy="Explore Pankaj Saini’s published novels and graphic origin tale."
        />
        <div className="book-grid">
          {books.filter((book) => book.slug !== 'aragbat').map((book) => <BookCard key={book.slug} book={book} />)}
        </div>
        <p className="centered-action"><a className="text-link" href="/books/">View the complete reading order <span aria-hidden="true">→</span></a></p>
      </section>

      <section className="section-shell section-block author-strip">
        <div className="author-mark" aria-hidden="true">PS</div>
        <div>
          <p className="eyebrow">About the writer</p>
          <h2>Fantasy writer. Music lover. Coffee enthusiast.</h2>
          <p>His fantasy draws on pop culture while subverting familiar norms and conventions—particularly those surrounding religion, the supernatural and dogma.</p>
          <a className="text-link" href="/about/">Read the full biography <span aria-hidden="true">→</span></a>
        </div>
      </section>
    </SiteLayout>
  );
}
