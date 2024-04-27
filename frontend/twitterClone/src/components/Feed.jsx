import React from "react";
import CreatePost from "./CreatePost";
import Tweet from "./Tweet";

function Feed() {
  return (
    <div className="w-[50%] shadow-md border border-gray-200 rounded-md">
      <CreatePost />
      <Tweet />
      <Tweet />
      <Tweet />
    </div>
  );
}
export default Feed;
