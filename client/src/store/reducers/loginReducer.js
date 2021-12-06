import { IS_LOGIN, TODAY_LOGIN } from "../actions/login";

const initialState = { isLogin: false, todayLogin: false };

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case IS_LOGIN:
      return { ...state, isLogin: action.payload };
    case TODAY_LOGIN:
      return { ...state, todayLogin: action.payload };
    default:
      return state;
  }
}
