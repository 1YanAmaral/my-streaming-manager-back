import { insertUserStreamings } from "../controllers/user-streaming-controller.js";
import { Router } from "express";

const userStreamingRouter = Router();

userStreamingRouter.post("/", insertUserStreamings)


export { userStreamingRouter };