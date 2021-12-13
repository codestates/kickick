module.exports = async (req, res) => {
  // TODO 쿠키 저장된거 토큰빼고 보여주는 api 구현
  if (!req.cookies) {
    return res
      .status(400)
      .json({ data: null, message: "쿠키가 존재하지 않습니다." });
  }

  let data = req.cookies;
  delete data.token;

  return res.status(200).json({ data: data, message: "ok" });
};
