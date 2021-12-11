export const GET_CATEGORY = "GET_CATEGORY";
export const GET_POST_NAME = "GET_POST_NAME";
export const GET_CONTENT = "GET_CONTENT";
export const GET_THUMBNAIL = "GET_THUMBNAIL";
export const GET_KICK_CONTENT = "GET_KICK_CONTENT";
export const GET_POST_INFO = "GET_POST_INFO";
export const RESET = "RESET";
export const GO_BACK = "GO_BACK";
export const ADD_TAG = "ADD_TAG";
export const DEL_TAG = "DEL_TAG";
export const RESET_TAG = "RESET_TAG";

export const getCategoryAction = (category, type) => {
  if (type) category += "_킥";
  else category += "_자유";
  return {
    type: GET_CATEGORY,
    payload: { category },
  };
};
export const getPostNameAction = (post_name) => {
  return {
    type: GET_POST_NAME,
    payload: { post_name },
  };
};
export const getThumbnailAction = (thumbnail) => {
  return {
    type: GET_THUMBNAIL,
    payload: { thumbnail },
  };
};
export const getContentAction = (content) => {
  return {
    type: GET_CONTENT,
    payload: { content },
  };
};
export const getKickContentAction = (kick_content) => {
  return {
    type: GET_KICK_CONTENT,
    payload: { kick_content },
  };
};
export const getPostInfoAction = (data) => {
  return {
    type: GET_POST_INFO,
    payload: data,
  };
};

export const reset = () => {
  return {
    type: RESET,
  };
};

export const goBack = (trigger) => {
  return {
    type: GO_BACK,
    payload: trigger,
  };
};

export const addTagAction = (label, word) => {
  return {
    type: ADD_TAG,
    payload: { label, word },
  };
};

export const delTagAction = (idx) => {
  return {
    type: DEL_TAG,
    idx,
  };
};

export const resetTag = () => {
  return {
    type: RESET_TAG,
  };
};
