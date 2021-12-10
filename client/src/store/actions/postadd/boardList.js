export const GET_LIST = "GET_LIST";

export const getListAction = (data) => {
  return {
    type: GET_LIST,
    payload: data,
  };
};
