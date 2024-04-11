import { useContext, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { AppContext } from "../../context/AppContext";
import { useForm } from "../../hooks/useForm";
import { clientApi } from "../../api/clientApi";

export const CreateModel = () => {
  const { state, handleCreateModel } = useContext(AppContext);
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);

  const { formValues, onChangeInput, onFormReset } = useForm({
    name: "",
  });

  const { name } = formValues;

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
      postModel(formValues);
      handleClose();
    }
  };

  const postModel = async (modelValue) => {
    try {
      const { data } = await clientApi.post("/models", modelValue, {
        headers: {
          "x-token": state.auth?.token,
        },
      });

      handleCreateModel(data.model);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="d-flex justify-content-end">
        <Button variant="primary" onClick={handleShow}>
          <i className="fa-solid fa-circle-plus"></i> Nuevo Modelo
        </Button>
      </div>

      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>
              <i className="fa-solid fa-square-plus"></i> Nuevo Modelo
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group controlId="validationNroCard" className="mb-2">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre del color"
                name="name"
                value={name}
                onChange={onChangeInput}
                size="sm"
                required
              />
            </Form.Group>
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
