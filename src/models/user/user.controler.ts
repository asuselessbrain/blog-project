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

export const userController = {
  createUser,
};
