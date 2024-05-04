import React, { useEffect } from "react";
import axios from "axios";
import { TWEET_API_END_POINT } from "../utils/constant";
import { useDispatch } from "react-redux";
import { getAllTweets } from "../redux/tweetSlice";
import { useSelector } from "react-redux";

function useGetAllTweet(id) {
  const { refresh, tweet, isActive } = useSelector((store) => store.tweet);
  const dispatch = useDispatch();

  async function fetchAllTweets() {
    try {
      const res = await axios.get(`${TWEET_API_END_POINT}/getAllTweet/${id}`, {
        withCredentials: true,
      });
      // console.log(res);
      dispatch(getAllTweets(res?.data?.tweet));
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchFollowingTweet() {
    try {
      const res = await axios.get(
        `${TWEET_API_END_POINT}/followingtweets/${id}`,
        { withCredentials: true }
      );
      console.log(res);
      dispatch(getAllTweets(res.data.tweet));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (isActive) {
      fetchAllTweets(id);
    } else {
      fetchFollowingTweet(id);
    }
  }, [id, refresh, tweet, isActive]);
}

export default useGetAllTweet;
