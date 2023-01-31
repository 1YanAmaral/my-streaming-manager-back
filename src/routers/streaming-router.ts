import { listStreamings, listTitleSearch, listPopularTitles, listTitleSources } from "../controllers/streaming-controller.js";
import { Router } from "express";

const streamingRouter = Router();

streamingRouter.get("/", listStreamings)
.get("/titles/:search_value", listTitleSearch)
.get("/titles/popular/:streamingId", listPopularTitles)
.get("/titles/sources/:titleId", listTitleSources)

export { streamingRouter };