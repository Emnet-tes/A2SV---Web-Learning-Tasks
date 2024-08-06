import { poppins } from "@/app/layout";
import { epilogue } from "@/app/ui/fonts";
import React from "react";

export const Register = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-6 m-10">
      <div className="w-full max-w-md rounded-lg shadow-lg border border-gray-100 p-8 space-y-6">
        <h4
          className={`${poppins.className} text-[32px] leading-[120%] text-[#25324B] text-center`}
          style={{ fontWeight: 900 }}
        >
          Sign up today!
        </h4>
        <button className="w-full bg-transparent hover:bg-blue-500 text-[#4640DE] text-semibold font-semibold border border-gray-300  py-2 px-4 rounded">
          Sign up with Google
        </button>
        <p
          className={`${epilogue.className} text-center text-[16px] leading-[120%] text-[#202430]`}
          style={{ fontWeight: 400 }}
        >
          --------or sign up with email---------
        </p>
        <form className="space-y-5" noValidate>
          <div className="space-y-2">
            <label
              className={`${epilogue.className} block text-[16px] leading-[120%] text-[#515B6F]`}
              style={{ fontWeight: 600 }}
              htmlFor="name"
            >
              Full Name
            </label>
            <input
              className="w-full py-2 px-4 border border-gray-300 text-[16px] rounded"
              id="name"
              type="text"
              placeholder="Enter your full name"
            />
          </div>
          <div className="space-y-2">
            <label
              className={`${epilogue.className} block text-[16px] leading-[120%] text-[#515B6F]`}
              style={{ fontWeight: 600 }}
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full py-2 px-4 border border-gray-300 text-[16px] rounded"
              id="email"
              type="email"
              placeholder="Enter email address"
            />
          </div>
          <div className="space-y-2">
            <label
              className={`${epilogue.className} block text-[16px] leading-[120%] text-[#515B6F]`}
              style={{ fontWeight: 600 }}
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full py-2 px-4 border border-gray-300 text-[16px] rounded"
              id="password"
              type="password"
              placeholder="Enter Password"
            />
            <p className="text-red-500 text-xs italic">
              Please choose a password.
            </p>
          </div>
          <div className="space-y-2">
            <label
              className={`${epilogue.className} block text-[16px] leading-[120%] text-[#515B6F]`}
              style={{ fontWeight: 600 }}
              htmlFor="confirm-password"
            >
              Confirm Password
            </label>
            <input
              className="w-full py-2 px-4 border border-gray-300 text-[16px] rounded"
              id="confirm-password"
              type="password"
              placeholder="Confirm Password"
            />
            <p className="text-red-500 text-xs italic">
              Please confirm your password.
            </p>
          </div>
          <div className="w-full items-center justify-center">
            <button className="w-full bg-[#4640DE] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
