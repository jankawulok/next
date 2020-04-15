import gql from 'graphql-tag';
import { ProductTileFragment } from './../../fragments';

export default gql`
${ProductTileFragment}

fragment ChildrenCategory on Category {
    id
    url_key
    name
}

fragment DefaultCategory on Category {
    id
    url_key
    description
}

query categories(
  $search: String, 
  $filter: CategoryFilterInput, 
  $sort: CategorySortInput, 
  $pageSize: Int, 
  $currentPage: Int,  
  $productsResultSize: Int, 
  $productsResultPage: Int,
  $productsSearchQuery: String,
  $productsFilter: ProductFilterInput,
  $productsSort: ProductSortInput
  ) {
  categories(search: $search, filter: $filter, sort: $sort, pageSize: $pageSize, currentPage: $currentPage) {
    items {
      id
      url_key
      name
      description
      children {
          ...ChildrenCategory
      }
      products(
        pageSize: $productsResultSize, 
        currentPage: $productsResultPage,
        search: $productsSearchQuery,
        filter: $productsFilter,
        sort: $productsSort
        ) {
        total_count
        items {
          ...ProductTile
        }
      }
    }
  }
}
`;
