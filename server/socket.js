const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server);

module.exports = () => {
  io.on("connection", (socket) => {
    console.log("connect");
    socket.on("disconnect", () => {
      console.log("disconnect");
    });
  });
};
