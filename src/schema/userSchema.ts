import { Schema } from 'mongoose';
import { User } from '../interfaces/User';

const userSchema = new Schema<User>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  age: Number,
});

export default userSchema;
