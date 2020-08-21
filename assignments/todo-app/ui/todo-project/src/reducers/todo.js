import { ADD_TODO, COMPLETE_TODO, REMOVE_TODO, ADD_TODO_SUCCES, ADD_TODO_FAIL, LOAD_TODO, LOAD_TODO_SUCCESS, LOAD_TODO_FAIL, REMOVE_TODO_SUCCESS, REMOVE_TODO_FAIL, COMPLETE_TODO_SUCCESS, COMPLETE_TODO_FAIL } from "../actions/types";

const initialState = {
  todos: []
  , loading: false
  , error: ""
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOAD_TODO:
      return {
        ...state, loading: true
      };
    case LOAD_TODO_SUCCESS:
      return {
        ...state,
        todos: payload,
        loading: false
      };
    case LOAD_TODO_FAIL:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case ADD_TODO:
      return {
        ...state,
        loading: true
      };
    case ADD_TODO_SUCCES:
      return { ...state, todos: [...state.todos, payload], loading: false };
    case ADD_TODO_FAIL:
      return { ...state, error: payload, loading: false, };
    case REMOVE_TODO:
      return {
        ...state,
        loading:true
      }
    case REMOVE_TODO_SUCCESS:
      return {
        ...state, todos: state.todos.filter((item, index) => {
          return item.id !== payload;
        }
        )
      }
    case REMOVE_TODO_FAIL:
      return {
        ...state,
        loading: false,
        error: payload
      }
    case COMPLETE_TODO:
      return {
        ...state,
        loading:true
      }
    case COMPLETE_TODO_SUCCESS:
      return {
        ...state, todos: state.todos.map((item, index) => {
          if (item.id === payload) {
            return { ...item, checked: true }
          }
          return item;
        }),
        loading: false
      }
    case COMPLETE_TODO_FAIL:
      return {
        ...state,
        loading: false,
        error: payload
      }

    default:
      return state;
  }
};
