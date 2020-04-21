import { CategoryGetters, AgnosticCategoryTree } from '@vue-storefront/core';
import { Category } from '@jkawulok/prestashop-api/src/types/GraphQlCatalog';

export const getCategoryName = (category: Category): string => category ? (category as any).name : '';

export const getCategoryDescription = (category: Category): string => category ? (category as any).description : '';

export const getCategoryTree = (category: Category): AgnosticCategoryTree | null => {
  const buildTree = (rootCategory: Category) => ({
    label: rootCategory.name,
    slug: rootCategory.url_key,
    items: rootCategory.children.map(buildTree)
  });

  if (!category) {
    return null;
  }

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
