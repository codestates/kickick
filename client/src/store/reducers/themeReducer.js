import { THMEME_MODE } from "../actions/nav";

export const themeReducer = (state = "light", action) => {
  switch (action.type) {
    case THMEME_MODE:
      return action.payload;
    default:
      return state;
  }
};