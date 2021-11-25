"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert("admin_posts", [
      {
        user_id: 1,
        type: "notice",
        post_name: "킥머니 이벤트",
        thumbnail: "picture.jpg",
        summary:
          "여러분들의 성원에 힘입어 킥머니 이벤트를 진행하게 되었습니다.",
        content:
          "어쩌구저쩌구 킥머니 이벤트 지급수량이 100으로 결정되었습니다.",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("admin_posts", null, {});
  },
};
