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
      let extension = path.extname(file.originalname);
      cb(null, "images/" + "post/" + Date.now().toString() + extension);
    },
  }),
});

module.exports = upload;
