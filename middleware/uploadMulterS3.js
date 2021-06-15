const { v4: uuidv4 } = require("uuid");

const AWS = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ID,
  secretAccessKey: process.env.AWS_SECRET,
});

const uploadMulterS3 = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.AWS_BUCKET_NAME,
    metadata: function (req, file, cb) {
      cb(null, { originalname: file.originalname });
    },
    // cacheControl: "max-age=1296000",
    // acl: "public-read",
    key: function (req, file, cb) {
      const filename = uuidv4();
      const arr = file.originalname.split(".");
      const ext = arr[arr.length - 1];

      const name = file.fieldname + "s/" + filename + "." + ext;

      cb(null, name);
    },
  }),
});

module.exports = uploadMulterS3;
