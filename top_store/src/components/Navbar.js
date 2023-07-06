import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form'
import './components.css'
import { Link } from 'react-router-dom';
import ShoppingCart from './ShoppingCart';
import SignInModal from './SignIn';
import CreateUserModal from './CreateUserModal';

const NavigationBar = (props) => {
  console.log(JSON.stringify(props))
    return (
    <Navbar Navbar fixed="top" bg="light" expand="lg">
      <Container>
        <Navbar.Brand><Link to={"/"} style={{ textDecoration: 'none' }}><div style={{color:'var(--bs-navbar-color)'}}>Smart Store</div></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
          <NavDropdown title="Sign In" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"><SignInModal/>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"><CreateUserModal/>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown>
            <Nav className="justify-content-end">
              <Link to="shoppingcartview"><ShoppingCart count={props.cartCount}/></Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default NavigationBar;
