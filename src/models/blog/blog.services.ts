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

const getSingleBlogFromDB = async (blogID: string) => {
  const blog = await Blog.findById(blogID);
  return blog;
};

const updateBlogInDB = async (blog: IBlog, blogID: string) => {
  const result = await Blog.findByIdAndUpdate(blogID, blog, {
    new: true,
  });
  return result;
};

const deleteBlogFromDB = async (blogId: string) => {
  const result = await Blog.findByIdAndDelete(blogId);
  return result;
};

export const blogServices = {
  createBlogInDB,
  getAllBlogFromDB,
  getSingleBlogFromDB,
  updateBlogInDB,
  deleteBlogFromDB,
};
