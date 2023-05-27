import { Card, Button } from 'react-bootstrap';
import Rating from './Rating';

const SingleProduct = ({ product }) => {
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
                        <br/>
                        <Button variant='danger'>Remove from Cart</Button>
                        <Button disabled={!product.inStock}>
                            {!product.inStock ? 'Out of Stock' : 'Add to Cart'}
                            </Button>
                    </Card.Subtitle>
                </Card.Body>
            </Card>
        </div>
    )
};

export default SingleProduct;