const { users, alarms } = require("./../models");

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
          const username = data.username;
          // alarms 테이블 검색 추가
          data = await users.findOne({
            attributes: ["id"],
            where: {
              username: username,
            },
            include: [
              {
                model: alarms,
                attributes: [
                  ["id", "alarm_id"],
                  "type",
                  "reference",
                  "content",
                  "is_checked",
                  "created_at",
                ],
                offset: 0,
                limit: 5,
              },
            ],
          });
          data = data.get({ plain: true });
          // data 가공
          data = data.alarms.map((el) => {
            el.reference = JSON.parse(el.reference);
            return el;
          });

          io.to(clients[i].id).emit("alarms", data);
        }
      }
      data.username;
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
