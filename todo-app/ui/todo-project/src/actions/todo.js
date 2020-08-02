import { ADD_TODO, COMPLETE_TODO, REMOVE_TODO, ADD_TODO_SUCCES, ADD_TODO_FAIL, LOAD_TODO_SUCCESS, LOAD_TODO, LOAD_TODO_FAIL, REMOVE_TODO_SUCCESS, REMOVE_TODO_FAIL, COMPLETE_TODO_SUCCESS, COMPLETE_TODO_FAIL } from "./types";

export const addTodo = todo => {
  return { type: ADD_TODO, payload: todo };
};

export const removeTodo = todoID => {
  return { type: REMOVE_TODO,
    payload:todoID };
}
export const removeTodoSucces = todoID => {
  return {
    type: REMOVE_TODO_SUCCESS,
    payload: todoID
  }
}
export const removeTodoFail = error => {
  return {
    type: REMOVE_TODO_FAIL,
    payload: error
  }
}

export const completeTodo = todoID => {
  return { type: COMPLETE_TODO,
    payload:todoID };
}
export const completeTodoSuccess = todoID => {
  return {
    type: COMPLETE_TODO_SUCCESS,
    payload: todoID
  }
}
export const completeTodoFail = error => {
  return {
    type: COMPLETE_TODO_FAIL,
    payload: error
  }
}

export const addTodoSucces = todo => {
  return {
    type: ADD_TODO_SUCCES,
    payload: todo
  }
}
export const addTodoFail = error => {
  return {
    type: ADD_TODO_FAIL,
    payload: error
  }
}
export const loadTodo = () => {
  return {
    type: LOAD_TODO
  }
}
export const loadTodoSuccess = (todoList) => {
  return {
    type: LOAD_TODO_SUCCESS,
    payload: todoList
  }
}
export const loadTodoFail = (error) => {
  return {
    type: LOAD_TODO_FAIL,
    payload: error
  }
}