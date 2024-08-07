

import { doLogin } from "@/app/actions";
import { poppins } from "@/app/layout";
import { epilogue, inter } from "@/app/ui/fonts";
import Link from "next/link";
import React from "react";


export const LoginForm = () => {
  return (
    <div className="flex  flex-col items-center justify-center space-y-6 ">
      <div className="w-full max-w-md rounded-lg shadow-lg border border-gray-100 p-8 space-y-6">
        <h4
          className={`${poppins.className} text-[32px] leading-[120%] text-[#25324B] text-center`}
          style={{ fontWeight: 900 }}
        >
          Sign up today!
        </h4>


        <form className="space-y-5" noValidate onSubmit={doLogin}>

        <button
          type="submit"
          name="action"
          value="google"
          className="w-full btn border border-greey-300 rounded py-2"
        
        >
          sign in with google
        </button>
        <p
          className={`${epilogue.className} text-center text-[16px] leading-[120%] text-[#202430]`}
          style={{ fontWeight: 400 }}
        >
          --------or sign up with email---------
        </p>
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
          <div className="w-full items-center space-y-[24px] ">
            <button className="w-full bg-[#4640DE] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Continue
            </button>
            <p
              className={`${epilogue.className} text-start text-[16px] leading-[120%] text-[#202430]`}
              style={{ fontWeight: 400 }}
            >
              Already have an account?
              <Link
                href="/Client"
                className={`$${inter.className} text-[#4640DE] pl-2`}
              >
                Login
              </Link>
            </p>
            <p
              className={`${epilogue.className} text-start text-[14px] leading-[120%] text-[#202430]`}
              style={{ fontWeight: 400 }}
            >
              By clicking 'Continue', you acknowledge that you have read and
              accepted our Terms of Service and Privacy Policy.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
