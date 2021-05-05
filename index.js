//calling node express +
const express = require("express");
const groceryRoutes = require("./routes/grocery");

//calling error handling controller
const errorController = require("./controllers/error");

//utilizing node express
const app = express();

//variable ports -- process.env.port -- whatever's in the environment variable PORT or if there's nothing there, then run on port 3000
const ports = process.env.PORT || 3000;

//express.urlencoded = POST requests and PUT requests because in both of these requests, we're sending data (in some form of object) to the server and asking the server to accept or store that data (object)
//requesting the use of an object that is either a string or arrays
app.use(express.urlencoded({ extended: true }));
//requesting the use of a json object
app.use(express.json());

//setting the headers
app.use((req, res, next) => {
  //allows the use on all domains
  res.setHeader("Access-Control-Allow-Origin", "*");
  //allows the use of the methods - get, post, put, delete
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

//user makes a request -- execute command to get data from database or if fails then send user to error page
app.use("/groceries", groceryRoutes);

//if user does not get routed to localhost:3000/groceries/ then they get routed to error controllers setup in /controllers/error.js
app.use(errorController.get404);
app.use(errorController.get500);

//listening to all activity happening on port 3000 as declared in our variable ports if no port has been assigned in environment PORT.
app.listen(ports, () => console.log(`listening on port ${ports}`));
