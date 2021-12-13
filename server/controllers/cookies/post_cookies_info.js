module.exports = async (req, res) => {
  // TODO 쿠키정보 생성 및 수정 구현
  if (!req.cookies) {
    return res
      .status(400)
      .json({ data: null, message: "쿠키가 존재하지 않습니다." });
  }

  if (!req.body.first_visit) {
    return res
      .status(400)
      .json({ data: null, message: "수정할 쿠키내용이 존재하지 않습니다." });
  }

  let data = {
    ...req.cookies,
    first_visit: req.body.first_visit,
  };
  delete data.token;
  let first_visit = req.body.first_visit;

  return res
    .status(200)
    .cookie("first_visit", first_visit, {
      httpOnly: true,
    })
    .json({ data: data, message: "ok" });
};
