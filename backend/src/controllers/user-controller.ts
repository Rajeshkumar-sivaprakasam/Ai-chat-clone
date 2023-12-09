import { NextFunction, Request, Response } from "express";
import User from "../models/User.js";
import { hash } from "bcrypt";

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
    // hashed password
    const hashedPassword = await hash(password, 10);
    // save new user to database
    const user = new User({name,email,password:hashedPassword});
    
    return res.status(200).json({
      message: "ok",
      userId:user._id.toString()
    });
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      message: "User fetch failed",
      cause: error.message, // return casuse messaage of that error
    });
  }
};
