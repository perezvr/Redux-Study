import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { MdAddShoppingCart } from 'react-icons/md';
import { formatPrice } from '../../util/format';

import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions';

import { ProductList } from './styles';

class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('/products');

    /* Fazemos a formatação do preço aqui para não fazer isso no reder, de forma otimizada */
    const data = response.data.map((product) => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: data });
  }

  /**
   * Todo componente conectado ao Redux contém uma prop 'dispatch', responsável por
   * disparar uma action ao Redux
   */
  handleAddProduct = (id) => {
    const { addToCartRequest } = this.props;

    addToCartRequest(id);
  };

  render() {
    const { products } = this.state;
    const { amount } = this.props;

    return (
      <ProductList>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
            <span>{product.priceFormatted}</span>

            <button
              type="button"
              onClick={() => this.handleAddProduct(product.id)}
            >
              <div>
                <MdAddShoppingCart size="16" color="#fff" />{' '}
                {amount[product.id] || 0}
              </div>
              <span>ADICIONAR AO CARRINHO</span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}

/**
 * Criando uma nova prop (amount) pegando a quantidade de cada produto
 * @param state Primeiro parâmetro recebendo o state global do Redux
 */
const mapsStateToProps = (state) => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;

    return amount;
  }, {}),
});

/**
 * Mapeando as actions para serem usadas como props do componente
 */
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

/*
 * Conectando o componente Home ao redux
 * connect() retorna uma nova função, por isso é passado o Home no 2º ()
 */
export default connect(mapsStateToProps, mapDispatchToProps)(Home);
