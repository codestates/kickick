import { GET_LIST } from "../actions/postadd/boardList";

import { dateConverter } from "../../commons/utils/dateConverter";

const initialState = {
  data: [],
  title: { type: "", word: "" },
  writer: { type: "", word: "" },
  tag: { type: "", word: "" },
  page: 1,
};

export default function boardReducer(state = initialState, action) {
  switch (action.type) {
    case GET_LIST:
      action.payload.data.map((el) => {
        el.created_at = dateConverter(el.created_at);
      });
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
