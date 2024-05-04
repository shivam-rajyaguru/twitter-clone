import axios from "axios";
import React, { useEffect } from "react";
import { USER_API_END_POINT } from "../utils/constant";
import { useDispatch } from "react-redux";
import { getOtherUser } from "../redux/userSlice";

export const useOtherUser = async (id) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchOtherUser = async () => {
      try {
        const res = await axios.get(`${USER_API_END_POINT}/otheruser/${id}`, {
          withCredentials: true,
        });
        console.log(res);
        dispatch(getOtherUser(res.data.otherUsers));
      } catch (error) {
        console.log(error);
      }
    };
    fetchOtherUser();
  }, []);
};
