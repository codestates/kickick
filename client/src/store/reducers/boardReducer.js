import { GET_LIST } from "../actions/postadd/boardList";
import { dateConverter } from "../../commons/utils/dateConverter";

export const boardReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_LIST:
      action.payload.data.map((el) => {
        el.created_at = dateConverter(el.created_at);
      });
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
