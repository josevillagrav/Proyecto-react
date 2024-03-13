import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { CartWidget } from "./CartWidget";

export const NavBar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Tienda de juegos</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Consolas</Nav.Link>
          <Nav.Link href="#features">Juegos</Nav.Link>
          <Nav.Link href="#pricing">Figuras</Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  );
};
