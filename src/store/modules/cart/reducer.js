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
      /**
       * Repetimos o estado anterior, incluindo um novo objeto
       * Este objeto pega o action.product e inclui a informação amount
       */
      return [
        ...state,
        {
          ...action.product,
          amount: 1,
        },
      ];
    default:
      return state;
  }
}
