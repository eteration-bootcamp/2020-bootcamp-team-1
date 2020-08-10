import React from "react";
import Form from "react-bootstrap/Form";

const DirectionItem = () => {
  return (
    <div className="ml-2 mt-4">
      <Form.Check className="d-inline-block" />
      <span>
        <h6 className="ml-3 d-inline-block">Step 1</h6>
        <p className="mt-2">Hello World</p>
      </span>
    </div>
  );
};

export default DirectionItem;
