import { CartMutationResponse } from './../../types/Api';
import { storefrontClient } from '../..';
import defaultMutation from './defaultMutatuion';

const applyCoupon = async (coupon: string): Promise<CartMutationResponse> => {
  return await storefrontClient.mutate({
    mutation: defaultMutation,
    variables: coupon,
    fetchPolicy: 'no-cache'
  });
};

export default applyCoupon;
