import React, {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './components/app';

import './index.scss';

const rootElement = document.getElementById('root');
const reactRoot = createRoot(rootElement)

reactRoot.render(
  <StrictMode>
    <App />
  </StrictMode>
)
