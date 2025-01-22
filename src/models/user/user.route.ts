import { Router } from 'express';
import { userController } from './user.controler';

const userRoute = Router();

userRoute.post('/create-user', userController.createUser);

export default userRoute