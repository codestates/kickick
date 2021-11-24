"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      posts.hasMany(models.kicks);
    }
  }
  posts.init(
    {
      user_id: DataTypes.INTEGER,
      category: DataTypes.STRING,
      post_name: DataTypes.STRING,
      content: DataTypes.STRING,
      cost: DataTypes.INTEGER,
      view_count: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "posts",
      timestamps: true,
      underscored: true,
    }
  );
  return posts;
};
