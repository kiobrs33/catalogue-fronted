import Table from "react-bootstrap/Table";
import { clientApi } from "../../api/clientApi";
import { AppContext } from "../../context/AppContext";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { EditSize } from "./EditSize";
import { Load } from "../Load";

export const SizesTable = () => {
  const { state, handleSetSizes, handleDeleteSize } = useContext(AppContext);

  const [rowData, setRowData] = useState({});
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getSizes();
  }, []);

  const handleCloseModalEdit = () => {
    setRowData({});
    setShowModalEdit(false);
  };

  const handleShowModalEdit = (role) => {
    setRowData(role);
    setShowModalEdit(true);
  };

  const deleteSize = async (idSize) => {
    try {
      await clientApi.delete(`/sizes/${idSize}`, {
        headers: {
          "x-token": state.auth?.token,
        },
      });

      handleDeleteSize(idSize);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = (idSize) => {
    deleteSize(idSize);
  };

  const getSizes = async () => {
    try {
      setIsLoading(true);
      const { data } = await clientApi.get("/sizes", {
        headers: {
          "x-token": state.auth?.token,
        },
      });

      handleSetSizes(data.sizes);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <EditSize
        show={showModalEdit}
        rowData={rowData}
        handleClose={handleCloseModalEdit}
      />

      {isLoading ? (
        <Load />
      ) : (
        <Table className="my-4 table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Talla</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {state.sizes.map((size) => {
              return (
                <tr key={size._id}>
                  <td>
                    <span className="badge text-bg-primary">
                      <i className="fa-solid fa-user"></i>
                    </span>
                  </td>
                  <td>{size.name}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-secondary btn-sm me-2"
                      onClick={() => handleShowModalEdit(size)}
                    >
                      <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(size._id)}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}
    </>
  );
};
