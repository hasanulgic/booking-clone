/* eslint-disable react/prop-types */
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#003580",
        marginRight: 28,
        borderRadius: 10,
      }}
      onClick={onClick}
    />
  );
}

var settings = {
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  responsive: [
    {
      breakpoint: 680,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function Bangladesh() {
  return (
    <div className="container my-6 px-2 sm:px-0">
      <h1 className="text-base sm:text-2xl font-bold">Explore Bangladesh</h1>
      <h2 className="text-xs sm:text-base text-deem mb-2">
        These popular destinations have a lot to offer
      </h2>
      {/* <div className="grid grid-rows-1 grid-cols-6 w-full gap-2 sm:gap-5"> */}
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <img
              className="rounded-md w-full"
              src="https://q-xx.bstatic.com/xdata/images/city/170x136/666853.jpg?k=b2212159e829c00b8b19af72b6211b25325d70811829e2eb4ef1045f8a568be5&o="
              alt="room1"
            />
            <h2 className="text-xs sm:text-base font-bold mt-2 text-nowrap">
              Cox Bazar
            </h2>
            <h2 className=" text-deem text-xs sm:text-sm text-nowrap">
              60 properties
            </h2>
          </div>
          <div>
            <img
              className="rounded-md w-full"
              src="https://r-xx.bstatic.com/xdata/images/city/170x136/688201.jpg?k=586e76aa55aa92d886eaf5837e288d77e15c9b81534bd4c7121d0d020e99064d&o="
              alt="room1"
            />
            <h2 className="text-xs sm:text-base font-bold mt-2 text-nowrap">
              Dhaka
            </h2>
            <h2 className="text-deem text-xs sm:text-sm text-nowrap">
              255 properties
            </h2>
          </div>
          <div>
            <img
              className="rounded-md w-full"
              src="https://q-xx.bstatic.com/xdata/images/city/170x136/761433.jpg?k=21910a5884ba4c680badac1131347de875f68cf188a389376d8b5b2f7a75582e&o="
              alt="room1"
            />
            <h2 className="text-xs sm:text-base font-bold mt-2 text-nowrap">
              Sylhet
            </h2>
            <h2 className="text-deem text-xs sm:text-sm text-nowrap">
              50 properties
            </h2>
          </div>
          <div>
            <img
              className="rounded-md w-full"
              src="https://r-xx.bstatic.com/xdata/images/city/170x136/858544.jpg?k=af54aeeb213e0c97b823854f6779ee99c332b7100660513ca6c0823c525bdea1&o="
              alt="room1"
            />
            <h2 className="text-xs sm:text-base font-bold mt-2 text-nowrap">
              Chittagong
            </h2>
            <h2 className="text-deem text-xs sm:text-sm text-nowrap">
              40 properties
            </h2>
          </div>
          <div>
            <img
              className="rounded-md w-full"
              src="https://r-xx.bstatic.com/xdata/images/country/170x136/361.jpg?k=fe1c45898bddb55365c8067a6b4b071e9ebb8d52150800edb53e105cf896866d&o="
              alt="room1"
            />
            <h2 className="text-xs sm:text-base font-bold mt-2 text-nowrap">
              Sreemangal
            </h2>
            <h2 className="text-deem text-xs sm:text-sm text-nowrap">
              27 properties
            </h2>
          </div>
          <div>
            <img
              className="rounded-md w-full"
              src="https://r-xx.bstatic.com/xdata/images/country/170x136/361.jpg?k=fe1c45898bddb55365c8067a6b4b071e9ebb8d52150800edb53e105cf896866d&o="
              alt="room1"
            />
            <h2 className="text-xs sm:text-base font-bold mt-2 text-nowrap">
              Kutakata
            </h2>
            <h2 className="text-deem text-xs sm:text-sm text-nowrap">
              10 properties
            </h2>
          </div>
        </Slider>
      </div>
      {/* </div> */}
    </div>
  );
}
