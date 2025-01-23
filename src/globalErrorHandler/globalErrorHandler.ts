import { NextFunction, Request, Response } from 'express';

export const globalErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  res.status(500).json({
    success: false,
    errorMessage: err.message,
    error: err,
  });
};
