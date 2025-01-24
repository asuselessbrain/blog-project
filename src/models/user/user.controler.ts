import { NextFunction, Request, Response } from 'express';
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

const getAllUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await userServices.getUserFromDB();
    responser(res, {
      statusCode: StatusCodes.OK,
      message: 'Users fetched successfully',
      data: users,
    });
  } catch (err) {
    next(err);
  }
};

const getSingleUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userID = req.params.id;

    const user = await userServices.setSingleUserFromDB(userID);
    responser(res, {
      statusCode: StatusCodes.OK,
      message: 'Users fetched successfully',
      data: user,
    });
  } catch (err) {
    next(err);
  }
};

const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = req.body;
    const userID = req.params.id;

    const result = await userServices.updateUserInDB(userID, user);
    responser(res, {
      statusCode: StatusCodes.CREATED,
      message: 'User updated successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userID = req.params.id;

    const result = await userServices.deleteUserFromDB(userID);

    responser(res, {
      statusCode: StatusCodes.NO_CONTENT,
      message: 'User deleted successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
export const userController = {
  createUser,
  getAllUser,
  getSingleUser,
  updateUser,
  deleteUser,
};
