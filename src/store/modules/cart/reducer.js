/**
 * Criação do reducer 'cart'
 * @param state estado antes da alteração, iniciado com [] como padrão
 * @param action action disparada
 */
export default function cart(state = [], action) {
  /**
   * Todos os reducers escutam todas as actions disparadas no Redux
   * Com isso é necessário um switch para que somente a action passada seja chamada
   */
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.product];
    default:
      return state;
  }
}
