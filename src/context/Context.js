import React, { createContext, useReducer, useContext } from 'react';
import { faker } from '@faker-js/faker';
import { cartReducer } from './Reducers';

const Cart = createContext();

const Context = ({ children }) => {
    const products = [...Array(20)].map(() => ({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: faker.number.float({'min': 55, 'max': 500}),
        image: faker.image.dataUri(),
        inStock: faker.number.int({'min': 0, 'max': 7}),
        fastDelivery: faker.datatype.boolean(),
        ratings: faker.number.int({'min': 0, 'max': 5})
      }));

      const [state, dsipatch] = useReducer(cartReducer, {
        products: products,
        cart:[]
      })

  return (
    <Cart.Provider value={{ state, dsipatch}}>
        {children}
    </Cart.Provider>
  )
};

export default Context;

export const CartState = () => {
    return useContext(Cart);
};