import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Row, Col } from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { setUserLocalStorage } from "../helpers/authLocalStorage";
import { postLoginUser } from "../helpers/authAxios";
import { useForm } from "../hooks/useForm";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { handleLogin } = useContext(AppContext);
  const [validated, setValidated] = useState(false);

  const initialValue = {
    email: "",
    password: "",
  };
  const { formValues, onChangeInput, onFormReset } = useForm(initialValue);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);

    if (form.checkValidity()) {
      const data = await postLoginUser(formValues);

      if (!data) {
        return;
      }

      const { user, token } = data;
      const userResult = {
        _id: user._id,
        name: user.name,
        lastname: user.lastname,
        email: user.email,
        type: user.role_id.name,
        token,
      };

      handleLogin(userResult);
      setUserLocalStorage(userResult);
      onFormReset();
      navigate("/dashboard", {
        replace: true,
      });
    }
  };

  return (
    <div className="container py-5">
      <Row className="justify-content-md-center">
        <Col md={4}>
          <h2>Iniciar Sesión</h2>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="validationFormik01" className="mt-2">
              <Form.Label>Correo :</Form.Label>
              <Form.Control
                type="email"
                placeholder="Correo electronico"
                name="email"
                value={formValues.email}
                onChange={onChangeInput}
                required
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="validationFormik02" className="mt-2">
              <Form.Label>Contraseña :</Form.Label>
              <Form.Control
                type="password"
                placeholder="Contraseña"
                name="password"
                value={formValues.password}
                onChange={onChangeInput}
                required
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" className="mt-2" type="submit">
              Iniciar
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};
