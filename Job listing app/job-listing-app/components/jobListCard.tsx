import Image from "next/image";
import React from "react";
import JobPostingProps, { JobListProps, JobPost } from "@/app/types/Job";
import { epilogue } from "@/app/ui/fonts";

// const buttonStyles=(color:string,isDisabled:string)=>{
//   return{
//     backgroundColor:isDisabled ?'transparent':color,
//     color:isDisabled ? color:'white',
//     cursor:isDisabled?'not-allowd':'pointer'
//   }
// }


function JobListCard({
  title, orgName, description, logoUrl, location,opType
}: JobListProps) {

  
  return (
    <div className="relative flex w-full max-w-[56rem]  rounded-xl  bg-clip-border text-gray-700 shadow my-5">
      {/* image */}
      <div className="relative pt-4 overflow-hidden bg-transparent rounded-xl mx-5">
        <Image
          src={logoUrl}
          alt="Tania Andrew"
          className="relative inline-block  !rounded-full object-cover object-center "
          width={58}
          height={66} />
      </div>

      <div className="flex w-full flex-col gap-0.5 my-4  ">
        {/* title */}
        <div className="flex items-start justify-between">
          <h5
            className={`${epilogue.className} block text-[20px] leading-[120%] text-[#25324B] text-left`}
            style={{ fontWeight: 600 }}
          >
            {title}
          </h5>
        </div>

        <div className="flex space-x-2 items-start">
          {/* company name */}
          <p
            className={`${epilogue.className}  text-[16px] leading-[160%] text-[#7C8493] text-left`}
            style={{ fontWeight: 400, fontStyle: "regular" }}
          >
            {orgName}
          </p>
          <p className="inline text-[#D6DDEB] text-center">.</p>

          {/* location */} 
          {location.map((loc)=><p
            className={`${epilogue.className} font-regular text-[16px] leading-[160%] text-[#7C8493] text-left`}
            style={{ fontWeight: 400, fontStyle: "regular" }}
          >
          {loc}
          </p>)}
          
        </div>

        {/* description */}
        <div className="p-0 mb-4 items-start ">
          <p
            className={`block ${epilogue.className}  text-[16px] leading-[160%] text-[#25324B] text-left`}
            style={{ fontWeight: 400 }}
          >
            {description}
          </p>
        </div>

        <div className="items-start space-x-2">
          <button
            className={`bg-green-100 hover:bg-green-500  ${epilogue.className} font-semiBold text-[12px] leading-[160%] text-[#56CDAD] text-center text-green-700  hover:text-white py-1 px-4  hover: border-transparent rounded-full `}
            style={{ fontWeight: 600 }}
          >
            In person
          </button>
          <p className="inline text-[#D6DDEB] text-center">|</p>
          <button
            className={`bg-transparent border border-[#FFB836] hover:bg-yellow-400 hover:text-white ${epilogue.className} text-[12px] leading-[160%] text-[#FFB836] text-center text-[#FFB836]font-semi-bold  py-1 px-4 rounded-full`}
            style={{ fontWeight: 600 }}
          >
            Education
          </button>
          <button
            className={`bg-transparent border border-[#4640DE] hover:bg-[#4640DE] hover:text-white ${epilogue.className}  text-[12px] leading-[160%] text-[#4640DE] text-center hover:bg-blue-700   py-1 px-4 rounded-full`}
            style={{ fontWeight: 600 }}
          >
            IT
          </button>
        </div>
      </div>
    </div>
  );
}

export default JobListCard;
