const { users, alarms } = require("./../models");
const sequelize = require("sequelize");
const Op = sequelize.Op;

module.exports = (io) => {
  let clients = [];
  io.sockets.on("connection", (socket) => {
    console.log("connection");
    socket.on("signin", (data) => {
      let client_info = new Object();
      client_info.username = data.username;
      client_info.id = socket.id;
      let is_signed = false;
      for (let el of clients) {
        if (el.username === client_info.username) {
          el.id = client_info.id;
          is_signed = true;
          break;
        }
      }
      if (!is_signed) clients.push(client_info);
      console.log(clients);
    });
    socket.on("alarms", async (data) => {
      for (let i = 0; i < clients.length; i++) {
        if (clients[i].username === data.username) {
          if (!(data.username && data.limit && data.page_num)) {
            break;
          }

          // 받아온 data 값 변수에 할당
          const username = data.username;
          const limit = data.limit;
          const page_num = data.page_num;

          // username 으로 user_id 구함
          let user_info = await users.findOne({
            attributes: [["id", "user_id"]],
            where: {
              username: username,
            },
            raw: true,
          });
          const user_id = user_info.user_id;

          // data에 DB 검색 값 할당
          data = await alarms.findAndCountAll({
            attributes: [
              ["id", "alarm_id"],
              "type",
              "reference",
              "content",
              "is_checked",
              "created_at",
            ],
            where: {
              [Op.or]: [
                {
                  user_id: user_id,
                },
                {
                  user_id: null,
                },
              ],
              is_checked: false,
            },
            order: [["id", "DESC"]],
            offset: limit * (page_num - 1),
            limit: limit,
          });

          // count 와 실제 데이터 배열 재할당
          count = data.count;
          data = data.rows;

          // reference 필드 파싱
          data = data.map((el) => {
            el = el.get({ plain: true });
            el.reference = JSON.parse(el.reference);
            return el;
          });

          io.to(clients[i].id).emit("alarms", data);
        }
      }
    });
    socket.on("disconnect", () => {
      for (let i = 0; i < clients.length; i++) {
        if (clients[i].id === socket.id) {
          clients.splice(i, 1);
          break;
        }
      }
      console.log("disconnect");
      console.log(clients);
    });
  });
};
