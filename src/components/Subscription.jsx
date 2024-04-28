export default function Subscription() {
  return (
    <div className="bg-[#00224F] text-center">
      <h1 className="text-xl sm:text-2xl text-white font-bold pt-10">
        Stay in the know
      </h1>
      <h2 className="text-white my-2 text-xs sm:text-base">
        Sign up to get marketing emails from Booking.com, including promotions,
        rewards, travel experiences and information about Booking.com’s and{" "}
        <br />
        Booking.com Transport Limited’s products and services.
      </h2>
      <div className="flex justify-center gap-2 mx-auto my-2">
        <input
          className="bg-white sm:py-3 px-2 rounded-lg w-1/3 text-[#6b6b6b] text-sm sm:text-base"
          placeholder="Your email address"
          type="email"
        />
        <button className="bg-[#0057b8] text-white px-6 py-2 rounded-md text-sm sm:text-base">
          Subscribe
        </button>
      </div>
      <p className="text-sm text-white pb-10">
        You can opt out any time. See our{" "}
        <span className="text-[#0057b8]">privacy statement</span>.
      </p>
      <div className="bg-[#003B95]">
        <button className="px-4 py-1 text-white my-3 border rounded-md">
          List your property
        </button>
        <hr />
        <ul className="flex flex-wrap text-white justify-center gap-2 sm:gap-4 font-bold py-4 underline">
          <li>Mobile Version</li>
          <li>Yuor account</li>
          <li>Make changes to your booking online</li>
          <li>Customer Service help</li>
          <li>Become an affiliate</li>
          <li>Booking.com for Business</li>
        </ul>
      </div>
    </div>
  );
}
