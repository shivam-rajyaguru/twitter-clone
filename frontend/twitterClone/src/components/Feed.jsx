import React from "react";
import CreatePost from "./CreatePost";
import Tweet from "./Tweet";
import { useSelector } from "react-redux";

function Feed() {
  const { tweet } = useSelector((store) => store.tweet);
  // console.log(tweet);
  return (
    <div className="w-[50%] shadow-md border border-gray-200 rounded-md">
      <CreatePost />
      {tweet?.map((twt) => (
        <Tweet twt={twt} />
      ))}
    </div>
  );
}
export default Feed;
