import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { setUserLocalStorage } from "../helpers/authLocalStorage";
import { postLoginUser } from "../helpers/authAxios";
import { useForm } from "../hooks/useForm";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { handleLogin } = useContext(AppContext);

  const initialValue = {
    email: "",
    password: "",
  };
  const { formValues, onChangeInput, onFormReset } = useForm(initialValue);

  const onSubmit = async (event) => {
    event.preventDefault();

    const data = await postLoginUser(formValues);

    if (!data) {
      return;
    }

    const { user, token } = data;
    const userResult = {
      id: user._id,
      name: user.name,
      lastname: user.lastname,
      email: user.email,
      token,
    };

    handleLogin(userResult);
    setUserLocalStorage(userResult);
    onFormReset();
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
          <Form.Control
            type="email"
            name="email"
            value={formValues.email}
            onChange={onChangeInput}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="validationFormik02" className="mt-2">
          <Form.Label>Contraseña :</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formValues.password}
            onChange={onChangeInput}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Button variant="primary" className="mt-2" type="submit">
          Iniciar
        </Button>
      </Form>
    </div>
  );
};
