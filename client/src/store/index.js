import { configureStore } from "@reduxjs/toolkit";
import kickpostsReducer from "./reducers/kickpostsReducer";

export const store = configureStore({
  reducer: {
    kickposts: kickpostsReducer,
  },
});
