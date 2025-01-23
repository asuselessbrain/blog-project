import mongoose from 'mongoose';

export type IBlog = {
  title: string;
  content: string;
  author: mongoose.Schema.Types.ObjectId;
  isPublished: boolean;
};
