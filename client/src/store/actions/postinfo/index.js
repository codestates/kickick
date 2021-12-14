export const GET_POST_INFO = "GET_POST_INFO";
export const GET_KICK_INFO = "GET_KICK_INFO";

export const getPostInfoAction = (data) => {
  return {
    type: GET_POST_INFO,
    payload: data,
  };
};
export const getKickInfoAction = (data) => {
  return {
    type: GET_KICK_INFO,
    payload: { kick_content: data },
  };
};
