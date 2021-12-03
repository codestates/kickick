import { configureStore } from "@reduxjs/toolkit";
import kickpostsReducer from "./reducers/kickpostsReducer";
import { postAddReducer } from "./reducers/postAddReducer";
import { boardReducer } from "./reducers/boardReducer";

export const store = configureStore({
  reducer: {
    kickposts: kickpostsReducer,
    postAdd: postAddReducer,
    board: boardReducer,
  },
});
