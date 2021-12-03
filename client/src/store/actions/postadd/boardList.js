export const GET_LIST = "GET_LIST";

export const getList = (data) => {
  return {
    type: GET_LIST,
    payload: data,
  };
};
