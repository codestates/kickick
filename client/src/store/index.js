import { configureStore } from "@reduxjs/toolkit";
import { kickboardReducer } from "./reducers/kickboardReducer";
import { boardReducer } from "./reducers/boardReducer";
import { postAddReducer } from "./reducers/postAddReducer";
import { postInfoReducer } from "./reducers/postInfoReducer";
import { onoffReducer } from "./reducers/onoffReducer";
import { tagReducer } from "./reducers/tagReducer";
import { loginReducer } from "./reducers/loginReducer";
import { themeReducer } from "./reducers/themeReducer";
import { mypageReducer } from "./reducers/mypageReducer";

export const store = configureStore({
  reducer: {
    kickboard: kickboardReducer,
    board: boardReducer,
    postAdd: postAddReducer,
    postInfo: postInfoReducer,
    onoff: onoffReducer,
    tag: tagReducer,
    login: loginReducer,
    themeMode: themeReducer,
    mypage: mypageReducer,
  },
});
