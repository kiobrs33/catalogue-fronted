import { useContext, useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { AppContext } from "../../context/AppContext";
import { clientApi } from "../../api/clientApi";
import PropTypes from "prop-types";

export const EditRole = ({ show, rowData, handleClose }) => {
  const { state, handleUpdateRole } = useContext(AppContext);
  const [validated, setValidated] = useState(false);
  // const [show, setShow] = useState(false);

  const initialFormValues = {
    name: "",
  };
  const [formData, setFormData] = useState(initialFormValues);

  useEffect(() => {
    setFormData(rowData);
  }, [rowData]);

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const handleReset = () => {
    setFormData(initialFormValues);
  };

  const { name } = formData;

  const handleHide = () => {
    handleReset();
    setValidated(false);
    handleClose();
  };

  const updateRole = async (roleValue) => {
    try {
      const { data } = await clientApi.put(
        `/roles/${roleValue._id}`,
        roleValue,
        {
          headers: {
            "x-token": state.auth?.token,
          },
        }
      );

      handleUpdateRole(data.role);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);

    if (form.checkValidity()) {
      updateRole(formData);
      handleClose();
    }
  };

  return (
    <Modal show={show} onHide={handleHide} size="lg">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>
            <i className="fa-solid fa-user"></i> Editar role
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="validationNroCard" className="mb-2">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombre role"
              name="name"
              defaultValue={name}
              onChange={handleChange}
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
  );
};

EditRole.defaultProps = {
  rowData: {
    _id: "",
    name: "",
  },
};

EditRole.propTypes = {
  show: PropTypes.bool,
  rowData: PropTypes.object,
  handleClose: PropTypes.func,
};
