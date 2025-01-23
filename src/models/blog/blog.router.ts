import { Router } from 'express';
import { blogController } from './blog.controler';

const blogRoute = Router();

blogRoute.post('/create-blog', blogController.createBlog);

export default blogRoute;
