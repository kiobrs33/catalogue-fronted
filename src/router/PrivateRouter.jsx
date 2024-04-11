import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

export const PrivateRouter = ({ children }) => {
  const { state } = useContext(AppContext);

  if (state.auth?.token) {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};

PrivateRouter.propTypes = {
  children: PropTypes.element,
};
