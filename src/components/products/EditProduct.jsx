import { useContext, useEffect, useState } from "react";
import { Button, Form, Modal, Row, Col } from "react-bootstrap";
import { AppContext } from "../../context/AppContext";
import { clientApi } from "../../api/clientApi";
import PropTypes from "prop-types";

export const EditProduct = ({ show, rowData, handleClose }) => {
  const {
    state,
    handleUpdateProduct,
    handleSetModels,
    handleSetBrands,
    handleSetColors,
    handleSetSizes,
  } = useContext(AppContext);
  const [validated, setValidated] = useState(false);

  const initialFormValues = {
    _id: "",
    name: "",
    sale_price: 0,
    brand_id: "",
    model_id: "",
    color_id: "",
    size_id: "",
  };
  const [formData, setFormData] = useState(initialFormValues);

  useEffect(() => {
    setFormData(rowData);
  }, [rowData]);

  useEffect(() => {
    if (show) {
      getColors();
      getBrands();
      getModels();
      getSizes();
    }
  }, [show]);

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

  const { name, sale_price, brand_id, model_id, color_id, size_id } = formData;

  const handleHide = () => {
    handleReset();
    setValidated(false);
    handleClose();
  };

  const updateProduct = async (productValue) => {
    try {
      const { data } = await clientApi.put(
        `/products/${productValue._id}`,
        productValue,
        {
          headers: {
            "x-token": state.auth?.token,
          },
        }
      );

      handleUpdateProduct(data.product);
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
      updateProduct(formData);
      handleClose();
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

  return (
    <Modal show={show} onHide={handleHide} size="lg">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>
            <i className="fa-solid fa-user"></i> Editar Producto
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Form.Group controlId={`nameProduct-xd`} className="mb-2" as={Col}>
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre del producto"
                name="name"
                defaultValue={name}
                onChange={handleChange}
                size="sm"
                required
              />
            </Form.Group>
            <Form.Group
              controlId={`salePrecioProduct-xd`}
              className="mb-2"
              as={Col}
            >
              <Form.Label>Precio de Venta</Form.Label>
              <Form.Control
                type="number"
                placeholder="Precio"
                name="sale_price"
                defaultValue={sale_price}
                onChange={handleChange}
                size="sm"
                required
              />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} controlId={`brandProduct-xd`} className="mb-2">
              <Form.Label>Marca</Form.Label>
              <Form.Control
                aria-label="Default select example"
                as="select"
                type="select"
                name="brand_id"
                defaultValue={brand_id}
                onChange={handleChange}
                size="sm"
                required
              >
                {state.brands.map((brand) => {
                  if (brand._id === brand_id) {
                    return (
                      <option key={brand._id} value={brand._id} selected>
                        {brand.name}
                      </option>
                    );
                  }

                  return (
                    <option key={brand._id} value={brand._id}>
                      {brand.name}
                    </option>
                  );
                })}
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} controlId={`modelProduct-xd`} className="mb-2">
              <Form.Label>Modelo</Form.Label>
              <Form.Control
                aria-label="Default select example"
                as="select"
                type="select"
                name="model_id"
                defaultValue={model_id}
                onChange={handleChange}
                size="sm"
                required
              >
                {state.models.map((model) => {
                  if (model._id === model_id) {
                    return (
                      <option key={model._id} value={model._id} selected>
                        {model.name}
                      </option>
                    );
                  }

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
            <Form.Group as={Col} controlId={`colorProduct-xd`} className="mb-2">
              <Form.Label>Color</Form.Label>
              <Form.Control
                aria-label="Default select example"
                as="select"
                type="select"
                name="color_id"
                defaultValue={color_id}
                onChange={handleChange}
                size="sm"
                required
              >
                {state.colors.map((color) => {
                  if (color._id === color_id) {
                    return (
                      <option key={color._id} value={color._id} selected>
                        {color.name}
                      </option>
                    );
                  }
                  return (
                    <option key={color._id} value={color._id}>
                      {color.name}
                    </option>
                  );
                })}
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} controlId={`sizeProduct-xd`} className="mb-2">
              <Form.Label>Talla</Form.Label>
              <Form.Control
                aria-label="Default select example"
                as="select"
                type="select"
                name="size_id"
                defaultValue={size_id}
                onChange={handleChange}
                size="sm"
                required
              >
                {state.sizes.map((size) => {
                  if (size._id === size_id) {
                    return (
                      <option key={size._id} value={size._id}>
                        {size.name}
                      </option>
                    );
                  }
                  return (
                    <option key={size._id} value={size._id}>
                      {size.name}
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
  );
};

EditProduct.defaultProps = {
  rowData: {
    _id: "",
    name: "",
  },
};

EditProduct.propTypes = {
  show: PropTypes.bool,
  rowData: PropTypes.object,
  handleClose: PropTypes.func,
};
