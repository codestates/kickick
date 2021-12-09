import {
  GET_CATEGORY,
  GET_POST_NAME,
  GET_CONTENT,
  GET_KICK_CONTENT,
  RESET,
} from "../actions/postadd";
const initialState = {
  category: "",
  post_name: "",
  content: "",
  kick_content: "",
};
export default function postAddReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORY:
      return { ...state, ...action.payload };
    case GET_POST_NAME:
      return { ...state, ...action.payload };
    case GET_CONTENT:
      return { ...state, ...action.payload };
    case GET_KICK_CONTENT:
      return { ...state, ...action.payload };
    case RESET:
      return initialState;
    default:
      return state;
  }
}
