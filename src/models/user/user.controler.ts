import { Request, Response } from 'express';
import { userServices } from './user.services';

const createUser = async (req: Request, res: Response) => {
  try{
    const user = req.body;

  const responser = await userServices.createUserInDB(user);

  res.status(200).json({
    message: 'User created successfully',
    user: responser,
  });
  }catch(err){
    console.log(err);
  }
};

export const  userController = {
    createUser
}