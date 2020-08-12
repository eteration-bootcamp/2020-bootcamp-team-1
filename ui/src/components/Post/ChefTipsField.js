import React from "react";
import { ErrorMessage } from "@hookform/error-message";
import Form from "react-bootstrap/Form";
import { ctipName } from "./postFieldNames";

const ChefTipsField = ({ register, errors }) => {
  return (
    <Form.Group>
      <Form.Control
        className="mb-5 mx-2"
        as="textarea"
        isInvalid={errors[ctipName]}
        rows="3"
        name={ctipName}
        placeholder="Chef Tips"
        isInvalid={errors[ctipName]}
        ref={register}
      />
      <ErrorMessage errors={errors} name={ctipName} />
    </Form.Group>
  );
};

export default ChefTipsField;
