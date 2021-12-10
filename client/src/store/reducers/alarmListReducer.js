import { ALARM_LIST } from "../actions/nav";

export default function alarmListReducer (state = [], action) {
  switch (action.type) {
    case ALARM_LIST:
      return [...action.payload];
    default:
      return state;
  }
}
