import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

export const PublicRouter = ({ children }) => {
  const { state } = useContext(AppContext);

  if (state.auth?.token) {
    console.log("PUBLIC");
    console.log(state);
    return <Navigate to={"/dashboard"} />;
  } else {
    return children;
  }
};

PublicRouter.propTypes = {
  children: PropTypes.element,
};
