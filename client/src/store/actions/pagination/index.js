export const SELECT_PAGE = "SELECT_PAGE";
export const SELECT_DIV_PAGE = "SELECT_DIV_PAGE";
export const RESET_PAGINATION = "RESET_PAGINATION";

export const selectPageAction = (num) => {
  return {
    type: SELECT_PAGE,
    payload: { selectPage: num },
  };
};

export const selectDivPageAction = (num) => {
  return {
    type: SELECT_DIV_PAGE,
    payload: { selectDivPage: num },
  };
};

export const resetPaginationAction = () => {
  return {
    type: RESET_PAGINATION,
    payload: null,
  };
};
