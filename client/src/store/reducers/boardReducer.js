import { GET_LIST } from "../actions/postadd/boardList";

import { dateConverter } from "../../commons/utils/dateConverter";

const initialState = {
  count: 0,
  data: [],
};

export default function boardReducer(state = initialState, action) {
  switch (action.type) {
    case GET_LIST:
      action.payload.data.forEach((el) => {
        el.created_at = dateConverter(el.created_at);
      });
      return { ...action.payload };
    default:
      return state;
  }
}
