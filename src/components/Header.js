import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function Header() {
  return (
    <Navbar bg="primary" expand="lg" className="px-5">
      <LinkContainer to="/" className="pe-3">
        <Navbar.Brand>Place Destination</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <LinkContainer to="/">
            <Navbar.Brand>Home</Navbar.Brand>
          </LinkContainer>
          <LinkContainer to="/about">
            <Navbar.Brand>About</Navbar.Brand>
          </LinkContainer>
          <LinkContainer to="/contact">
            <Navbar.Brand>Contact</Navbar.Brand>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Header;
