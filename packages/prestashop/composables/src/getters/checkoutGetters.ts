import { CheckoutGetters} from '@vue-storefront/core';
import { ShippingMethod } from '@vue-storefront/boilerplate-api/src/types';
import { createFormatPrice } from './_utils';

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
export const getShippingMethodId = (shippingMethod: ShippingMethod): string => '';

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
export const getShippingMethodName = (shippingMethod: ShippingMethod): string => '';

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
export const getShippingMethodDescription = (shippingMethod: ShippingMethod): string => '';

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
export const getShippingMethodPrice = (shippingMethod: ShippingMethod): number => 0;

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
export const getFormattedPrice = (price: number) => createFormatPrice(price);

const checkoutGetters: CheckoutGetters<ShippingMethod> = {
  getShippingMethodId,
  getShippingMethodName,
  getShippingMethodDescription,
  getShippingMethodPrice,
  getFormattedPrice
};

export default checkoutGetters;
