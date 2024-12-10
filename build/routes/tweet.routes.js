"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const twett_controller_1 = require("../controllers/twett.controller");
const tweetRouter = (0, express_1.Router)();
// Define route paths
// this is the end points 
tweetRouter.get("/:tweetId", twett_controller_1.getTweetController);
//tweetRouter.get("/", getAllTweetsController)
tweetRouter.post("/", twett_controller_1.createTweetController);
tweetRouter.delete("/:usertId", twett_controller_1.deleteTweetController);
tweetRouter.put("/", twett_controller_1.updateTweetController);
exports.default = tweetRouter;
