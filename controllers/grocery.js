//getting the grocery object that we made in the models folder
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

//router.post('/', groceryController.postGrocery);
exports.postGrocery = async (req, res, next) => {
  try {
    const postResponse = await Grocery.post(req.body.item);
    //201 for resource being created
    res.status(201).json(postResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

//router.put('/', groceryController.putGrocery);
exports.putGrocery = async (req, res, next) => {
  try {
    const putResponse = await Grocery.update(req.body.id, req.body.item);
    res.status(200).json(putResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

//router.delete('/:id', groceryController.deleteGrocery);
exports.deleteGrocery = async (req, res, next) => {
  try {
    const deleteResponse = await Grocery.delete(req.params.id);
    res.status(200).json(deleteResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
