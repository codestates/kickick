export const GET_LIST = "GET_LIST";

export const getList = (data, label, word) => {
  return {
    type: GET_LIST,
    payload: { ...data, label, word },
  };
};
