import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';
import Header from './components/Header';
import Routes from './routes';

/**
 * Como o header será clicável e fará parte da navegação, ele também precisa estar dentro
 * do BrowserRouter
 */
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
