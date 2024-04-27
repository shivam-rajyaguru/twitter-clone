import React from "react";
import Leftsidebar from "./LeftSidebar";
import Feed from "./Feed";
import RightSidebar from "./RightSidebar";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="flex justify-between w-[80%] mx-auto ">
        <Leftsidebar />
        <Outlet />
        <RightSidebar />
      </div>
    </>
  );
}

export default Home;
