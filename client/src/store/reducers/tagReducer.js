import { SEARCH, DEL_SEARCH, RESET_TAG } from "../actions/postadd";

export default function tagReducer(state = [], action) {
  switch (action.type) {
    case SEARCH:
      let newArr = state.slice();

      let idx = newArr.findIndex((el) => el.label === action.payload.label);
      if (idx === -1) {
        newArr.push(action.payload);
      } else {
        newArr.splice(idx, 1, action.payload);
      }
      return newArr;

    case DEL_SEARCH:
      let arr = state.slice();
      arr.splice(action.idx, 1);
      return arr;
    case RESET_TAG:
      return [];
    default:
      return state;
  }
}
