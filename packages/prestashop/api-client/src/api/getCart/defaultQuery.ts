import gql from 'graphql-tag';

export default gql`
query {
  cart {
    id
    isAllProductsInStock
    total
    items {
      id_product
      quantity
      link_rewrite
      name
    }
  }
}
`;
