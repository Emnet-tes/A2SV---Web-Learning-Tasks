import React from 'react'
import { epilogue, poppins } from "@/app/ui/fonts";
import Image from "next/image";
export const AboutCard = () => {
  return (
   

      <div className="flex items-center  items-start  bg-transparent rounded-xl space-x-[10px]">
        <Image
          src={"/icons/posted on.png"}
          alt="Posted On"
          className="inline-block !rounded-full object-cover object-center"
          width={44}
          height={44}
        />
        <div>
          <p
            className={`${epilogue.className} leading-[160%] text-[#515B6F] text-left `}
            style={{ fontWeight: 400, fontSize: 16 }}
          >
            posted on
          </p>
          <p
            className={`${epilogue.className} leading-[160%] text-[#25324B] text-left `}
            style={{ fontWeight: 600, fontSize: 16 }}
          >
            jul 1, 2023
          </p>
        </div>
      </div>
   
  );
}
