export function addToCart(product) {
  return {
    type: '@cart/ADD_SUCCESS',
    product,
  };
}
