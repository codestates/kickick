export const SELECT_PAGE = "SELECT_PAGE";

export const selectPageAction = (num) => {
  return {
    type: SELECT_PAGE,
    payload: num,
  };
};
