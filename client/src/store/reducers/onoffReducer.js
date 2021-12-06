import { GO_BACK } from "../actions/postadd";

export const onoffReducer = (state = {}, action) => {
  switch (action.type) {
    case GO_BACK:
      return { ...state, goback: action.payload };
    default:
      return state;
  }
};
