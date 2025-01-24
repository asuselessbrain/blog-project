import { z } from 'zod';
import mongoose from 'mongoose';

const blogValidationSchema = z.object({
  title: z
    .string()
    .min(1, { message: 'Title must be at least 1 character long' })
    .max(100, { message: 'Title must be less than 100 characters' }),
  content: z
    .string()
    .min(20, { message: 'Content must be at least 20 character long' }),
  author: z
    .string()
    .refine((value) => mongoose.Types.ObjectId.isValid(value), {
      message: 'Invalid author ID',
    })
    .transform((value) => new mongoose.Types.ObjectId(value)),
  isPublished: z.boolean().optional().default(false),
});

export default blogValidationSchema;
