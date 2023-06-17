import React, { createContext, useReducer, useContext } from 'react';
import { faker } from '@faker-js/faker';
import { cartReducer, } from './Reducers';
import { productReducer } from './Reducers';
import { PRODUCTS } from '../products/products';


const Cart = createContext();
faker.seed(99);

const Context = ({ children }) => {

  const products = PRODUCTS;

      const [state, dispatch] = useReducer(cartReducer, {
        products: products,
        cart:[]
      });

      const [productState, productDispatch] = useReducer(productReducer, {
        byStock: false,
        byFastDelivery: false,
        byRating: 0,
        searchQuery: "",
      });

  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
        {children}
    </Cart.Provider>
  )
};

export default Context;

export const CartState = () => {
    return useContext(Cart);
  };