import React, { useEffect } from "react";
import Leftsidebar from "./LeftSidebar";
import Feed from "./Feed";
import RightSidebar from "./RightSidebar";
import { Outlet } from "react-router-dom";
import { useOtherUser } from "../hooks/useOtherUser";
import { useSelector } from "react-redux";
import useGetAllTweet from "../hooks/useGetAllTweet";
import { useNavigate } from "react-router-dom";

function Home() {
  const { user, otherUsers } = useSelector((store) => store.user);
  const navigate = useNavigate();

  useOtherUser(user?._id);
  // console.log(otherUsers);

  useGetAllTweet(user?._id);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <div className="flex justify-between w-[80%] mx-auto mt-4 ">
        <Leftsidebar />
        <Outlet />
        <RightSidebar otherUsers={otherUsers} />
      </div>
    </>
  );
}

export default Home;
