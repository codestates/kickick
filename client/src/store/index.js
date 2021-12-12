import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import {
  kickboardReducer,
  postlistReducer,
  postAddReducer,
  postInfoReducer,
  loginReducer,
  themeReducer,
  mypageReducer,
  onoffReducer,
  tagReducer,
  socketReducer,
  alarmListReducer,
  postsearchReducer,
} from "./reducers";

export const store = configureStore({
  reducer: {
    kickboard: kickboardReducer,
    board: postlistReducer,
    postAdd: postAddReducer,
    postInfo: postInfoReducer,
    onoff: onoffReducer,
    tag: tagReducer,
    login: loginReducer,
    themeMode: themeReducer,
    mypage: mypageReducer,
    socket: socketReducer,
    alarmList: alarmListReducer,
    postsearch: postsearchReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
