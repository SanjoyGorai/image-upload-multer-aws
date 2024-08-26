import AWS from "aws-sdk";
import fs from "fs";

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

export const uploadToS3 = (file) => {
  const fileContent = fs.readFileSync(file.path);

  const params = {
    Bucket: process.env.S3_BUCKET_NAME,
    Key: file.filename,
    Body: fileContent,
    ContentType: file.mimetype,
  };
  console.log("S3_BUCKET_NAME: ", process.env.S3_BUCKET_NAME);

  return s3.upload(params).promise();
};

export const deleteLocalFile = (filePath) => {
  fs.unlinkSync(filePath);
};
