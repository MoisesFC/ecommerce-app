import { Card, Button, Row, Col, Form, Container } from 'react-bootstrap';
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
      <Container>
      <Card>
        
        <Row noGutters>
          <Col xs={12} sm={4}>
            <Card.Img
              variant="top"
              src={prod.image}
              alt={prod.name}
              className="img-fluid"
            />
          </Col>
          <Col xs={12} sm={4} className="d-flex flex-column align-items-center justify-content-center">
            <Row>
              <Card.Title>{prod.name}</Card.Title>
            </Row>
            <Row>
              <Card.Text className="d-none d-md-block">{prod.description}</Card.Text>
            </Row>
            <Row className="justify-content-center">
              <Rating rating={prod.rating} style={{ color: 'orange', padding: 7 }} />
            </Row>
          </Col>
          <Col xs={12} sm={4}>
            <Card.Body>
              <Card.Subtitle style={{ margin: 20 }}>
                <span id='price' className='dynamic-font'>${prod.price.toLocaleString()}</span>
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
      </Container>

    </div>
  );
};

export default SingleProduct;
