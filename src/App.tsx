import { AboutPage } from './pages/AboutPage';
import { BookDetailPage } from './pages/BookDetailPage';
import { BooksPage } from './pages/BooksPage';
import { GalleryPage } from './pages/GalleryPage';
import { HomePage } from './pages/HomePage';
import { UniversePage } from './pages/UniversePage';
import { WritingPage } from './pages/WritingPage';
import { bookBySlug } from './data/books';
import type { PageKey } from './types';

export function App({ page }: { page: PageKey }) {
  switch (page) {
    case 'home': return <HomePage />;
    case 'books': return <BooksPage />;
    case 'badoga': return <BookDetailPage book={bookBySlug.badoga} />;
    case 'marbella': return <BookDetailPage book={bookBySlug.marbella} />;
    case 'ambakvid': return <BookDetailPage book={bookBySlug.ambakvid} />;
    case 'aragbat': return <BookDetailPage book={bookBySlug.aragbat} />;
    case 'universe': return <UniversePage />;
    case 'gallery': return <GalleryPage />;
    case 'writing': return <WritingPage />;
    case 'about': return <AboutPage />;
  }
}
