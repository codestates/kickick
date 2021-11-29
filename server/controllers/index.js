module.exports = {
  test: require("./test"),
  // users
  get_users_info: require("./users/get_users_info"),
  post_users_info: require("./users/post_users_info"),
  put_users_info: require("./users/put_users.info"),
  delete_users_info: require("./users/delete_users_info"),
  // auth
  duplication_check: require("./auth/duplication_check"),
  signin: require("./auth/signin"),
  signout: require("./auth/signout"),
  // posts
  get_posts_info: require("./posts/get_posts_info"),
  get_posts_list: require("./posts/get_posts_list"),
  post_posts_info: require("./posts/post_posts_info"),
  put_posts_info: require("./posts/put_posts_info"),
  delete_posts_info: require("./posts/delete_posts_info"),
  // notices
  get_notices_info: require("./notices/get_notices_info"),
  post_notices_info: require("./notices/post_notices_info"),
  put_notices_info: require("./notices/put_notices_info"),
  delete_notices_info: require("./notices/delete_notices_info"),
  get_notices_list: require("./notices/get_notices_list"),
  // kicks
  get_kicks_info: require("./kicks/get_kicks_info"),
  post_kicks_info: require("./kicks/post_kicks_info"),
  put_kicks_info: require("./kicks/put_kicks_info"),
  delete_kicks_info: require("./kicks/delete_kicks_info"),
  get_kicks_list: require("./kicks/get_kicks_list"),
  //tags
  get_tags_info: require("./tags/get_tags_info"),
  post_tags_info: require("./tags/post_tags_info"),
  delete_tags_info: require("./tags/delete_tags_info"),
  // comments
  get_comments_info: require("./comments/get_comments_info"),
};
