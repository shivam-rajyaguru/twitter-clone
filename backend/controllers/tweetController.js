const Tweet = require("../models/tweetSchema");
const User = require("../models/userSchema");

const createTweet = async (req, res) => {
  try {
    const { description, id } = req.body;

    if (!description || !id) {
      return res.status(401).json({
        message: "All fields are required",
        status: false,
      });
    }

    const user = await User.findById(id).select("-password");

    await Tweet.create({
      description,
      userId: id,
      userDetails: user,
    });

    return res.status(201).json({
      message: "Tweet created successfully",
      status: true,
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteTweet = async (req, res) => {
  try {
    const { id } = req.params;
    await Tweet.findByIdAndDelete(id);
    return res.status(201).json({
      message: "Tweet deleted successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

const likeOrDislike = async (req, res) => {
  try {
    const loggedInUserId = req.body.id;
    const tweetId = req.params.id;
    const tweet = await Tweet.findById(tweetId);
    if (tweet.like.includes(loggedInUserId)) {
      // dislike
      await Tweet.findByIdAndUpdate(tweetId, {
        $pull: { like: loggedInUserId },
      });
      return res.status(200).json({
        message: "User disliked your tweet.",
      });
    } else {
      // like
      await Tweet.findByIdAndUpdate(tweetId, {
        $push: { like: loggedInUserId },
      });
      return res.status(200).json({
        message: "User liked your tweet.",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const getAllTweet = async (req, res) => {
  try {
    //loggedInUserTweet + FollowingUserTweet;

    const id = req.params.id;
    const loggedInUser = await User.findById(id);

    const loggedInUserTweet = await Tweet.find({ userId: id });

    const followingUserTweet = await Promise.all(
      loggedInUser.following.map((otherUserId) => {
        return Tweet.find({ userId: otherUserId });
      })
    );

    return res.status(201).json({
      tweet: loggedInUserTweet.concat(...followingUserTweet),
    });
  } catch (error) {
    console.log(error);
  }
};

const getFollowingTweet = async (req, res) => {
  try {
    const id = req.params.id;
    const loggedInUser = await User.findById(id);

    const followingUserTweet = await Promise.all(
      loggedInUser.following.map((otherUserId) => {
        return Tweet.find({ userId: otherUserId });
      })
    );

    return res.status(201).json({
      tweet: [].concat(...followingUserTweet),
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createTweet,
  deleteTweet,
  likeOrDislike,
  getAllTweet,
  getFollowingTweet,
};
