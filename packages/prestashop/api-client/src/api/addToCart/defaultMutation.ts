import gql from 'graphql-tag';

export default gql`
  mutation {
  addItemsToCart(input: {cart_items: [
    {
      id: "43232"
      quantity: 1
    },
    {
      id: "31131"
      quantity: 1
    }
  ]} ) {
    items {
      id_product
      quantity
    }
  }
}
`;
