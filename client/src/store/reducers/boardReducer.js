import { GET_LIST } from "../actions/postadd/boardList";

export const boardReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_LIST:
      // action.payload.data.map((el, i) => {
      //   let index = el.created_at.indexOf("T");
      //   let date = el.created_at.slice(0, index);
      //   el.created_at = date.replace(/-/g, ".");
      // });
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
