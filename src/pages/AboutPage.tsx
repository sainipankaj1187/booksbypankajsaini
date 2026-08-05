import { SiteLayout } from '../components/Layout';

export function AboutPage() {
  return (
    <SiteLayout page="about">
      <section className="about-hero section-shell">
        <div className="about-portrait">
          <img src="/images/pankaj-saini-portrait.jpg" alt="Pankaj Saini" />
        </div>
        <div>
          <p className="eyebrow">About the author</p>
          <h1>Pankaj Saini writes fantasy shaped by music, science, history, and mythology, often subverting accepted conventions and norms.</h1>
          <p className="hero__lede">He is the author of the Music Men novels Badoga and Marbella, and the graphic origin tale Ambakvid. The third novel, Aragbat, travels back to the prehistoric beginnings of the series.</p>
          <div className="about-hero__prose">
            <p>Pankaj is a Bangalore-based writer and technology leader. He began taking writing seriously alongside a growing relationship with music and the drums, eventually building a fictional universe where sound, power, history and human damage are tightly connected.</p>
            <p>His stories move between modern cities and deep prehistory, combining superhero fiction, soft science fiction, action and humour with pop-culture references. They often subvert familiar norms and conventions, particularly those surrounding religion, the supernatural and dogma.</p>
            <p>He has published two novels and one graphic novel in the Music Men series. Aragbat, the next full-length volume, is complete and forms the origin story of the larger saga.</p>
          </div>
        </div>
      </section>

      <section className="section-shell section-block about-facts-section">
        <aside className="about-facts">
          <h2>At a glance</h2>
          <dl>
            <div><dt>Based in</dt><dd>Bangalore, India</dd></div>
            <div><dt>Published work</dt><dd>Two novels and one graphic novel</dd></div>
            <div><dt>Current project</dt><dd>Music Men, Volume III: Aragbat</dd></div>
            <div><dt>Recurring influences</dt><dd>Music, mythology, history, pop culture and character-driven fantasy</dd></div>
          </dl>
        </aside>
      </section>

      <section className="section-shell section-block path-cards">
        <article><span>01</span><h2>Badoga</h2><p>The first published step into the Music Men universe.</p></article>
        <article><span>02</span><h2>Marbella</h2><p>A wider world and a far more volatile centre.</p></article>
        <article><span>03</span><h2>Ambakvid</h2><p>The series moves into visual storytelling.</p></article>
        <article><span>04</span><h2>Aragbat</h2><p>The story goes back to where everything began.</p></article>
      </section>
    </SiteLayout>
  );
}
