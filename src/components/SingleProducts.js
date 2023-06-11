import { Card, Button, Row, Col, Form } from 'react-bootstrap';
import Rating from './Rating';
import { CartState } from '../context/Context';

const SingleProduct = ({ prod }) => {
  const { state: { cart }, dispatch } = CartState();

  const handleQtyChange = (e) => {
    const newQty = parseInt(e.target.value);
    if (isNaN(newQty) || newQty < 1) {
      // Set the quantity to 1 if the input is empty or less than 1
      dispatch({
        type: "CHANGE_CART_QTY",
        payload: {
          id: prod.id,
          qty: 1,
        },
      });
    } else {
      dispatch({
        type: "CHANGE_CART_QTY",
        payload: {
          id: prod.id,
          qty: newQty,
        },
      });
    }
  };

  const isInCart = cart.some((p) => p.id === prod.id);

  return (
    <div className="products">
      <Card>
        <Row noGutters>
          <Col xs={4}>
            <Card.Img variant="top" src={prod.image} alt={prod.name} style={{ width: '60%' }} />
          </Col>
          <Col xs={4} className="d-flex flex-column align-items-center justify-content-center">
            {/* Add new column for description */}
            <Row>
              <Card.Text>{prod.description} </Card.Text>
            </Row>
            <Row className="justify-content-center">
              <Rating rating={prod.rating} style={{ color: 'orange', padding: 7 }}/>
            </Row>
          </Col>
          <Col xs={4}>
            {/* Original column with the rest of the items */}
            <Card.Body>
              <Card.Title>{prod.name}</Card.Title>
              <Card.Subtitle style={{ paddingBottom: 10 }}>
                <span>${prod.price.toLocaleString()}</span>
                {prod.fastDelivery ? (
                  <div>Fast Delivery</div>
                ) : (
                  <div>4 day Delivery</div>
                )}
              </Card.Subtitle>
              {isInCart ? (
                <div>
                  <Button
                    variant="danger"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: prod,
                      })
                    }
                  >
                    Remove from Cart
                  </Button>
                  <div className="d-flex justify-content-center" style={{ padding: '9px' }}>
                    <Form.Control
                      as="input"
                      type="number"
                      value={cart.find((p) => p.id === prod.id)?.qty || 1}
                      onChange={handleQtyChange}
                      min={1}
                      max={prod.inStock}
                      disabled={!prod.inStock}
                      style={{ width: '75px', textAlign: 'center' }}
                    />
                  </div>
                </div>
              ) : (
                <Button
                  onClick={() =>
                    dispatch({
                      type: "ADD_TO_CART",
                      payload: prod,
                    })
                  }
                  disabled={!prod.inStock}
                >
                  {!prod.inStock ? "Out of Stock" : "Add to Cart"}
                </Button>
              )}
            </Card.Body>
          </Col>
        </Row>
      </Card>

    </div>
  );
};

export default SingleProduct;
