//calling packages we need
const express = require("express");
const groceryRoutes = require("./routes/grocery");
const errorController = require("./controllers/error");

const app = express();

const ports = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//setting the headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

//user makes a request -- execute command to get data from database or if fails then send user to error page
app.use("/groceries", groceryRoutes);

//error case 404 happens before error case 500
app.use(errorController.get404);

app.use(errorController.get500);

app.listen(ports, () => console.log(`listening on port ${ports}`));
