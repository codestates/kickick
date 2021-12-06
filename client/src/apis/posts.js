import api from "./";
/**
 *  @param {number} post_id
 **/
export const getPostsInfo = (post_id) =>
  api.get(`/posts/info?post_id=${post_id}`);
/**
 *  @param {string} category
 *  @param {string} post_name
 *  @param {string} content
 *  @param {number} limit
 *  @param {number} page_num
 **/
export const getPostsList = (
  category,
  post_name,
  username,
  tag,
  content,
  limit,
  page_num
) => {
  let query = "";

  if (category) query += `category=${category}&`;
  if (post_name) query += `post_name=${post_name}&`;
  if (username) query += `username=${username}&`;
  if (tag) query += `tag=${tag}&`;
  if (content) query += `content=${content}&`;
  if (limit) query += `limit=${limit}&`;
  if (page_num) query += `page_num=${page_num}&`;

  return api.get(`/posts/list?${query.slice(0, -1)}`);
};
/**
 * @param {string} category required
 * @param {string} post_name required
 * @param {string} content required
 * @param {number} cost option
 **/
export const createPost = (category, post_name, content, cost) => {
  const post = { category, post_name, content, cost };
  return api.post(`/posts/info`, post);
};

/**
 * @param {number} post_id required
 * @param {string} content required
 **/
export const createTag = (post_id, item) => {
  return api.post("/tags/info", { post_id, tags: item });
};
