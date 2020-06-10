import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

/* Importante importar a config do Reactotron antes de importar o store do Redux */
import './config/ReactotronConfig';

import store from './store';

import GlobalStyle from './styles/global';
import Header from './components/Header';
import Routes from './routes';

/**
 * Objeto para controle das rotas
 */
import history from './services/history';

/**
 * Como o header será clicável e fará parte da navegação, ele também precisa estar dentro
 * do BrowserRouter
 */
function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Routes />
        <GlobalStyle />
        <ToastContainer autoClose={1500} />
      </Router>
    </Provider>
  );
}

export default App;
