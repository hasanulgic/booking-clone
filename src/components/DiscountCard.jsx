
export default function DiscountCard() {
  return (
    <div className="max-w-[1280px] mx-auto my-2 flex border rounded-md items-center py-2">
      <img
        src="https://t-cf.bstatic.com/design-assets/assets/v3.109.0/illustrations-traveller/GlobeGeniusBadge.png"
        alt="discount"
        className="h-44 w-44 ms-6"
      />
      <div>
        <h1 className="text-2xl font-bold">Get instant discounts</h1>
        <h2 className="my-2">
          Simply sign into your Booking.com account and look for the <br /> blue
          Genius logo to save
        </h2>
        <div className="flex mt-">
          <button className="px-3 py-1 border border-[#0057b8] text-primary rounded-md">
            Sign in
          </button>
          <button className="px-3 py-2 text-[#0057b8]">Register</button>
        </div>
      </div>
    </div>
  );
}
