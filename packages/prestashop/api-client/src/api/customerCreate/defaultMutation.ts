import gql from 'graphql-tag';
import { CustomerFragment } from './../../fragments';

export default gql`
  ${CustomerFragment}

  mutation customerCreate($input: CustomerInput!) {
    customer: customerRegister(input: $input) {
      customer {
        ...DefaultCustomer
      }
    }
  }
`;
