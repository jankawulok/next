import { CartMutationResponse } from './../../types/Api';
import { storefrontClient } from '../..';
import defaultMutation from './defaultMutatuion';

const removeCoupon = async (): Promise<CartMutationResponse> => {
  return await storefrontClient.mutate({
    mutation: defaultMutation,
    fetchPolicy: 'no-cache'
  });
};

export default removeCoupon;
