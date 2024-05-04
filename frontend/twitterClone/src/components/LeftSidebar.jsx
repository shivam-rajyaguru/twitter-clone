import React from "react";
import { CiHome } from "react-icons/ci";
import { CiHashtag } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { AiOutlineLogout } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { USER_API_END_POINT } from "../utils/constant";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getOtherUser, getProfile, getUser } from "../redux/userSlice";

function Leftsidebar() {
  const { user } = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`);
      navigate("/login");
      dispatch(getUser(null));
      dispatch(getOtherUser(null));
      dispatch(getProfile(null));
      toast.success(res.data.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } catch (error) {
      console.log(error);
    }
  };
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
          <Link
            to={"/"}
            className="flex items-center px-4 py-3 hover:bg-gray-200 cursor-pointer rounded-full"
          >
            <div>
              {" "}
              <CiHome size={25} />
            </div>
            <div className=" text-base pl-2 font-medium">Home</div>
          </Link>
          <Link className="flex items-center px-4 py-3 hover:bg-gray-200 cursor-pointer rounded-full">
            <div>
              <CiHashtag size={25} />
            </div>
            <div className=" text-base pl-2 font-medium">Explore</div>
          </Link>

          <Link className="flex items-center px-4 py-3 hover:bg-gray-200 cursor-pointer rounded-full">
            <div>
              <IoIosNotificationsOutline size={25} />
            </div>
            <div className=" text-base pl-2 font-medium">Notifications</div>
          </Link>
          <Link
            to={`profile/${user?._id}`}
            className="flex items-center px-4 py-3 hover:bg-gray-200 cursor-pointer rounded-full"
          >
            <div>
              <CiUser size={25} />
            </div>
            <div className=" text-base pl-2 font-medium">Profile</div>
          </Link>
          <Link className="flex items-center px-4 py-3 hover:bg-gray-200 cursor-pointer rounded-full">
            <div>
              <CiBookmark size={25} />
            </div>
            <div className="text-base pl-2 font-medium">Bookmarks</div>
          </Link>
          <Link
            onClick={logoutHandler}
            className="flex items-center px-4 py-3 hover:bg-gray-200 cursor-pointer rounded-full"
          >
            <div>
              <AiOutlineLogout size={25} />
            </div>
            <div className=" text-base pl-2 font-medium">Logout</div>
          </Link>

          <button className="bg-[#1D9BF0] hover:bg-blue-500 border-none px-4 py-2 mt-2 w-full rounded-full font-medium text-white">
            Post
          </button>
        </div>
      </div>
    </>
  );
}

export default Leftsidebar;
