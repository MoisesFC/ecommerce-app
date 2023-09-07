import React, { useEffect, useState } from 'react';
import { CartState } from '../context/Context';
import { ListGroup, Button, Row, Col, Form, Image, Container } from 'react-bootstrap';
import Rating from '../components/Rating';
import { AiFillDelete } from 'react-icons/ai'

const Cart = () => {

  const {
    state: { cart },
    dispatch
  } = CartState();

  const [total, setTotal] = useState();

  useEffect(() => {
    const totalPrice = cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0);
    setTotal(totalPrice.toLocaleString());
  }, [cart]);

  return (
    <>
      <h2>Your Cart</h2>
      <div className='home'>
        <div className='productContainer'>
          <ListGroup>
            {
              cart.map((product) => (
                <ListGroup.Item key={product.id}>
                  <Row>
                    <Col md={2}>
                      <Image src={product.image} alt={product.name} fluid rounded />
                    </Col>
                    <Col md={2}>
                      <span>{product.name}</span>
                    </Col>
                    <Col md={2}>
                      ${product.price.toLocaleString()}
                    </Col>
                    <Col md={2}>
                      <Rating disabled onClick={() => { }} rating={product.rating} />
                    </Col>
                    <Col md={2}>
                      <Form.Control
                        as="select"
                        value={product.qty}
                        onChange={(e) =>
                          dispatch({
                            type: "CHANGE_CART_QTY",
                            payload: {
                              id: product.id,
                              qty: e.target.value,
                            },
                          })
                        }
                      >
                        {[...Array(product.inStock).keys()].map((x) => (
                          <option key={x + 1}>{x + 1}</option>
                        ))}
                      </Form.Control>
                    </Col>
                    <Col md={2}>
                      <Button
                        type='button'
                        variant='light'
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: product,
                          })}
                      >
                        <AiFillDelete fontSize="20px" />
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))
            }
          </ListGroup>
        </div>

        <div className='filters summary'>
          <span className='title'>Subtotal ({cart.length}) items</span>
          <span style={{ fontWeight: 700, fontSize: 20 }}>Total: ${total}</span>
          <Button type="button" disabled={cart.length === 0}>
            Proceed to Checkout
          </Button>
        </div>
      </div>
    </>
  )
}

export default Cart