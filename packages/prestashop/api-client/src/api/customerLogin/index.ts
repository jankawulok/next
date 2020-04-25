import { CustomerMutationResponse } from './../../types/Api';
import { storefrontClient } from '../..';
import defaultMutation from './defaultMutation';

const customerLogin = async (input: {email: string; password: string}): Promise<CustomerMutationResponse> => {
  return await storefrontClient.mutate({
    mutation: defaultMutation,
    variables: input,
    fetchPolicy: 'no-cache'
  });
};

export default customerLogin;
