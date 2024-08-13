'use client'
import React from 'react'
import Link from 'next/link';
import Cookie from 'js-cookie';
import { eczar,epilogue } from '../ui/fonts';

export const Navbar = () => {
  const isHomePage =
    typeof window !== "undefined" && window.location.pathname === "/Home";
    const isbookmarkpage =
      typeof window !== "undefined" && window.location.pathname === "/bookmarks";
  return (
    <div className="flex items-center justify-between bg-gray-100 py-2 px-10 ">
      <div
        className={`${eczar.className} block text-[28px] leading-[120%] text-[#25324B] text-left`}
        style={{ fontWeight: 600 }}
      >
        Salire
      </div>
      <div className=" items-center bg-gray-100  px-10 space-x-5">
        <Link
          href={{
            pathname: `/Home`,
          }}
          className={`${
            isHomePage ? "text-[#2d298e]" : "text-gray-500 hover:text-[#2d298e]"
          } text-[14px] ${epilogue.className}`}
          style={{ fontWeight: 500 }}
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
          } text-[14px] `}
          style={{ fontWeight: 500 }}
        >
          Book Marks
        </Link>
        <Link
          href={{
            pathname: `/signin`,
          }}
          className="text-gray-500 hover:text-[#2d298e] text-[14px] "
          style={{ fontWeight: 500 }}
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
