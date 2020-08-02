import React, { useState, Fragment } from "react";

import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

import Input from "../common/Input";
import "./ListControls.css";

const ListControls = ({ onAdd, maxTodoTextLength }) => {
  const [todoText, setTodoText] = useState("");

  const onTodoTextChange = e => {
    setTodoText(e.target.value);
  };

  return (
    <Fragment>
      <Row id="todo-controls">
        <Input
          style={{ position: "relative" }}
          onChange={onTodoTextChange}
          className="i-b"
          placeholder="Add new todo"
        />
        <p id="text-length-informer" className="light-text">
          {todoText.length} / {maxTodoTextLength}
        </p>
        <Button className="i-b" onClick={() => onAdd(todoText)}>
          Add
        </Button>
      </Row>
    </Fragment>
  );
};

export default ListControls;
