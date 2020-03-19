import { Ref } from '@vue/composition-api';

type ComputedProperty<T> = Readonly<Ref<Readonly<T>>>;

export interface UseProduct<PRODUCT, PRODUCT_FILTER> {
  products: ComputedProperty<PRODUCT[]>;
  totalProducts: ComputedProperty<number>;
  search: (params: {
    perPage?: number;
    page?: number;
    sort?: any;
    term?: any;
    filters?: any;
    [x: string]: any;
  }) => Promise<void>;
  loading: ComputedProperty<boolean>;
  [x: string]: any;
  productGetters: ProductGetters<PRODUCT, PRODUCT_FILTER>;
}

export interface UseUser
<
  USER,
  UPDATE_USER_PARAMS
> {
  user: ComputedProperty<USER>;
  userGetters: UserGetters<USER>;
  updateUser: (params: UPDATE_USER_PARAMS) => Promise<void>;
  register: (user: {
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
    [x: string]: any;
  }) => Promise<void>;
  login: (user: {
    username: string;
    password: string;
    [x: string]: any;
  }) => Promise<void>; logout: () => Promise<void>; changePassword: (currentPassword: string,
        newPassword: string
  ) => Promise<void>;
  isAuthenticated: Ref<boolean>;
  loading: ComputedProperty<boolean>;
}

export interface UseUserOrders<ORDER> {
  orders: ComputedProperty<ORDER[]>;
  totalOrders: ComputedProperty<number>;
  searchOrders: (params?: {
    id?: any;
    page?: number;
    perPage?: number;
    [x: string]: any;
  }) => Promise<void>;
  loading: ComputedProperty<boolean>;
  userOrderGetters: UserOrderGetters<ORDER>;
}

export interface UseUserAddress<ADDRESS> {
  addresses: ComputedProperty<ADDRESS[]>;
  totalAddresses: ComputedProperty<number>;
  addAddress: (address: ADDRESS) => Promise<void>;
  deleteAddress: (address: ADDRESS) => Promise<void>;
  updateAddress: (address: ADDRESS) => Promise<void>;
  searchAddresses: (params?: { [x: string]: any }) => Promise<void>;
  loading: ComputedProperty<boolean>;
}

export interface UseCategory
<
  CATEGORY,
  PRODUCTS
> {
  categories: ComputedProperty<CATEGORY[]>;
  search: (params: {
    [x: string]: any;
  }) => Promise<void>;
  categoryGetters: CategoryGetters<CATEGORY, PRODUCTS>;
  loading: ComputedProperty<boolean>;
}

export interface UseCart
<
  CART,
  CART_ITEM,
  PRODUCT,
  COUPON
> {
  cart: ComputedProperty<CART>;
  addToCart: (product: PRODUCT, quantity: number) => Promise<void>;
  isOnCart: (product: PRODUCT) => boolean;
  removeFromCart: (product: CART_ITEM,) => Promise<void>;
  updateQuantity: (product: CART_ITEM, quantity?: number) => Promise<void>;
  clearCart: () => Promise<void>;
  coupon: ComputedProperty<COUPON | null>;
  applyCoupon: (coupon: string) => Promise<void>;
  removeCoupon: () => Promise<void>;
  refreshCart: () => Promise<void>;
  cartGetters: CartGetters<CART, PRODUCT>;
  loading: ComputedProperty<boolean>;
}

export interface UseWishlist
<
  WISHLIST,
  PRODUCT,
  WISHLIST_ITEM,
> {
  wishlist: ComputedProperty<WISHLIST>;
  addToWishlist: (product: PRODUCT, quantity: number) => Promise<void>;
  isOnWishlist: (product: PRODUCT) => ComputedProperty<boolean>;
  removeFromWishlist: (product: WISHLIST_ITEM) => Promise<void>;
  clearWishlist: () => Promise<void>;
  refreshWishlist: () => Promise<void>;
  loading: ComputedProperty<boolean>;
}

export interface UseCompare<PRODUCT> {
  compare: ComputedProperty<PRODUCT[]>;
  addToCompare: (product: PRODUCT) => Promise<void>;
  removeFromCompare: (product: PRODUCT) => Promise<void>;
  clearCompare: () => Promise<void>;
  loading: ComputedProperty<boolean>;
}

export interface UseCheckout
<
  PAYMENT_METHODS,
  SHIPPING_METHODS,
  PERSONAL_DETAILS,
  SHIPPING_DETAILS,
  BILLING_DETAILS,
  CHOOSEN_PAYMENT_METHOD,
  CHOOSEN_SHIPPING_METHOD,
  PLACE_ORDER,
> {
  checkoutGetters: CheckoutGetters<SHIPPING_METHODS>;
  paymentMethods: Ref<PAYMENT_METHODS>;
  shippingMethods: Ref<SHIPPING_METHODS>;
  personalDetails: PERSONAL_DETAILS;
  shippingDetails: SHIPPING_DETAILS;
  billingDetails: BILLING_DETAILS;
  chosenPaymentMethod: CHOOSEN_PAYMENT_METHOD;
  chosenShippingMethod: CHOOSEN_SHIPPING_METHOD;
  placeOrder: PLACE_ORDER;
  loading: ComputedProperty<boolean>;
}

export interface UseLocale
<
  LOCALE,
  COUNTRY,
  CURRENCY,
  AVAILABLE_LOCALES,
  AVAILABLE_COUNTRIES,
  AVAILABLE_CURRENCIES,
> {
  locale: LOCALE;
  country: COUNTRY;
  currency: CURRENCY;
  availableLocales: AVAILABLE_LOCALES;
  availableCountries: AVAILABLE_COUNTRIES;
  availableCurrencies: AVAILABLE_CURRENCIES;
  loading: ComputedProperty<boolean>;
}

export interface ProductGetters<PRODUCT, PRODUCT_FILTER> {
  getName: (product: PRODUCT | Readonly<PRODUCT>) => Ref<Readonly<string>>;
  getSlug: (product: PRODUCT | Readonly<PRODUCT>) => Ref<Readonly<string>>;
  getPrice: (product: PRODUCT | Readonly<PRODUCT>) => Ref<Readonly<number | null>>;
  getGallery: (product: PRODUCT | Readonly<PRODUCT>) => Ref<Readonly<UiMediaGalleryItem[]>>;
  getVariants: (products: PRODUCT[] | Readonly<PRODUCT[]>, filters?: PRODUCT_FILTER) =>
    Ref<Readonly<PRODUCT[]> | Readonly<PRODUCT[]>>;
  getAttributes: (product: PRODUCT[] | Readonly<PRODUCT[]>, filters?: Array<string>) =>
    Ref<Readonly<Array<AgnosticProductAttribute>>>;
  getDescription: (product: PRODUCT | Readonly<PRODUCT>) => Ref<Readonly<any>>;
  getCategories: (product: PRODUCT | Readonly<PRODUCT>) => Ref<Readonly<string[]>>;
  getId: (product: PRODUCT | Readonly<PRODUCT>) => Ref<Readonly<number>>;
}

export interface CartGetters<CART, PRODUCT> {
  getProducts: (cart: CART) => Ref<Readonly<PRODUCT[]>>;
  getProductName: (product: PRODUCT) => Ref<Readonly<string>>;
  getProductImage: (product: PRODUCT) => Ref<Readonly<string>>;
  getProductPrice: (product: PRODUCT) => Ref<Readonly<string>>;
  getProductQty: (product: PRODUCT) => Ref<Readonly<string>>;
  getProductAttributes: (product: PRODUCT, filterByAttributeName?: Array<string>) =>
    Ref<Readonly<Record<string, string | AgnosticProductAttribute>>>;
  getProductSku: (product: PRODUCT) => Ref<Readonly<string>>;
  getTotals: (cart: CART) => Ref<Readonly<AgnosticTotals>>;
  getShippingPrice: (cart: CART) => Ref<Readonly<number>>;
  getTotalItems: (cart: CART) => Ref<Readonly<number>>;
}

export interface CategoryGetters<CATEGORY, PRODUCTS> {
  getProducts: (category: CATEGORY, options: any) => Ref<Readonly<PRODUCTS>>;
  getTree: (category: CATEGORY) => Ref<Readonly<UiCategory | null>>;
}

export interface UserGetters<USER> {
  getFirstName: (customer: USER | Ref<USER>) => Ref<Readonly<string>>;
  getLastName: (customer: USER | Ref<USER>) => Ref<Readonly<string>>;
  getFullName: (customer: USER | Ref<USER>) => Ref<Readonly<string>>;
}

export interface CheckoutGetters<SHIPPING_METHODS> {
  getShippingMethodId: (shippingMethod: SHIPPING_METHODS) => Ref<Readonly<string>>;
  getShippingMethodName: (shippingMethod: SHIPPING_METHODS) => Ref<Readonly<string>>;
  getShippingMethodDescription: (shippingMethod: SHIPPING_METHODS) => Ref<Readonly<string>>;
  getShippingMethodPrice: (shippingMethod: SHIPPING_METHODS) => Ref<Readonly<number>>;
}

export interface UserOrderGetters<ORDER> {
  getDate: (order: ORDER) => ComputedProperty<string>;
  getNumber: (order: ORDER) => ComputedProperty<string>;
  getStatus: (order: ORDER) => ComputedProperty<AgnosticOrderStatus>;
  getTotal: (order: ORDER) => ComputedProperty<number | null>;
}

export interface UiMediaGalleryItem {
  small: string;
  normal: string;
  big: string;
}

export interface UiCategory {
  label: string;
  slug?: string;
  items: UiCategory[];
}

export interface UiCartProductPrice {
  regular: number;
  special?: number;
}

export interface AgnosticTotals {
  total: number;
  subtotal: number;
}

export interface AgnosticProductAttribute {
  name?: string;
  value: string | Record<string, any>;
  label: string;
}

export interface SearchResult<T> {
  data: T[];
  total: number;
}

export enum AgnosticOrderStatus {
  Open = 'Open',
  Pending = 'Pending',
  Confirmed = 'Confirmed',
  Shipped = 'Shipped',
  Complete = 'Complete',
  Cancelled = 'Cancelled',
  Refunded = 'Refunded'
}