export const URL = {
  CART_ITEMS: '/cart-items',
  QUANTITY_TO_CHANGE: (id: number) => `/cart-items/${id}`,
  DELETE_ITEMS: (id: number) => `/cart-items/${id}`,
};

export const KEY = {
  CART_ITEMS: 'cartItems',
  PRICE_INFO: 'priceInfo',
  ORDER_INFO: 'orderInfo',
  QUANTITY_STATE: 'quantityState',
};

export const ROUTER_URL = {
  MAIN: '',
  ORDER_INFO: '/order-info',
  ERROR: '/error',
};

export const ORDER = {
  MINIMUM_QUANTITY: 1,
  SHIPPING_FEE: 3000,
  SHIPPING_FREE_PRICE: 100000,
};