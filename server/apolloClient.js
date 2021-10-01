const { ApolloClient, createHttpLink, InMemoryCache } = require('@apollo/client');
const fetch = require('cross-fetch');

const getApolloClient = (req) =>
  new ApolloClient({
    ssrMode: true,
    link: createHttpLink({
      uri: 'http://localhost:8000/graphql/',
      fetch,
      credentials: 'same-origin',
      headers: {
        cookie: req.header('Cookie'),
      },
    }),
    cache: new InMemoryCache(),
  });

export default getApolloClient;
