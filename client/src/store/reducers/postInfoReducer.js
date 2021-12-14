import { GET_POST_INFO, GET_KICK_INFO } from "../actions/postinfo";

export default function postInfoReducer(state = {}, action) {
  switch (action.type) {
    case GET_POST_INFO:
      return { ...action.payload };
    case GET_KICK_INFO:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
