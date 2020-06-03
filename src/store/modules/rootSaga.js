import { all } from 'redux-saga/effects';

import cart from './cart/sagas';

/**
 * Combinando todos os sagas e exportando de uma só vez
 */
export default function* rootSaga() {
  return yield all([cart]);
}
