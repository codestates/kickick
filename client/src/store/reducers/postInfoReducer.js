import { GET_POST_INFO } from "../actions/postadd";

export default function postInfoReducer(state = {}, action) {
  switch (action.type) {
    case GET_POST_INFO:
      return { ...action.payload };
    default:
      return state;
  }
}
