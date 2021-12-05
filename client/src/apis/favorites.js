import api from "./";
/**
 *  @param {number} user_id
 *  @param {number} limit
 *  @param {number} page_num
 **/
export const getFavorites = (user_id, limit, page_num) => {
  let query = "?";

  if (user_id) query += `user_id=${user_id}&`;
  if (limit) query += `limit=${limit}&`;
  if (page_num) query += `page_num=${page_num}&`;

  return api.get(`/favorites/info${query.slice(0, -1)}`);
};
