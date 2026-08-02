import { SiteLayout } from '../components/Layout';

export function WritingPage() {
  return (
    <SiteLayout page="writing">
      <header className="page-hero section-shell">
        <p className="eyebrow">From the writing desk</p>
        <h1>Books, music, difficult characters and the worlds they leave behind.</h1>
        <p>This section is intentionally small: a place for selected notes, excerpts and reflections rather than a constantly updated blog.</p>
      </header>

      <section className="section-shell section-block essay-grid">
        <article className="essay-card essay-card--lead">
          <p className="essay-card__meta">World-building · Music Men III</p>
          <h2>Writing a fantasy set around 60,000 BCE</h2>
          <p>The challenge was not merely imagining an old world. It was building a moving story inside a landscape where every tool, journey, shelter and interaction with nature had to feel materially different from the present.</p>
          <p>The result sits somewhere between pulp fantasy and literary fiction: action and humour remain, but character, atmosphere and emotional consequence have more room to breathe.</p>
        </article>
        <article className="essay-card">
          <p className="essay-card__meta">Craft</p>
          <h2>Why music belongs inside the magic</h2>
          <p>Music in the series is not decoration. Rhythm, vibration and instruments become a way to understand power, memory and the physical world.</p>
        </article>
        <article className="essay-card">
          <p className="essay-card__meta">Characters</p>
          <h2>Heroes who do not behave like heroes</h2>
          <p>Badoga is conflicted. Marbella is volatile. Aragbat is limited. Their flaws are not obstacles placed before the plot; they are the engines that move it.</p>
        </article>
        <article className="essay-card">
          <p className="essay-card__meta">Reading</p>
          <h2>Fantasy, literary fiction and everything between</h2>
          <p>The writing draws energy from character-driven fantasy, mythology, history, comics and novels that are willing to be messy, funny and emotionally uncomfortable.</p>
        </article>
      </section>

      <section className="quote-band quote-band--warm">
        <div className="section-shell">
          <p className="eyebrow">On the series</p>
          <blockquote>The larger the world became, the more important it was to keep the people inside it grounded.</blockquote>
        </div>
      </section>
    </SiteLayout>
  );
}
