import Link from "next/link";
import React from "react";
import Image from "next/image";
import {poppins } from "@/app/ui/fonts";
export const Onboarding = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <main className=" justify-center items-center flex  p-5 space-x-[40px]">
        <div className="flex-col  items-center space-y-8 ">
          <h5
            className={`${poppins.className} text-[32px] leading-[120%] text-[#25324B]`}
            style={{ fontWeight: 500 }}
          >
            Find Job Opportunities
          </h5>
          <Link href="/CreateUser">
            {" "}
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Register
            </button>
          </Link>
        </div>
        <Image
          src="/images/home.png"
          alt="job search"
          className="rounded-lg object-cover object-center"
          width={500}
          height={450}
        />
      </main>
    </div>
  );
};
