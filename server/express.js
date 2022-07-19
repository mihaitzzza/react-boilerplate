const express = require('express');
const fs = require('fs');
const path = require('path');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { StaticRouter } = require('react-router-dom');
const { ApolloProvider } = require('@apollo/client');
const { getDataFromTree } = require('@apollo/client/react/ssr');
const getApolloClient = require('./apolloClient').default;
const HTML = require('./html').default;

// Client React App
const App = require('../src/components/app').default;

// create express application
const app = express();

// serve static assets
app.get(/\.(js|css|map|ico|png|jp(e*)g|svg)$/, express.static(path.resolve(__dirname, '../dist')));

// for any other requests, send `index.html` as a response
app.use('*', async (req, res) => {
  const apolloClient = getApolloClient(req);
  const context = {};

  // get HTML string from the `App` component
  const ReactApp = (
    <ApolloProvider client={apolloClient}>
      <StaticRouter location={req.originalUrl} context={context}>
        <App />
      </StaticRouter>
    </ApolloProvider>
  );

  const content = await getDataFromTree(ReactApp);

  // Extract the entirety of the Apollo Client cache's current state
  const initialState = apolloClient.extract();

  // Add both the page content and the cache state to a top-level component
  const html = <HTML content={content} state={initialState} />;

  // read `index.html` file
  let indexHTML = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), {
    encoding: 'utf8',
  });

  // get HTML string from the `App` component
  const appHTML = ReactDOMServer.renderToString(html);

  // populate `#app` element with `appHTML`
  indexHTML = indexHTML.replace('<div id="app"></div>', appHTML);

  if (req.originalUrl === '/') {
    indexHTML = indexHTML.replace('<title></title>', '<title>Homepage | DCT</title>');
  } else if (req.originalUrl === '/about-us') {
    indexHTML = indexHTML.replace('<title></title>', '<title>About Us | DCT</title>');
  }

  // Render the component to static markup and return it
  res.status(200);
  return res.send(indexHTML);
});

// run express server on port 9000
app.listen('9000', () => {
  console.log('Express server started at http://localhost:9000');
});
