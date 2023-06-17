import React from 'react';
import { FormControl, Row } from 'react-bootstrap';
import { CartState } from '../context/Context';
import SingleProduct from '../components/SingleProducts';
import Filters from '../components/Filters';
import '../components/styles.css';
import { PRODUCTS } from '../products/products';
import Searchbar from '../components/Searchbar';

const Home = () => {

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
                (prod) => prod.rating >= byRating
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
                <Searchbar/>
            <div className=''>
                <div className='productContainer'>
                <h2>Today's Featured Products</h2>
                    {transformProducts().map((prod) => (
                        <SingleProduct prod={prod} key={prod.id} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Home