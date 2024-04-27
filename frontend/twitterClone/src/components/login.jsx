import React, { useState } from "react";

function login() {
  const [isLogin, setIsLogin] = useState(true);

  const loginSignupHandler = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex items-center justify-evenly w-[80%]">
        <div>
          <img
            className="ml-5"
            width={"250px"}
            src="https://www.edigitalagency.com.au/wp-content/uploads/new-Twitter-logo-x-black-png-1200x1227.png"
            alt="twitter_logo"
          />
        </div>

        <div>
          <div className="my-5">
            <h1 className="text-6xl font-bold">Happening now</h1>
          </div>
          <h1 className=" mt-4 mb-2 text-2xl font-bold">
            {isLogin ? "Login" : "Signup"}
          </h1>
          <form action="" className="flex flex-col w-[65%]">
            {!isLogin && (
              <>
                <input
                  type="text"
                  placeholder="Name"
                  className="px-3 py-2 my-1 rounded-full border border-gray-800 font-semibold outline-blue-500"
                />
                <input
                  type="text"
                  placeholder="Username"
                  className="px-3 py-2 my-1 rounded-full border border-gray-800 font-semibold outline-blue-500"
                />
              </>
            )}
            <input
              type="email"
              placeholder="Email"
              className="px-3 py-2 my-1 rounded-full border border-gray-800 font-semibold outline-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="px-3 py-2 my-1 rounded-full border border-gray-800 font-semibold outline-blue-500"
            />
            <button className="my-4 py-2 rounded-full border-none bg-[#1D9BF0] text-lg text-white">
              {isLogin ? "Login" : "Create Account"}
            </button>
            <h1>
              {isLogin ? "Don't have an account" : "Already have an account"}
              <span
                className="font-bold text-blue-600 cursor-pointer ml-2"
                onClick={loginSignupHandler}
              >
                {isLogin ? "Signup" : "Login"}
              </span>
            </h1>
          </form>
        </div>
      </div>
    </div>
  );
}

export default login;
