import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql/',
  // eslint-disable-next-line no-underscore-dangle
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__ || {}),
});

export default client;
