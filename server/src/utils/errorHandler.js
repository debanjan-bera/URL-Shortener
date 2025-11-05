export const catchAsync = (fn) => {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};


export class AppError extends Error {
  constructor(message, options = {}) {
    const { statusCode = 500, code = "SERVER_ERROR", isOperational = true } = options;
    super(message);

    this.statusCode = statusCode;
    this.code = code; // Custom internal error code (useful for clients & logs)
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.isOperational = isOperational;

    Error.captureStackTrace(this, this.constructor);
  }
}

export  const ERROR_TYPES = {
  AUTH: {
    INVALID_TOKEN: "AUTH_INVALID_TOKEN",
    UNAUTHORIZED: "AUTH_UNAUTHORIZED"
  },
  USER: {
    NOT_FOUND: "USER_NOT_FOUND",
    DUPLICATE_USER: "USER_ALREADY_EXISTS"
  },
  VALIDATION: {
    INVALID_INPUT: "VALIDATION_ERROR"
  },
  SERVER: {
    INTERNAL: "SERVER_ERROR"
  }
};

// app.all("*", (req, res, next) => {
//   next(
//     new AppError(`Route ${req.originalUrl} not found`, {
//       statusCode: 404,
//       code: "ROUTE_NOT_FOUND"
//     })
//   );
// });