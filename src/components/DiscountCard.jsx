
export default function DiscountCard() {
  return (
    <div className="max-w-[1280px] mx-1 sm:mx-auto my-2 flex border rounded-md items-center py-2">
      <img
        src="https://t-cf.bstatic.com/design-assets/assets/v3.109.0/illustrations-traveller/GlobeGeniusBadge.png"
        alt="discount"
        className="h-28 sm:h-44 w-28 sm:w-44 sm:ms-6"
      />
      <div>
        <h1 className="text-base sm:text-2xl font-bold">Get instant discounts</h1>
        <h2 className="text-xs sm:text-base my-2">
          Simply sign into your Booking.com account and look for the  blue
          Genius logo to save
        </h2>
        <div className="flex gap-2">
          <button className="px-1 sm:px-3 py-1 border border-[#0057b8] text-primary text-xs sm:text-base rounded-[3px] sm:rounded-md">
            Sign in
          </button>
          <button className="px-1 sm:px-3 py-1 sm:py-2 text-[#0057b8] text-xs sm:text-base">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
