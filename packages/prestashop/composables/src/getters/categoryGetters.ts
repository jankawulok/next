import { CategoryGetters, AgnosticCategoryTree } from '@vue-storefront/core';
import { Category } from '@jkawulok/prestashop-api/src/types/GraphQlCatalog';

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

const categoryGetters: CategoryGetters<Category> = {
  getTree: getCategoryTree
};

export default categoryGetters;
