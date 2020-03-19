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

      case '@cart/UPDATE_SUCCESS': {
        const productIndex = draft.products.findIndex(p => p.id === action.id);
        draft.products[productIndex].amount = action.amount;
        break;
      }

      case '@cart/REMOVE_FROM_CART': {
        const productIndex = draft.products.findIndex(
          product => product.id === action.id
        );

        draft.products.splice(productIndex, 1);
        break;
      }

      default:
        break;
    }
  });
}
