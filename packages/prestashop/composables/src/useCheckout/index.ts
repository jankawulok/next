import { UseCheckout } from '@vue-storefront/core';
import { ref, Ref } from '@vue/composition-api';

export const paymentMethods: Ref<any[]> = ref([]);
export const shippingMethods: Ref<any[]> = ref([]);
export const personalDetails: Ref<any> = ref({});
export const shippingDetails: Ref<any> = ref({});
export const billingDetails: Ref<any> = ref({});
export const chosenPaymentMethod: Ref<string> = ref('');
export const chosenShippingMethod: Ref<any> = ref({});

export default function useCheckout (): UseCheckout<any, any, any, any, any, any, any, any> {

  const loading = ref(true);
  const placeOrder = ref(null);

  return {
    paymentMethods,
    shippingMethods,
    personalDetails,
    shippingDetails,
    billingDetails,
    chosenPaymentMethod,
    chosenShippingMethod,
    placeOrder,
    loading
  };
}
