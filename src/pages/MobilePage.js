import { PRODUCTS } from '../products/products';
import SingleProduct from "../components/SingleProducts";
import { Container } from "react-bootstrap";
import React from "react";
import DisplayProducts from "../components/DisplayProducts";
import { Card, Button, Row, Col, Form, FormControl } from 'react-bootstrap';
import Rating from '../components/Rating';
import { CartState } from '../context/Context';
import Filters from '../components/Filters';

const MobilePage = () => {


    const {
        state: { products },
        productState: { sort, byStock, byFastDelivery, byRating, searchQuery },
    } = CartState();

    const { productDispatch } = CartState();

    const transformProducts = () => {
        let sortedProducts = PRODUCTS.filter((prod) => prod.category === 'mobile')

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
            <div className=''>
                <div className="d-flex justify-content-center bg-gray" style={{ padding: '9px' }}>
                    <Filters />
                </div>
                <div className='productContainer'>
                    {transformProducts().map((prod) => (
                        <SingleProduct prod={prod} key={prod.id} />
                    ))}
                </div>
            </div>
        </>
    )
};

export default MobilePage;