export const ALARM_PAGENATION = "ALARM_PAGENATION";
export const COMMENT_ALARM = "COMMENT_ALARM";
export const KICK_LIKE_ALARM = "KICK_LIKE_ALARM";
export const NOTICE_ALARM = "NOTICE_ALARM";
export const EVENT_ALARM = "EVENT_ALARM";

export const alarmPageAction = (page_num,limit) => {
  return {
    type: ALARM_PAGENATION,
    payload: { page_num,limit },
  };
};

export const commentSocketAction = (boolean) => {
  return {
    type: COMMENT_ALARM,
    payload: boolean,
  };
};

export const kickLikeSocketAction = (boolean) => {
  return {
    type: KICK_LIKE_ALARM,
    payload: boolean,
  };
};

export const noticeSocketAction = (boolean) => {
  return {
    type: NOTICE_ALARM,
    payload: boolean,
  };
};

export const eventSocketAction = (boolean) => {
  return {
    type: EVENT_ALARM,
    payload: boolean,
  };
};