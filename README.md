# Pankaj Saini — Author Website

A self-contained, static, multi-page author website built with **Vite, React and TypeScript**. React is used as a reusable component layer; every page is pre-rendered to HTML at build time. There is no router, API, database, contact form, newsletter, CMS or third-party font dependency.

## Pages

- `/` — Home
- `/books/` — All books
- `/books/badoga/`
- `/books/marbella/`
- `/books/ambakvid/`
- `/books/aragbat/`
- `/universe/`
- `/writing/`
- `/about/`

## Run locally

```bash
npm install
npm run dev
```

## Build the static website

```bash
npm run build
npm run preview
```

The final deployable site is written to `dist/`. The build process:

1. Builds the browser bundle with Vite.
2. Builds a small React server-rendering entry.
3. Pre-renders every page into its HTML file.
4. Removes the temporary server bundle.

## Deploy to Cloudflare Workers Static Assets

```bash
npx wrangler login
npm run deploy
```

After the first deployment, open **Cloudflare Dashboard → Workers & Pages → pankaj-saini-author-site → Settings → Domains & Routes**, then add the domain already registered in your Cloudflare account.

## Replace book-cover artwork

The included SVG covers are original placeholders so the project is fully self-contained. Replace these files with the final covers while keeping the filenames, or update `cover` in `src/data/books.ts`:

- `public/images/badoga-cover.svg`
- `public/images/marbella-cover.svg`
- `public/images/ambakvid-cover.svg`
- `public/images/aragbat-cover.svg`

For production, WebP or AVIF images are recommended. Keep the source images around 1200–1800 px tall and compressed.

## Update content

- Book information and Amazon links: `src/data/books.ts`
- Page copy: `src/pages/`
- Navigation/footer: `src/components/Layout.tsx`
- Design system and responsive styling: `src/styles/global.css`

## Before publishing

- Replace the placeholder cover art with final covers.
- Review the biography and book summaries.
- Add the final Amazon link for *Aragbat* after publication.
- Update the copyright year when needed.
- Add the real domain to a sitemap only after the domain is finalized.
