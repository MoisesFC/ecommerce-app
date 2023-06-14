import React from 'react';
import { Navbar, Container, Nav, Dropdown, Badge, Button } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { CartState } from '../context/Context';
import { AiFillDelete } from 'react-icons/ai';
import techTempleLogo from '../assets/images/techTempleLogo.png';

const Header = () => {
  const {
    state: { cart },
    dispatch,
    productDispatch,
  } = CartState();

  return (
    <Navbar bg='dark' variant='dark' style={{
      height: 80,
      backgroundImage: 'linear-gradient(to right, #0066CC, #000000)',
    }}>
      <Container>
        <Navbar.Brand as={Link} to="/" style={{ color: 'white', fontWeight: 'bold', textDecoration: 'none' }}>
          <img
            src={techTempleLogo}
            alt="Logo"
            className="logo-img"
            style={{ width: 60, paddingRight: 7 }}
          />
          Tech Temple
        </Navbar.Brand>
        <Nav.Link as={Link} to="/mobile">
          Mobile
        </Nav.Link>
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
      </Container>
    </Navbar>
  );
}

export default Header;
