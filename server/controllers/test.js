const { User } = require("./../models");

module.exports = async (req, res) => {
  // TODO
  let data;
  try {
    data = await User.update(
      {
        password: 4567,
      },
      {
        where: {
          id: 1,
        },
      }
    );
  } catch (err) {
    console.log(err);
  }
  return res.status(500).json({ data: data, message: "아직 구현 안함" });
  return res.status(400).json({ data: null, message: "잘못된 요청입니다." });
};
