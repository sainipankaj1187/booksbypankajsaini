import { SiteLayout } from '../components/Layout';

const posts = [
  { id: 'Cw2q7QQS-QU', extension: 'jpg' },
  { id: 'CM9AE9YLIY-', extension: 'jpg' },
  { id: 'Clgr7XbSTDf', extension: 'webp' },
  { id: 'CWvnMR5v_8P', extension: 'jpg' },
  { id: 'CVnc8kNvHm5', extension: 'jpg' },
  { id: 'CP-2SsrL-gP', extension: 'jpg' },
  { id: 'CHF9btAASfr', extension: 'jpg' },
  { id: 'CG42bwuA2UD', extension: 'jpg' },
  { id: 'B-9o9OogSTe', extension: 'jpg' },
  { id: 'B88dpA9AV_g', extension: 'jpg' },
  { id: 'B55UeH9ghih', extension: 'jpg' },
  { id: 'B5mGLqug7jm', extension: 'jpg' },
  { id: 'B5ZxsRrAf4W', extension: 'jpg' },
  { id: 'B33gE1WBDK-', extension: 'jpg' },
  { id: 'B3qwDtyhx-n', extension: 'jpg' },
];

export function GalleryPage() {
  return (
    <SiteLayout page="gallery">
      <section className="section-shell section-block universe-posts" aria-labelledby="gallery-posts-title">
        <div className="section-heading">
          <p className="eyebrow">From Instagram</p>
          <h1 id="gallery-posts-title">Stories in pictures</h1>
          <p>Select an image to view the original post on Instagram.</p>
        </div>

        <div className="poem-grid">
          {posts.map((post, index) => (
            <a
              className="poem-card"
              href={`https://www.instagram.com/p/${post.id}/`}
              key={post.id}
              target="_blank"
              rel="noreferrer"
              aria-label={`View gallery image ${index + 1} on Instagram (opens in a new tab)`}
            >
              <img
                src={`/images/gallery/${post.id}.${post.extension}`}
                alt={`Gallery image ${index + 1} by Pankaj Saini`}
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
