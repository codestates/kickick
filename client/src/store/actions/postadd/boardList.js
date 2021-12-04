export const GET_LIST = "GET_LIST";

export const getList = (data, title, writer, tag, word) => {
  return {
    type: GET_LIST,
    payload: { ...data, title, writer, tag, word },
  };
};
