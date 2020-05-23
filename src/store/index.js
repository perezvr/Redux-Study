import { createStore } from 'redux';
import rootReducer from './modules/rootReducer';

/* Integrando redux ao Reactotron */
const enhancer =
  process.env.NODE_ENV === 'development' ? console.tron.createEnhancer() : null;
/* Criando o store com os reducers combinados no rootReducer */
const store = createStore(rootReducer, enhancer);

export default store;
