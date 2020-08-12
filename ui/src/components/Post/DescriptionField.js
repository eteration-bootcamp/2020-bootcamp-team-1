import React from "react";
import { ErrorMessage } from "@hookform/error-message";
import Form from "react-bootstrap/Form";
import { descName } from "./postFieldNames";

const DescriptionField = ({ register, errors }) => {
  return (
    <Form.Group>
      <Form.Control
        as="textarea"
        rows="3"
        name={descName}
        isInvalid={errors[descName]}
        placeholder="Tell us about your recipe"
        ref={register}
        style={{ fontSize: "1.2rem" }}
      />
      <ErrorMessage errors={errors} name={descName} />
    </Form.Group>
  );
};

export default DescriptionField;
