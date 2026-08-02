import { hydrateRoot } from 'react-dom/client';
import { App } from './App';
import type { PageKey } from './types';
import './styles/global.css';

const root = document.getElementById('root');
const page = document.body.dataset.page as PageKey | undefined;

if (!root || !page) {
  throw new Error('Missing root element or page key.');
}

hydrateRoot(root, <App page={page} />);
