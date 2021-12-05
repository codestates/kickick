import { GET_KICKS_INFO } from "../actions/kickboard";

const initialState = {
  modal: "off",
};

const kickboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_KICKS_INFO:
      return { ...state };
    default:
      return state;
  }
};
export default kickboardReducer;
