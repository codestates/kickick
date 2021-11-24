"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class kicks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      kicks.belongsTo(models.posts, {
        foreignKey: {
          name: "post_id",
        },
        onDelete: "CASCADE",
      });
    }
  }
  kicks.init(
    {
      post_id: DataTypes.INTEGER,
      content: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "kicks",
      timestamps: true,
      underscored: true,
    }
  );
  return kicks;
};
