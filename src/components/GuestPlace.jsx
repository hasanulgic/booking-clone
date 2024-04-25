
export default function GuestPlace() {
  return (
    <div className="max-w-[1280px] mx-auto mb-2">
      <div className="flex justify-between my-2">
        <h1 className="text-2xl font-bold">Homes guests love</h1>
        <h2 className="text-primary text-sm font-medium">Discover homes</h2>
      </div>
      <div className="grid grid-rows-1 grid-cols-4 w-full gap-6">
        <div className="shadow-2xl rounded-lg">
          <img
            className="rounded-t-md h-56 w-full"
            src="https://cf.bstatic.com/xdata/images/hotel/square600/255854447.webp?k=f9c9d47f18b3156fdcc5596749d137f35e3cf4962a8d3d37d69be0066ec9bfc3&o="
            alt="room1"
          />
          <div className="px-3 pb-2">
            <h1 className="font-bold mt-2">Aparthotel Stare Miasto</h1>
            <h2 className="text-deem text-xs">Old Town, Poland, Kraków</h2>
            <button className="bg-primary text-xs p-1 rounded-r-md rounded-t-md text-white inline-block">
              9.1
            </button>
            <h2 className="text-deem text-xs inline-block ms-2">
              FabulousFabulous · 2,841 reviews
            </h2>
            <h3 className="text-right text-xs mt-6">
              Starting from{" "}
              <span className="font-bold text-base">BDT 16,302</span>
            </h3>
          </div>
        </div>
        <div className="shadow-2xl rounded-lg">
          <img
            className="rounded-t-md h-56 w-full"
            src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o="
            alt="room1"
          />
          <div className="px-3 pb-2">
            <h1 className="font-bold mt-2">3 Epoques Apartments by Adrez</h1>
            <h2 className="text-deem text-xs">
              Prague 1, Czech Republic, Praha 1
            </h2>
            <button className="bg-primary text-xs p-1 rounded-r-md rounded-t-md text-white inline-block">
              9.3
            </button>
            <h2 className="text-deem text-xs inline-block ms-2">
              Fabulous · 428 reviews
            </h2>
            <h3 className="text-right text-xs mt-6">
              Starting from{" "}
              <span className="font-bold text-base">BDT 10,252</span>
            </h3>
          </div>
        </div>
        <div className="shadow-2xl rounded-lg">
          <img
            className="rounded-t-md h-56 w-full"
            src="https://cf.bstatic.com/xdata/images/hotel/square600/121402222.webp?k=f7f266ab09f90ddea4464309eca14d79429afe4218ced6887cb52f82c42c03dc&o="
            alt="room1"
          />
          <div className="px-3 pb-2">
            <h1 className="font-bold mt-2">7Seasons Apartments Budapest</h1>
            <h2 className="text-deem text-xs">United Kingdom, Isle Of Skye</h2>
            <button className="bg-primary text-xs p-1 rounded-r-md rounded-t-md text-white inline-block">
              8.7
            </button>
            <h2 className="text-deem text-xs inline-block ms-2">
              Superb · 251 reviews
            </h2>
            <h3 className="text-right text-xs mt-6">
              Starting from{" "}
              <span className="font-bold text-base">BDT 16,302</span>
            </h3>
          </div>
        </div>
        <div className="shadow-2xl rounded-lg">
          <img
            className="rounded-t-md h-56 w-full"
            src="https://cf.bstatic.com/xdata/images/hotel/square600/73220198.webp?k=62588a8129bafa49162b4cdfd8af8f8018c42b8628090650a1cb9e4d4041c467&o="
            alt="room1"
          />
          <div className="px-3 pb-2">
            <h1 className="font-bold mt-2">7Seasons Apartments Budapest</h1>
            <h2 className="text-deem text-xs">Finland, Lillandet</h2>
            <button className="bg-primary text-xs p-1 rounded-r-md rounded-t-md text-white inline-block">
              9.6
            </button>
            <h2 className="text-deem text-xs inline-block ms-2">
              Excellent · 537 reviews
            </h2>
            <h3 className="text-right text-xs mt-6">
              Starting from{" "}
              <span className="font-bold text-base">BDT 26,752</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
