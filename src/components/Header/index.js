import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { MdShoppingBasket } from 'react-icons/md';

import { Container, Cart } from './styles';

import logo from '../../assets/images/logo.svg';

/**
 * Conseguimos acessar o objeto criado no connect através das props
 */
function Header({ cartSize }) {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="RocketShoes" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartSize} itens</span>
        </div>
        <MdShoppingBasket size={36} color="#fff" />
      </Cart>
    </Container>
  );
}

/**
 * O primeiro parâmetro recebido pelo connect é uma função que recece todo o estado do
 * redux e retorna algum reducer dele
 * Sempre que uma action é disparada, o redux informa as mudanças aos componentes que
 *  usam o estado alterado, renderizando novamente o componente com as alterações
 */
export default connect((state) => ({
  cartSize: state.cart.length,
}))(Header);
