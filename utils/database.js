const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (cb) => {
  MongoClient.connect(
    `mongodb+srv://${process.env.MONGODB_ATLAS_USERNAME}:${process.env.MONGODB_ATLAS_PASSWORD}@nodejs-academind.bewdbrp.mongodb.net/?retryWrites=true&w=majority&appName=${process.env.MONGODB_ATLAS_DBNAME}`
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
