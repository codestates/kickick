import {
  GET_FAVORITES,
  GET_MY_POST,
  GET_MY_COMMENT,
  GET_PURCHASED_KICK,
  GET_KICKMONEY_LOG,
} from "../actions/mypage";

import { dateConverter } from "../../commons/utils/dateConverter";

const initialState = {
  favorites: { count: 0, data: [] },
  mypost: { count: 0, data: [] },
  mycomment: { count: 0, data: [] },
  kick: { count: 0, data: [] },
  log: { count: 0, data: [] },
};

export default function mypageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_FAVORITES:
      return { ...state, ...action.payload };
    case GET_MY_POST:
      return { ...state, ...action.payload };
    case GET_MY_COMMENT:
      return { ...state, ...action.payload };
    case GET_PURCHASED_KICK:
      return { ...state, ...action.payload };
    case GET_KICKMONEY_LOG:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
