import gql from 'graphql-tag';
import { CartFragment } from './../../fragments';

export default gql`
  ${CartFragment}

  mutation addItemsToCart($input: AddItemsToCartInput){
  cart: addItemsToCart(input: $input) {
    ...DefaultCart
  }
}
`;
