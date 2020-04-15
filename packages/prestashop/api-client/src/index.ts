import ApolloClient from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { SetupConfig, SetupResponse } from './types/setup';
import getProduct from './api/getProduct';
import getCategory from './api/getCategory';
import fetch from 'isomorphic-fetch';

let catalogClient: ApolloClient<any> = null;
let storefrontClient: ApolloClient<any> = null;

const setup = <TCacheShape>(setupConfig?: SetupConfig<TCacheShape>): SetupResponse<TCacheShape> => {
  catalogClient = new ApolloClient({
    link: createHttpLink({ uri: setupConfig.api.catalogUri, fetch }),
    cache: new InMemoryCache(),
    ...setupConfig.customOptions
  });
  storefrontClient = new ApolloClient({
    link: createHttpLink({
      uri: setupConfig.api.storefrontUri,
      headers: {
        credentials: 'include'
      },
      credentials: 'include',
      fetch
    }),
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-and-network'
      }
    },
    ...setupConfig.customOptions
  });
  return { catalogClient, storefrontClient };
};

export {
  catalogClient,
  storefrontClient,
  getProduct,
  getCategory,
  setup
};
