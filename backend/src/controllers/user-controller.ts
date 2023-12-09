import { NextFunction, Request, Response } from "express";
import User from "../models/User.js";
import { compare, hash } from "bcrypt";

//fetch all users
export const getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await User.find();
    return res.status(200).json({
      message: "ok",
      users,
    });
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      message: "User fetch failed",
      cause: error.message, // return casuse messaage of that error
    });
  }
};
//Create new users
export const userSignUp = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, email, password } = req.body;
    const exsistingUser = await User.findOne({email})
    if(exsistingUser) return res.status(401).send('User Already exsisted!')
    // hashed password
    const hashedPassword = await hash(password, 10);

    // save new user to database
    const user = new User({name,email,password:hashedPassword});
    await user.save() // saving to db
    return res.status(201).json({
      message: "ok",
      userId:user._id.toString()
    });
} catch (error) {
      console.log(error);
    return res.status(200).json({
      message: "Failed to signup user!",
      cause: error.message, // return casuse messaage of that error
    });
  }
};
//user Login
export const userLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {  email, password } = req.body;
    const user = await User.findOne({email})
    if(!user) return res.status(401).send('User not registered!')
    // decrypt password check
    const isPasswordCorrect = await compare(password, user.password);
    if(!isPasswordCorrect){
        return res.status(403).send("Incorrect username,password")
    }
    
    return res.status(200).json({
        message:'success',
        userId:user._id.toString()

    });
} catch (error) {
      console.log(error);
    return res.status(200).json({
      message: "Failed to validate user",
      cause: error.message, // return casuse messaage of that error
    });
  }
};
