import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';

/* Importante importar a config do Reactotron antes de importar o store do Redux */
import './config/ReactotronConfig';

import store from './store';

import GlobalStyle from './styles/global';
import Header from './components/Header';
import Routes from './routes';

/**
 * Como o header será clicável e fará parte da navegação, ele também precisa estar dentro
 * do BrowserRouter
 */
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
