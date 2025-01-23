import { Request, Response } from 'express';
import { blogServices } from './blog.services';

const createBlog = async (req: Request, res: Response) => {
  try {
    const blog = req.body;

    const result = await blogServices.createBlogInDB(blog);

    res.status(200).json({
      message: 'Blog created successfully',
      blog: result,
    });
  } catch (err) {
    const error = err as Error;
    res.status(500).json({
      errorMessage: error.message,
      error: err,
    });
  }
};

export const blogController = {
  createBlog,
};
