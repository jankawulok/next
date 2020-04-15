import { ProductFilterInput, ProductSortInput, CategoryFilterInput, CategorySortInput } from './GraphQlCatalog';

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
