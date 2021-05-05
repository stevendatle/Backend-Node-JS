//oop for groceries

//connecting to DB
const db = require("../db/database");

//this is what a grocery item will look like in my list of groceries based on how my database looks like in mysql
module.exports = class Grocery {
  constructor(id, item) {
    this.id = id;
    this.item = item;
  }

  //allowing our database data to be retrieved by executing an sql query
  //this sql query will get all the data from the table groceries
  static fetchAll() {
    return db.execute("SELECT * FROM groceries");
  }

  //ADD GROCERY
  //don't need the id here because when we set up the database, the ID was set to auto increment
  //made it this format to avoid malicious sql injections
  static post(item) {
    return db.execute("INSERT INTO groceries (item) VALUES (?)", [item]);
  }

  //passing in parameters id and item in order to track which id associated to which item is updated
  static update(id, item) {
    return db.execute("UPDATE groceries SET item = ? WHERE id = ?", [item, id]);
  }

  //do not need to specify item for delete, just id
  static delete(id) {
    return db.execute("DELETE FROM groceries WHERE id = ?", [id]);
  }
};
