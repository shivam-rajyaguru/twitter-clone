import { createSlice } from "@reduxjs/toolkit";

const tweetSlice = createSlice({
  name: "tweet",
  initialState: {
    tweet: null,
    refresh: false,
    isActive: true,
  },
  reducers: {
    getAllTweets: (state, action) => {
      state.tweet = action.payload;
    },
    getRefreshTweet: (state, action) => {
      state.refresh = !action.payload;
    },
    getIsActive: (state, action) => {
      state.isActive = action.payload;
    },
  },
});

export const { getAllTweets, getRefreshTweet, getIsActive } =
  tweetSlice.actions;
export default tweetSlice.reducer;
