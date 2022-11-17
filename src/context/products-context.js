/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react';

export const ProductsContext = React.createContext({
    products: []
});

export default props => {
    const [productsList, setProductsList] = useState([
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
]);

    return ( 
        <ProductsContext.Provider value={{products: productsList}}>
            {props.children}
        </ProductsContext.Provider>
    )
};