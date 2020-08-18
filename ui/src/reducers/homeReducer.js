import {
  GET_ALL_RECIPES,
  GET_ALL_RECIPES_FAIL,
  GET_ALL_RECIPES_SUCCESS,
  GET_SEARCH_RESULTS,
  GET_SEARCH_RESULTS_FAIL,
  GET_SEARCH_RESULTS_SUCCESS
} from "../actions/types";

const initialState = {
  recipes: [],
  error: false,
  loading: false,
  searchResults: [],
  searchLoading: false
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_RECIPES:
      return { ...state, loading: true };
    case GET_ALL_RECIPES_SUCCESS:
      return { ...state, loading: false, recipes: payload };
    case GET_ALL_RECIPES_FAIL:
      return { ...state, loading: false, error: payload };
    case GET_SEARCH_RESULTS:
      return { ...state, searchLoading: true };
    case GET_SEARCH_RESULTS_SUCCESS:
      return { ...state, searchLoading: false, searchResults: payload };
    case GET_SEARCH_RESULTS_FAIL:
      return { ...state, searchLoading: false };
    default:
      return state;
  }
}
