import { Request, Response } from 'express';
import { blogServices } from './blog.services';
import responser from '../../utils/sendResponse';
import { StatusCodes } from 'http-status-codes';
import { catchAsync } from '../../utils/catchAsync';
import blogValidationSchema from './blog.validation';

const createBlog = catchAsync(async (req: Request, res: Response) => {
  const blog = req.body;

  const zodValidator = blogValidationSchema.parse(blog);

  const result = await blogServices.createBlogInDB(zodValidator);

  responser(res, {
    statusCode: StatusCodes.CREATED,
    message: 'Blog created successfully',
    data: result,
  });
});

const getAllBlog = catchAsync(async (req: Request, res: Response) => {
  const blog = await blogServices.getAllBlogFromDB();
  responser(res, {
    statusCode: StatusCodes.OK,
    message: 'Blog fetched successfully',
    data: blog,
  });
});

const getSingleBlog = catchAsync(async (req: Request, res: Response) => {
  const blogID = req.params.id;
  const result = await blogServices.getSingleBlogFromDB(blogID);
  responser(res, {
    statusCode: StatusCodes.OK,
    message: 'Blog fetched successfully',
    data: result,
  });
});

const updateBlog = catchAsync(async (req: Request, res: Response) => {
  const blogID = req.params.id;
  const blog = req.body;

  const result = await blogServices.updateBlogInDB(blog, blogID);

  responser(res, {
    statusCode: StatusCodes.OK,
    message: 'Blog updated successfully',
    data: result,
  });
});

const deleteBlog = catchAsync(async (req: Request, res: Response) => {
  const blogID = req.params.id;
  const result = await blogServices.deleteBlogFromDB(blogID);

  responser(res, {
    statusCode: StatusCodes.OK,
    message: 'Blog deleted successfully',
    data: result,
  });
});

export const blogController = {
  createBlog,
  getAllBlog,
  getSingleBlog,
  updateBlog,
  deleteBlog,
};
