import { Request, Response } from "express";
import httpStatus from "http-status";
import userService, { SignInParams, GoogleParams }  from "../services/user-services.js";

export async function signIn(req: Request, res: Response) {
    const { email, password } = req.body as SignInParams;
  
    try {
      const result = await userService.signIn({ email, password });
  
      return res.status(httpStatus.OK).send(result);
    } catch (error) {
      return res.status(httpStatus.UNAUTHORIZED).send({});
    }
  }
  export async function signInWithGoogle(req: Request, res: Response) {
    const { name, email, password, token } = req.body as GoogleParams;
    
    try {
      const result = await userService.signInWithGoogle({ name, email, password, token });
      return res.status(httpStatus.OK).send(result);
    
    } catch (error) {
      return res.status(httpStatus.UNAUTHORIZED).send({});
    }
  }