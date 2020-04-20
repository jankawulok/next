import { ApolloClientOptions, ApolloClient } from 'apollo-client';

export interface ApiConfig {
  catalogUri: string;
  storefrontUri: string;
  scopes: string[];
}

export interface SetupConfig<TCacheShape> {
  api?: ApiConfig;
  customOptions?: ApolloClientOptions<TCacheShape>;
}

export interface SetupResponse<TCacheShape> {
    catalogClient: ApolloClient<TCacheShape>;
    storefrontClient: ApolloClient<TCacheShape>;
}
