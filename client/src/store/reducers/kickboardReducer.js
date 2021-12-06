import { GET_KICKS_INFO, MODAL_ON, MODAL_OFF } from "../actions/kickboard";

const initialState = {
  modal: false,
};

export const kickboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_KICKS_INFO:
      return { ...state, ...action.payload };
    case MODAL_ON:
      return { ...state, ...action.payload };
    case MODAL_OFF:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
