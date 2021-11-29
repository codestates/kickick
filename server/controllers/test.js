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

module.exports = async (req, res) => {
  // TODO
  let data;
  try {
    data = await users.findOne({
      where: {
        id: 1,
      },
      // raw: true,
      include: [
        {
          model: users_kicks,
          include: kicks,
        },
        {
          model: comments,
          include: {
            model: posts,
            include: {
              model: posts_tags,
              include: tags,
            },
          },
        },
        likes,
        favorites,
        alarms,
        logs,
        notices,
      ],
    });
  } catch (err) {
    console.log(err);
  }
  data = data.get({ plain: true });
  console.log(data);

  return res.status(200).json({ data, message: "ok" });
  return res.status(400).json({ data: null, message: "잘못된 요청입니다." });
};
