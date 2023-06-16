
import React from 'react';
import { FormControl, Row } from 'react-bootstrap';
import { CartState } from '../context/Context';
import SingleProduct from '../components/SingleProducts';
import Filters from '../components/Filters';
import '../components/styles.css';
import { PRODUCTS } from '../products/products';


const Searchbar = () => {

    const {
        state: { products },
        productState: { sort, byStock, byFastDelivery, byRating, searchQuery },
    } = CartState();


    const { productDispatch } = CartState();
    let sortedProducts = PRODUCTS.filter((prod) => prod.featured === true)
    const transformProducts = () => {
        // let sortedProducts = products;

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

    return (
        <div>
            <div className="d-flex justify-content-center " style={{ padding: '9px', backgroundColor: '#66ccff' }}>
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
            <div className="d-flex justify-content-center" style={{ padding: '9px', backgroundColor: '#66ccff' }}>
                <Filters />
                </div>
        </div>
    )
}

export default Searchbar;
