import express from "express";
import { config } from "dotenv";
import morgon from "morgan";
import appRouter from "./router/index.js";
import cookieParser from "cookie-parser";
import cors from "cors";
// config for dot env
config();

const app = express();
// accept json from req

// middleware
app.use(cors({ origin: "http://localhost:5173", credentials: true })); // to avaid cros issue

app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
// remove in prod
app.use(morgon("Dev"));

// router middleware
app.use("/api/v1", appRouter);

export default app;
