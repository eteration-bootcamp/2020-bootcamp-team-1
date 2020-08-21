import React from "react";

import Form from "react-bootstrap/Form";

import ListGroupItem from "react-bootstrap/ListGroupItem";
import Button from "react-bootstrap/Button";
import "./ListItem.css";

const ListItem = ({ item, onRemove, onComplete }) => {
  return (
    <ListGroupItem className="todo-item">
      {!item.checked && (
        <Form.Check
          type="checkbox"
          className="i-b"
          onClick={() => onComplete(item.id)}
        />
      )}
      {item.checked ? (
        <del>{item.title}</del>
      ) : (
        <p className="i-b">{item.title}</p>
      )}
      <Button variant="danger" onClick={() => onRemove(item.id)}>
        Delete
      </Button>
    </ListGroupItem>
  );
};

export default ListItem;
