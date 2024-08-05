import React from "react";
import { epilogue, poppins } from "@/app/ui/fonts";
import { LuDot } from "react-icons/lu";
interface Props{
  text:string
}


export const IdealCandidate = ({ text }: Props) => {
  const parts = text.split(":");
  return (
    <>
      <span style={{ float: "left", marginRight: "8px" }}>
        <LuDot />
      </span>
      <span
        className={`block ${epilogue.className} text-[16px] leading-[160%] text-[#25324B] text-left `}
        style={{ fontWeight: 400, display: "block", overflow: "hidden" }}
      >
        {parts.length > 1 ? (
          <>
            <span style={{ fontWeight: 700 }}>{parts[0]}:</span>
            <span> {parts[1]}</span>
          </>
        ) : (
          <span style={{ fontWeight: 700 }}>{text}</span>
        )}
      </span>
    </>
  );
};
