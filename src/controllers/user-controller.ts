import { Request, Response } from "express";
import httpStatus from "http-status";
import userService from "../services/user-services.js";


export async function signIn(req: Request, res: Response) {
    const { email, password } = req.body;
  
    try {
      const result = await userService.signIn({ email, password });
  
      return res.status(httpStatus.OK).send(result);
    } catch (error) {
      return res.status(httpStatus.UNAUTHORIZED).send({});
    }
  }