import { ApolloQueryResult } from 'apollo-client';
import { FetchResult } from 'apollo-link';
import { ProductFilterInput, ProductSortInput, CategoryFilterInput, CategorySortInput } from './GraphQlCatalog';
import { Cart, Customer } from './GraphQlStorefront';

export interface CustomQuery {
  query: string;
  variables: any;
}

export interface BaseSearch {
  customQuery?: CustomQuery;
  search?: string;
  pageSize?: number;
  currentPage?: number;
}

export interface ProductSearch extends BaseSearch {
  filter?: ProductFilterInput;
  sort?: ProductSortInput;
}

export interface CategorySearch extends BaseSearch {
  filter?: CategoryFilterInput;
  sort?: CategorySortInput;
}

export type QueryResponse <K extends string, V> = ApolloQueryResult<Record<K, V>>
export type CartQueryResponse = QueryResponse<'cart', Cart>
export type MutationResponse <K extends string, V> = FetchResult<Record<K, V>>
export type CartMutationResponse = MutationResponse<'cart', Cart>
export type CustomerMutationResponse = MutationResponse<'customer', Customer>

