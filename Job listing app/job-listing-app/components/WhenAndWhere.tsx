import React from 'react'
import Image from 'next/image';
import { epilogue } from '@/app/ui/fonts';
interface Props{
  text:string|undefined
}
export const WhenAndWhere = ({text}:Props) => {
  return (
    <div className="space-x-[16px] items-center flex ">
      <Image
        src={"/icons/location.png"}
        alt="ticked icon"
        height={44}
        width={44}
      ></Image>
      <p
        className={` ${epilogue.className}   leading-[160%] text-[#25324B] text-left w-full`}
        style={{ fontWeight: 400, fontSize: 16 }}
      >
      {text}
      </p>
    </div>
  );
}
