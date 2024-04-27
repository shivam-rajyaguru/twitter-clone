import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import Avatar from "react-avatar";

function Profile() {
  return (
    <div className="w-[50%] border-l border-r border-gray-200 shadow-sm rounded-md">
      <div>
        <div className="flex items-center py-2">
          <Link
            to="/"
            className="p-2 rounded-full hover:bg-gray-100 hover:cursor-pointer"
          >
            <BsArrowLeft size={24} />
          </Link>

          <div className="ml-2">
            <h1 className="font-bold text-lg">Surendra Kumar</h1>
            <p className="text-sm text-gray-500">18 Posts</p>
          </div>
        </div>

        <div>
          <img
            src="https://pbs.twimg.com/profile_banners/1581707412922200067/1693248932/1080x360"
            alt="banner"
          />
        </div>
        <div className=" absolute -mt-[57px] ml-2 border-4 border-white rounded-full">
          <Avatar
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsy2TopWb8t2jwKcDnfPC1PbLKJ-VhwyRaDQ&usqp=CAU"
            size="120"
            round={true}
          />
        </div>
        <div className="text-right m-4">
          <button className=" px-4 py-1 border border-gray-400 hover:bg-gray-200 rounded-full">
            Edit Profile
          </button>
        </div>

        <div className="m-4 mt-6">
          <h1 className="font-bold text-xl">Surendra Kumar</h1>
          <p>@Surendr90872802</p>
        </div>

        <div className="m-4 text-sm">
          <p>
            🌐 Exploring the web's endless possibilities with MERN Stack 🚀 |
            Problem solver by day, coder by night 🌙 | Coffee lover ☕ | Join me
            on this coding journey!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
