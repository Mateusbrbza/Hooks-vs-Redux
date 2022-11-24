import { initStore } from './store';

const configureStore = () => {
    const actions = {
        TOGGLE_FAV: (currentState, productId) => {
            const prodIndex = currentState.products.findIndex(p => p.id === productId);
            const newFavStatus = !currentState.products[prodIndex].isFavorite;
            const updatedProducts = [...currentState.products];
            updatedProducts[prodIndex] = {
                ...currentState.products[prodIndex],
                isFavorite: newFavStatus
            };
            return { products : updatedProducts};
        }
    }
    initStore(actions, 
    {products: [
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
});
};

export default configureStore;