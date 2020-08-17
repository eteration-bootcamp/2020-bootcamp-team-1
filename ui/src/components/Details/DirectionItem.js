import React, { useState } from "react";
import Form from "react-bootstrap/Form";

const DirectionItem = ({ description, stepNumber }) => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="ml-2 mt-4">
      <Form.Check
        className="d-inline-block"
        value={checked}
        onChange={e => setChecked(e.target.checked)}
      />
      <span>
        <h6
          className="ml-3 d-inline-block"
          style={
            checked
              ? { color: "#e4c111", textDecoration: "line-through" }
              : undefined
          }
        >
          Step { stepNumber + 1 }
        </h6>
        <p
          className="mt-2"
          style={checked ? { textDecoration: "line-through" } : undefined}
        >
          { description }
        </p>
      </span>
    </div>
  );
};

export default DirectionItem;
