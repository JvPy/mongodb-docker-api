import { Request, Response } from 'express';
import { model } from 'mongoose';
import { User } from '../interfaces/User';
import userSchema from '../schema/userSchema';

const getUsers = async (req: Request, res: Response) => {
  const UserModel = model<User>('User', userSchema);
  const users = await UserModel.find();

  return res.status(200).json(users);
};

const addUser = async (req: Request, res: Response) => {
  const { email, name, age } = req.body;
  const UserModel = model<User>('User', userSchema);

  UserModel.findOne({ email }, async (err: any) => {
    if (err) {
      const userToAdd = new UserModel({
        email,
        name,
        age,
      });

      await userToAdd.save();

      return res.status(201).json();
    }
    return res.status(409).json('User already exists');
  });
};

export {
  getUsers,
  addUser,
};
