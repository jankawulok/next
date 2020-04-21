import { CartGetters, AgnosticPrice, AgnosticTotals } from '@vue-storefront/core';
import { Cart, LineItem } from '@vue-storefront/boilerplate-api/src/types';
import { createFormatPrice } from './_utils';

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
export const getCartItems = (cart: Cart): LineItem[] => [];

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
export const getCartItemName = (product: LineItem): string => '';

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
export const getCartItemImage = (product: LineItem): string => '';

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
export const getCartItemPrice = (product: LineItem): AgnosticPrice => {
  return {
    regular: 0,
    special: 0
  };
};

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
export const getCartItemQty = (product: LineItem): number => 1;

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
export const getCartItemAttributes = (product: LineItem, filterByAttributeName?: Array<string>) => ({ color: 'red' });

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
export const getCartItemSku = (product: LineItem): string => '';

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
export const getCartTotals = (cart: Cart): AgnosticTotals => {
  return {
    total: 1,
    subtotal: 1
  };
};

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
export const getCartShippingPrice = (cart: Cart): number => 0;

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
export const getCartTotalItems = (cart: Cart): number => 0;

export const getFormattedPrice = (price: number) => createFormatPrice(price);

const cartGetters: CartGetters<Cart, LineItem> = {
  getTotals: getCartTotals,
  getShippingPrice: getCartShippingPrice,
  getItems: getCartItems,
  getItemName: getCartItemName,
  getItemImage: getCartItemImage,
  getItemPrice: getCartItemPrice,
  getItemQty: getCartItemQty,
  getItemAttributes: getCartItemAttributes,
  getItemSku: getCartItemSku,
  getTotalItems: getCartTotalItems,
  getFormattedPrice
};

export default cartGetters;
