import {all, takeLatest, call, put, select} from 'redux-saga/effects';

import {formatPrice} from '../../../util/format';
import api from '../../../services/api';

import {addToCartSuccess} from './actions';

function* addToCartRequest({id}) {
  const productResponse = yield call(api.get, `/products/${id}`);
  const productExists = yield select(state =>
    state.cart.products.find(p => p.id === id)
  );

  const stockResponse = yield call(api.get, `/stock/${id}`);

  const currentAmount = productExists ? productExists.amount : 0;
  const sotckAmount = stockResponse.data ? stockResponse.data.amount : 0;

  const amount = currentAmount + 1;

  if (amount > sotckAmount) {
    console.log('estoque insuficiente');
    return;
  }

  if (productExists) {
    //update amount
  } else {
    const data = {
      ...productResponse.data,
      amount: 1,
      priceFormatted: formatPrice(productResponse.data.price),
    };

    yield put(addToCartSuccess(data));
  }
}

export default all([takeLatest('@cart/ADD_REQUEST', addToCartRequest)]);
