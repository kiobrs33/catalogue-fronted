import { useContext, useEffect, useState } from "react";
import { Button, Form, Modal, Row, Col } from "react-bootstrap";
import { AppContext } from "../../context/AppContext";
import { clientApi } from "../../api/clientApi";

export const CreateProduct = () => {
  const {
    state,
    handleSetModels,
    handleSetBrands,
    handleSetColors,
    handleSetSizes,
    handleSetProducts,
  } = useContext(AppContext);
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);

  const initForm = {
    id: Date.now(),
    name: "",
    sale_price: 0,
    brand_id: "",
    model_id: "",
    color_id: "",
    size_id: "",
  };

  const [forms, setForms] = useState([initForm]);

  const handleShow = () => setShow(true);

  const handleClose = () => {
    setValidated(false);
    setShow(false);
    setForms([initForm]);
  };

  useEffect(() => {
    if (show) {
      getColors();
      getBrands();
      getModels();
      getSizes();
    }
  }, [show]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);

    if (form.checkValidity()) {
      postRegisterProducts(forms);
      handleClose();
    }
  };

  const postRegisterProducts = async (registerValue) => {
    registerValue = {
      date: new Date().toLocaleDateString(),
      user_id: state.auth.id,
      details: registerValue,
    };

    try {
      const { data } = await clientApi.post("/registers", registerValue, {
        headers: {
          "x-token": state.auth?.token,
        },
      });

      console.log(data);
      getProducts();
      // handleCreateSize(data.size);
    } catch (error) {
      console.log(error);
    }
  };

  const addFormFunc = () => {
    setForms([...forms, initForm]);
  };

  const handleChangeForm = (event, id) => {
    forms.map((item) => {
      if (item.id === id) {
        item[event.target.name] = event.target.value;
        return item;
      }
      return item;
    });

    setForms([...forms]);
  };

  const handleRemoveForm = (id) => {
    setForms([...forms.filter((item) => item.id !== id)]);
  };

  const getModels = async () => {
    try {
      const { data } = await clientApi.get("/models", {
        headers: {
          "x-token": state.auth?.token,
        },
      });

      handleSetModels(data.models);
    } catch (error) {
      console.log(error);
    }
  };

  const getBrands = async () => {
    try {
      const { data } = await clientApi.get("/brands", {
        headers: {
          "x-token": state.auth?.token,
        },
      });

      handleSetBrands(data.brands);
    } catch (error) {
      console.log(error);
    }
  };

  const getColors = async () => {
    try {
      const { data } = await clientApi.get("/colors", {
        headers: {
          "x-token": state.auth?.token,
        },
      });

      handleSetColors(data.colors);
    } catch (error) {
      console.log(error);
    }
  };

  const getSizes = async () => {
    try {
      const { data } = await clientApi.get("/sizes", {
        headers: {
          "x-token": state.auth?.token,
        },
      });

      handleSetSizes(data.sizes);
    } catch (error) {
      console.log(error);
    }
  };

  const getProducts = async () => {
    try {
      const { data } = await clientApi.get("/products", {
        headers: {
          "x-token": state.auth?.token,
        },
      });

      handleSetProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="d-flex justify-content-end">
        <Button variant="primary" onClick={handleShow}>
          <i className="fa-solid fa-circle-plus"></i> Nueva Registro
        </Button>
      </div>

      <Modal show={show} onHide={handleClose} size="lg">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>
              <i className="fa-solid fa-user"></i> Nuevo Producto
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="height-modal">
            <Button
              variant="primary"
              size="sm"
              onClick={addFormFunc}
              className="mb-3"
            >
              Agregar nuevo producto
            </Button>
            {forms.map((item) => {
              return (
                <div className="border rounded-3 p-3 mb-3" key={item.id}>
                  <Row>
                    <Form.Group
                      controlId={`nameProduct-${item.id}`}
                      className="mb-2"
                      as={Col}
                    >
                      <Form.Label>Nombre</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Nombre del producto"
                        name="name"
                        value={item.name}
                        onChange={(e) => handleChangeForm(e, item.id)}
                        size="sm"
                        required
                      />
                    </Form.Group>
                    <Form.Group
                      controlId={`nameProduct-${item.id}`}
                      className="mb-2"
                      as={Col}
                    >
                      <Form.Label>Precio de Venta</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Precio"
                        name="sale_price"
                        value={item.sale_price}
                        onChange={(e) => handleChangeForm(e, item.id)}
                        size="sm"
                        required
                      />
                    </Form.Group>
                  </Row>
                  <Row>
                    <Form.Group
                      as={Col}
                      controlId={`brandProduct-${item.id}`}
                      className="mb-2"
                    >
                      <Form.Label>Marca</Form.Label>
                      <Form.Control
                        aria-label="Default select example"
                        as="select"
                        type="select"
                        name="brand_id"
                        value={item.brand_id}
                        onChange={(e) => handleChangeForm(e, item.id)}
                        size="sm"
                        required
                      >
                        <option value="">Seleccionar</option>
                        {state.brands.map((brand) => {
                          return (
                            <option key={brand._id} value={brand._id}>
                              {brand.name}
                            </option>
                          );
                        })}
                      </Form.Control>
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      controlId={`modelProduct-${item.id}`}
                      className="mb-2"
                    >
                      <Form.Label>Modelo</Form.Label>
                      <Form.Control
                        aria-label="Default select example"
                        as="select"
                        type="select"
                        name="model_id"
                        value={item.model_id}
                        onChange={(e) => handleChangeForm(e, item.id)}
                        size="sm"
                        required
                      >
                        <option value="">Seleccionar</option>
                        {state.models.map((model) => {
                          return (
                            <option key={model._id} value={model._id}>
                              {model.name}
                            </option>
                          );
                        })}
                      </Form.Control>
                    </Form.Group>
                  </Row>
                  <Row>
                    <Form.Group
                      as={Col}
                      controlId={`colorProduct-${item.id}`}
                      className="mb-2"
                    >
                      <Form.Label>Color</Form.Label>
                      <Form.Control
                        aria-label="Default select example"
                        as="select"
                        type="select"
                        name="color_id"
                        value={item.color_id}
                        onChange={(e) => handleChangeForm(e, item.id)}
                        size="sm"
                        required
                      >
                        <option value="">Seleccionar</option>
                        {state.colors.map((color) => {
                          return (
                            <option key={color._id} value={color._id}>
                              {color.name}
                            </option>
                          );
                        })}
                      </Form.Control>
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      controlId={`sizeProduct-${item.id}`}
                      className="mb-2"
                    >
                      <Form.Label>Talla</Form.Label>
                      <Form.Control
                        aria-label="Default select example"
                        as="select"
                        type="select"
                        name="size_id"
                        value={item.size_id}
                        onChange={(e) => handleChangeForm(e, item.id)}
                        size="sm"
                        required
                      >
                        <option value="">Seleccionar</option>
                        {state.sizes.map((size) => {
                          return (
                            <option key={size._id} value={size._id}>
                              {size.name}
                            </option>
                          );
                        })}
                      </Form.Control>
                    </Form.Group>
                  </Row>
                  <Button
                    variant="danger"
                    size="sm"
                    className="mt-1"
                    onClick={() => handleRemoveForm(item.id)}
                  >
                    Eliminar
                  </Button>
                </div>
              );
            })}
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
