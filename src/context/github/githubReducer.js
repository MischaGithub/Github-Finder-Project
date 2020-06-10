import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    // Search Users Case
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    // Get User Case
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    // Clear Users Case
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false,
      };
    // Get Repos Case
    case GET_REPOS: {
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    }
    // Set Loading Case
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
