import React from 'react';

// eslint-disable-next-line react/prop-types
const HTML = ({ content, state }) => (
  <>
    <div id="app" dangerouslySetInnerHTML={{ __html: content }} />
    <script
      dangerouslySetInnerHTML={{
        __html: `window.__APOLLO_STATE__=${JSON.stringify(state).replace(/</g, '\\u003c')};`,
      }}
    />
  </>
);

export default HTML;
