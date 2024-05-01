const mongoose = require("mongoose");

const twitterSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    like: {
      type: Array,
      default: [],
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Tweet = new mongoose.model("Tweet", twitterSchema);

module.exports = Tweet;
