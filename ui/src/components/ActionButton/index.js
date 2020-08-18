import React from "react";
import Button from "react-bootstrap/Button";
import Fab from "../common/Fab";
import LoadingIndicator from "../common/LoadingIndicator";

const ActionButton = ({ isLoggedIn, onClick, isPost, isLoading = false }) => {
  return (
    <div className="d-flex justify-content-center">
      <Button
        className={isLoggedIn ? "mr-3 hide-below-medium" : undefined}
        style={isPost ? { maxWidth: "40vw", marginBottom: "10vh" } : undefined}
        disabled={isLoading}
        block={isPost}
        onClick={onClick}
      >
        {isLoggedIn ? (
          isPost ? (
            isLoading ? (
              <LoadingIndicator />
            ) : (
              "Save"
            )
          ) : (
            "Create New Recipe"
          )
        ) : (
          "Join"
        )}
      </Button>
      {isLoggedIn && <Fab type={isPost ? "post" : "plus"} onClick={onClick} />}
    </div>
  );
};

export default ActionButton;
