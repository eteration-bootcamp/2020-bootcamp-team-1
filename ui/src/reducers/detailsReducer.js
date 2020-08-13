import {
  GET_DETAILS,
  GET_DETAILS_FAIL,
  GET_DETAILS_SUCCESS
} from "../actions/types";

const initialState = {};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
}
