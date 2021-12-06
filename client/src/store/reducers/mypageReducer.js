import { GET_FAVORITES, GET_MY_POST, GET_MY_COMMENT } from "../actions/mypage";

const initialState = {
  favorites: { count: 0, data: [] },
  mypost: { count: 0, data: [] },
  mycomment: { count: 0, data: [] },
};

export const mypageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FAVORITES:
      return { ...state, ...action.payload };
    case GET_MY_POST:
      return { ...state, ...action.payload };
    case GET_MY_COMMENT:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};