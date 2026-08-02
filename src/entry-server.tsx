import { renderToString } from 'react-dom/server';
import { App } from './App';
import type { PageKey } from './types';
import './styles/global.css';

export function render(page: PageKey) {
  return renderToString(<App page={page} />);
}
