import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink} from 'react-router-dom'
const NavbarComponent = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          Employee
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to ='/home'>Home</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={NavLink} to ='/'>
              LogIn
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavbarComponent;
