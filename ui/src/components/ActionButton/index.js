import React, { Fragment } from "react";
import Button from "react-bootstrap/Button";
import Fab from "../common/Fab";

const ActionButton = ({ isLoggedIn, onClick, isPost }) => {
  return (
    <div className="d-flex justify-content-center">
      <Button
        className="mr-3 hide-below-medium"
        style={isPost ? { maxWidth: "40vw" , marginBottom:"10vh"} : undefined}
        block={isPost}
        onClick={onClick}
      >
        {isLoggedIn ? (isPost ? "Save" : "Create New Recipe") : "Join"}
      </Button>
      {isLoggedIn && <Fab type={isPost ? "post" : "plus"} onClick={onClick} />}
    </div>
  );
};

export default ActionButton;
