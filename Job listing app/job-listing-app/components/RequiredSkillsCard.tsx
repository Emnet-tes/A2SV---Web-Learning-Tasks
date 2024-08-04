import React from 'react'
import { epilogue } from "@/app/ui/fonts";

export const RequiredSkillsCard = () => {
  return (
    <div className="space-x-[8px] items-start flex">
      <button
        className={`bg-indigo-100 hover:bg-indigo-500  ${epilogue.className}  text-[12px] leading-[160%] text-[#56CDAD] text-center text-indigo-700  hover:text-white py-1 px-4  hover: border-transparent `}
        style={{ fontWeight: 400 }}
      >
        In person
      </button>
      <button
        className={`bg-indigo-100 hover:bg-indigo-500  ${epilogue.className}  text-[12px] leading-[160%] text-[#56CDAD] text-center text-indigo-700  hover:text-white py-1 px-4  hover: border-transparent `}
        style={{ fontWeight: 400 }}
      >
        education
      </button>
    </div>
  );
}
