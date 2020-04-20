/* eslint-disable no-unused-vars, @typescript-eslint/no-unused-vars */
import { UseCategory, useCategoryFactory, UseCategoryFactoryParams } from '@vue-storefront/core';
import { ref, Ref } from '@vue/composition-api';
import { getCategory} from '@jkawulok/prestashop-api';
import { Category } from './../types/GraphQlCatalog';

const params: UseCategoryFactoryParams<Category, any> = {
  categorySearch: async (params) => {
    const categoryResponse = await getCategory(params);
    return categoryResponse.data.categories.items;
  }
};

const useCategory: (id: string) => UseCategory<Category> = useCategoryFactory<Category, any>(params);

export default useCategory;
