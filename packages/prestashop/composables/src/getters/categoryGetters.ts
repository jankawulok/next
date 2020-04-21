import { CategoryGetters, AgnosticCategoryTree } from '@vue-storefront/core';
import { Category } from '@jkawulok/prestashop-api/src/types/GraphQlCatalog';

export const getCategoryName = (category: Category): string => category ? (category as any).name : '';

export const getCategoryDescription = (category: Category): string => category ? (category as any).description : '';

export const getCategoryTree = (category: Category): AgnosticCategoryTree | null => {
  if (!category) {
    return null;
  }
  const buildTree = (category: Category) => ({
    label: category.name,
    slug: category.url_key,
    items: category.children ? category.children.map(buildTree) : [],
    productCount: category.product_count
  });
  return buildTree(category);
};

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
export const getCategoryFiltered = (categories: Category[]): Category[] => {
  return categories;
};

const categoryGetters: CategoryGetters<Category> = {
  getFiltered: getCategoryFiltered,
  getTree: getCategoryTree,
  getName: getCategoryName,
  getDescription: getCategoryDescription
};

export default categoryGetters;
