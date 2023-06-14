import React, { useState } from "react";
import { Card, Row, Col, Button, InputGroup, FormControl } from "react-bootstrap";
import Rating from './Rating';
import { FaStar } from 'react-icons/fa';


const DisplayProducts = (props) => {

  const { products } = props;

  return (
    <div className="">
      {products.map((product) => (
        <div className="" key={product.id}>
          <Card className='border-0'>
            <Card.Body>
              <Row>
                <Col lg='4'>
                  <Card.Img style={{ width: '60%' }} src={product.image} alt={product.name} />
                </Col>
                <Col lg='4'>
                  <Card.Title style={{ height: 12, fontSize: '1rem', fontWeight: 'bold' }}>{product.name}</Card.Title>
                  <Card.Text style={{ textAlign: 'justify' }}>
                    <br />
                    {product.description}
                  </Card.Text>
                  <Rating
                    style={{ marginTop: 10 }}
                    emptySymbol={<FaStar className="text-secondary" />}
                    fullSymbol={<FaStar className="text-warning" />}
                    fractions={0}
                    initialRating={product.rating}
                    readonly
                  />
                </Col>
                <Col lg='4'>
                  <Row>
                    <Card.Text style={{ fontSize: 30, fontWeight: 'bold' }}><strong>${product.price}</strong></Card.Text>
                  </Row>
                  <Row className="d-flex justify-content-center">
                    <Button style={{ marginTop: 28 }} variant="primary" className="col-6">
                      Add to Cart
                    </Button>
                    <Row style={{ marginTop: 10 }} className="d-flex justify-content-center">
                      <InputGroup>
                        <InputGroup.Prepend>
                          <InputGroup.Text>Items in Cart:</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                          style={{ width: 60, marginTop: 10 }}
                          id={`quantity-${product.id}`}
                          type='number'
                          min='0'
                          // value={cart[product.id] || 0}
                          // onChange={(event) => updateCartQuantity(product, parseInt(event.target.value))}
                        />
                      </InputGroup>
                    </Row>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default DisplayProducts;