import { Card, Button } from 'react-bootstrap';
import Rating from './Rating';
import { CartState } from '../context/Context';

const SingleProduct = ({ product }) => {

    const {
        state: { cart },
        dispatch,
    } = CartState();

    return (
        <div className="products">
            <Card>
                <Card.Img variant="top" src={product.image} alt={product.name} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Subtitle style={{ paddingBottom: 10 }}>
                        <span>${product.price.split(".")[0]}</span>
                        {product.fastDelivery ? (
                            <div>Fast Delivery</div>
                        ) : (
                            <div>4 day Delivery</div>
                        )}
                        <Rating rating={product.rating + 1} />
                    </Card.Subtitle>
                    {
                        cart.some(p => p.id === product.id) ? (
                            <Button
                                variant="danger"
                                onClick={() =>
                                    dispatch({
                                        type: "REMOVE_FROM_CART",
                                        payload: product,
                                    })
                                }
                            >
                                Remove from Cart
                            </Button>
                        ) : (
                            <Button
                                onClick={() =>
                                    dispatch({
                                        type: "ADD_TO_CART",
                                        payload: product,
                                    })
                                }
                                disabled={!product.inStock}
                            >
                                {!product.inStock ? "Out of Stock" : "Add to Cart"}
                            </Button>
                        )

                    }



                </Card.Body>
            </Card>
        </div>
    )
};

export default SingleProduct;