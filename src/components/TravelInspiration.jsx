export default function TravelInspiration() {
  return (
    <div className="max-w-[1280px] mx-auto mb-8 sm:mb-20 px-2 sm:px-0">
      <div className="flex justify-between items-center my-2">
        <h1 className="text-base sm:text-2xl font-bold my-4">
          Get inspiration for your next trip
        </h1>
        <p className="text-primary text-[10px] sm:text-sm">More</p>
      </div>
      <div className="grid grid-rows-1 grid-cols-4 w-full gap-4">
        <div className="col-span-2 bg-gradient-to-br from-slate-600 to-slate-700 relative rounded-lg">
          <img
            className="object-cover h-full w-full absolute mix-blend-overlay rounded-lg"
            src="https://eu-images.contentstack.com/v3/assets/bltbebdf496526c3cfd/blt16ced51b2db94410/656d7cd924c853040a0ac5de/1174-004.jpg"
            alt="new-year"
          />
          <div className="absolute bottom-1 p-3 text-white font-bold">
            <h1 className="font-bold text-base sm:text-xl">
              New Year’s Eve in New York City
            </h1>
            <p className="text-[10px] sm:text-sm mt-2">
              New Year Eve in New York City Ring in the new year with iconic
              moments and unforgettable memories in New York City
            </p>
          </div>
        </div>

        <div className="rounded-lg">
          <img
            className="rounded-md h-52 w-full"
            src="https://cf.bstatic.com/xdata/images/xphoto/720x405/292260574.webp?k=efc8e339ea66514c3b64c5bc891f1608d22a40eb23b853bc0c9ecb93c541ef10&o="
            alt="room1"
          />
          <div className="px-2 py-3">
            <h1 className="text-sm sm:text-base font-bold mt-2">
              6 best ryokans in Japan to rejuvenate yourself
            </h1>
            <h2 className="text-deem text-sm mt-2">
              Discover unmissable ryokans to relax and unwind in style.
            </h2>
          </div>
        </div>
        <div className="rounded-lg">
          <img
            className="rounded-md h-52 w-full"
            src="https://cf.bstatic.com/xdata/images/xphoto/540x405/290483794.webp?k=916f7bac0ccdb08efcb269ad29cc10816ab66cd1671359066d23d32fb17b5c39&o="
            alt="room1"
          />
          <div className="px-2 py-3">
            <h1 className="text-sm sm:text-base font-bold mt-2">
              6 best ryokans in Japan to rejuvenate yourself
            </h1>
            <h2 className="text-deem text-sm mt-2">
              Discover unmissable ryokans to relax and unwind in style.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
