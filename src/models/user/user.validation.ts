import { string, z } from 'zod';

export const userValidationSchema = z.object({
  name: z
    .string({ message: 'Name must be a string' })
    .min(1, { message: 'Name must be 1 character long' })
    .max(50, { message: 'Name must be less than or equal to 50 characters' }),
  email: z.string().email({ message: 'Invalid email address' }),
  password: string()
    .min(6, {
      message: 'Password must be at least 6 characters long',
    })
    .max(20, {
      message: 'Password must be less than or equal to 20 characters',
    })
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,20}$/,
      {
        message:
          'Password must include at least one uppercase letter, one lowercase letter, one number, and one special character',
      },
    ),
  role: z
    .enum(['user', 'admin'], {
      message: "Role must be either 'user' or 'admin",
    })
    .default('user'),
  isBlocked: z.boolean().default(false),
});
