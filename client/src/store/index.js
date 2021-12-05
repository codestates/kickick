import { configureStore } from "@reduxjs/toolkit";
import kickboardReducer from "./reducers/kickboardReducer";
import { postAddReducer } from "./reducers/postAddReducer";
import { boardReducer } from "./reducers/boardReducer";
import { postInfoReducer } from "./reducers/postInfoReducer";

export const store = configureStore({
  reducer: {
    kickboard: kickboardReducer,
    board: boardReducer,
    postAdd: postAddReducer,
    postInfo: postInfoReducer,
  },
});
