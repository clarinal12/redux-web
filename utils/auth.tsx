import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { uri } from 'apollo/client';
import cookie from 'js-cookie';
import { GetServerSidePropsContext } from 'next';
import nextCookie from 'next-cookies';
import Router from 'next/router';

const httpLink = createHttpLink({
  uri,
});

const authLink = (token?: string) => {
  return setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });
};

export const getApolloClient = (token?: string) => {
  const client = new ApolloClient({
    link: authLink(token).concat(httpLink),
    cache: new InMemoryCache(),
  });
  return client;
};

export const login = ({ token }: { token: string }) => {
  cookie.set('token', token, { expires: 30 });
  void Router.push('/dashboard');
};

export const getToken = (ctx: GetServerSidePropsContext) => {
  const { token } = nextCookie(ctx);
  return token;
};

export const logout = () => {
  cookie.remove('token');
  void Router.push('/login');
};
