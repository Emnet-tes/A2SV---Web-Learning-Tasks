import { epilogue, poppins } from "@/app/ui/fonts";
import { RiArrowDropDownLine } from "react-icons/ri";
import navProps from "../types/nav";

export default function Title({ resultNo, title }: navProps) {
  return (
    <div className="flex-col   ">
      <h5
        className={`${poppins.className}  text-[32px] leading-[120%] text-[#25324B] text-left`}
        style={{ fontWeight: 900 }}
      >
        {title}
      </h5>
      <div className="flex  items-start justify-between pt-2   ">
        <p
          className={`${epilogue.className} text-[16px] leading-[160%] text-[#7C8493] text-left`}
          style={{ fontWeight: 400 }}
        >
          showing {resultNo} results
        </p>
        <div className="space-x-2 border-r flex items-center">
          <p
            className={`inline ${epilogue.className} text-[16px] leading-[160%] text-[#7C8493] text-left`}
            style={{ fontWeight: 400 }}
          >
            sort by:
          </p>

          <p
            className={`inline ${epilogue.className}  text-[16px] leading-[160%] text-[#25324B] text-left`}
            style={{ fontWeight: 500 }}
          >
            Most relevant
          </p>
          <RiArrowDropDownLine size={30} />
        </div>
      </div>
    </div>
  );
}
