import { configureStore } from "@reduxjs/toolkit";

import {
  kickboardReducer,
  boardReducer,
  postAddReducer,
  postInfoReducer,
  loginReducer,
  themeReducer,
  mypageReducer,
  onoffReducer,
  tagReducer,
  paginationReducer,
} from "./reducers";

export const store = configureStore({
  reducer: {
    kickboard: kickboardReducer,
    board: boardReducer,
    postAdd: postAddReducer,
    postInfo: postInfoReducer,
    onoff: onoffReducer,
    tag: tagReducer,
    login: loginReducer,
    themeMode: themeReducer,
    mypage: mypageReducer,
    pagination: paginationReducer,
  },
});
