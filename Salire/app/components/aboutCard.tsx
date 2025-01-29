import React from "react";
import { epilogue, poppins } from "@/app/ui/fonts";
import Image from "next/image";
interface Props {
  text: string;
  value: string | string[];
}
export const AboutCard = ({ text, value }: Props) => {
  return (
    <div className="flex items-start  bg-transparent rounded-xl space-x-[10px]">
      <Image
        src={`/icons/${text}.png`}
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
          {text}
        </p>

        {Array.isArray(value) ? (
          value.map((val, index) => (
            <p
              key={index}
              className={`${epilogue.className} leading-[160%] text-[#25324B] text-left`}
              style={{ fontWeight: 600, fontSize: 16 }}
            >
              {val}
            </p>
          ))
        ) : (
          <p
            className={`${epilogue.className} leading-[160%] text-[#25324B] text-left`}
            style={{ fontWeight: 600, fontSize: 16 }}
          >
            {value}
          </p>
        )}
      </div>
    </div>
  );
};
