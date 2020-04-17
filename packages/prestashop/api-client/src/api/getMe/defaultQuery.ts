import gql from 'graphql-tag'

const customer = gql`
  query {
    customer {
      isAuthenticated
      firstname
      lastname
      email
    }
  }
`;

export default customer;