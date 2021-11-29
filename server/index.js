require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();

const test_router = require("./routers/test_router");
const users_router = require("./routers/users_router");
const auth_router = require("./routers/auth_router");
const posts_router = require("./routers/posts_router");
const notices_router = require("./routers/notices_router");
const kicks_router = require("./routers/kicks_router");
const tags_router = require("./routers/tags_router");
const comments_router = require("./routers/comments_router");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: true,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  })
);
app.use(cookieParser());
// 라우팅
app.use("/test", test_router);
app.use("/users", users_router);
app.use("/auth", auth_router);
app.use("/posts", posts_router);
app.use("/notices", notices_router);
app.use("/kicks", kicks_router);
app.use("/tags", tags_router);
app.use("/comments", comments_router);

app.get("/", (req, res) => {
  res.status(201).send("Hello World");
});
const HTTP_PORT = process.env.HTTP_PORT || 80;

const server = app.listen(HTTP_PORT, () => console.log(HTTP_PORT));

module.exports = server;
