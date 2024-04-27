import { IoBedOutline } from "react-icons/io5";
import { LuCalendarDays } from "react-icons/lu";
import { GoPeople } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";

export default function Hero() {
  return (
    <header className="bg-primary">
      <div className="max-w-[1280px] mx-auto h-96 sm:h-60 relative p-4 sm:p-0">
        <div className="py-4 sm:py-16">
          <h1 className="text-white text-3xl sm:text-5xl font-extrabold">
            Find your next stay
          </h1>
          <h2 className="text-white text-xl sm:text-2xl mt-4">
            Search low prices on hotels, homes and much more...
          </h2>
        </div>
        <div className="absolute -bottom-8 flex flex-col sm:flex-row border-4 border-[#ffb700] rounded-md w-11/12 sm:w-full">
          <div className="border-b-4 sm:border-r-4 sm:border-b-0 border-[#ffb700] bg-white flex gap-2 justify-start items-center px-4 py-3 w-full sm:w-4/12">
            <div className="inline-block text-[26px] text-[#595959]">
              <IoBedOutline />
            </div>{" "}
            <span>Where are you going?</span>
          </div>
          <div className="border-b-4 sm:border-r-4 sm:border-b-0 border-[#ffb700] bg-white flex gap-2 justify-start items-center px-4 py-3 w-full sm:w-4/12">
            <div className="inline-block text-[26px] text-[#595959]">
              <LuCalendarDays />
            </div>{" "}
            <span>Check-in date - Check-out date</span>
          </div>
          <div className="relative border-b-4 sm:border-r-4 sm:border-b-0 border-[#ffb700] bg-white flex gap-2 justify-start items-center px-4 py-3 w-full sm:w-4/12">
            <div className="inline-block text-[26px] text-deem">
              <GoPeople />
            </div>{" "}
            <span>2 adults - 0 children - 1 room</span>
            <div className="absolute text-[14px] right-4">
              <IoIosArrowDown />
            </div>{" "}
          </div>
          <button className="bg-[#0057b8] text-white font-bold flex gap-2 justify-center items-center px-4 py-3 w-full sm:w-2/12">
            Search
          </button>
        </div>
      </div>
    </header>
  );
}
