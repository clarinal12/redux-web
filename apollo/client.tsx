import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://beta-api.jamclout.com/graphql',
  cache: new InMemoryCache(),
});

export default client;
