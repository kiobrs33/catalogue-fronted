import Table from "react-bootstrap/Table";
import { clientApi } from "../../api/clientApi";
import { AppContext } from "../../context/AppContext";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { EditModel } from "./EditModel";
import { Load } from "../Load";

export const ModelsTable = () => {
  const { state, handleSetModels, handleDeleteModel } = useContext(AppContext);

  const [rowData, setRowData] = useState({});
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log("load");
    getModels();
  }, []);

  const handleCloseModalEdit = () => {
    setRowData({});
    setShowModalEdit(false);
  };

  const handleShowModalEdit = (color) => {
    setRowData(color);
    setShowModalEdit(true);
  };

  const deleteModel = async (idModel) => {
    try {
      await clientApi.delete(`/models/${idModel}`, {
        headers: {
          "x-token": state.auth?.token,
        },
      });

      handleDeleteModel(idModel);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = (idModel) => {
    deleteModel(idModel);
  };

  const getModels = async () => {
    try {
      setIsLoading(true);
      const { data } = await clientApi.get("/models", {
        headers: {
          "x-token": state.auth?.token,
        },
      });

      handleSetModels(data.models);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <EditModel
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
              <th>Color</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {state.models.map((model) => {
              return (
                <tr key={model._id}>
                  <td>
                    <span className="badge text-bg-primary">
                      <i className="fa-solid fa-user"></i>
                    </span>
                  </td>
                  <td>{model.name}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-secondary btn-sm me-2"
                      onClick={() => handleShowModalEdit(model)}
                    >
                      <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(model._id)}
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
