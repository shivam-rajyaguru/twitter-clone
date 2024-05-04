import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    otherUsers: null,
    profile: null,
  },
  reducers: {
    //multiple actions
    getUser: (state, action) => {
      state.user = action.payload;
    },
    getOtherUser: (state, action) => {
      state.otherUsers = action.payload;
    },
    getProfile: (state, action) => {
      state.profile = action.payload;
    },
    followingUpdates: (state, action) => {
      if (state.user.following.includes(action.payload)) {
        //unfollow
        state.user.following = state.user.following.filter(
          (itemId) => itemId !== action.payload
        );
      } else {
        //follow
        state.user.following.push(action.payload);
      }
    },
  },
});

export const { getUser, getOtherUser, getProfile, followingUpdates } =
  userSlice.actions;
export default userSlice.reducer;
