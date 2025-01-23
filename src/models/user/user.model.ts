import { model, Schema } from 'mongoose';
import { IUser } from './user.interface';
import config from '../../config';
import bcrypt from 'bcrypt';

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, immutable: true },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: {
        values: ['user', 'admin'],
        message: 'The role must be user or admin',
      },
      default: 'user',
    },
    isBlocked: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  },
);

userSchema.pre('save', async function (next) {
  const user = this as IUser;

  user.password = await bcrypt.hash(
    user.password,
    Number(config.bycript_saltRounds),
  );
  next();
});

export const User = model<IUser>('user', userSchema);
