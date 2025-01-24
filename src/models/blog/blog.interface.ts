import mongoose from 'mongoose';

export type IBlog = {
  title: string;
  content: string;
  author: mongoose.Types.ObjectId;
  isPublished: boolean;
};
