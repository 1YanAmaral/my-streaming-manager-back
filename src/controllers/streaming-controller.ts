import {Request, Response} from 'express';
import streamingServices from '../services/streaming-services.js';


export async function listStreamings(req: Request, res: Response) {
    const result = await streamingServices.getStreamings();
    return res.send(result);
}

export async function listTitleSearch(req: Request, res: Response) {
    const search_value = req.params.search_value;
    const result = await streamingServices.searchTitles(search_value);
    return res.send(result);
}

export async function listPopularTitles(req: Request, res: Response) {
    const streamingId = Number(req.params.streamingId);
    const result = await streamingServices.searchPopularTitles(streamingId);
    return res.send(result);
}