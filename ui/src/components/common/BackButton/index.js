import React from "react";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";

const BackButton = () => {
  const { push } = useHistory();
  const goBack = () => {
    push("/");
  };

  return (
    <Button className="mb-5" size="lg" onClick={goBack}>
      Go back to home
    </Button>
  );
};

export default BackButton;
