import { insertUserStreamings, getUserStreamings } from "../controllers/user-streaming-controller.js";
import { Router } from "express";

const userStreamingRouter = Router();

userStreamingRouter.post("/", insertUserStreamings)
.get('/services/:userId', getUserStreamings)


export { userStreamingRouter };