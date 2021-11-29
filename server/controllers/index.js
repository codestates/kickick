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
};
