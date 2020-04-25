import gql from 'graphql-tag';
import { CustomerFragment } from './../../fragments';

export default gql`
  ${CustomerFragment}
  mutation customerLogout {
    customerLogout {
      message
      customer {
        ...DefaultCustomer
      }
    }
  }	
`;
