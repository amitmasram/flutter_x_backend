import { Router } from "express";

import { getTweetController, deleteTweetController, createTweetController, updateTweetController, } from "../controllers/twett.controller";

const tweetRouter = Router();



// Define route paths
// this is the end points 


tweetRouter.get("/:tweetId", getTweetController)
//tweetRouter.get("/", getAllTweetsController)
tweetRouter.post("/", createTweetController)
tweetRouter.delete("/:usertId", deleteTweetController)
tweetRouter.put("/", updateTweetController)


export default tweetRouter;