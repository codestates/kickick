const multer = require("multer");
const multerS3 = require("multer-s3");
const aws = require("aws-sdk");

const s3 = new aws.S3({
  accessKeyId: process.env.MULTER_KEY_ID,
  secretAccessKey: process.env.MULTER_ACCESS_KEY,
  region: process.env.MULTER_REGION,
});
const upload = multer(
  {
    storage: multerS3({
      s3: s3,
      bucket: "YourBucketName",
      acl: "public-read",
      key: function (req, file, cb) {
        cb(null, Date.now() + "." + file.originalname.split(".").pop()); // 이름 설정
      },
    }),
  },
  "NONE"
);
module.exports = upload;
