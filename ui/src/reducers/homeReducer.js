import {
  GET_ALL_RECIPES,
  GET_ALL_RECIPES_FAIL,
  GET_ALL_RECIPES_SUCCESS
} from "../actions/types";

const initialState = { recipes: {}, error: false, loading: false };

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_RECIPES:
      return { ...state, loading: true };
    case GET_ALL_RECIPES_SUCCESS:
      return { ...state, loading: false, recipes: payload };
    case GET_ALL_RECIPES_FAIL:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
}
