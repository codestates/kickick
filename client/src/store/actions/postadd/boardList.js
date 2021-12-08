export const GET_LIST = "GET_LIST";

export const getList = (
  data,
  title = { type: "", word: "" },
  writer = { type: "", word: "" },
  tag = { type: "", word: "" },
  page = 1
) => {
  return {
    type: GET_LIST,
    payload: { ...data, title, writer, tag, page },
  };
};
