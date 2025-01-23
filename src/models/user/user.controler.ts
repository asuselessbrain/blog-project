import { NextFunction, Request, Response } from 'express';
import { userServices } from './user.services';
import { userValidationSchema } from './user.validation';
import { StatusCodes } from 'http-status-codes';
import responser from '../../utils/sendResponse';

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = req.body;

    const zodData = userValidationSchema.parse(user);

    const response = await userServices.createUserInDB(zodData);

    responser(res, {
      statusCode: StatusCodes.CREATED,
      message: 'User created successfully',
      data: response,
    });
  } catch (err) {
    next(err);
  }
};

const getAllUser = async (req: Request, res: Response) => {
  try {
    const users = await userServices.getUserFromDB();
    responser(res, {
      statusCode: StatusCodes.OK,
      message: 'Users fetched successfully',
      data: users,
    });
  } catch (err) {
    const error = err as Error;
    res.status(500).json({
      success: false,
      errorMessage: error.message,
      error: error,
    });
  }
};

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const userID = req.params.id;

    const user = await userServices.setSingleUserFromDB(userID);
    responser(res, {
      statusCode: StatusCodes.OK,
      message: 'Users fetched successfully',
      data: user,
    });
  } catch (err) {
    const error = err as Error;
    res.status(500).json({
      success: false,
      errorMessage: error.message,
      error: error,
    });
  }
};

const updateUser = async (req: Request, res: Response) => {
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
    const error = err as Error;
    res.status(500).json({
      success: false,
      errorMessage: error.message,
      error: error,
    });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const userID = req.params.id;

    const result = await userServices.deleteUserFromDB(userID);

    responser(res, {
      statusCode: StatusCodes.NO_CONTENT,
      message: 'User deleted successfully',
      data: result,
    });
  } catch (err) {
    const error = err as Error;
    res.status(500).json({
      success: false,
      errorMessage: error.message,
      error: error,
    });
  }
};
export const userController = {
  createUser,
  getAllUser,
  getSingleUser,
  updateUser,
  deleteUser,
};
