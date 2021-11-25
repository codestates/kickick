"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert("admin_posts", [
      {
        user_id: 1,
        type: "notice",
        thumbnail: "picture.jpg",
        summary: "킥머니 이벤트",
        content: "킥머니 이벤트 지급수량이 100으로 결정되었습니다.",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("admin_posts", null, {});
  },
};
