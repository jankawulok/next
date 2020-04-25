import { CustomerMutationResponse } from './../../types/Api';
import { storefrontClient } from '../..';
import defaultMutation from './defaultMutation';

const customerLogout = async (): Promise<CustomerMutationResponse> => {
  return await storefrontClient.mutate({
    mutation: defaultMutation,
    fetchPolicy: 'no-cache'
  });
};

export default customerLogout;
