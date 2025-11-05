const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  const response = {
    status: err.status || "error",
    message: err.message || "Internal Server Error",
    code: err.code || "SERVER_ERROR",
  };

  // Show stack trace only in development
  if (process.env.NODE_ENV === "development") {
    response.stack = err.stack;
  }

  // Log every error (extend later with Winston/Sentry)
  console.error(`[${response.code}]`, err);

  res.status(statusCode).json(response);
};

export default errorHandler;
