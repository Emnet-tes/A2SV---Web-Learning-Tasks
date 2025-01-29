import React from "react";
import { epilogue } from "@/app/ui/fonts";
interface Props{
  text:string
}

export const RequiredSkillsCard = ({ text }: Props) => {
  return (
    <button
      className={` bg-indigo-100 hover:bg-indigo-500  ${epilogue.className}  text-[12px] leading-[160%]  text-center text-indigo-700  hover:text-white py-1 px-4  hover: border-transparent font-normal`}
      disabled
    >
      {text}
    </button>
  );
};
