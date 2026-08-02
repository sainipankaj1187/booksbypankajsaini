import { readFile, writeFile, rm } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

const pages = [
  ['dist/index.html', 'home'],
  ['dist/books/index.html', 'books'],
  ['dist/books/badoga/index.html', 'badoga'],
  ['dist/books/marbella/index.html', 'marbella'],
  ['dist/books/ambakvid/index.html', 'ambakvid'],
  ['dist/books/aragbat/index.html', 'aragbat'],
  ['dist/universe/index.html', 'universe'],
  ['dist/writing/index.html', 'writing'],
  ['dist/about/index.html', 'about'],
];

const serverEntry = pathToFileURL(resolve('dist-server/entry-server.mjs')).href;
const { render } = await import(serverEntry);

for (const [file, page] of pages) {
  const html = await readFile(file, 'utf8');
  if (!html.includes('<!--app-html-->')) {
    throw new Error(`Prerender marker missing in ${file}`);
  }
  await writeFile(file, html.replace('<!--app-html-->', render(page)), 'utf8');
}

await rm('dist-server', { recursive: true, force: true });
console.log(`Pre-rendered ${pages.length} pages.`);
