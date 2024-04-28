import { TbBeach } from "react-icons/tb";
import { LiaCitySolid } from "react-icons/lia";
import { GiSelfLove } from "react-icons/gi";

export default function QuickTrip() {
  return (
    <div className="max-w-[1280px] mx-auto my-6 px-2 sm:px-0">
      <h1 className="text-base sm:text-2xl font-bold">
        Quick and easy trip planner
      </h1>
      <h2 className="text-deem text-xs sm:text-base mb-2">
        Pick a vibe and explore the top destinations in Bangladesh
      </h2>
      <ul className="flex gap-5 my-3 sm:my-5 items-center text-xs sm:text-base">
        <li className="border border-[#0057b8] px-3 py-2 rounded-full text-[#0057b8] flex gap-2 justify-center items-center">
          <div className="text-lg">
            <TbBeach />
          </div>{" "}
          Beach
        </li>
        <li className="text-[#1A1A1A] flex gap-2 justify-center items-center">
          {" "}
          <div className="text-lg">
            <LiaCitySolid />
          </div>{" "}
          City
        </li>
        <li className="text-[#1A1A1A] flex gap-2 justify-center items-center">
          <div className="text-lg">
            <GiSelfLove />
          </div>{" "}
          Romance
        </li>
      </ul>
      <div>
        <img
          className="rounded-md "
          src="https://q-xx.bstatic.com/xdata/images/city/170x136/666853.jpg?k=b2212159e829c00b8b19af72b6211b25325d70811829e2eb4ef1045f8a568be5&o="
          alt="room1"
        />
        <h2 className="text-xs sm:text-base font-bold mt-2 text-nowrap">
          Cox Bazar
        </h2>
        <h2 className=" text-deem text-xs sm:text-sm text-nowrap">
          60 properties
        </h2>
      </div>
    </div>
  );
}
