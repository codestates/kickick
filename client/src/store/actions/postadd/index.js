export const GET_CATEGORY = "GET_CATEGORY";
export const GET_POST_NAME = "GET_POST_NAME";
export const GET_CONTENT = "GET_CONTENT";
export const RESET = "RESET";

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

export const reset = () => {
  return {
    type: RESET,
  };
};
