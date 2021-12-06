export const GET_FAVORITES = "GET_FAVORITES";
export const GET_MY_POST = "GET_MY_POST";
export const GET_MY_COMMENT = "GET_MY_COMMNET";

export const getFavoritesAction = ({ data: { data, count } }) => {
  return {
    type: GET_FAVORITES,
    payload: { favorites: { count, data } },
  };
};

export const getMyPostAction = ({ data: { data, count } }) => {
  return {
    type: GET_MY_POST,
    payload: { mypost: { count, data } },
  };
};

export const getMyCommentAction = ({ data: { data, count } }) => {
  return {
    type: GET_MY_COMMENT,
    payload: { mycomment: { count, data } },
  };
};
