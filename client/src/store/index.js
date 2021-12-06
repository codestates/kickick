import { configureStore } from "@reduxjs/toolkit";
import { kickboardReducer } from "./reducers/kickboardReducer";
import { boardReducer } from "./reducers/boardReducer";
import { postAddReducer } from "./reducers/postAddReducer";
import { postInfoReducer } from "./reducers/postInfoReducer";
import { mypageReducer } from "./reducers/mypageReducer";

export const store = configureStore({
  reducer: {
    kickboard: kickboardReducer,
    board: boardReducer,
    postAdd: postAddReducer,
    postInfo: postInfoReducer,
    mypage: mypageReducer,
  },
});
