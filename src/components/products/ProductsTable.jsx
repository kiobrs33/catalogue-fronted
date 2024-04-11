import Table from "react-bootstrap/Table";
import { clientApi } from "../../api/clientApi";
import { AppContext } from "../../context/AppContext";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { EditProduct } from "./EditProduct";
import { Load } from "../Load";

export const ProducsTable = () => {
  const { state, handleSetProducts, handleDeleteProduct } =
    useContext(AppContext);

  const [rowData, setRowData] = useState({});
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getProducts();
  }, []);

  const handleCloseModalEdit = () => {
    setRowData({});
    setShowModalEdit(false);
  };

  const handleShowModalEdit = (role) => {
    setRowData(role);
    setShowModalEdit(true);
  };

  const deleteProduct = async (idProduct) => {
    try {
      await clientApi.delete(`/products/${idProduct}`, {
        headers: {
          "x-token": state.auth?.token,
        },
      });

      handleDeleteProduct(idProduct);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = (idProduct) => {
    deleteProduct(idProduct);
  };

  const getProducts = async () => {
    try {
      setIsLoading(true);
      const { data } = await clientApi.get("/products", {
        headers: {
          "x-token": state.auth?.token,
        },
      });

      handleSetProducts(data.products);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <EditProduct
        show={showModalEdit}
        rowData={rowData}
        handleClose={handleCloseModalEdit}
      />

      {isLoading ? (
        <Load />
      ) : (
        <>
          <Table className="my-4 table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Productos</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {state.products.map((product) => {
                return (
                  <tr key={product._id}>
                    <td>
                      <span className="badge text-bg-primary">
                        <i className="fa-solid fa-user"></i>
                      </span>
                    </td>
                    <td>{product.name}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-secondary btn-sm me-2"
                        onClick={() => handleShowModalEdit(product)}
                      >
                        <i className="fa-solid fa-pen-to-square"></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(product._id)}
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </>
      )}
    </>
  );
};
