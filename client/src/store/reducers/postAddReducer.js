import { GET_CATEGORY, GET_POST_NAME, GET_CONTENT } from "../actions/postadd";
const initialState = {
  category: "",
  post_name: "",
  content: "",
};

export const postAddReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORY:
      let dummy = { ...state };
      dummy.category = action.payload;
      return dummy;
    case GET_POST_NAME:
      let dummy2 = { ...state };
      dummy2.post_name = action.payload;
      return dummy;
    case GET_CONTENT:
      let dummy3 = { ...state };
      dummy3.content = action.payload;
      return dummy;
    default:
      return state;
  }
};
