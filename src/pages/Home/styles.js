import styled from 'styled-components';
import { darken } from 'polished';

export const ProductList = styled.ul`
  display: grid;
  /* Define o numero de colunas */
  grid-template-columns: repeat(3, 1fr);
  /*Espaçamento entre os itens */
  grid-gap: 20px;

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 20px;

    img {
      align-self: center;
      max-width: 250px;
    }

    /* Sinal '>' para se referir a strong diretamente dentro do li*/
    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
    }

    /* Sinal '>' para se referir a spam diretamente dentro do li*/
    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
    }

    button {
      background: #7159c1;
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      /* Auto serve para que a margin se ajuste caso o nome do tênis tiver 2 linhas,
      por exemplo */
      margin-top: auto;

      display: flex;
      align-items: center;
      transition: background 0.2s;

      /*Escurece em 3% a cor ao passar o mouse */
      &:hover {
        background: ${darken(0.03, '#7159c1')};
      }

      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.1);

        svg {
          margin-right: 5px;
        }
      }

      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  }
`;
