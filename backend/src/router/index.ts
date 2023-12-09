import {Router} from 'express'
import userRouter from './user-router.js';
import chatRouter from './chat-router.js';

const appRouter = Router();

appRouter.use('/user',userRouter) //user router
appRouter.use('/chat',chatRouter) //chat router

export default appRouter;