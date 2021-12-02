const { users } = require("../../models");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const nodemailer = require("nodemailer");
const ejs = require("ejs");

module.exports = async (req, res) => {
  // TODO 회원가입 구현
  // username email password 필수
  // email 인증요청 구현
  if (!(req.body.username && req.body.email && req.body.password)) {
    return res.status(400).json({
      data: null,
      message: "username, email, password 중 누락된 항목이 있습니다.",
    });
  }
  try {
    // 비밀번호 해싱
    bcrypt.hash(req.body.password, saltRounds, async (err, hash) => {
      if (err) {
        console.log(err);
        return res
          .status(500)
          .json({ data: null, message: "데이터베이스 에러" });
      }

      await users.create({
        ...req.body,
        password: hash,
      });
    });

    // TODO 인증 메일 보내기

    const CLIENT_URL = process.env.CLIENT_URL;
    const redirect = `${CLIENT_URL}/signup/${req.body.username}`;

    let email_template;
    ejs.renderFile(
      __dirname + "/email_template.ejs",
      { redirect },
      (err, data) => {
        if (err) {
          console.log(err);
        }
        email_template = data;
      }
    );

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"KICKICK 관리자" <${process.env.NODEMAILER_EMAIL}>`,
      to: req.body.email,
      subject: "KICKICK 회원가입 인증 메일입니다.",
      html: email_template,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ data: null, message: "데이터베이스 에러" });
  }

  return res.status(201).json({ data: null, message: "ok" });
};
