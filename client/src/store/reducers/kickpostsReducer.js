import { GET_KICKS_INFO } from "../actions/kickposts";

const kickpostsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_KICKS_INFO:
      return { ...state };
    default:
      return state;
  }
};
export default kickpostsReducer;
