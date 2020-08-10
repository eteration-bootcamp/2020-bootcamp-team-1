import React from "react";
import Form from "react-bootstrap/Form";

const IngredientItem = () => {
  return (
    <div className="ml-2">
      <Form.Check className="d-inline-block" />
      <p className="ml-3 d-inline-block">Two tbsp sugar</p>
    </div>
  );
};

export default IngredientItem;
