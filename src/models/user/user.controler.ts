import { Request, Response } from 'express';
import { userServices } from './user.services';
import { userValidationSchema } from './user.validation';
import { StatusCodes } from 'http-status-codes';
import responser from '../../utils/sendResponse';
import { catchAsync } from '../../utils/catchAsync';

const createUser = catchAsync(async (req: Request, res: Response) => {
  const user = req.body;

  const zodData = userValidationSchema.parse(user);

  const response = await userServices.createUserInDB(zodData);

  responser(res, {
    statusCode: StatusCodes.CREATED,
    message: 'User created successfully',
    data: response,
  });
});

const getAllUser = catchAsync(async (req: Request, res: Response) => {
  const users = await userServices.getUserFromDB();
  responser(res, {
    statusCode: StatusCodes.OK,
    message: 'Users fetched successfully',
    data: users,
  });
});

const getSingleUser = catchAsync(async (req: Request, res: Response) => {
  const userID = req.params.id;

  const user = await userServices.setSingleUserFromDB(userID);
  responser(res, {
    statusCode: StatusCodes.OK,
    message: 'Users fetched successfully',
    data: user,
  });
});

const updateUser = catchAsync(async (req: Request, res: Response) => {
  const user = req.body;
  const userID = req.params.id;

  const result = await userServices.updateUserInDB(userID, user);
  responser(res, {
    statusCode: StatusCodes.CREATED,
    message: 'User updated successfully',
    data: result,
  });
});

const deleteUser = catchAsync(async (req: Request, res: Response) => {
  const userID = req.params.id;

  const result = await userServices.deleteUserFromDB(userID);

  responser(res, {
    statusCode: StatusCodes.OK,
    message: 'User deleted successfully',
    data: result,
  });
});

export const userController = {
  createUser,
  getAllUser,
  getSingleUser,
  updateUser,
  deleteUser,
};
