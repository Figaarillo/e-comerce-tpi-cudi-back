import { model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: { type: String },
    age: { type: Number },
    email: { type: String, unique: true },
    password: { type: String, select: false },
    role: { type: ['user', 'admin'], default: 'user' },
  },
  {
    timestamps: true, // TODO: createAt, updateAt
  }
)

const UserModel = model('User', userSchema)

export default UserModel
