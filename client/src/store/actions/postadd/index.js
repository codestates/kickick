export const GET_CATEGORY = "GET_CATEGORY";
export const GET_POST_NAME = "GET_POST_NAME";
export const GET_CONTENT = "GET_CONTENT";
export const GET_POST_INFO = "GET_POST_INFO";
export const RESET = "RESET";
export const GO_BACK = "GO_BACK";
export const SEARCH = "SEARCH";
export const DEL_SEARCH = "DEL_SEARCH";
export const RESET_TAG = "RESET_TAG";

export const getCategory = (category) => {
  return {
    type: GET_CATEGORY,
    payload: { category },
  };
};

export const getPostName = (post_name) => {
  return {
    type: GET_POST_NAME,
    payload: { post_name },
  };
};

export const getContent = (content) => {
  return {
    type: GET_CONTENT,
    payload: { content },
  };
};

export const getPostInfo = (data) => {
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

export const search = (label, word) => {
  return {
    type: SEARCH,
    payload: { label, word },
  };
};

export const delSearch = (idx) => {
  return {
    type: DEL_SEARCH,
    idx,
  };
};

export const resetTag = () => {
  return {
    type: RESET_TAG,
  };
};
