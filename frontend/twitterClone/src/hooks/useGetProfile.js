import React, { useEffect } from "react";
import axios from "axios";
import { USER_API_END_POINT } from "../utils/constant";
import { useDispatch } from "react-redux";
import { getProfile } from "../redux/userSlice";

async function useGetProfile(id) {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMyProfile = async () => {
      try {
        const res = await axios.get(`${USER_API_END_POINT}/profile/${id}`, {
          withCredentials: true,
        });
        dispatch(getProfile(res.data.user));
      } catch (error) {
        console.log(error);
      }
    };

    fetchMyProfile();
  }, [id]);
}

export default useGetProfile;
