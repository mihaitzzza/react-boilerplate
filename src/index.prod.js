import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import apolloClient from './utility/apolloClient/prod';
import App from './components/app';

const RootComponent = () => (
  <ApolloProvider client={apolloClient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>
);

hydrate(<RootComponent />, document.getElementById('app'));