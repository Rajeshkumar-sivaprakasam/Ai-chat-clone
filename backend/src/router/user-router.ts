import {Router} from 'express'
import { getAllUsers, userLogin, userSignUp } from '../controllers/user-controller.js';
import { loginValidator, signupValidator, validator } from '../utils/validator.js';

const userRouter = Router();

userRouter.get('/',getAllUsers)
userRouter.post('/signup',validator(signupValidator),userSignUp)
userRouter.post('/login',validator(loginValidator),userLogin)

export default userRouter;