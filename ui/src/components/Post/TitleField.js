import React from "react";
import { ErrorMessage } from "@hookform/error-message";
import Form from "react-bootstrap/Form";
import { titleName } from "./postFieldNames";

const TitleField = ({ register, errors }) => {
  return (
    <Form.Group>
      <Form.Control
        name={titleName}
        placeholder="Title of your recipé"
        size="lg"
        isInvalid={errors[titleName]}
        ref={register}
        style={{ fontWeight: 700, fontSize: "32px" }}
      />
      <ErrorMessage errors={errors} name={titleName} />
    </Form.Group>
  );
};

export default TitleField;
