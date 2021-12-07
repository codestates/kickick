import { GET_USER_INFO } from "../actions/login/userInfo";

export const userInfoReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_USER_INFO:
      return action.payload;
    default:
      return state;
  }
};

export default userInfoReducer;
