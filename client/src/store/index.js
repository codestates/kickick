import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";

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
  socketReducer,
  alarmListReducer,
  postsearchReducer,
} from "./reducers";

const persistConfig = {
  key: "root",
  storage,
};

const reducers = combineReducers({
  postAdd: postAddReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: {
    persist: persistedReducer,
    kickboard: kickboardReducer,
    board: boardReducer,
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
});

export default store;
