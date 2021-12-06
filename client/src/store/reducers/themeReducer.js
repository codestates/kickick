import { THMEME_MODE } from "../actions/nav";

export default function themeReducer(state = "light", action) {
  switch (action.type) {
    case THMEME_MODE:
      return action.payload;
    default:
      return state;
  }
}
