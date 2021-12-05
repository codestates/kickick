export const GET_KICKS_INFO = "GET_KICKS_INFO";
export const GET_KICKS_LIST = "GET_KICKS_LIST";

export const MODAL_ON = "MODAL_ON";
export const MODAL_OFF = "MODAL_OFF";

export const modalOnAction = () => {
  return {
    type: MODAL_ON,
    payload: { modal: true },
  };
};

export const modalOffAction = () => {
  return {
    type: MODAL_OFF,
    payload: { modal: false },
  };
};
