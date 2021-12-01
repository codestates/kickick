"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert("users", [
      {
        type: "admin",
        username: "demouser",
        email: "demouser@kickick.net",
        password:
          "$2b$10$srZMaFJho0i6e1L3yCJD.uvAVtC93.BedCxyQdXa3FLq4w6qUZFQ6",
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
