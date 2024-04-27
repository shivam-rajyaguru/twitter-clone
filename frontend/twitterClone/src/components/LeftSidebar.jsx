import React from "react";
import { CiHome } from "react-icons/ci";
import { CiHashtag } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { AiOutlineLogout } from "react-icons/ai";
import { Link } from "react-router-dom";

function Leftsidebar() {
  const link = [
    {
      icon: <CiHome size={25} />,
      title: "Home",
      path: "/",
    },
    {
      icon: <CiHashtag size={25} />,
      title: "Explore",
    },
    {
      icon: <IoIosNotificationsOutline size={25} />,
      title: "Notifications",
    },
    {
      icon: <CiUser size={25} />,
      title: "Profile",
      path: "/profile",
    },
    {
      icon: <CiBookmark size={25} />,
      title: "Bookmarks",
    },
    {
      icon: <AiOutlineLogout size={25} />,
      title: "Logout",
    },
  ];
  return (
    <>
      <div className="w-[15%]">
        <div className="ml-4">
          <img
            width={"22px"}
            src="https://www.edigitalagency.com.au/wp-content/uploads/new-Twitter-logo-x-black-png-1200x1227.png"
            alt="twitter_logo"
          />
        </div>
        <div className="pt-2">
          {link.map((item, index) => {
            return (
              <Link
                to={item.path}
                className="flex items-center px-4 py-3 hover:bg-gray-200 cursor-pointer rounded-full"
                key={index}
              >
                <div>{item.icon}</div>
                <div className=" text-base pl-2 font-medium">{item.title}</div>
              </Link>
            );
          })}

          <button className="bg-[#1D9BF0] hover:bg-blue-500 border-none px-4 py-2 mt-2 w-full rounded-full font-medium text-white">
            Post
          </button>
        </div>
      </div>
    </>
  );
}

export default Leftsidebar;
