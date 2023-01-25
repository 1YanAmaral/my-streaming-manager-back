import express from "express";
import cors from 'cors';
import { listStreamings, listTitleSearch, listPopularTitles } from "./controllers/streaming-controller.js";

const server = express();
server.use(cors());
server.use(express.json());

server.get("/health", (req, res) => {
  res.send("ok");
});

server.get("/streamings", listStreamings)
.get("/titles/:search_value", listTitleSearch)
.get("/titles/popular/:streamingId", listPopularTitles)

server.listen(4000, () => console.log("Listening on 4000..."));
