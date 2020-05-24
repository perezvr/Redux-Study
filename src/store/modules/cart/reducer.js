import produce from 'immer';

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
       * Utilizando o immer para verificar se o produto já existe e alterar sua
       * quantidade, caso contrário, incluí-lo no array, criando um novo objeto
       * com a informação da quantidade (amount)
       */
      return produce(state, (draft) => {
        const productIndex = draft.findIndex((p) => p.id === action.product.id);

        if (productIndex >= 0) {
          draft[productIndex].amount += 1;
        } else {
          draft.push({
            ...action.product,
            amount: 1,
          });
        }
      });
    case 'REMOVE_FROM_CART':
      return produce(state, (draft) => {
        const productIndex = draft.findIndex((p) => p.id === action.id);

        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
      });
    default:
      return state;
  }
}
