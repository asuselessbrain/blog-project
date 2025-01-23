import { Response } from 'express';

type SendResponse<T> = {
  status?: true;
  statusCode: number;
  message: string;
  data: T | T[] | null;
};
const responser = <T>(res: Response, data: SendResponse<T>) => {
  res.status(data.statusCode).json({
    success: true,
    statusCode: data.statusCode,
    message: data.message,
    data: data.data,
  });
};

export default responser;
