import React from "react";

import Form from "react-bootstrap/Form";

const Input = ({ onChange, textLength, maxLength, ...rest }) => {
  return <Form.Control {...rest} maxLength={maxLength} onChange={onChange} />;
};

export default Input;
