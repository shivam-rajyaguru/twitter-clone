import axios from "axios";
import React from "react";
import Avatar from "react-avatar";
import { CiHeart, CiBookmark } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { TWEET_API_END_POINT } from "../utils/constant";
import { useDispatch } from "react-redux";
import { getRefreshTweet } from "../redux/tweetSlice";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { AiTwotoneDelete } from "react-icons/ai";
import { timeSince } from "../utils/constant";

function Tweet({ twt }) {
  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const likeOrDislikeHandler = async (id) => {
    try {
      const res = await axios.put(
        `${TWEET_API_END_POINT}/like/${id}`,
        {
          id: user._id,
        },
        { withCredentials: true }
      );
      // console.log(res);
      dispatch(getRefreshTweet());
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
      toast.success(error.response.data.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      console.log(error);
    }
  };

  const deleteHandler = async (id) => {
    try {
      const res = await axios.delete(`${TWEET_API_END_POINT}/delete/${id}`, {
        withCredentials: true,
      });
      // console.log(res);
      dispatch(getRefreshTweet());
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
      toast.success(error.response.data.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

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
            <h1 className="text-base font-semibold">
              {twt?.userDetails[0]?.name}
            </h1>
            <p className="text-gray-500 text-sm ml-2">
              {twt?.userDetails[0]?.username} {timeSince(twt?.createdAt)}
            </p>
          </div>
          <div className="text-lg">{twt?.description}</div>
          <div className="flex justify-between my-3 ">
            <div className="flex items-center">
              <div className="p-2 rounded-full cursor-pointer hover:bg-green-200">
                <FaRegComment size="20px" />
              </div>
              <p>0</p>
            </div>
            <div className="flex items-center">
              <div
                onClick={() => likeOrDislikeHandler(twt?._id)}
                className="p-2 rounded-full cursor-pointer hover:bg-green-200"
              >
                <CiHeart size="24px" />
              </div>
              <p>{twt.like.length}</p>
            </div>
            <div className="flex items-center">
              <div className="p-2 rounded-full cursor-pointer hover:bg-green-200">
                <CiBookmark size="24px" />
              </div>
              <p>0</p>
            </div>
            {user?._id === twt?.userId && (
              <div
                onClick={() => deleteHandler(twt?._id)}
                className="flex items-center"
              >
                <div className="p-2 rounded-full cursor-pointer hover:bg-green-200">
                  <AiTwotoneDelete size="24px" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
