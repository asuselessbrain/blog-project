import { Request, Response } from 'express';
import { userServices } from './user.services';
import { userValidationSchema } from './user.validation';

const createUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;

    const zodData = userValidationSchema.parse(user);

    const responser = await userServices.createUserInDB(zodData);

    res.status(200).json({
      message: 'User created successfully',
      user: responser,
    });
  } catch (err) {
    const error = err as Error;
    res.status(500).json({
      message: 'Error creating user',
      errorMessage: error.message,
      error: error,
    });
  }
};

const getAllUser = async (req: Request, res: Response) => {
  try {
    const users = await userServices.getUserFromDB();
    res.status(200).json({
      success: true,
      message: 'Users fetched successfully',
      users,
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
    res.status(200).json({
      success: true,
      message: 'User fetched successfully',
      user,
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
    res.status(200).json({
      success: true,
      message: 'User updated successfully',
      user: result,
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

    res.status(200).json({
      success: true,
      message: 'User deleted successfully',
      user: result,
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
