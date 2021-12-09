import {
  SELECT_PAGE,
  SELECT_DIV_PAGE,
  RESET_PAGINATION,
} from "../actions/pagination";

const initialState = {
  selectPage: 1,
  selectDivPage: 0,
  limitPage: 10,
};

export default function paginationReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_PAGE:
      return { ...state, ...action.payload };
    case SELECT_DIV_PAGE:
      return { ...state, ...action.payload };
    case RESET_PAGINATION:
      return initialState;
    default:
      return state;
  }
}
