import React, { useState } from 'react';
import { Form, Button, Col, Row, Container } from 'react-bootstrap';
import Rating from './Rating';
import { CartState } from '../context/Context';

const Filters = () => {
    const {
        productState: { byStock, byFastDelivery, sort, byRating },
        productDispatch,
    } = CartState();

    const [showFilters, setShowFilters] = useState(false);
    const [buttonText, setButtonText] = useState('Show Filters');

    const toggleFilters = () => {
        setShowFilters(!showFilters);
        setButtonText(showFilters ? 'Show Filters' : 'Hide Filters');
    };

    return (
        <Container>
            <Row className="hide-row">
                <Col>
                    <span>
                        <Form.Check
                            inline
                            label='Ascending'
                            name='group1'
                            type='radio'
                            id={`inline-1`}
                            onChange={() =>
                                productDispatch({
                                    type: 'SORT_BY_PRICE',
                                    payload: 'lowToHigh',
                                })
                            }
                            checked={sort === 'lowToHigh'}
                        />
                    </span>
                </Col>
                <Col>
                    <span>
                        <Form.Check
                            inline
                            label='Descending'
                            name='group1'
                            type='radio'
                            id={`inline-2`}
                            onChange={() =>
                                productDispatch({
                                    type: 'SORT_BY_PRICE',
                                    payload: 'highToLow',
                                })
                            }
                            checked={sort === 'highToLow'}
                        />
                    </span>
                </Col>
                <Col>
                    <span>
                        <Form.Check
                            inline
                            label='Include Out of Stock'
                            name='group1'
                            type='checkbox'
                            id={`inline-3`}
                            onChange={() =>
                                productDispatch({
                                    type: 'FILTER_BY_STOCK',
                                })
                            }
                            checked={byStock}
                        />
                    </span>
                </Col>
                <Col>
                    <span>
                        <Form.Check
                            inline
                            label='Fast Delivery Only'
                            name='group1'
                            type='checkbox'
                            id={`inline-4`}
                            onChange={() =>
                                productDispatch({
                                    type: 'FILTER_BY_DELIVERY',
                                })
                            }
                            checked={byFastDelivery}
                        />
                    </span>
                </Col>
                <Col>
                    <span>
                        <label style={{ paddingRight: 10 }}>Rating</label>
                        <Rating
                            rating={byRating}
                            onClick={(i) =>
                                productDispatch({
                                    type: "FILTER_BY_RATING",
                                    payload: i + 1,
                                })
                            }
                            style={{ cursor: "pointer", color: 'white' }}
                        />
                    </span>
                </Col>
                <Col>
                    <Button
                        variant="light"
                        onClick={() =>
                            productDispatch({
                                type: 'CLEAR_FILTERS',
                            })
                        }
                    >
                        Clear Filters
                    </Button>
                </Col>

            </Row>

            <Col xs={12} md={6}>
                <Button
                    variant="light"
                    onClick={toggleFilters}
                    className="mb-3 d-md-none"
                >
                    {buttonText}
                </Button>
                {showFilters && (
                    <div>
                        <span>Filter Products</span>
                        <Col>
                            <span>
                                <Form.Check
                                    inline
                                    label='Ascending'
                                    name='group1'
                                    type='radio'
                                    id={`inline-1`}
                                    onChange={() =>
                                        productDispatch({
                                            type: 'SORT_BY_PRICE',
                                            payload: 'lowToHigh',
                                        })
                                    }
                                    checked={sort === 'lowToHigh'}
                                />
                            </span>
                        </Col>
                        <Col>
                            <span>
                                <Form.Check
                                    inline
                                    label='Descending'
                                    name='group1'
                                    type='radio'
                                    id={`inline-2`}
                                    onChange={() =>
                                        productDispatch({
                                            type: 'SORT_BY_PRICE',
                                            payload: 'highToLow',
                                        })
                                    }
                                    checked={sort === 'highToLow'}
                                />
                            </span>
                        </Col>
                        <Col>
                            <span>
                                <Form.Check
                                    inline
                                    label='Include Out of Stock'
                                    name='group1'
                                    type='checkbox'
                                    id={`inline-3`}
                                    onChange={() =>
                                        productDispatch({
                                            type: 'FILTER_BY_STOCK',
                                        })
                                    }
                                    checked={byStock}
                                />
                            </span>
                        </Col>
                        <Col>
                            <span>
                                <Form.Check
                                    inline
                                    label='Fast Delivery Only'
                                    name='group1'
                                    type='checkbox'
                                    id={`inline-4`}
                                    onChange={() =>
                                        productDispatch({
                                            type: 'FILTER_BY_DELIVERY',
                                        })
                                    }
                                    checked={byFastDelivery}
                                />
                            </span>
                        </Col>
                        <Col>
                            <span>
                                <label style={{ paddingRight: 10 }}>Rating</label>
                                <Rating
                                    rating={byRating}
                                    onClick={(i) =>
                                        productDispatch({
                                            type: "FILTER_BY_RATING",
                                            payload: i + 1,
                                        })
                                    }
                                    style={{ cursor: "pointer", color: 'white' }}
                                />
                            </span>
                        </Col>
                        <Col>
                            <Button
                                variant="light"
                                onClick={() =>
                                    productDispatch({
                                        type: 'CLEAR_FILTERS',
                                    })
                                }
                            >
                                Clear Filters
                            </Button>
                        </Col>
                    </div>
                )}
            </Col>
        </Container>
    );
};

export default Filters;
