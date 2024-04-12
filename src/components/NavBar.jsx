import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

import { CartWidget } from "./CartWidget";

export const NavBar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        {/* <link to="/"> */}
        <NavLink to="/">
          <Navbar.Brand>Tienda de juegos</Navbar.Brand>
        </NavLink>
        {/* </link> */}
        <Nav className="me-auto">
          <Nav.Link to="/category/consolas" as={NavLink}>
            Consolas
          </Nav.Link>
          <Nav.Link to="/category/juegos" as={NavLink}>
            Juegos
          </Nav.Link>
          <Nav.Link to="/category/figuras" as={NavLink}>
            Figuras
          </Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  );
};
