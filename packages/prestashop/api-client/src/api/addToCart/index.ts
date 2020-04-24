import { CartMutationResponse } from './../../types/Api';
import { AddItemsToCartInput } from './../../types/GraphQlStorefront';
import { storefrontClient } from '../..';
import defaultMutation from './defaultMutation';

const addToCart = async (addItemsToCartInput: AddItemsToCartInput): Promise<CartMutationResponse> => {
  return await storefrontClient.mutate({
    mutation: defaultMutation,
    variables: {input: addItemsToCartInput},
    fetchPolicy: 'no-cache'
  });
};

export default addToCart;
