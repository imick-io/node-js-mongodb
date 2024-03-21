const { ObjectId } = require("mongodb");
const { getDb } = require("../utils/database");

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  static get(id) {
    const db = getDb();
    return db
      .collection("users")
      .find({ _id: new ObjectId(String(id)) })
      .next();
  }

  static all() {
    const db = getDb();
    return db.collection("users").find().toArray();
  }

  create() {
    const db = getDb();
    return db.collection("users").insertOne(this);
  }
}

module.exports = User;
