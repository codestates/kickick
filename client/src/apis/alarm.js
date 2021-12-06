import api from "./";
/**
 *  @param {string} email
 *  @param {string} password
 **/
export const getAlarm = (limit, page_num) =>
  api.get(`/alarms/info?limit=${limit}&page_num=${page_num}`);
