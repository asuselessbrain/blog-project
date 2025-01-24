import { NextFunction, Request, Response } from 'express';

export const globalErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction,
) => {
  res.status(500).json({
    success: false,
    errorMessage: err.message,
    error: err,
  });
};
