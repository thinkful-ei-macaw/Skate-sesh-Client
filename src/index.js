import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/components/App/App'
import { BrowserRouter } from 'react-router-dom';
import { SkatelogListProvider } from './contexts/SkatelogListContext';




ReactDOM.render(
  <BrowserRouter>
    <SkatelogListProvider>
      <App />
    </SkatelogListProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
