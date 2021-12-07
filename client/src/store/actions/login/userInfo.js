export const GET_USER_INFO = "GET_USER_INFO";

export const userInfoAction = (obj) => {
  return {
    type: GET_USER_INFO,
    payload: obj,
  };
};
