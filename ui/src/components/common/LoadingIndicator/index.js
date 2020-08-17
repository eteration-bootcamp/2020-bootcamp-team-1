import React from "react";
import Spinner from "react-bootstrap/Spinner";

const LoadingIndicator = ({ fullScreen = false }) => {
  return (
    <div
      className="d-flex layout m-0 justify-content-center align-items-center"
      style={
        fullScreen
          ? { width: "100vw", height: "100vh" }
          : { width: "100%", textAlign: "center" }
      }
    >
      <Spinner animation="border" role="status" />
    </div>
  );
};

export default LoadingIndicator;
