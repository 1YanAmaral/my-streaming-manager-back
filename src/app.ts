import express from "express";
import cors from 'cors';
import { streamingRouter } from "./routers/streaming-router.js";
import { userRouter } from "./routers/user-router.js";


const server = express();
server.use(cors());
server.use(express.json());

server.get("/health", (req, res) => {
  res.send("ok");
});

server.use('/streamings', streamingRouter)
.use('/user', userRouter)

server.listen(4000, () => console.log("Listening on 4000..."));
