const Grocery = require("../models/grocery");

//connecting model to the route by calling the function here
exports.getAllGroceries = async (req, res, next) => {
  //try block is waiting for data to be fetched from database, if everything is good then returns status 200.
  //if there is a problem fetching data, return status code 500 and we will redirect user to separate error controller.
  try {
    const [allGroceries] = await Grocery.fetchAll();
    res.status(200).json(allGroceries);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
