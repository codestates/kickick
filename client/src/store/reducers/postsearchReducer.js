import {
  SELECT_PAGE,
  SELECT_DIV_PAGE,
  RESET_PAGINATION,
  BOARD_ALIGN,
} from "../actions/postsearch";

const initialState = {
  align: "최신",
  // tag: "",
  // title: "",
  // writer: "",
  selectPage: 1,
  // selectDivPage: 0,
  limitPage: 10,
};

export default function postserachReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_PAGE:
      return { ...state, ...action.payload };
    case SELECT_DIV_PAGE:
      return { ...state, ...action.payload };
    case BOARD_ALIGN:
      return { ...state, ...action.payload };
    case RESET_PAGINATION:
      return { ...state, ...action.payload };

    default:
      return state;
  }
}
