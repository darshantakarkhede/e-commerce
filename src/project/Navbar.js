import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


function NavbarMenu() {
  let productData = useSelector(state => state)
  console.log("productData",productData)
  return (
    <div><Navbar bg="primary" data-bs-theme="dark" fixed="Top">
    <Container>
      <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/Cart">Cart({productData.product.length})</Nav.Link>
      </Nav>
    </Container>
  </Navbar></div>
  )
}

export default NavbarMenu