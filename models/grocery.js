//OOP to add groceries
//this model is going to define what groceries are
//if you want to add new grocery, call the class Grocery and then pass item in constructor

module.exports = class Grocery {
  constructor(id, item) {
    this.id = id;
    this.item = item;
  }

  static fetchAll() {
    return [
      {
        id: 1,
        item: "milk",
      },
      {
        id: 2,
        item: "bread",
      },
    ];
  }
};
