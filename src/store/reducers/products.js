import { TOGGLE_FAV } from '../actions/products';

const initialState = {
  products: [
    {
      id: 'p1',
      title: 'Cachecol vermelho',
      description: 'Lindo cachecol vermelho',
      isFavorite: false
    },
    {
      id: 'p2',
      title: 'Caneta azul',
      description: 'Caneta azul',
      isFavorite: false
    },
    {
      id: 'p3',
      title: 'Botas de couro',
      description: 'Par robusto de botas de couro',
      isFavorite: false
    },
    {
      id: 'p4',
      title: 'Chapeu vermelho',
      description: 'Bom para andar de dia',
      isFavorite: false
    }
  ]
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAV:
      const prodIndex = state.products.findIndex(
        p => p.id === action.productId
      );
      const newFavStatus = !state.products[prodIndex].isFavorite;
      const updatedProducts = [...state.products];
      updatedProducts[prodIndex] = {
        ...state.products[prodIndex],
        isFavorite: newFavStatus
      };
      return {
        ...state,
        products: updatedProducts
      };
    default:
      return state;
  }
};

export default productReducer;
