import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import Avatar from "react-avatar";
import useGetProfile from "../hooks/useGetProfile";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { USER_API_END_POINT } from "../utils/constant";
import { toast } from "react-toastify";
import { followingUpdates } from "../redux/userSlice";

function Profile() {
  const { user, profile } = useSelector((store) => store.user);
  const { id } = useParams();
  useGetProfile(id);
  const dispatch = useDispatch();

  const followAndUnfollowHandler = async (id) => {
    if (user?.following.includes(id)) {
      //unfollow
      try {
        const res = await axios.post(
          `${USER_API_END_POINT}/unfollow/${id}`,
          {
            id: user?._id,
          },
          { withCredentials: true }
        );
        console.log(res);
        console.log(id);
        dispatch(followingUpdates(id));
        if (res.data.success) {
          toast.success(res.data.message, {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      } catch (error) {
        console.log(error);
        toast.error(error.res.data.message, {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } else {
      //follow
      try {
        const res = await axios.post(
          `${USER_API_END_POINT}/follow/${id}`,
          {
            id: user?._id,
          },
          { withCredentials: true }
        );
        console.log(res);
        dispatch(followingUpdates(id));
        if (res.data.success) {
          toast.success(res.data.message, {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      } catch (error) {
        console.log(error);
        toast.error(error.res.data.message, {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    }
  };

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
            <h1 className="font-bold text-lg capitalize">{profile?.name}</h1>
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
          {profile?._id === user?._id ? (
            <button className=" px-4 py-1 border border-gray-400 hover:bg-gray-200 rounded-full">
              Edit Profile
            </button>
          ) : (
            <button
              onClick={() => followAndUnfollowHandler(id)}
              className=" px-4 py-1 bg-black text-white rounded-full"
            >
              {user.following.includes(id) ? "Following" : "Follow"}
            </button>
          )}
        </div>

        <div className="m-4 mt-6">
          <h1 className="font-bold text-xl">{profile?.name}</h1>
          <p>{profile?.username}</p>
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
