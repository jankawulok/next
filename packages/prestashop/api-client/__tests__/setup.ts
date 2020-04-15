import { setup } from './../src/index';

// jest.mock('apollo-client');

setup({
  api: {
    catalogUri: 'http://catalog.maleomi.pl/graphql',
    storefrontUri: 'https://maleomi.pl/graphql',
    scopes: ['']
  }
});
