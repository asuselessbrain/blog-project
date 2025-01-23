import { IBlog } from './blog.interface';
import { Blog } from './blog.model';

const createBlogInDB = async (blog: IBlog) => {
  const result = await Blog.create(blog);
  return result;
};

export const blogServices = {
  createBlogInDB,
};
