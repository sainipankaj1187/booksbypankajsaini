import { SiteLayout } from '../components/Layout';

const eras = [
  ['Around 65 million years ago', 'Blobs arrive on Earth. Their possession of susceptible reptilian species disrupts the ecological balance and ends in catastrophe.'],
  ['Around 100,000 BCE', 'The Aranavs emerge. Some are possessed by the Blobs and gain the ability to channel Ether.'],
  ['The creation of the Code', 'The most powerful Aranavs, including CeCe and Hanobat, impose rules against unnatural experiments and unnecessary interference with nature.'],
  ['Around 60,000 BCE', 'Aragbat begins a journey that will shape the origin of the Music Men.'],
  ['The modern age', 'Badoga, Marbella and others inherit a world whose deepest history has been forgotten.'],
];

export function UniversePage() {
  return (
    <SiteLayout page="universe">
      <header className="page-hero page-hero--dark">
        <div className="section-shell">
          <p className="eyebrow">The Music Men universe</p>
          <h1>Magic is not a gift. It is an intrusion.</h1>
          <p>Before superheroes, before recorded history and even before humanity as we know it, Ether entered the story of Earth.</p>
        </div>
      </header>

      <section className="section-shell lore-grid section-block">
        <article><p className="lore-number">01</p><h2>Ether</h2><p>A fundamental, mysterious presence that can be channelled as magic by those connected to the Blobs.</p></article>
        <article><p className="lore-number">02</p><h2>The Blobs</h2><p>Ether-aware entities capable of possessing susceptible species and granting access to Ether-magic.</p></article>
        <article><p className="lore-number">03</p><h2>The Aranavs</h2><p>A prehistoric species different from Homo sapiens. Some become powerful enough to reshape nature itself.</p></article>
        <article><p className="lore-number">04</p><h2>The Code</h2><p>A restraint against experimentation, excess and interference with the natural course of evolution.</p></article>
      </section>

      <section className="section-shell section-block timeline-section">
        <div className="section-heading"><p className="eyebrow">A brief chronology</p><h2>From extinction to inheritance</h2></div>
        <ol className="timeline">
          {eras.map(([date, copy], index) => (
            <li key={date}><span>{String(index + 1).padStart(2, '0')}</span><div><h3>{date}</h3><p>{copy}</p></div></li>
          ))}
        </ol>
      </section>

      <section className="section-shell section-block world-panel">
        <img src="/images/ether-symbol.svg" alt="Abstract Ether symbol" />
        <div>
          <p className="eyebrow">A world before maps</p>
          <h2>Prehistoric Earth is not merely a backdrop.</h2>
          <p>The terrain, climate, migration of species and human evolution all shape the story. Caves, rock shelters, table-top hills and changing landscapes become part of the mythology rather than scenery behind it.</p>
          <a className="button" href="/books/aragbat/">Explore Aragbat</a>
        </div>
      </section>
    </SiteLayout>
  );
}
