import React from "react";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const IngredientItem = ({ name }) => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="ml-2">
      <Form.Check
        className="d-inline-block"
        value={checked}
        onChange={e => setChecked(e.target.checked)}
      />
      <p
        className="ml-3 d-inline-block"
        style={checked ? { textDecoration: "line-through" } : undefined}
      >
        { name }
      </p>
    </div>
  );
};

export default IngredientItem;
