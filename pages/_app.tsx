import { ApolloProvider } from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react';
import client from 'apollo/client';
import type { AppProps } from 'next/app';
import theme from 'theme';

function MyApp({ Component, pageProps }: AppProps): React.ReactNode {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>
  );
}
export default MyApp;
