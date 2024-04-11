import { useContext, useEffect, useState } from "react";
import { Button, Form, Modal, Row, Col } from "react-bootstrap";
import { AppContext } from "../../context/AppContext";
import { useForm } from "../../hooks/useForm";
import { clientApi } from "../../api/clientApi";

export const CreateUser = () => {
  const { state, handleCreateUser, handleSetRoles, handleSetUsers } =
    useContext(AppContext);
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);

  const initValues = {
    name: "",
    lastname: "",
    email: "",
    password: "",
    role_id: "",
  };
  const { formValues, onChangeInput, onFormReset } = useForm(initValues);

  const { name, lastname, email, password, role_id } = formValues;

  useEffect(() => {
    if (show) {
      getRoles();
    }
  }, [show]);

  const getUsers = async () => {
    try {
      const { data } = await clientApi.get("/users", {
        headers: {
          "x-token": state.auth?.token,
        },
      });

      handleSetUsers(data.users);
    } catch (error) {
      console.log(error);
    }
  };

  const getRoles = async () => {
    try {
      const { data } = await clientApi.get("/roles", {
        headers: {
          "x-token": state.auth?.token,
        },
      });

      handleSetRoles(data.roles);
    } catch (error) {
      console.log(error);
    }
  };

  const handleShow = () => setShow(true);

  const handleClose = () => {
    onFormReset();
    setValidated(false);
    setShow(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);

    if (form.checkValidity()) {
      postUser(formValues);
      handleClose();
    }
  };

  const postUser = async (userValue) => {
    try {
      const { data } = await clientApi.post("/users", userValue, {
        headers: {
          "x-token": state.auth?.token,
        },
      });

      // handleCreateUser(data.user);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="d-flex justify-content-end">
        <Button variant="primary" onClick={handleShow}>
          <i className="fa-solid fa-circle-plus"></i> Nueva Usuario
        </Button>
      </div>

      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>
              <i className="fa-solid fa-user"></i> Nuevo Talla
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Form.Group as={Col} controlId="nameUser" className="mb-2">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nombres"
                  name="name"
                  value={name}
                  onChange={onChangeInput}
                  size="sm"
                  required
                />
              </Form.Group>
              <Form.Group as={Col} controlId="lastNameUser" className="mb-2">
                <Form.Label>Apellidos</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Apellidos"
                  name="lastname"
                  value={lastname}
                  onChange={onChangeInput}
                  size="sm"
                  required
                />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} controlId="emailUser" className="mb-2">
                <Form.Label>Correo Electronico</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Correo"
                  name="email"
                  value={email}
                  onChange={onChangeInput}
                  size="sm"
                  required
                />
              </Form.Group>
              <Form.Group as={Col} controlId="passwordUser" className="mb-2">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Contraseña"
                  name="password"
                  value={password}
                  onChange={onChangeInput}
                  size="sm"
                  required
                />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} controlId="roleUser" className="mb-2">
                <Form.Label>Role</Form.Label>
                <Form.Control
                  aria-label="Default select example"
                  as="select"
                  type="select"
                  name="role_id"
                  value={role_id}
                  onChange={onChangeInput}
                  size="sm"
                  required
                >
                  <option value="">Seleccionar</option>
                  {state.roles.map((role) => {
                    return (
                      <option key={role._id} value={role._id}>
                        {role.name}
                      </option>
                    );
                  })}
                </Form.Control>
              </Form.Group>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" size="sm" onClick={handleClose}>
              Cerrar
            </Button>
            <Button variant="primary" size="sm" type="submit">
              Guardar
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};
