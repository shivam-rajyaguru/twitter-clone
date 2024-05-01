const express = require("express");
const router = express.Router();
const {
  createTweet,
  deleteTweet,
  likeOrDislike,
  getAllTweet,
  getFollowingTweet,
} = require("../controllers/tweetController");
const { isAuthenticated } = require("../config/auth");

router.route("/create").post(isAuthenticated, createTweet);
router.route("/delete/:id").delete(isAuthenticated, deleteTweet);
router.route("/like/:id").put(isAuthenticated, likeOrDislike);
router.route("/getAllTweet/:id").get(isAuthenticated, getAllTweet);
router.route("/followingtweets/:id").get(isAuthenticated, getFollowingTweet);

module.exports = router;
