/**
 * Compose serve para agrupar configurações
 */
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();

/* Integrando redux ao Reactotron */
const enhancer =
  process.env.NODE_ENV === 'development'
    ? compose(console.tron.createEnhancer(), applyMiddleware(sagaMiddleware))
    : applyMiddleware(sagaMiddleware);
/* Criando o store com os reducers combinados no rootReducer */
const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

export default store;
