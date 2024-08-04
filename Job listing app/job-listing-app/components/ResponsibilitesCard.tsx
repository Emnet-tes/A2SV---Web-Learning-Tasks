import React from 'react'
import { epilogue, poppins } from "@/app/ui/fonts";
import Image from 'next/image';
interface Props{
    text:string
}
export const ResponsibilitesCard = ({text}:Props) => {
  return (
    <div className="space-x-[8px] items-start flex ">
      <Image
        src={"/icons/ticked.png"}
        alt="ticked icon"
        height={20}
        width={20}
      ></Image>
      <p
        className={`block ${epilogue.className}   leading-[160%] text-[#25324B] text-left w-full`}
        style={{ fontWeight: 400 ,fontSize:16}}
      >
        {text}
      </p>
    </div>
  );
}
