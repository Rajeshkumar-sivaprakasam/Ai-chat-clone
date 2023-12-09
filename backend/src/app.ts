import express from "express";
import {config} from 'dotenv'

// config for dot env
config();

const app = express()
// accept json from req
// middleware
app.use(express.json())

export default app;
