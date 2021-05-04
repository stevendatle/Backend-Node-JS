//OOP to add groceries
//this model is going to define what groceries are
//if you want to add new grocery, call the class Grocery and then pass item in constructor

const db = require("../util/database");

module.exports = class Grocery {
  constructor(id, item) {
    this.id = id;
    this.item = item;
  }

  //allowing our database data to be retrieved by executing an sql query
  static fetchAll() {
    return db.execute("SELECT * FROM groceries");
  }
};
