import gql from 'graphql-tag';
import getCategory from '../../../src/api/getCategory';
import { catalogClient } from '../../../src/index';
import defaultQuery from '../../../src/api/getCategory/defaultQuery';

describe('[prestashop-api-client] getCategory', () => {
  it('fetches category', async () => {
    const data = await getCategory({
      filter: {
        id: {
          eq: '2'
        }
      }
    });
    console.log(data);
  });

  it('fetches categories without search parameters', async () => {
    const givenVariables = {};

    (catalogClient.query as any).mockImplementation(({ variables, query }) => {
      expect(variables).toEqual(givenVariables);
      expect(query).toEqual(defaultQuery);

      return { data: 'category response' };
    });

    const { data } = await getCategory({});

    expect(data).toBe('category response');
  });

  it('fetches categories with default query', async () => {
    const givenVariables = {
      filter: {
        id: {
          eq: '2'
        }
      }
    };

    (catalogClient.query as any).mockImplementation(({ variables, query }) => {
      expect(variables).toEqual(givenVariables);
      expect(query).toEqual(defaultQuery);

      return { data: 'category response' };
    });

    const { data } = await getCategory({filter: { id: { eq: '2' } }});
    console.log(data);
    expect(data).toBe('category response');
  });

  it('fetches categories with customized query', async () => {
    const givenVariables = {
      filter: {
        id: {
          eq: '2'
        }
      }
    };

    const givenQuery = `
      query categories(
        $search: String, 
        $filter: CategoryFilterInput, 
        $sort: CategorySortInput, 
        $pageSize: Int, 
        $currentPage: Int,  
        $productsResultSize: Int, 
        $productsResultPage: Int,
        $productsSearchQuery: String,
        $productsFilter: ProductFilterInput,
        $productsSort: ProductSortInput
        ) {
        categories(search: $search, filter: $filter, sort: $sort, pageSize: $pageSize, currentPage: $currentPage) {
          items {
            id
            url_key
            name
          }
        }
      }
      `;

    (catalogClient.query as any).mockImplementation(({ variables, query }) => {
      expect(variables).toEqual(givenVariables);
      expect(query).not.toEqual(defaultQuery);
      expect(query).toEqual(gql`${givenQuery}`);

      return { data: 'category response' };
    });

    const { data } = await getCategory({ customQuery: { query: givenQuery,
      variables: givenVariables} });
    console.log(data);
    expect(data).toBe('category response');
  });
});
