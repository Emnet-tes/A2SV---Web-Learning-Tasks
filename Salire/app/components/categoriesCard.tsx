import React from 'react'
import { epilogue, poppins } from "@/app/ui/fonts";

interface Props{
  text:string;
  color?:string 
}

export const CategoriesCard = ({text,color='green'}:Props) => {
  return (
        <button
          className={`bg-${color}-100 hover:bg-${color}-500  ${epilogue.className}  leading-[160%]  text-center text-${color} text-${color}-500   hover:text-white py-1 px-4   rounded-full  text-[12px]  font-semibold `}
         disabled
        >
         {text}
        </button>
       
    
   
  );
}
