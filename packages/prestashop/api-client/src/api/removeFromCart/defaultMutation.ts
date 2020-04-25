import gql from 'graphql-tag';
import { CartFragment } from './../../fragments';

export default gql`
  ${CartFragment}

  mutation removeItemFromCart($input: RemoveItemFromCartInput){
    cart: removeItemFromCart(input: $input) {
      ...DefaultCart
    }
  }
`;
