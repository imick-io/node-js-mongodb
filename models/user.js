const { getDb } = require("../utils/database");

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  create() {
    const db = getDb();
    db.collection("users")
      .insertOne(this)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

module.exports = User;
