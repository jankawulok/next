import {
  AgnosticMediaGalleryItem,
  AgnosticAttribute,
  AgnosticPrice,
  ProductGetters
} from '@vue-storefront/core';
import { createFormatPrice, createFormatDate } from './_utils';
import { Product, MediaGalleryItem } from './../types/GraphQlCatalog';

type ProductVariantFilters = any

// TODO: Add interfaces for some of the methods in core
// Product
export const getProductName = (product: Product): string => product ? (product as any).name : '';

export const getProductSlug = (product: Product): string => product ? (product as any).id : '';

export const getProductPrice = (product: Product): AgnosticPrice => {
  const price = product ? product.price_incl_tax : null;

  return {
    regular: price,
    special: price
  };
};

export const getProductGallery = (product: Product): AgnosticMediaGalleryItem[] =>
  (product ? product.media_gallery : [])
    .map((image: MediaGalleryItem) => ({
      small: 'https://catalog.maleomi.pl/img/300/300/resize' + image.image,
      big: 'https://catalog.maleomi.pl/img/1000/1000/resize' + image.image,
      normal: 'https://catalog.maleomi.pl/img/800/800/resize' + image.image
    }));

export const getProductCoverImage = (product: Product): string =>
  product ? 'https://catalog.maleomi.pl/img/300/300/resize' + (product as any).image : '';
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
export const getProductFiltered = (products: Product[], filters: ProductVariantFilters | any = {}): Product[] => {
  return products;
};
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
export const getProductAttributes = (products: Product[] | Product, filterByAttributeName?: string[]): Record<string, AgnosticAttribute | string> => {
  return {};
};

export const getProductDescription = (product: Product): any => product ? (product as any).description : '';

export const getProductCategoryIds = (product: Product): string[] => (product as any).category_ids;

export const getProductId = (product: Product): string => (product as any).id;

export const getFormattedPrice = (price: number) => createFormatPrice(price);

export const getProductReviews = (product: Product) =>
  (product ? product.reviews.items : [])
    .map((item) => ({
      author: item.nickname,
      date: createFormatDate(item.created_at),
      message: item.detail,
      rating: 4
    }));

const productGetters: ProductGetters<Product, ProductVariantFilters> = {
  getName: getProductName,
  getSlug: getProductSlug,
  getPrice: getProductPrice,
  getGallery: getProductGallery,
  getCoverImage: getProductCoverImage,
  getFiltered: getProductFiltered,
  getAttributes: getProductAttributes,
  getDescription: getProductDescription,
  getCategoryIds: getProductCategoryIds,
  getReviews: getProductReviews,
  getId: getProductId,
  getFormattedPrice
};

export default productGetters;
