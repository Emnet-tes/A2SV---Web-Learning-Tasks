'use client'
import React from 'react'
import Link from 'next/link';
import Cookie from 'js-cookie';
export const Navbar = () => {
  return (
    <div className="flex items-center justify-end bg-gray-100 py-3 px-10 space-x-5">
      <Link
        href={{
          pathname: `/Home`,
        }}
        className={`${
          window.location.pathname === "/Home"
            ? "text-[#2d298e]"
            : "text-gray-500 hover:text-[#2d298e]"
        } text-[14px] font-semibold`}
      >
        Job
      </Link>
      <Link
        href={{
          pathname: `/bookmarks`,
        }}
        className={`${
          window.location.pathname === "/bookmarks"
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
        onClick={() => {localStorage.removeItem("accessToken") ;Cookie.remove ('currentUser')}}
      >
        Log out
      </Link>
    </div>
  );
}
