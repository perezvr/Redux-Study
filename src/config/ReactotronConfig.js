import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';
/**
 * O create-react-app cria essa variável 'node_env' que pode ser verificada para
 * saber se estamos em ambiente de desenvolvimento
 */
if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure()
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect();

  /* Limpa o log em toda inicialização */
  tron.clear();

  /* Cria a variável tron para ser usada no console */
  console.tron = tron;
}
