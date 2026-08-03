import { SiteLayout } from '../components/Layout';

const posts = [
  { id: 'DaLQ57NAWxF', url: 'https://www.instagram.com/p/DaLQ57NAWxF/' },
  { id: 'DaQTc_HAXBJ', url: 'https://www.instagram.com/p/DaQTc_HAXBJ/' },
  { id: 'DZsYyeLgd3o', url: 'https://www.instagram.com/p/DZsYyeLgd3o/' },
  { id: 'DXHe8lsgXg4', url: 'https://www.instagram.com/p/DXHe8lsgXg4/' },
  { id: 'DTInjMtkpgh', url: 'https://www.instagram.com/p/DTInjMtkpgh/' },
  { id: 'DSxeuB6kuMg', url: 'https://www.instagram.com/p/DSxeuB6kuMg/' },
  { id: 'DHeEDnaiTO1', url: 'https://www.instagram.com/p/DHeEDnaiTO1/' },
  { id: 'DGJCfhMCIEb', url: 'https://www.instagram.com/p/DGJCfhMCIEb/' },
  { id: 'DEF8J3WT6Si', url: 'https://www.instagram.com/p/DEF8J3WT6Si/' },
];

export function UniversePage() {
  return (
    <SiteLayout page="universe">
      <header className="page-hero universe-hero">
        <div className="section-shell">
          <p className="eyebrow">Fragments from the Music Men universe</p>
          <h1>Tales in verse.</h1>
          <p>Short poems, echoes and glimpses from the world of the Music Men.</p>
        </div>
      </header>

      <section className="section-shell section-block universe-posts" aria-labelledby="universe-posts-title">
        <div className="section-heading">
          <p className="eyebrow">From Instagram</p>
          <h2 id="universe-posts-title">Poems from the universe</h2>
          <p>Select a poem to view the original post on Instagram.</p>
        </div>

        <div className="poem-grid">
          {posts.map((post, index) => (
            <a
              className="poem-card"
              href={post.url}
              key={post.id}
              target="_blank"
              rel="noreferrer"
              aria-label={`View Music Men poem ${index + 1} on Instagram (opens in a new tab)`}
            >
              <img
                src={`/images/universe/${post.id}.jpg`}
                alt={`Music Men poem ${index + 1} by Pankaj Saini`}
                loading={index < 3 ? 'eager' : 'lazy'}
              />
              <span>View on Instagram <span aria-hidden="true">↗</span></span>
            </a>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
