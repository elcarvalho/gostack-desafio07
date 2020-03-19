import {Alert} from 'react-native';
import {all, takeLatest, call, put, select} from 'redux-saga/effects';

import api from '../../../services/api';

import {addToCartSuccess, updateCartSuccess} from './actions';

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
    Alert.alert(
      'Estoque insuficiente',
      'No momento não temos a quantidade solicitada.'
    );
    return;
  }

  if (productExists) {
    yield put(updateCartSuccess(id, amount));
  } else {
    const data = {
      ...productResponse.data,
      amount: 1,
    };

    yield put(addToCartSuccess(data));
  }
}

function* updateCartResquest({id, amount}) {
  if (amount <= 0) return;

  const stockRequest = yield call(api.get, `/stock/${id}`);
  const stock = stockRequest.data;

  if (amount > stock.amount) {
    Alert.alert(
      'Estoque insuficiente',
      'No momento não temos a quantidade solicitada.'
    );
    return;
  }

  yield put(updateCartSuccess(id, amount));
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCartRequest),
  takeLatest('@cart/UPDATE_REQUEST', updateCartResquest),
]);
