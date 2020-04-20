import { storefrontClient } from '../../index';
import { customerResponse } from '../../types/Api';
import defaultQuery from './defaultQuery';

const getMe = async (): Promise<ProfileResponse> => {
  return await storefrontClient.query({
    query: defaultQuery
    variables: {}
    fetchPolicy: 'no-cache'
  });
}

export default getMe;