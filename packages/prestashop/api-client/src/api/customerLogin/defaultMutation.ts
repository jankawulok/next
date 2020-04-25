import gql from 'graphql-tag';
import { CustomerFragment } from './../../fragments';

export default gql`
  ${CustomerFragment}

  mutation customerLogin($email: String, $password: String) {
    customerLoginResponse: customerLogin($email, $password) {
      customerLoginResponse {  
        customer {
          ...DefaultCustomer
        }
      }
    }
  }
`;
