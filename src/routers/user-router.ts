import { Router } from "express";
import { signIn, signInWithGoogle, setUserExpenses, getUserExpenses, usersPost } from "../controllers/user-controller.js";


const userRouter = Router();

userRouter.post("/sign-in", /* validateBody(signInSchema)*/ signIn)
.post("/sign-in/google", /* validateBody(signInSchema)*/ signInWithGoogle)
.post("/sign-up", /* validateBody(createUserSchema) */ usersPost)
.post('/expenses', setUserExpenses)
.get('/expenses/:id',getUserExpenses)

 
export { userRouter };