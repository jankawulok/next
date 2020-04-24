import { CartGetters, AgnosticPrice, AgnosticTotals } from '@vue-storefront/core';
import { Cart, CartItem } from '../types/GraphQlStorefront';
import { createFormatPrice } from './_utils';

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
export const getCartItems = (cart: Cart): CartItem[] => cart ? cart.items : [];

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
export const getCartItemName = (product: CartItem): string => product ? product.name : '';

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
export const getCartItemImage = (product: CartItem): string => '';

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
export const getCartItemPrice = (product: CartItem): AgnosticPrice => {
  return product ? {
    regular: product.price,
    special: product.price
  } : {
    regular: 0,
    special: 0
  };
};

export const getCartItemQty = (product: CartItem): number => product ? product.cart_quantity : 0;

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
export const getCartItemAttributes = (product: CartItem, filterByAttributeName?: Array<string>) => ({ color: 'red' });

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
export const getCartItemSku = (product: CartItem): string => '';

export const getCartTotals = (cart: Cart): AgnosticTotals => {
  return cart ? {
    total: cart.total,
    subtotal: cart.total
  } : {
    total: 0,
    subtotal: 0
  };
};

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
export const getCartShippingPrice = (cart: Cart): number => 0;

export const getCartTotalItems = (cart: Cart): number => cart ? cart.nbProducts : 0;

export const getFormattedPrice = (price: number) => createFormatPrice(price);

const cartGetters: CartGetters<Cart, CartItem> = {
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
