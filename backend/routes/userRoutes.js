const express = require("express");
const {
  register,
  login,
  logout,
  bookmarks,
  getProfile,
  getOtherUser,
  follow,
  unfollow,
} = require("../controllers/userController");

const { isAuthenticated } = require("../config/auth");
const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/bookmark/:id").post(isAuthenticated, bookmarks);
router.route("/profile/:id").get(isAuthenticated, getProfile);
router.route("/otheruser/:id").get(isAuthenticated, getOtherUser);
router.route("/follow/:id").post(isAuthenticated, follow);
router.route("/unfollow/:id").post(isAuthenticated, unfollow);

module.exports = router;
