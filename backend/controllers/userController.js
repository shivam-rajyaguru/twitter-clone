const User = require("../models/userSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const { name, username, email, password } = req.body;
    if (!name || !username || !email || !password) {
      return res.status(401).json({
        message: "All fields are required",
        success: false,
      });
    }

    const user = await User.findOne({ email });

    if (user) {
      return res.status(401).json({
        message: "User already exist",
        success: false,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 16);

    await User.create({
      name,
      username,
      email,
      password: hashedPassword,
    });

    return res.status(201).json({
      message: "Account created succefully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(401).json({
        message: "All fields are required",
        success: false,
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        message: "Incorrect email or password",
        success: false,
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Incorrect email or password",
        success: false,
      });
    }

    const tokenData = {
      userId: user._id,
    };

    const token = await jwt.sign(tokenData, process.env.TOKEN_STRING, {
      expiresIn: "1d",
    });
    console.log(token);

    return res
      .status(201)
      .cookie("token", token, { expiresIn: "1d", httpOnly: true })
      .json({
        message: `Welcome back ${user.name}`,
        user,
        success: true,
      });
  } catch (error) {
    console.log(error);
  }
};

const logout = async (req, res) => {
  return res.cookie("token", "", { expiresIn: new Date(Date.now()) }).json({
    message: "User logged out successfully",
    success: true,
  });
};

const bookmarks = async (req, res) => {
  try {
    const loggedInUserId = req.body.id;
    const tweetId = req.params.id;

    const user = await User.findById(loggedInUserId);

    if (user.bookmarks.includes(tweetId)) {
      //remove
      await User.findByIdAndUpdate(loggedInUserId, {
        $pull: { bookmarks: tweetId },
      });
      return res.status(200).json({
        message: "Removed from bookmark",
      });
    } else {
      //add
      await User.findByIdAndUpdate(loggedInUserId, {
        $push: { bookmarks: tweetId },
      });
      return res.status(200).json({
        message: "Saved to bookmark",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const getProfile = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id).select("-password");
    return res.status(200).json({
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

const getOtherUser = async (req, res) => {
  try {
    const id = req.params.id;
    const otherUsers = await User.find({ _id: { $ne: id } }).select(
      "-password"
    );

    if (!otherUsers) {
      return res.status(401).json({
        message: "Currently do not have any users",
      });
    }

    return res.status(201).json({
      otherUsers,
    });
  } catch (error) {
    console.log(error);
  }
};

const follow = async (req, res) => {
  try {
    const loggedInUserId = req.body.id;

    const userId = req.params.id;

    const loggedInUser = await User.findById(loggedInUserId); //shivam
    const user = await User.findById(userId); //bhargav

    if (!user.followers.includes(loggedInUserId)) {
      await user.updateOne({ $push: { followers: loggedInUserId } });
      await loggedInUser.updateOne({ $push: { following: userId } });
    } else {
      return res.status(401).json({
        message: `User already followed to ${user.name}`,
      });
    }

    return res.status(201).json({
      message: `${loggedInUser.name} just follow to ${user.name}`,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

const unfollow = async (req, res) => {
  try {
    const loggedInUserId = req.body.id;
    const userId = req.params.id;

    const loggedInUser = await User.findById(loggedInUserId); //shivam
    const user = await User.findById(userId); //bhargav

    if (loggedInUser.following.includes(userId)) {
      await user.updateOne({ $pull: { followers: loggedInUserId } });
      await loggedInUser.updateOne({ $pull: { following: userId } });
    } else {
      return res.status(401).json({
        message: `User has not followed yet`,
      });
    }

    return res.status(201).json({
      message: `${loggedInUser.name}  unffollow to ${user.name}`,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  register,
  login,
  logout,
  bookmarks,
  getProfile,
  getOtherUser,
  follow,
  unfollow,
};
