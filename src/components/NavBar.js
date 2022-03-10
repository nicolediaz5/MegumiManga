
import  Container  from "react-bootstrap/Container";
import  Navbar  from "react-bootstrap/Navbar";
import  Nav  from "react-bootstrap/Nav";


 

function NavBar() {
  return (
   
  
    <Navbar collapseOnSelect expand="lg" >
  <Container>
  <Navbar.Brand href="#home">Megumi Manga</Navbar.Brand>
  
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#mangas">Mangas</Nav.Link>
      <Nav.Link href="#figuras">Figuras Colecionables</Nav.Link>
      <Nav.Link href="#figuras">Comics</Nav.Link>
      
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