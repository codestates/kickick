export const GET_CATEGORY = "GET_CATEGORY";
export const BOARD_ALIGN = "BOARD_ALIGN";
export const TITLE_SEARCH = "TITLE_SEARCH";
export const TAG_SEARCH = "TAG_SEARCH";
export const WRITER_SEARCH = "WRITER_SEARCH";
export const SELECT_PAGE = "SELECT_PAGE";
export const SELECT_DIV_PAGE = "SELECT_DIV_PAGE";
export const RESET_PAGINATION = "RESET_PAGINATION";

export const boardAlignAction = (align) => {
  return {
    type: BOARD_ALIGN,
    payload: { align },
  };
};
export const titleSearchAction = (title) => {
  return {
    type: TITLE_SEARCH,
    payload: { title },
  };
};
export const tagSearchAction = (tag) => {
  return {
    type: TAG_SEARCH,
    payload: { tag },
  };
};
export const writerSearchAction = (writer) => {
  return {
    type: BOARD_ALIGN,
    payload: { writer },
  };
};

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
    payload: { selectPage: 1, selectDivPage: 0, limitPage: 10 },
  };
};
