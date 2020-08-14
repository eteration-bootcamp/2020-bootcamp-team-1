import React from "react";
import Form from "react-bootstrap/Form";
import { ErrorMessage } from "@hookform/error-message";
import { timeName, servName } from "./postFieldNames";

const TimeAndServeField = ({ register, errors }) => {
  return (
    <div className="my-4 d-flex justify-content-between flex-wrap">
      <Form.Group className="col-lg-5 col-md-5 col-12">
        <Form.Control
          name={timeName}
          placeholder="Cooking time"
          isInvalid={errors[timeName]}
          ref={register}
          style={{ fontSize: "1.1rem" }}
        />
        <ErrorMessage name={timeName} errors={errors} />
      </Form.Group>
      <Form.Group className="col-lg-5 col-md-5 col-12">
        <Form.Control
          name={servName}
          placeholder="Servings"
          isInvalid={errors[servName]}
          ref={register}
          style={{ fontSize: "1.1rem" }}
        />
        <ErrorMessage name={servName} errors={errors} />
      </Form.Group>
    </div>
  );
};

export default TimeAndServeField;
