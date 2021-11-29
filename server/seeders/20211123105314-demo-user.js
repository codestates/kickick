"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert("users", [
      {
        type: "admin",
        username: "demouser",
        email: "demouser@kickick.net",
        password: "1234",
        profile: "picture.jpg",
        birthday: "",
        kick_money: "1000",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("users", null, {});
  },
};
