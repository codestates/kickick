import { configureStore } from "@reduxjs/toolkit";
import kickpostsReducer from "./reducers/kickpostsReducer";
import { postAddReducer } from "./reducers/postAddReducer";
import { boardReducer } from "./reducers/boardReducer";
import { postInfoReducer } from "./reducers/postInfoReducer";
import { onoffReducer } from "./reducers/onoffReducer";
import { tagReducer } from "./reducers/tagReducer";

export const store = configureStore({
  reducer: {
    kickposts: kickpostsReducer,
    postAdd: postAddReducer,
    board: boardReducer,
    postInfo: postInfoReducer,
    onoff: onoffReducer,
    tag: tagReducer,
  },
});
