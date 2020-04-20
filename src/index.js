import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/components/App/App'
import { BrowserRouter } from 'react-router-dom';
import { SkatelogListProvider } from './contexts/SkatelogListContext';
import { SkatelogProvider } from './contexts/SkatelogContext';




ReactDOM.render(
  <BrowserRouter>
    <SkatelogListProvider>
      <SkatelogProvider>
        <App />
      </SkatelogProvider>
    </SkatelogListProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
