import { Router } from 'express';
import { blogController } from './blog.controler';

const blogRoute = Router();

blogRoute.post('/create-blog', blogController.createBlog);
blogRoute.get('/', blogController.getAllBlog);
blogRoute.get('/:id', blogController.getSingleBlog);
blogRoute.put('/:id', blogController.updateBlog);
blogRoute.delete('/:id', blogController.deleteBlog);

export default blogRoute;
