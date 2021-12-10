const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");
const path = require("path");

aws.config.update({
  accessKeyId: process.env.MULTER_KEY_ID,
  secretAccessKey: process.env.MULTER_ACCESS_KEY,
  region: process.env.MULTER_REGION,
});

const s3 = new aws.S3();

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "kickick-post-image",
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      let folder_name = req.params.folder_name;
      let extension = path.extname(file.originalname);
      cb(
        null,
        folder_name +
          "/" +
          path.basename(file.originalname, extension) +
          "_" +
          Date.now().toString() +
          extension
      );
    },
  }),
});

const destroy = (req, res) => {
  const key = req.body.key;

  s3.deleteObject(
    {
      Bucket: "kickick-post-image", // 버킷이름 환경변수로 설정 필요
      Key: key,
    },
    (err, data) => {
      if (err) {
        console.log(err);
        return res
          .status(500)
          .json({ data: null, message: "데이터베이스 에러" });
      }
      console.log("s3 deleteObject ", data);
      return res.status(201).json({ data: data, message: "ok" });
    }
  );
  // 여기서부터 배열
  let arr = [
    {
      Key: "HappyFace.jpg",
      VersionId: "2LWg7lQLnY41.maGB5Z6SWW.dcq0vx7b",
    },
    {
      Key: "HappyFace.jpg",
      VersionId: "yoz3HB.ZhCS_tKVEmIOr7qYyyAaZSKVd",
    },
  ];
  var params = {
    Bucket: "examplebucket",
    Delete: {
      Objects: arr,
      Quiet: false,
    },
  };
  s3.deleteObjects(params, function (err, data) {
    if (err) console.log(err, err.stack);
    // an error occurred
    else console.log(data); // successful response
  });
};

module.exports = { upload, destroy };
