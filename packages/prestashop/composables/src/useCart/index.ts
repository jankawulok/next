/* eslint-disable no-unused-vars, @typescript-eslint/no-unused-vars, @typescript-eslint/camelcase, camelcase */
import { UseCart, useCartFactory, UseCartFactoryParams } from '@vue-storefront/core';
import { getCart, addToCart as apiAddToCart, removeFromCart as apiRemoveFromCart } from '@jkawulok/prestashop-api';
import { Product, Cart, CartItem, AddItemsToCartInput, RemoveItemFromCartInput } from './../types/GraphQlStorefront';
import { ref, Ref } from '@vue/composition-api';

export const cart: Ref<Cart> = ref(null);

const params: UseCartFactoryParams<Cart, CartItem, Product, any> = {
  cart,
  loadCart: async () => {
    const cartResponse = await getCart();
    console.log('loadCart', cartResponse);
    return cartResponse.data.cart;
  },
  addToCart: async ({ product, quantity }) => {
    const updatedCart = await apiAddToCart({
      cart_items: [
        {
          id: product.id.toString(),
          quantity: quantity
        }
      ]
    } as AddItemsToCartInput);
    console.log('addToCart', updatedCart);
    return updatedCart.data.cart;
  },
  removeFromCart: async ({ product }) => {
    const updateResponse = await apiRemoveFromCart({
      idProduct: product.id_product,
      idProductAttribute: product.id_product_attribute
    } as RemoveItemFromCartInput);
    return updateResponse.data.cart;
  },
  updateQuantity: async ({ currentCart, product, quantity }) => {
    // const updatedCart = await apiUpdateCartQuantity(product, quantity);
    // return updatedCart.data.cart;
    console.log('Mocked updateQuantity', currentCart);
    return currentCart;
  },
  clearCart: async ({ currentCart }) => {
    console.log('Mocked clearCart', currentCart);
    return currentCart;
  },
  applyCoupon: async ({ currentCart, coupon }) => {
    console.log('Mocked applyCoupon', currentCart);
    return { updatedCart: currentCart, updatedCoupon: coupon };
  },
  removeCoupon: async ({ currentCart }) => {
    console.log('Mocked removeCoupon', currentCart);
    return { updatedCart: currentCart, updatedCoupon: null };
  },
  isOnCart: ({ currentCart }) => {
    console.log('Mocked isOnCart', currentCart);
    return true;
  }
};

const useCart: () => UseCart<Cart, CartItem, Product, any> = useCartFactory<Cart, CartItem, Product, any>(params);
export default useCart;
