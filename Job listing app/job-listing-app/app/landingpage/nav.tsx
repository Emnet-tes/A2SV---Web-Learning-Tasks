import React from "react";
import { epilogue, poppins } from "@/app/ui/fonts";
import navProps from "../types/nav";
import Logout from '@/components/Logout'

export default async function Nav({ resultNo }: navProps) {
  
  return (
    <div className="flex-col pr-20  mr-20  ">
      <h5
        className={`${poppins.className}  text-[32px] leading-[120%] text-[#25324B] text-left`}
        style={{ fontWeight: 900 }}
      >
        Opportunities
      </h5>
      <div className="flex  items-start justify-between pt-2">
        <p
          className={`${epilogue.className} text-[16px] leading-[160%] text-[#7C8493] text-left`}
          style={{ fontWeight: 400 }}
        >
          showing {resultNo} results
        </p>
        <div className="space-x-2 ">
          <p
            className={`inline ${epilogue.className} text-[16px] leading-[160%] text-[#7C8493] text-left`}
            style={{ fontWeight: 400 }}
          >
            sort by:
          </p>

          <p
            className={`inline ${epilogue.className}  text-[16px] leading-[160%] text-[#25324B] text-left`}
            style={{ fontWeight: 500 }}
          >
            Most relevant
          </p>
        </div>
       <Logout/>
      </div>
    </div>
  );
}
