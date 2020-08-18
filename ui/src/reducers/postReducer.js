import {
  CREATE_RECIPE,
  CREATE_RECIPE_FAIL,
  CREATE_RECIPE_SUCCESS
} from "../actions/types";

const initialState = { error: false, loading: false, postSuccessful: false };

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CREATE_RECIPE:
      return { ...state, loading: true, error: false, postSuccessful: false };
    case CREATE_RECIPE_SUCCESS:
      return { ...state, loading: false, postSuccessful: true };
    case CREATE_RECIPE_FAIL:
      return {
        ...state,
        loading: false,
        error: payload
      };
    default:
      return state;
  }
}
