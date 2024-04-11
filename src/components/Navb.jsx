import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { removeUserLocalStorage } from "../helpers/authLocalStorage";
import { Permission } from "./Permission";
import { roles } from "../data/data";

export const Navb = () => {
  const navigate = useNavigate();
  const { state, handleLogout } = useContext(AppContext);

  const onLogout = () => {
    handleLogout();
    removeUserLocalStorage();

    navigate("/login", {
      replace: true,
    });
  };

  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={NavLink} to={"/products"}>
          <i className="fa-solid fa-user-tie"></i> Hola {state.auth?.name} !
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Permission type={roles.ADMIN_ROLE}>
              <Nav.Link as={NavLink} to={"/users"}>
                Usuarios
              </Nav.Link>
            </Permission>
            {/* <Nav.Link as={NavLink} to={"/registers"}>
              Registros
            </Nav.Link> */}
            <Nav.Link as={NavLink} to={"/products"}>
              Productos
            </Nav.Link>

            <Permission type={roles.ADMIN_ROLE}>
              <Nav.Link as={NavLink} to={"/brands"}>
                Marcas
              </Nav.Link>
            </Permission>
            <Permission type={roles.ADMIN_ROLE}>
              <Nav.Link as={NavLink} to={"/models"}>
                Modelos
              </Nav.Link>
            </Permission>
            <Permission type={roles.ADMIN_ROLE}>
              <Nav.Link as={NavLink} to={"/colors"}>
                Colores
              </Nav.Link>
            </Permission>
            <Permission type={roles.ADMIN_ROLE}>
              <Nav.Link as={NavLink} to={"/roles"}>
                Roles
              </Nav.Link>
            </Permission>
            <Permission type={roles.ADMIN_ROLE}>
              <Nav.Link as={NavLink} to={"/sizes"}>
                Tallas
              </Nav.Link>
            </Permission>
          </Nav>

          <Button variant="secondary" onClick={onLogout}>
            Salir
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
