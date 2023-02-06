import {Request, Response} from 'express';
import httpStatus from 'http-status';
import userStreamingServices from '../services/user-streaming-services.js';

export async function insertUserStreamings(req: Request, res: Response) {
    try {
        const {selected} = req.body;
        
        const result = await userStreamingServices.updateUserStreamings(selected, selected.userId);
        return res.send(result);
        
    } catch (error) {
        return res.status(httpStatus.UNPROCESSABLE_ENTITY).send({});   
    }
   
}

export async function getUserStreamings(req: Request, res: Response) {
    try {
        const userId = Number(req.params.userId);
        console.log(userId)
                //const {userId} = req.body;
        const result = await userStreamingServices.getUserStreamings(userId);
        return res.send(result);
        
    } catch (error) {
        return res.status(httpStatus.UNPROCESSABLE_ENTITY).send({});   
    }
   
}