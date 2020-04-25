import { CartMutationResponse } from './../../types/Api';
import { RemoveItemFromCartInput } from './../../types/GraphQlStorefront';
import { storefrontClient } from '../..';
import defaultMutation from './defaultMutation';

const addToCart = async (removeItemFromCartInput: RemoveItemFromCartInput): Promise<CartMutationResponse> => {
  return await storefrontClient.mutate({
    mutation: defaultMutation,
    variables: {input: removeItemFromCartInput},
    fetchPolicy: 'no-cache'
  });
};

export default addToCart;
