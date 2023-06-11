import React from 'react';
import { FormControl, Row } from 'react-bootstrap';
import { CartState } from '../context/Context';
import SingleProduct from './SingleProducts';
import Filters from './Filters';
import './styles.css'

const Home = () => {

    const {
        state: { products },
        productState: { sort, byStock, byFastDelivery, byRating, searchQuery },
    } = CartState();

    const { productDispatch } = CartState();

    const transformProducts = () => {
        let sortedProducts = products;

        if (sort) {
            sortedProducts = sortedProducts.sort((a, b) =>
                sort === "lowToHigh" ? a.price - b.price : b.price - a.price
            );
        };

        if (!byStock) {
            sortedProducts = sortedProducts.filter((prod) => prod.inStock)
        };

        if (byFastDelivery) {
            sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery)
        };

        if (byRating) {
            sortedProducts = sortedProducts.filter(
                (prod) => prod.ratings >= byRating
            );
        };

        if (searchQuery) {
            sortedProducts = sortedProducts.filter((prod) =>
                prod.name.toLowerCase().includes(searchQuery))
        };

        return sortedProducts;
    };

    console.log(products);

    return (
        <>
            <div className="d-flex justify-content-center bg-gray" style={{ padding: '9px' }}>
                <FormControl
                    style={{ width: 500 }}
                    placeholder='Search Product'
                    className='m-auto'
                    onChange={(e) => {
                        productDispatch({
                            type: 'FILTER_BY_SEARCH',
                            payload: e.target.value,
                        });
                    }}
                />
            </div>
            <div className='home'>
                {/* <Filters /> */}
                <div className='productContainer'>
                    {transformProducts().map((prod) => (
                        <SingleProduct prod={prod} key={prod.id} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Home