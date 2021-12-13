export const GET_FAVORITES = "GET_FAVORITES";
export const GET_MY_POST = "GET_MY_POST";
export const GET_MY_COMMENT = "GET_MY_COMMNET";
export const GET_MY_KICK = "GET_MY_KICK";
export const GET_PURCHASED_KICK = "GET_PURCHASED_KICK";
export const GET_KICKMONEY_LOG = "GET_KICKMONEY_LOG";

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

export const getPurchasedKickAction = ({ data: { data, count } }) => {
  return {
    type: GET_PURCHASED_KICK,
    payload: { kick: { count: 20, data } },
  };
};

export const getKickmoneylogAction = ({
  data: {
    data: { logs },
  },
}) => {
  return {
    type: GET_KICKMONEY_LOG,
    payload: { log: { count: 20, data: logs } },
  };
};
