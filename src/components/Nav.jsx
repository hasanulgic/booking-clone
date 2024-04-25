import { IoBedOutline } from "react-icons/io5";
import { IoCarSportOutline } from "react-icons/io5";
import { IoAirplaneOutline } from "react-icons/io5";
import { LuPalmtree } from "react-icons/lu";
import { BsTextareaT } from "react-icons/bs";
import { FaRegQuestionCircle } from "react-icons/fa";
export default function Nav() {
  return (
    <nav className="w-full bg-primary">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex justify-between py-4">
          <h1 className="text-white text-2xl font-bold">Booking.com</h1>
          <div className="flex gap-4 items-center font-semibold">
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
        <ul className="flex gap-6 py-2 font-bold">
          <li className="text-white text-sm flex justify-center items-center gap-1 border py-1 rounded-full px-3">
            <div className="inline-block text-[26px]">
              <IoBedOutline />
            </div>{" "}
            <span>Stays</span>
          </li>
          <li className="text-white text-sm flex justify-center items-center gap-1">
            <div className="inline-block text-[26px]">
              <IoAirplaneOutline />
            </div>{" "}
            <span>Flights</span>
          </li>
          <li className="text-white text-sm flex justify-center items-center gap-1">
            <div className="inline-block text-[26px]">
              <IoCarSportOutline />
            </div>{" "}
            <span>Car Hire</span>
          </li>
          <li className="text-white text-sm flex justify-center items-center gap-1">
            <div className="inline-block text-[26px]">
              <LuPalmtree />
            </div>{" "}
            <span>Attractions</span>
          </li>
          <li className="text-white text-sm flex justify-center items-center gap-1">
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
