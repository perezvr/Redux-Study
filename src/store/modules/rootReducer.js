import { combineReducers } from 'redux';
import cart from './cart/reducer';

/* Esse é o reducer que combina todos os reducers usados na aplicação para serem usados
 * pelo store
 */
export default combineReducers({
  cart,
});
