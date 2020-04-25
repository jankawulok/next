import { CategoryGetters, AgnosticCategoryTree } from '@vue-storefront/core';
import { Category } from '../types/GraphQlCatalog';

export const getCategoryName = (category: Category): string => category ? (category as any).name : '';

export const getCategoryDescription = (category: Category): string => category ? (category as any).description : '';

export const getCategoryTree = (category: Category): AgnosticCategoryTree | null => {
  if (!category) {
    return null;
  }
  const getParent = (category: Category): Category => (category.parent ? getParent(category.parent) : category);
  const buildTree = (category: Category) => ({
    label: category.name,
    slug: category.url_key,
    items: category.children ? category.children.map(buildTree) : [],
    productCount: category.product_count
  });
  return buildTree(getParent(category));
};

export const getCategoryAvailableFilters = (category: Category): any => {
  if (!category || !category.products || !category.products.aggregations) {
    return [];
  }
  const buildFilters = (bucket: any) =>
    (bucket ? bucket : [])
      .map((item) => ({
        text: item.key,
        count: item.doc_count,
        value: item.key,
        selected: false
      }));
  const filtersTransformed = Object.entries(category.products.aggregations).map(
    ([filterCode, buckets]) => ({
      label: filterCode,
      values: (buckets as any).buckets ? buildFilters((buckets as any).buckets) : []
    })
  );
  return filtersTransformed;
};

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
export const getCategoryFiltered = (categories: Category[]): Category[] => {
  return categories;
};

const categoryGetters: CategoryGetters<Category> = {
  getFiltered: getCategoryFiltered,
  getTree: getCategoryTree,
  getName: getCategoryName,
  getDescription: getCategoryDescription,
  getFilters: getCategoryAvailableFilters
};

export default categoryGetters;
