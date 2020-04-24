/* istanbul ignore file */
/* eslint-disable camelcase */

export type Maybe<T> = T | null;

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  _FieldSet: any;
};

export type _Service = {
   __typename?: '_Service';
  sdl?: Maybe<Scalars['String']>;
};

export type AddItemsToCartInput = {
  cart_items: Array<CartItemInput>;
};

export type Address = {
   __typename?: 'Address';
  id?: Maybe<Scalars['Int']>;
  id_country?: Maybe<Scalars['String']>;
  country_code?: Maybe<Scalars['String']>;
  id_state?: Maybe<Scalars['String']>;
  alias?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  postcode?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  other?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  phone_mobile?: Maybe<Scalars['String']>;
  vat_number?: Maybe<Scalars['String']>;
  dni?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  state_iso?: Maybe<Scalars['String']>;
};

export type AddressInput = {
  alias?: Maybe<Scalars['String']>;
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  company?: Maybe<Scalars['String']>;
  address1: Scalars['String'];
  address2?: Maybe<Scalars['String']>;
  city: Scalars['String'];
  region?: Maybe<Scalars['String']>;
  postcode: Scalars['String'];
  country_code: Scalars['String'];
  phone: Scalars['String'];
  vat_number?: Maybe<Scalars['String']>;
  dni?: Maybe<Scalars['String']>;
};

export type CarrierInput = {
  idCarrier: Scalars['Int'];
};

export type Cart = {
   __typename?: 'Cart';
  id?: Maybe<Scalars['Int']>;
  nbProducts?: Maybe<Scalars['Int']>;
  items: Array<Maybe<CartItem>>;
  total?: Maybe<Scalars['Float']>;
  cartRules: Array<Maybe<CartRule>>;
  deliveryAddressId?: Maybe<Scalars['Int']>;
  invoiceAddressId?: Maybe<Scalars['Int']>;
  paymentMethods: Array<Maybe<PaymentMethod>>;
  shippingMethods: Array<Maybe<ShippingMethod>>;
  selectedShippingMethod?: Maybe<ShippingMethod>;
  deliveryAddress?: Maybe<Address>;
  invoiceAddress?: Maybe<Address>;
  isAllProductsInStock?: Maybe<Scalars['Boolean']>;
};

export type CartAddressInput = {
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  company?: Maybe<Scalars['String']>;
  address1: Scalars['String'];
  address2?: Maybe<Scalars['String']>;
  alias?: Maybe<Scalars['String']>;
  city: Scalars['String'];
  region?: Maybe<Scalars['String']>;
  postcode?: Maybe<Scalars['String']>;
  country_code: Scalars['String'];
  phone: Scalars['String'];
  vat_number?: Maybe<Scalars['String']>;
  dni?: Maybe<Scalars['String']>;
};

export type CartItem = {
   __typename?: 'CartItem';
  unique_id?: Maybe<Scalars['String']>;
  id_product: Scalars['Int'];
  id_product_attribute: Scalars['Int'];
  cart_quantity: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  is_virtual?: Maybe<Scalars['Int']>;
  description_short?: Maybe<Scalars['String']>;
  available_now?: Maybe<Scalars['String']>;
  available_later?: Maybe<Scalars['String']>;
  id_category_default?: Maybe<Scalars['Int']>;
  id_manufacturer?: Maybe<Scalars['Int']>;
  on_sale?: Maybe<Scalars['Int']>;
  ecotax?: Maybe<Scalars['Int']>;
  additional_shipping_cost?: Maybe<Scalars['String']>;
  available_for_order?: Maybe<Scalars['Int']>;
  unity?: Maybe<Scalars['Int']>;
  unit_price_ratio?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  price_wt?: Maybe<Scalars['Float']>;
  price_without_reduction?: Maybe<Scalars['Float']>;
  price_with_reduction?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
  total_wt?: Maybe<Scalars['Float']>;
  reduction_applies?: Maybe<Scalars['String']>;
  quantity_discount_applies?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  quantity_available?: Maybe<Scalars['Int']>;
  link_rewrite?: Maybe<Scalars['String']>;
  id_image?: Maybe<Scalars['String']>;
};

export type CartItemInput = {
  id: Scalars['String'];
  quantity?: Maybe<Scalars['Int']>;
  id_product_attribute?: Maybe<Scalars['Int']>;
  options?: Maybe<Array<Maybe<CartItemOption>>>;
};

export type CartItemOption = {
  id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type CartRule = {
   __typename?: 'CartRule';
  code?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type Customer = {
   __typename?: 'Customer';
  isAuthenticated?: Maybe<Scalars['Boolean']>;
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  newsletter?: Maybe<Scalars['Boolean']>;
  orders?: Maybe<OrderQueryResult>;
  addresses: Array<Maybe<Address>>;
};

export type CustomerOrdersArgs = {
  reference?: Maybe<Scalars['String']>;
};

export type CustomerInput = {
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  company?: Maybe<Scalars['String']>;
  siret?: Maybe<Scalars['String']>;
  ape?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  newsletter?: Maybe<Scalars['Boolean']>;
  optin?: Maybe<Scalars['Boolean']>;
};

export type CustomerLoginResponse = {
   __typename?: 'CustomerLoginResponse';
  isLoggedIn?: Maybe<Scalars['Boolean']>;
  token?: Maybe<Scalars['String']>;
};

export type CustomerOutput = {
   __typename?: 'CustomerOutput';
  customer: Customer;
};

export type DeliveryAddressInput = {
  idAddress?: Maybe<Scalars['Int']>;
  address?: Maybe<CartAddressInput>;
};

export type ExampleModuleResponse1 = {
   __typename?: 'exampleModuleResponse1';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
};

export type InvoiceAddressInput = {
  idAddress?: Maybe<Scalars['Int']>;
  address?: Maybe<CartAddressInput>;
};

export type Mutation = {
   __typename?: 'Mutation';
  hello?: Maybe<Scalars['String']>;
  addItemsToCart: Cart;
  removeItemFromCart: Cart;
  clearCart: Cart;
  applyCoupon: Cart;
  removeCoupon: Cart;
  setCarrier: Cart;
  setDeliveryAddress: Cart;
  setInvoiceAddress: Cart;
  placeOrder?: Maybe<PlaceOrderOutput>;
  removeUnavailableItems?: Maybe<RemoveUnavailableItemsResponse>;
  customerLogin?: Maybe<CustomerLoginResponse>;
  customerRegister?: Maybe<CustomerOutput>;
  customerLogout?: Maybe<Scalars['Boolean']>;
  customerChangePassword?: Maybe<Scalars['Boolean']>;
  customerDeleteAddress?: Maybe<Scalars['Boolean']>;
  customerCreateAddress?: Maybe<Address>;
  customerUpdateAddress?: Maybe<Address>;
};

export type MutationHelloArgs = {
  name?: Maybe<Scalars['String']>;
};

export type MutationAddItemsToCartArgs = {
  input?: Maybe<AddItemsToCartInput>;
};

export type MutationRemoveItemFromCartArgs = {
  input?: Maybe<RemoveItemFromCartInput>;
};

export type MutationApplyCouponArgs = {
  coupon?: Maybe<Scalars['String']>;
};

export type MutationSetCarrierArgs = {
  input?: Maybe<CarrierInput>;
};

export type MutationSetDeliveryAddressArgs = {
  input?: Maybe<DeliveryAddressInput>;
};

export type MutationSetInvoiceAddressArgs = {
  input?: Maybe<InvoiceAddressInput>;
};

export type MutationPlaceOrderArgs = {
  input?: Maybe<PlaceOrderInput>;
};

export type MutationCustomerLoginArgs = {
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type MutationCustomerRegisterArgs = {
  input: CustomerInput;
};

export type MutationCustomerChangePasswordArgs = {
  currentPassword?: Maybe<Scalars['String']>;
  newPassword?: Maybe<Scalars['String']>;
};

export type MutationCustomerDeleteAddressArgs = {
  id: Scalars['Int'];
};

export type MutationCustomerCreateAddressArgs = {
  input?: Maybe<AddressInput>;
};

export type MutationCustomerUpdateAddressArgs = {
  id: Scalars['Int'];
  input?: Maybe<AddressInput>;
};

export type Order = {
   __typename?: 'Order';
  id_order?: Maybe<Scalars['Int']>;
  reference?: Maybe<Scalars['String']>;
  payment?: Maybe<Scalars['String']>;
  id_carrier?: Maybe<Scalars['Int']>;
  id_currency?: Maybe<Scalars['Int']>;
  id_cart?: Maybe<Scalars['Int']>;
  current_state?: Maybe<Scalars['String']>;
  total_discounts?: Maybe<Scalars['Float']>;
  total_discounts_tax_inc?: Maybe<Scalars['Float']>;
  total_discounts_tax_excl?: Maybe<Scalars['Float']>;
  total_paid?: Maybe<Scalars['Float']>;
  total_paid_tax_inc?: Maybe<Scalars['Float']>;
  total_paid_tax_excl?: Maybe<Scalars['Float']>;
  total_paid_real?: Maybe<Scalars['Float']>;
  total_products?: Maybe<Scalars['Float']>;
  total_products_wt?: Maybe<Scalars['Float']>;
  total_shipping?: Maybe<Scalars['Float']>;
  total_shipping_tax_incl?: Maybe<Scalars['Float']>;
  products: Array<OrderedProduct>;
  deliveryAddress?: Maybe<Address>;
  invoiceAddress?: Maybe<Address>;
};

export type OrderedProduct = {
   __typename?: 'OrderedProduct';
  product_id?: Maybe<Scalars['Int']>;
  product_attribute_id?: Maybe<Scalars['Int']>;
  product_name?: Maybe<Scalars['String']>;
  product_quantity?: Maybe<Scalars['Int']>;
  product_quantity_in_stock?: Maybe<Scalars['Int']>;
  product_quantity_refunded?: Maybe<Scalars['Int']>;
  product_quantity_return?: Maybe<Scalars['Int']>;
  product_quantity_reinjected?: Maybe<Scalars['Int']>;
  product_price?: Maybe<Scalars['Float']>;
  product_ean13?: Maybe<Scalars['String']>;
  product_reference?: Maybe<Scalars['String']>;
  tax_rate?: Maybe<Scalars['Float']>;
};

export type OrderQueryResult = {
   __typename?: 'OrderQueryResult';
  total: Scalars['Int'];
  result: Array<Maybe<Order>>;
};

export type OrderState = {
   __typename?: 'OrderState';
  id?: Maybe<Scalars['String']>;
};

export type PaymentMethod = {
   __typename?: 'PaymentMethod';
  name?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type PlaceOrderInput = {
  paymentMethod: Scalars['String'];
};

export type PlaceOrderOutput = {
   __typename?: 'PlaceOrderOutput';
  order: Order;
};

export type Product = {
   __typename?: 'Product';
  id?: Maybe<Scalars['String']>;
};

export type Query = {
   __typename?: 'Query';
  _service: _Service;
  hello?: Maybe<Scalars['String']>;
  exampleModule1?: Maybe<ExampleModuleResponse1>;
  cart: Cart;
  customer?: Maybe<Customer>;
};

export type QueryHelloArgs = {
  name?: Maybe<Scalars['String']>;
};

export type RemoveItemFromCartInput = {
  idProduct: Scalars['Int'];
  idProductAttribute: Scalars['Int'];
  idCustomization?: Maybe<Scalars['Int']>;
};

export type RemoveUnavailableItemsResponse = {
   __typename?: 'RemoveUnavailableItemsResponse';
  cart: Cart;
  messages: Array<Maybe<Scalars['String']>>;
};

export type ShippingMethod = {
   __typename?: 'ShippingMethod';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  delay?: Maybe<Scalars['String']>;
  totalPriceWithTax?: Maybe<Scalars['Float']>;
  totalPriceWithoutTax?: Maybe<Scalars['Float']>;
};
