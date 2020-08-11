import React, { Fragment } from "react";
import Button from "react-bootstrap/Button";
import Fab from "../common/Fab";

const ActionButton = ({ isLoggedIn, onClick, isPost }) => {
  return (
    <Fragment>
      <Button className="mr-3 hide-below-medium" onClick={onClick}>
        {isLoggedIn ? (isPost ? "Save" : "Create New Recipe") : "Join"}
      </Button>
      {isLoggedIn && <Fab type={isPost ? "post" : "plus"} onClick={onClick} />}
    </Fragment>
  );
};

export default ActionButton;
