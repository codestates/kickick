import { configureStore } from "@reduxjs/toolkit";

import {
  kickboardReducer,
  boardReducer,
  postAddReducer,
  postInfoReducer,
  loginReducer,
  themeReducer,
  mypageReducer,
} from "./reducers";

export const store = configureStore({
  reducer: {
    kickboard: kickboardReducer,
    board: boardReducer,
    postAdd: postAddReducer,
    postInfo: postInfoReducer,
    login: loginReducer,
    themeMode: themeReducer,
    mypage: mypageReducer,
  },
});
