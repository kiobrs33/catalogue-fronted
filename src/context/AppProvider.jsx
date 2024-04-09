import { useReducer } from "react";
import { AppContext } from "./AppContext";
import PropTypes from "prop-types";
import { appReducer, initialState } from "../reducer/appReducer";
import { types } from "../types/types";

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const handleLogin = (user) => {
    dispatch({
      type: types.loginUser,
      payload: { user },
    });
  };

  const handleLogout = () => {
    dispatch({
      type: types.logoutUser,
    });
  };

  const handleCreateRole = (role) => {
    dispatch({
      type: types.createRole,
      payload: { role },
    });
  };

  const handleUpdateRole = (idRole) => {
    dispatch({
      type: types.updateRole,
      payload: { idRole },
    });
  };

  const handleDeleteRole = (idRole) => {
    dispatch({
      type: types.createRole,
      payload: { idRole },
    });
  };

  return (
    <AppContext.Provider
      value={{
        state,
        handleLogin,
        handleLogout,
        handleCreateRole,
        handleUpdateRole,
        handleDeleteRole,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.element,
};
