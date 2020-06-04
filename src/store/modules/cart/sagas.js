/**
 * call => Método responsável por chamadas assíncronas que retornam promises
 * put => Dispara actions
 */
import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { addToCartSuccess } from './actions';

/**
 * '*' - Genetator: Funciona como um async
 * O gererator é mais completo que o async, com mais funcionalidades
 *
 * A action será dispara nao para o reducer, mas para o Middleware que
 * tratará os detalhes do produto antes de adicioná-lo ao carrinho
 */
function* addToCart(id) {
  const response = yield call(api.get, `/products/${id}`);

  yield put(addToCartSuccess(response.data));
}

/**
 * Incluir listners para disparar os middlewares
 */
export default all([
  /* takeLatest previne diversos cliques, disparando somente uma vez */
  takeLatest('@cart/ADD_REQUEST', addToCart),
]);
