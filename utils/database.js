const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (cb) => {
  MongoClient.connect(
    `mongodb+srv://michael:qk5BUvgXQAEsZ0Fh@nodejs-academind.bewdbrp.mongodb.net/?retryWrites=true&w=majority&appName=nodejs-academind`
  )
    .then((client) => {
      console.log("Connected!");
      _db = client.db("nodejs-academind");
      cb();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No database found!";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
