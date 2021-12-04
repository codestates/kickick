import { configureStore } from "@reduxjs/toolkit";
import kickpostsReducer from "./reducers/kickpostsReducer";
import { postAddReducer } from "./reducers/postAddReducer";
import { boardReducer } from "./reducers/boardReducer";
import { postInfoReducer } from "./reducers/postInfoReducer";

export const store = configureStore({
  reducer: {
    kickposts: kickpostsReducer,
    postAdd: postAddReducer,
    board: boardReducer,
    postInfo: postInfoReducer,
  },
});
