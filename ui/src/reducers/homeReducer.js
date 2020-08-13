import {
  GET_ALL_RECIPES,
  GET_ALL_RECIPES_FAIL,
  GET_ALL_RECIPES_SUCCESS
} from "../actions/types";

const initialState = {};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
}
