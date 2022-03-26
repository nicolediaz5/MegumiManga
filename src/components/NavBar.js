import  Navbar  from "react-bootstrap/Navbar";
import  Container  from "react-bootstrap/Container";

import  Nav  from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "./CartWidget";

import './style.css'
import { NavLink } from "react-router-dom";
 

function NavBar() {
  return (
   
  
    <Navbar collapseOnSelect expand="lg" className="styleNav" >
  <Container>

 <Navbar.Brand>
   <NavLink to="/"><img src="https://i.ibb.co/0mM71v6/Logo1.png" alt="Logo1" border="0" className="logostyle"/> </NavLink>
   
 
 </Navbar.Brand>
  
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#mangas">Mangas</Nav.Link>
      <Nav.Link href="#figuras">Figuras Colecionables</Nav.Link>
      <NavDropdown title="Demográfias" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Josei</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Kodomo</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Seinen</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">Shojo</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.5">Shonen</NavDropdown.Item>
      </NavDropdown>
      
    </Nav>
    <Nav>
      <Nav.Link href="#cuenta">Mi cuenta</Nav.Link>
      <NavLink to="/carrito">
      <CartWidget /> Mi Carrito
      </NavLink>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default NavBar