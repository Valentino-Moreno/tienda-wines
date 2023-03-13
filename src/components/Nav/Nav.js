import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Nav.css";
import { Link } from "react-router-dom";
import logomonta from "../../img/logomonta.svg";
import Categorias from "../Categorias/Categorias";
import CartWidget from "../CartWidget/CartWidget";


const Barra = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container className="text-uppercase fw-bolder">
        <Navbar.Brand as={Link} to="/">
          <img src={logomonta} alt="logo"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Inicio
            </Nav.Link>
            <NavDropdown title="Categorias" id="collasible-nav-dropdown">
              <Categorias />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Link style={{textDecoration:'None'}} to='/carrito'><CartWidget/></Link>
      </Container>
    </Navbar>
  );
};

export default Barra;
