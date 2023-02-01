import { Router } from "express";
import { signIn, signInWithGoogle } from "../controllers/user-controller.js";


const userRouter = Router();

userRouter.post("/sign-in", /* validateBody(signInSchema)*/ signIn)
.post("/sign-in/google", /* validateBody(signInSchema)*/ signInWithGoogle)
 
export { userRouter };