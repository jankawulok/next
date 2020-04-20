import { storefrontClient } from './../../index';
import { CartQueryResponse } from './../../types/Api';
import defaultQuery from './defaultQuery';

const getCart = async (): Promise<CartQueryResponse> => {
  return await storefrontClient.query({
    query: defaultQuery,
    fetchPolicy: 'no-cache'
  });
};

export default getCart;
