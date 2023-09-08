// First Middleware to handle not found
const notFound = (req, res, next) => {
  const error = new Error(`Not Found  - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

// Second Middleware to handle error in our routes
// err tell express that this is custom error middleware
const errorHandler = (err, req, res, next) => {
  // change statusCode if it still 200
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message;
  // handle mongoose castError

  if (err.name === "CastError" && err.kind === "ObjectId") {
    statusCode = 404;
    message = "Resource Not Found in DB ";
  }
  res.status(statusCode).json({
    message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

export { notFound, errorHandler };
