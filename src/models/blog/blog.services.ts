import { IBlog } from './blog.interface';
import { Blog } from './blog.model';

const createBlogInDB = async (blog: IBlog) => {
  const result = await Blog.create(blog);
  return result;
};

const getAllBlogFromDB = async () => {
  const blogs = await Blog.find();
  return blogs;
};

export const blogServices = {
  createBlogInDB,
  getAllBlogFromDB,
};
