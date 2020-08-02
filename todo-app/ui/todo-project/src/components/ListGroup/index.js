import React, { useState, Fragment } from "react";

import ListGroup from "react-bootstrap/ListGroup";

import ListItem from "../ListItem";
import "./ListGroup.css";
import GroupHeader from "./GroupHeader";

const List = ({ todos, title, onRemove, onComplete }) => {
  const [searchText, setSearchText] = useState("");

  const todoList =
    searchText === ""
      ? todos
      : todos.filter(todo =>
          todo.title.toLowerCase().includes(searchText.toLowerCase())
        );

  const onSearchInputChange = e => {
    setSearchText(e.target.value);
  };

  return (
    <Fragment>
      <ListGroup>
        <GroupHeader onSearchInputChange={onSearchInputChange} title={title} />
        {todoList.map(todo => (
          <ListItem
            key={todo.id}
            item={todo}
            onRemove={onRemove}
            onComplete={onComplete}
          />
        ))}
      </ListGroup>
      <p className="light-text ta-r">Total : {todoList.length}</p>
    </Fragment>
  );
};

export default List;
