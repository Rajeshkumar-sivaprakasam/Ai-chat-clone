import express from "express";
import {config} from 'dotenv';
import morgon from 'morgan';
import appRouter from "./router/index.js";

// config for dot env
config();

const app = express()
// accept json from req
// middleware
app.use(express.json())

// remove in prod
app.use(morgon('Dev'))

// router middleware
app.use("/app/v1",appRouter)

export default app;
