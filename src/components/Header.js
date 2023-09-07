import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import { Dropdown, Badge, Button, FormControl } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { CartState } from '../context/Context';
import { AiFillDelete } from 'react-icons/ai';
import techTempleLogo from '../assets/images/techTempleLogo.png';

function Header() {

    const {
        state: { cart },
        dispatch,
        productDispatch,
    } = CartState();


    return (
      <Navbar bg='dark' expand="lg" variant='dark'
      style={{ backgroundImage: 'linear-gradient(to right, #0066CC, #000000)' }}>
      <Container>
          <Navbar.Brand href="/">
              <img
                  src={techTempleLogo}
                  style={{ width: 60 }} />
              <strong>Tech Temple</strong>
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                  <Nav.Link as={NavLink} to="/mobile" activeClassName="selected">
                      Mobile
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/computing" activeClassName="selected">
                      Computing
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/appliances" activeClassName="selected">
                      Appliances
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/videogames" activeClassName="selected">
                      Videogames
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/accesories" activeClassName="selected">
                      Accesories
                  </Nav.Link>
              </Nav>
          </Navbar.Collapse>
          <Nav>
              <Dropdown alignRight>
                  <Dropdown.Toggle variant="success">
                      <FaShoppingCart color='white' fontSize='25px' />
                      <Badge bg='none'>{cart.length}</Badge>
                  </Dropdown.Toggle>
                  <Dropdown.Menu style={{ minWidth: 370 }}>
                      {cart.length > 0 ? (
                          <>
                              {cart.map((product) => (
                                  <span className='cartitem' key={product.id}>
                                      <img src={product.image} className='cartItemImg' alt={product.name} />
                                      <div className='cartItemDetail'>
                                          <span>{product.name}</span>
                                          <span>${product.price.toLocaleString()}</span>
                                      </div>
                                      <AiFillDelete
                                          fontSize='20px'
                                          style={{ cursor: 'pointer' }}
                                          onClick={() =>
                                              dispatch({
                                                  type: 'REMOVE_FROM_CART',
                                                  payload: product,
                                              })
                                          }
                                      />
                                  </span>
                              ))}
                              <Link to='/cart'>
                                  <Button style={{ width: '95%', margin: "0 10px" }}>
                                      Go to Cart
                                  </Button>
                              </Link>
                          </>
                      ) : (
                          <span style={{ padding: 10 }}>Cart is Empty!</span>
                      )}
                  </Dropdown.Menu>
              </Dropdown>
          </Nav>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
  </Navbar>
    );
}

export default Header;