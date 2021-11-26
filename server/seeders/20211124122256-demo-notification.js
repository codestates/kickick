"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert("notifications", [
      {
        user_id: 1,
        content: "내가 내 게시글에 좋아요를 눌렀습니다.",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("notifications", null, {});
  },
};
