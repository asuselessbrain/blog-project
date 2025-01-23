import { Router } from 'express';
import { userController } from './user.controler';

const userRoute = Router();

userRoute.post('/create-user', userController.createUser);
userRoute.get('/', userController.getAllUser);
userRoute.get('/:id', userController.getSingleUser);
userRoute.put('/:id', userController.updateUser);

export default userRoute;
