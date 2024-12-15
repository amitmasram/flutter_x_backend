import mongoose from "mongoose";

import TweetModel from "../database/models/tweet.model";
import { ITweetInterface } from "../database/interfaces/tweet.interface";
import UserModel from "../database/models/user.model";


export const getTweetRepo = async (tweetId: string): Promise<ITweetInterface | null> => {
    try {
        const tweet = await TweetModel.findOne({ tweetId: tweetId })
        return tweet
    } catch (error) {
        console.log(error);
        return null;
    }
};


export const deleteTweetRepo = async (tweetId: string): Promise<boolean> => {
    try {
        const deleted = await TweetModel.findOneAndDelete({ tweetId: tweetId });
        if (deleted) {
            return true;
        } else {
            return false;
        }

    } catch (error) {
        console.log(error);
        return false;
    }
};

export const createTweetRepo = async (tweet: ITweetInterface): Promise<boolean> => {
    try {
        await TweetModel.create(tweet);
        return true
    } catch (error) {
        console.log(error);
        return false;
    }
};


export const updateTweetRepo = async (tweetId: string, updateTweet: ITweetInterface): Promise<boolean> => {
    try {
        const result = await TweetModel.findOneAndUpdate({ tweetId: tweetId }, updateTweet, { new: true })
        if (result) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.log(error);
        return false;
    }
};

export const getAllTweetsRepo = async (): Promise<any[] | null> => {
    try {
        const allTweets = await TweetModel.find();
        if (!allTweets || allTweets.length == 0) {
            return null;

        }
        const tweetWithUserInfo = await Promise.all(
            allTweets.map(async (tweet) => {
                const admin = await UserModel.findOne({ uid: tweet.adminId });
                if (!admin) {
                    return { tweet, admin: null }
                }
                return { tweet, admin }
            })
        );
        return tweetWithUserInfo;
    } catch (error) {

        console.log(error);
        return null;

    }
}