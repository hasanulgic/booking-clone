import { IoBedOutline } from "react-icons/io5";
import { IoCarSportOutline } from "react-icons/io5";
import { IoAirplaneOutline } from "react-icons/io5";
import { LuPalmtree } from "react-icons/lu";
import { BsTextareaT } from "react-icons/bs";
import { FaRegQuestionCircle } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
export default function Nav() {
  return (
    <nav className="w-full bg-primary">
      <div className="container">
        <div className="flex justify-between items-center py-4 px-4 sm:px-0">
          <h1 className="text-white text-xl sm:text-2xl font-bold">
            Booking.com
          </h1>
          <div className="flex sm:hidden gap-4 text-2xl text-white">
            <RxAvatar />
            <GiHamburgerMenu />
          </div>
          <div className="hidden sm:flex gap-4 items-center font-semibold">
            <h1 className="text-white">BDT</h1>
            <img
              src="https://flagsapi.com/GB/flat/32.png"
              className="h-6 w-6 rounded-full"
            />
            <div className="text-white text-base">
              <FaRegQuestionCircle />
            </div>
            <button className="text-white">List your property</button>
            <button className="bg-white text-[#0057b8] px-3 py-2 rounded-sm font-medium">
              Register
            </button>
            <button className="bg-white text-[#0057b8] px-3 py-2 rounded-sm font-medium">
              Sign in
            </button>
          </div>
        </div>
        <ul className="flex gap-6 py-2 px-4 sm:px-0 text-xs sm:text-sm font-bold">
          <li className="text-white  flex justify-center items-center gap-1 border py-1 rounded-full px-3">
            <div className="inline-block text-[26px]">
              <IoBedOutline />
            </div>{" "}
            <span>Stays</span>
          </li>
          <li className="text-white flex justify-center items-center gap-1">
            <div className="inline-block text-[26px]">
              <IoAirplaneOutline />
            </div>{" "}
            <span>Flights</span>
          </li>
          <li className="text-white flex justify-center items-center gap-1">
            <div className="inline-block text-[26px]">
              <IoCarSportOutline />
            </div>{" "}
            <span className="whitespace-nowrap">Car Hire</span>
          </li>
          <li className="text-white flex justify-center items-center gap-1">
            <div className="inline-block text-[26px]">
              <LuPalmtree />
            </div>{" "}
            <span>Attractions</span>
          </li>
          <li className="text-white flex justify-center items-center gap-1">
            <div className="inline-block text-[26px]">
              <BsTextareaT />
            </div>{" "}
            <span>Airport taxis</span>
          </li>
        </ul>
      </div>
    </nav>
  );
}
