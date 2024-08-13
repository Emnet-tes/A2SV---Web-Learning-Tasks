'use client'
import React from 'react'
import Link from 'next/link';
import Cookie from 'js-cookie';
import { epilogue } from '../ui/fonts';
export const Navbar = () => {
  const isHomePage =
    typeof window !== "undefined" && window.location.pathname === "/Home";
    const isbookmarkpage =
      typeof window !== "undefined" && window.location.pathname === "/bookmarks";
  return (
    <div className="flex items-center justify-between bg-gray-100 py-3 px-10 ">
      <div
      
        className={`${epilogue.className} block text-[20px] leading-[120%] text-[#25324B] text-left`}
        style={{ fontWeight: 600 }}
      >
        Salire
      </div>
      <div className="flex items-center bg-gray-100  px-10 space-x-5">
        <Link
          href={{
            pathname: `/Home`,
          }}
          className={`${
            isHomePage ? "text-[#2d298e]" : "text-gray-500 hover:text-[#2d298e]"
          } text-[14px] font-semibold`}
        >
          Jobs
        </Link>
        <Link
          href={{
            pathname: `/bookmarks`,
          }}
          className={`${
            isbookmarkpage
              ? "text-[#2d298e]"
              : "text-gray-500 hover:text-[#2d298e]"
          } text-[14px] font-semibold`}
        >
          Book Marks
        </Link>
        <Link
          href={{
            pathname: `/signin`,
          }}
          className="text-gray-500 hover:text-[#2d298e] text-[14px] font-semibold"
          onClick={() => {
            localStorage.removeItem("accessToken");
            Cookie.remove("currentUser");
          }}
        >
          Log out
        </Link>
      </div>
    </div>
  );
}
