
export default function Offers() {
  return (
    <div className="max-w-[1280px] mx-auto my-14 px-2 sm:px-0">
      <h1 className="text-xl sm:text-2xl font-bold">Offers</h1>
      <h2 className="text-deem my-2 text-xs sm:text-base">
        Promotions, deals and special offers for you
      </h2>
      <div
        className="text-white bg-red-400 p-2 sm:p-4 rounded-md bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://q-xx.bstatic.com/xdata/images/xphoto/714x300/316455553.jpeg?k=33c0362560b6aa7ff9ba2afc3ef8d120728107cf56cd1c006fcf0da8c1821735&o=")',
        }}
      >
        <h1 className="text-base sm:text-xl font-bold">Seize the moment</h1>
        <h3 className="text-xs sm:text-sm my-2">
          Save 15% or more when you book and stay before 1 October <br />
          2024
        </h3>
        <button className="bg-[#0057b8] px-2 sm:px-4 py-2 text-xs sm:text-sm rounded-md">
          Find Getaway Deals
        </button>
      </div>
    </div>
  );
}
