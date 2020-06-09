/**
 * call => Método responsável por chamadas assíncronas que retornam promises
 * put => Dispara actions
 * select => Consulta informações dentro do estado
 */
import { call, select, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import { formatPrice } from '../../../util/format';

import { addToCartSuccess, updateAmountSuccess } from './actions';

/**
 * '*' - Genetator: Funciona como um async
 * O gererator é mais completo que o async, com mais funcionalidades
 *
 * A action será dispara nao para o reducer, mas para o Middleware que
 * tratará os detalhes do produto antes de adicioná-lo ao carrinho
 */
function* addToCart({ id }) {
  const productExists = yield select((state) =>
    state.cart.find((p) => p.id === id)
  );

  const stock = yield call(api.get, `/stock/${id}`);

  const stockAmount = stock.data.amount;
  const currentAmount = productExists ? productExists.amount : 0;

  const amount = currentAmount + 1;

  if (amount > stockAmount) {
    toast.error('Produto sem estoque');
    return;
  }

  if (productExists) {
    yield put(updateAmountSuccess(id, amount));
  } else {
    const response = yield call(api.get, `/products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price),
    };

    yield put(addToCartSuccess(data));
  }
}

function* updateAmount({ id, amount }) {
  if (amount <= 0) return;

  const stock = yield call(api.get, `/stock/${id}`);
  const stockAmount = stock.data.amount;

  if (amount > stockAmount) {
    toast.error('Produto sem estoque');
    return;
  }

  yield put(updateAmountSuccess(id, amount));
}

/**
 * Incluir listners para disparar os middlewares
 */
export default all([
  /* takeLatest previne diversos cliques, disparando somente uma vez */
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
