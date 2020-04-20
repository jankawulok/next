import { CartMutationResponse } from './../../types/Api';
import { CartItemInput } from './../../types/GraphQlStorefront';
import { storefrontClient } from '../..';
import defaultMutation from './defaultMutation';

const addToCart = async (item: CartItemInput): Promise<CartMutationResponse> => {
  return await storefrontClient.mutate({
    mutation: defaultMutation,
    variables: {
      input: [item]
    },
    fetchPolicy: 'no-cache'
  });
};

export default addToCart;
