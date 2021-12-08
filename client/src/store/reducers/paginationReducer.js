import { SELECT_PAGE } from "../actions/pagination";

export default function paginationReducer(state = 1, action) {
  switch (action.type) {
    case SELECT_PAGE:
      return action.payload;
    default:
      return state;
  }
}
