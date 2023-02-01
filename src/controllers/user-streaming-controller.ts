import {Request, Response} from 'express';
import httpStatus from 'http-status';
import userStreamingServices from '../services/user-streaming-services.js';

export async function insertUserStreamings(req: Request, res: Response) {
    try {
        const {selected} = req.body;
        console.log(selected)
        const result = await userStreamingServices.insertUserStreamings(selected);
        return res.send(result);
        
    } catch (error) {
        return res.status(httpStatus.UNPROCESSABLE_ENTITY).send({});   
    }
   
}