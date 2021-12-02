import { configureStore } from "@reduxjs/toolkit";
import kickpostsReducer from "./reducers/kickpostsReducer";
import { postAddReducer } from "./reducers/postAddReducer";

export const store = configureStore({
  reducer: {
    kickposts: kickpostsReducer,
    postAdd: postAddReducer,
  },
});
