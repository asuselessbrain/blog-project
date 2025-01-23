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

const getAllBlog = async (req: Request, res: Response) => {
  try {
    const blog = await blogServices.getAllBlogFromDB();
    res.status(200).json({
      message: 'All blogs',
      blog: blog,
    });
  } catch (err) {
    const error = err as Error;
    res.status(500).json({
      errorMessage: error.message,
      error: err,
    });
  }
};

const getSingleBlog = async (req: Request, res: Response) => {
  try {
    const blogID = req.params.id;
    const result = await blogServices.getSingleBlogFromDB(blogID);
    res.status(200).json({
      message: 'Single blog',
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

const updateBlog = async (req: Request, res: Response) => {
  try {
    const blogID = req.params.id;
    const blog = req.body;

    const result = await blogServices.updateBlogInDB(blog, blogID);

    res.status(200).json({
      message: 'Blog updated successfully',
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

const deleteBlog = async (req: Request, res: Response) => {
  try {
    const blogID = req.params.id;
    const result = await blogServices.deleteBlogFromDB(blogID);

    res.status(200).json({
      success: true,
      message: 'Blog deleted successfully',
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
  getAllBlog,
  getSingleBlog,
  updateBlog,
  deleteBlog,
};
