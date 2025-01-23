import { IUser } from './user.interface';
import { User } from './user.model';

const createUserInDB = async (user: IUser) => {
  const result = await User.create(user);
  return result;
};

const getUserFromDB = async () => {
  const result = await User.find();
  return result;
};

const setSingleUserFromDB = async (userId: string) => {
  const result = await User.findById(userId);
  return result;
};

export const userServices = {
  createUserInDB,
  getUserFromDB,
  setSingleUserFromDB,
};
