//node js
const express = require("express");

//calling the middleman, the controller!
const groceryController = require("../controllers/grocery");

//utilizing nodejs route operation
const router = express.Router();

//get request to get information from the controller we made
router.get("/", groceryController.getAllGroceries);

//add function
router.post("/", groceryController.postGrocery);

//update function
router.put("/", groceryController.putGrocery);

//delete function
router.delete("/:id", groceryController.deleteGrocery);
//handling the route
module.exports = router;
