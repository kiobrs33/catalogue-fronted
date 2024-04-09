import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    navigate("/dashboard", {
      replace: true,
    });
  };

  return (
    <div className="container py-5">
      <h2>Iniciar Sesión</h2>
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="validationFormik01" className="mt-2">
          <Form.Label>Correo :</Form.Label>
          <Form.Control type="text" name="firstName" />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="validationFormik02" className="mt-2">
          <Form.Label>Contraseña :</Form.Label>
          <Form.Control type="text" name="lastName" />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Button variant="primary" className="mt-2" type="submit">
          Iniciar
        </Button>
      </Form>
    </div>
  );
};
