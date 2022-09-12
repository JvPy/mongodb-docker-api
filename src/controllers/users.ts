import {Request, Response} from "express"
import { model } from "mongoose";
import { User } from "../interfaces/User";
import userSchema from "../schema/userSchema";

const getUsers = async (req: Request, res: Response) => {
    const User = model<User>('User', userSchema);
    const users = await User.find();
    
    return res.status(200).json(users)
}

const addUser = async (req: Request, res: Response) => {
    const { email, name, age } = req.body; 
    const UserModel = model<User>('User', userSchema);

    UserModel.findOne({email}, async (err: any,obj: any) => { 
        if(err){
            const userToAdd = new UserModel({
                email: email,
                name: name,
                age: age
            })
        
            await userToAdd.save();
        
            return res.status(201).json();
        } else {
            return res.status(409).json("User already exists")
        }
    });
}

export {
    getUsers,
    addUser
}