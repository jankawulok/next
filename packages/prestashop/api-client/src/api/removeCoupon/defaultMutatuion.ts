import gql from 'graphql-tag';
import { CartFragment } from './../../fragments';

export default gql`
  ${CartFragment}

  mutation removeCoupon{
  cart: removeCoupon {
    ...DefaultCart
  }
}
`;
