
import  Container  from "react-bootstrap/Container";
import  Navbar  from "react-bootstrap/Navbar";
import  Nav  from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown"

 

function NavBar() {
  return (
   
  
    <Navbar collapseOnSelect expand="lg" >
  <Container>
  <Navbar.Brand href="#home">Megumi Manga</Navbar.Brand>
  
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#mangas">Mangas</Nav.Link>
      <Nav.Link href="#figuras">Figuras Colecionables</Nav.Link>
      <NavDropdown title="Demográfias" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Josei</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Kodomo</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Seinen</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Shojo</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Shonen</NavDropdown.Item>
      </NavDropdown>
      
    </Nav>
    <Nav>
      <Nav.Link href="#cuenta">Mi cuenta</Nav.Link>
      <Nav.Link href="#memes">
        Mi Carrito
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default NavBar