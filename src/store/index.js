import { createStore } from 'redux';
import rootReducer from './modules/rootReducer';

/**
 * Criando o store com os reducers combinados no rootReducer
 */
const store = createStore(rootReducer);

export default store;
