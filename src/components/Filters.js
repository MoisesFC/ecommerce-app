import { Form, Button, Col, Row, Container } from 'react-bootstrap';
import Rating from './Rating';
import { CartState } from '../context/Context';

const Filters = () => {

    const {
        productState: { byStock, byFastDelivery, sort, byRating, },
        productDispatch
    } = CartState();


    console.log(byStock, byFastDelivery, sort, byRating,);

    return (
        <>
            <div >
                <Container>
                    <Row>
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
                                            payload: 'lowToHigh'
                                        })}
                                    checked={sort === 'lowToHigh' ? true : false}
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
                                            payload: 'highToLow'
                                        })}
                                    checked={sort === 'highToLow' ? true : false}
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
                            <Button variant="light"
                                onClick={() =>
                                    productDispatch({
                                        type: 'CLEAR_FILTERS'
                                    })}
                            >Clear Filters</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Filters;