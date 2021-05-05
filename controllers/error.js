//404 not found
exports.get404 = (req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
};

// app.use(errorController.get500)
exports.get500 = (error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
};
