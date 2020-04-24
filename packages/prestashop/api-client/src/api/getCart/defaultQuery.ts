import gql from 'graphql-tag';

export default gql`
query {
  cart {
    total
    totalProducts
    totalProductsTaxIncluded
    shippingCost
    nbProducts
    items {
      id_product
      quantity
      unique_id
      cart_quantity
      name
      on_sale
      id_image
      link_rewrite
      cart_quantity
      total
      total_wt
      price_with_reduction
      price
      price_wt
      available_now
      available_later
    }
  }
}
`;
