/* eslint-disable no-unused-vars, @typescript-eslint/no-unused-vars, @typescript-eslint/camelcase, camelcase */
import { UseCart } from '@vue-storefront/interfaces';
import { getCart, addToCart as apiAddToCart } from '@jkawulok/prestashop-api';

import { Product, Cart, CartItem } from './../types/GraphQlStorefront';
import { useCartFactory, UseCartFactoryParams} from '@vue-storefront/factories';
import { ref, Ref } from '@vue/composition-api';

export const cart: Ref<Cart> = ref(null);

const params: UseCartFactoryParams<Cart, CartItem, Product, any> = {
  cart,
  loadCart: async () => {
    const cartResponse = await getCart();
    return cartResponse.data.cart;
  },
  addToCart: async ({ product, quantity }) => {
    const updatedCart = await apiAddToCart({
      id: product.id,
      quantity: quantity,
      id_product_attribute: 0
    });
    return updatedCart.data.cart;
  },
  removeFromCart: async ({ currentCart, product }) => {
    // const updateResponse = await apiRemoveFromCart(product);
    // return updateResponse.data.cart;
    return currentCart;
  },
  updateQuantity: async ({ currentCart, product, quantity }) => {
    // const updatedCart = await apiUpdateCartQuantity(product, quantity);
    // return updatedCart.data.cart;
    return currentCart;
  },
  clearCart: async ({ currentCart }) => {
    return currentCart;
  },
  applyCoupon: async ({ currentCart, coupon }) => {
    return { updatedCart: currentCart, updatedCoupon: coupon };
  },
  removeCoupon: async ({ currentCart }) => {
    return { updatedCart: currentCart, updatedCoupon: null };
  },
  isOnCart: ({ currentCart }) => {
    console.log('Mocked isOnCart', currentCart);
    return true;
  }
};

const useCart: () => UseCart<Cart, CartItem, Product, any> = useCartFactory<Cart, CartItem, Product, any>(params);
export default useCart;
