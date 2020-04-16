import { getProduct } from '@jkawulok/prestashop-api';
import { Product } from './../types/GraphQlCatalog';
import { useProductFactory } from '@vue-storefront/factories';
import { SearchResult } from '@vue-storefront/core';

const productsSearch = async (params: {
  perPage?: number;
  page?: number;
  sort?: any;
  term?: any;
  filters?: any;
  catId?: string | string[];
  skus?: string[];
  slug?: string;
  id?: string;
}): Promise<SearchResult<Product>> => {
  const apiSearchParams = {
    ...params
  };

  const productResponse = await getProduct(apiSearchParams);
  return {
    data: productResponse.data.products.items,
    total: productResponse.data.products.total_count
  };
};

export default useProductFactory<Product, {
  perPage?: number;
  page?: number;
  sort?: any;
  term?: any;
  filters?: any;
}>({ productsSearch });
