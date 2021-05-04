const Grocery = require("../models/grocery");

//connecting model to the route by calling the function here
exports.getAllGroceries = (req, res, next) => {
  res.send(Grocery.fetchAll());
};
