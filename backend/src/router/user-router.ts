import { Router } from "express";
import {
  getAllUsers,
  userLogin,
  userSignUp,
  verifyUser,
} from "../controllers/user-controller.js";
import {
  loginValidator,
  signupValidator,
  validator,
} from "../utils/validator.js";
import { verfiyToken } from "../utils/token-manager.js";

const userRouter = Router();

userRouter.get("/", getAllUsers);
userRouter.post("/signup", validator(signupValidator), userSignUp);
userRouter.post("/login", validator(loginValidator), userLogin);
userRouter.get("/auth-status", verfiyToken, verifyUser);

export default userRouter;
