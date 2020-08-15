import {
  GET_DETAILS,
  GET_DETAILS_FAIL,
  GET_DETAILS_SUCCESS,
} from "../actions/types";

const initialState = { loading: false, error: {}, recipeDetails: {} };

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_DETAILS:
      return { ...state, loading: true };
    case GET_DETAILS_SUCCESS:
      return { ...state, loading: false, recipeDetails: payload };
    case GET_DETAILS_FAIL:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
}
