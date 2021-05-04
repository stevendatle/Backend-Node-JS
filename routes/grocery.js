const express = require("express");

const groceryController = require("../controllers/grocery");

const router = express.Router();

//get request to get information from the controller we made
router.get("/", groceryController.getAllGroceries);

//handling the route
module.exports = router;
