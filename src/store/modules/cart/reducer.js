import {produce} from 'immer';

const INITIAL_STATE = {
  products: [],
  cartSize: 0,
  total: 0,
};

export default function cart(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@cart/ADD_SUCCESS':
        draft.products.push(action.product);
        break;

      default:
        break;
    }
  });
}