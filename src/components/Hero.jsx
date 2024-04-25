import { IoBedOutline } from "react-icons/io5";
import { LuCalendarDays } from "react-icons/lu";
import { GoPeople } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";

export default function Hero() {
  return (
    <header className="bg-primary">
      <div className="max-w-[1280px] mx-auto min-h-60 relative">
        <div className="py-16">
          <h1 className="text-white text-5xl font-extrabold">
            Find your next stay
          </h1>
          <h2 className="text-white text-2xl mt-4">
            Search low prices on hotels, homes and much more...
          </h2>
        </div>
        <div className="absolute -bottom-8 flex border-4 border-[#ffb700] rounded-md w-full">
          <div className="border-r-4 border-[#ffb700] bg-white flex gap-2 justify-start items-center px-4 py-3 w-4/12">
            <div className="inline-block text-[26px] text-[#595959]">
              <IoBedOutline />
            </div>{" "}
            <span>Where are you going?</span>
          </div>
          <div className="border-r-4 border-[#ffb700] bg-white flex gap-2 justify-start items-center px-4 py-3 w-4/12">
            <div className="inline-block text-[26px] text-[#595959]">
              <LuCalendarDays />
            </div>{" "}
            <span>Check-in date - Check-out date</span>
          </div>
          <div className="border-r-4 border-[#ffb700] bg-white flex gap-2 justify-start items-center px-4 py-3 w-4/12">
            <div className="inline-block text-[26px] text-deem">
              <GoPeople />
            </div>{" "}
            <span>2 adults - 0 children - 1 room</span>
            <div className="inline-block text-[14px]">
              <IoIosArrowDown />
            </div>{" "}
          </div>
          <button className="bg-[#0057b8] text-white font-bold flex gap-2 justify-center items-center px-4 py-3 w-2/12">
            Search
          </button>
        </div>
      </div>
    </header>
  );
}
