"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class notifications extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      notifications.belongsTo(models.users, {
        foreignKey: "user_id",
        onDelete: "CASCADE",
      });
    }
  }
  notifications.init(
    {
      user_id: DataTypes.INTEGER,
      content: DataTypes.STRING,
      is_checked: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "notifications",
    }
  );
  return notifications;
};
