import React from "react";
import { CiSearch } from "react-icons/ci";
import Avatar from "react-avatar";

function RightSidebar() {
  return (
    <div className="w-[25%]">
      <div className="flex p-2 bg-gray-100 rounded-full outline-none">
        <CiSearch size={22} />
        <input
          className="bg-transparent outline-none px-2"
          type="text"
          placeholder="Search"
        />
      </div>
      <div className="p-5 bg-gray-100 rounded-lg mt-10">
        <div>
          <div className="font-bold text-xl">Who to follow</div>
        </div>

        <div className="mt-7">
          <div className="mt-3">
            <div className="flex justify-between">
              <div className="flex items-center">
                <Avatar
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsy2TopWb8t2jwKcDnfPC1PbLKJ-VhwyRaDQ&usqp=CAU"
                  size="40"
                  round={true}
                />
                <div className="ml-2">
                  <h1 className="font-semibold">tomato</h1>
                  <p className="text-sm">@nimbupani_31</p>
                </div>
              </div>
              <div className="flex items-center">
                <button className="bg-black px-4 py-1 text-white rounded-full">
                  Follow
                </button>
              </div>
            </div>
          </div>

          <div className="mt-3">
            <div className="flex justify-between">
              <div className="flex items-center">
                <Avatar
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsy2TopWb8t2jwKcDnfPC1PbLKJ-VhwyRaDQ&usqp=CAU"
                  size="40"
                  round={true}
                />
                <div className="ml-2">
                  <h1 className="font-semibold">tomato</h1>
                  <p className="text-sm">@nimbupani_31</p>
                </div>
              </div>
              <div className="flex items-center">
                <button className="bg-black px-4 py-1 text-white rounded-full">
                  Follow
                </button>
              </div>
            </div>
          </div>

          <div className="my-3">
            <div className="flex justify-between">
              <div className="flex items-center">
                <Avatar
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsy2TopWb8t2jwKcDnfPC1PbLKJ-VhwyRaDQ&usqp=CAU"
                  size="40"
                  round={true}
                />
                <div className="ml-2">
                  <h1 className="font-semibold">tomato</h1>
                  <p className="text-sm">@nimbupani_31</p>
                </div>
              </div>
              <div className="flex items-center">
                <button className="bg-black px-4 py-1 text-white rounded-full">
                  Follow
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightSidebar;
