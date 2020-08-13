import {
  GET_PERSON_RECIPES,
  GET_PERSON_RECIPES_FAIL,
  GET_PERSON_RECIPES_SUCCESS,
  GET_PROFILE,
  GET_PROFILE_FAIL,
  GET_PROFILE_SUCCESS
} from "../actions/types";

const initialState = {};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
}
