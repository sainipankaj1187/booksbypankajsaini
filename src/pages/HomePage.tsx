import { BookCard } from '../components/BookCard';
import { SectionHeading, SiteLayout } from '../components/Layout';
import { bookBySlug, books } from '../data/books';

export function HomePage() {
  const aragbat = bookBySlug.aragbat;
  return (
    <SiteLayout page="home">
      <section className="hero section-shell">
        <div className="hero__copy">
          <p className="eyebrow">Pankaj Saini · Author of Music Men</p>
          <h1>Stories from before history learned to remember.</h1>
          <p className="hero__lede">
            Fantasy, superheroes, music and mythology—moving between modern Bangalore and a prehistoric world shaped by Ether.
          </p>
          <div className="button-row">
            <a className="button" href="/books/">Explore the books</a>
            <a className="button button--ghost" href="/universe/">Read the poems</a>
          </div>
        </div>
        <div className="hero__art" aria-hidden="true">
          <img src="/images/hero-landscape.svg" alt="" />
          <p>65 million years ago, something arrived.</p>
        </div>
      </section>

      <section className="section-shell section-block">
        <SectionHeading
          eyebrow="The latest chapter"
          title="Music Men, Volume III: Aragbat"
          copy="The origin of the Music Men begins around 60,000 BCE—with the least powerful Aranav in a world governed by the Code."
        />
        <BookCard book={aragbat} featured />
      </section>

      <section className="section-shell section-block">
        <SectionHeading
          eyebrow="The books"
          title="One universe. Different ages. Unlikely heroes."
          copy="Begin with modern-day superheroes, step sideways into a graphic origin tale, then travel back to the distant beginning."
        />
        <div className="book-grid">
          {books.filter((book) => book.slug !== 'aragbat').map((book) => <BookCard key={book.slug} book={book} />)}
        </div>
        <p className="centered-action"><a className="text-link" href="/books/">View the complete reading order <span aria-hidden="true">→</span></a></p>
      </section>

      <section className="universe-teaser">
        <div className="section-shell universe-teaser__inner">
          <div>
            <p className="eyebrow">Inside the universe</p>
            <h2>Ether remembers what history forgets.</h2>
          </div>
          <div className="feature-list">
            <article><span>01</span><h3>The Blobs</h3><p>Ether-aware entities that arrive on Earth and alter the course of life.</p></article>
            <article><span>02</span><h3>The Aranavs</h3><p>A prehistoric species capable of being possessed—and of channelling Ether.</p></article>
            <article><span>03</span><h3>The Code</h3><p>A law meant to restrain magic, unnatural experiments and interference with evolution.</p></article>
          </div>
          <a className="button button--light" href="/universe/">Read the poems</a>
        </div>
      </section>

      <section className="section-shell section-block author-strip">
        <div className="author-mark" aria-hidden="true">PS</div>
        <div>
          <p className="eyebrow">About the writer</p>
          <h2>A technologist by profession. A storyteller by compulsion.</h2>
          <p>Pankaj Saini is a Bangalore-based writer whose work brings together fantasy, music, Indian urban life, prehistory and superhero fiction.</p>
          <a className="text-link" href="/about/">Read the full biography <span aria-hidden="true">→</span></a>
        </div>
      </section>
    </SiteLayout>
  );
}
