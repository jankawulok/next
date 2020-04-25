import { CustomerMutationResponse } from './../../types/Api';
import { CustomerInput } from './../../types/GraphQlStorefront';
import { storefrontClient } from '../..';
import defaultMutation from './defaultMutation';

const customerCreate = async (input: CustomerInput): Promise<CustomerMutationResponse> => {
  return await storefrontClient.mutate({
    mutation: defaultMutation,
    variables: {input: input},
    fetchPolicy: 'no-cache'
  });
};

export default customerCreate;
