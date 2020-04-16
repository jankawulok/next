import { ApolloQueryResult } from 'apollo-client';
import gql from 'graphql-tag';
import { catalogClient } from './../../index';
import { CategorySearch } from './../../types/Api';

import {
  Categories
} from './../../types/GraphQlCatalog';
import defaultQuery from './defaultQuery';

interface CategoryData {
    categories: Categories;
  }

const getCategory = async (
  search?: CategorySearch
): Promise<ApolloQueryResult<CategoryData>> => {
  if (!search) {
    return await catalogClient.query<CategoryData>({
      query: defaultQuery
    });
  }
  if (search.customQuery) {
    const { query, variables } = search.customQuery;

    return await catalogClient.query<CategoryData>({
      query: gql`${query}`,
      variables
    });
  }
  return await catalogClient.query<CategoryData>({
    query: defaultQuery,
    variables: search
  });
};

export default getCategory;
