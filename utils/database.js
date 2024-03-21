const mongodb = require("mongodb");
const { mongoUri } = require("../config");

const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (cb) => {
  MongoClient.connect(mongoUri)
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
