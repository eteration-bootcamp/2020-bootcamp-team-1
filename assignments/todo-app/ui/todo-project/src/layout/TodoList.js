import React, { useEffect } from "react";

import Container from "react-bootstrap/Container";

import ListGroup from "../components/ListGroup";
import ListControls from "../components/ListControls";
import { connect } from "react-redux";
import { addTodo, completeTodo,removeTodo, loadTodo } from "../actions/todo";

const TodoList = ({ addTodo, completeTodo, todos,removeTodo, loadTodo }) => {
  const MAX_TODO_TEXT_LENGTH = 50;

  useEffect(() => {
    loadTodo()
  }, [])
 
  const onTodoAdd = todoText => {
    addTodo({ title: todoText, checked: false });
  };

  const onTodoRemove = todoId => {
    removeTodo(todoId);
    
  };

  const onTodoComplete = todoId => {
    completeTodo(todoId);
  };

  return (
    <Container>
      <ListControls
        onAdd={onTodoAdd}
        maxTodoTextLength={MAX_TODO_TEXT_LENGTH}
      />
      <ListGroup
        todos={todos}
        title="Todo List"
        onRemove={onTodoRemove}
        onComplete={onTodoComplete}
      />
    </Container>
  );
};

const mapStateToProps = state => ({ 
  todos: state.todoReducer.todos
 });

export default connect(mapStateToProps, {addTodo, completeTodo,removeTodo,loadTodo})(TodoList);
