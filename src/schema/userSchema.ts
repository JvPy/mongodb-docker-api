import { Schema } from "mongoose";
import { User } from '../interfaces/User'


// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<User>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    age: Number
});

export default userSchema