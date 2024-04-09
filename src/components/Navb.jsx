import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { NavLink, useNavigate } from "react-router-dom";

export const Navb = () => {
  const navigate = useNavigate();

  const onLogout = () => {
    navigate("/login", {
      replace: true,
    });
  };

  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Footlose</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to={"/users"}>
              Usuarios
            </Nav.Link>
            <Nav.Link as={NavLink} to={"/registers"}>
              Registros
            </Nav.Link>
            <Nav.Link as={NavLink} to={"/products"}>
              Productos
            </Nav.Link>
            <Nav.Link as={NavLink} to={"/brands"}>
              Marcas
            </Nav.Link>
            <Nav.Link as={NavLink} to={"/models"}>
              Modelos
            </Nav.Link>
            <Nav.Link as={NavLink} to={"/colors"}>
              Colores
            </Nav.Link>
            <Nav.Link as={NavLink} to={"/roles"}>
              Roles
            </Nav.Link>
          </Nav>
          <Button variant="secondary" onClick={onLogout}>
            Salir
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
