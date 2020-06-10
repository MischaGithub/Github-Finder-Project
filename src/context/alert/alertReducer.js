import { SET_ALERT, REMOVE_ALERT } from "../types";

export default (state, action) => {
  switch (action.type) {
    // SET ALERT CASE
    case SET_ALERT:
      return action.payload;
    // REMOVE ALERT CASE
    case REMOVE_ALERT:
      return null;
    // Default state
    default:
      return state;
  }
};
