import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleWare from 'redux-saga';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMiddleWare = createSagaMiddleWare();

const sagaEnhancer = applyMiddleware(sagaMiddleWare);

const store = createStore(rootReducer, sagaEnhancer);

sagaMiddleWare.run(rootSaga);

export default store;
