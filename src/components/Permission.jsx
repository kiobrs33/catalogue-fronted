import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import PropTypes from "prop-types";

export const Permission = ({ type, children }) => {
  const { state } = useContext(AppContext);

  if (state.auth.type == type) {
    return <>{children}</>;
  }

  return <></>;
};

Permission.propTypes = {
  type: PropTypes.string,
  children: PropTypes.element,
};
