const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const mongoConnect = (cb) => {
  MongoClient.connect(
    `mongodb+srv://michael:qk5BUvgXQAEsZ0Fh@nodejs-academind.bewdbrp.mongodb.net/?retryWrites=true&w=majority&appName=nodejs-academind`
  )
    .then((result) => {
      console.log("Connected!");
      cb(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = mongoConnect;
