const {
  users,
  posts,
  kicks,
  comments,
  likes,
  favorites,
  users_kicks,
  posts_tags,
  tags,
  alarms,
  logs,
  notices,
} = require("./../models");

module.exports = (io) => {
  let clients = [];
  io.sockets.on("connection", (socket) => {
    console.log("connection");
    socket.on("signin", (data) => {
      let client_info = new Object();
      client_info.username = data.username;
      client_info.id = socket.id;
      clients.push(client_info);
      console.log(clients);
    });
    socket.on("alarms", (data) => {
      for (let i = 0; i < clients.length; i++) {
        if (clients[i].username === data.username) {
          // alarms 테이블 검색 추가

          io.to(clients[i].id).emit("alarms");
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
