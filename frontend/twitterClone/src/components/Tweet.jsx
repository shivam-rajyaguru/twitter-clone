import React from "react";
import Avatar from "react-avatar";
import { CiHeart, CiBookmark } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";

function Tweet() {
  return (
    <div className="p-4 shadow-md border-gray-200">
      <div className="flex">
        <div className="">
          <Avatar
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsy2TopWb8t2jwKcDnfPC1PbLKJ-VhwyRaDQ&usqp=CAU"
            size="40"
            round={true}
          />
        </div>
        <div className="ml-3 w-full">
          <div className="flex items-center">
            <h1 className="text-base font-semibold">Patel</h1>
            <p className="text-gray-500 text-sm ml-2">@patelmernstack 1m</p>
          </div>
          <div className="text-lg">
            Hello developers let's connect and grow together
          </div>
          <div className="flex justify-between my-3 ">
            <div className="flex items-center">
              <div className="p-2 rounded-full cursor-pointer hover:bg-green-200">
                <FaRegComment size="20px" />
              </div>
              <p>0</p>
            </div>
            <div className="flex items-center">
              <div className="p-2 rounded-full cursor-pointer hover:bg-green-200">
                <CiHeart size="24px" />
              </div>
              <p>0</p>
            </div>
            <div className="flex items-center">
              <div className="p-2 rounded-full cursor-pointer hover:bg-green-200">
                <CiBookmark size="24px" />
              </div>
              <p>0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
