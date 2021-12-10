import {
  ALARM_PAGENATION,
  COMMENT_ALARM,
  KICK_LIKE_ALARM,
  NOTICE_ALARM,
  EVENT_ALARM,
} from "../actions/socket";

const initialState = {
  alarmPage: { limit: 5, page_num: 1 },
  comment: false,
  kickLike: false,
  notice: false,
  event: false
};

export default function socketReducer(state = initialState, action) {
  switch (action.type) {
    case ALARM_PAGENATION:
      return { ...state, alarmPage:action.payload };
    case COMMENT_ALARM:
      return { ...state, comment: action.payload };
    case KICK_LIKE_ALARM:
      return { ...state, kickLike: action.payload };
    case NOTICE_ALARM:
      return { ...state, notice: action.payload };
    case EVENT_ALARM:
      return { ...state, event: action.payload };
    default:
      return state;
  }
}
