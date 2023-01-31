import { Router } from "express";
import { signIn } from "../controllers/user-controller.js";


const userRouter = Router();

userRouter.post("/sign-in", /* validateBody(signInSchema)*/ signIn)
 
export { userRouter };