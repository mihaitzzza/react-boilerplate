import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import apolloClient from './utility/apolloClient/dev';
import App from './components/app';

const RootComponent = () => (
  <ApolloProvider client={apolloClient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>
);

render(<RootComponent />, document.getElementById('app'));
