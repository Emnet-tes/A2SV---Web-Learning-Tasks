import React from 'react'
import { epilogue, poppins } from "@/app/ui/fonts";

export const CategoriesCard = () => {
  return (
    
      <div className='space-x-[8px] items-start flex'>
        <button
          className={`bg-green-100 hover:bg-green-500  ${epilogue.className} font-semiBold text-[12px] leading-[160%] text-[#56CDAD] text-center text-green-700  hover:text-white py-1 px-4  hover: border-transparent rounded-full `}
          style={{ fontWeight: 600 }}
        >
          In person
        </button>
        <button
          className={`bg-transparent border border-[#FFB836] hover:bg-yellow-400 hover:text-white ${epilogue.className} text-[12px] leading-[160%] text-[#FFB836] text-center text-[#FFB836]font-semi-bold  py-1 px-4 rounded-full`}
          style={{ fontWeight: 600 }}
        >
          Education
        </button>
      </div>
   
  );
}
