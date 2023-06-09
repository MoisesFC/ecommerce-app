import React from 'react';
import { PRODUCTS } from '../products/products';
import SingleProduct from '../components/SingleProducts';
import { CartState } from '../context/Context';
import Searchbar from '../components/Searchbar';
import { transformProducts } from '../components/transformProducts';

const AppliancePage = () => {
  const {
    productState: { sort, byStock, byFastDelivery, byRating, searchQuery },
  } = CartState();

  let sortedProducts = PRODUCTS.filter((prod) => prod.category === 'appliance');

  console.log(sortedProducts);

  return (
    <>
      <Searchbar />
      <div className=''>
        <div className='productContainer'>
          <h3>Appliances</h3>
          {transformProducts(sortedProducts, sort, byStock, byFastDelivery, byRating, searchQuery).map(
            (prod) => (
              <SingleProduct prod={prod} key={prod.id} />
            )
          )}
        </div>
      </div>
    </>
  );
};

export default AppliancePage;
