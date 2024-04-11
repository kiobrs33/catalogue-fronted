import Spinner from "react-bootstrap/Spinner";

export const Load = () => {
  return (
    <div className="d-flex justify-content-center align-item-center">
      <Spinner animation="grow" variant="success" className="m-3" />
      <Spinner animation="grow" variant="danger" className="m-3" />
      <Spinner animation="grow" variant="warning" className="m-3" />
    </div>
  );
};
