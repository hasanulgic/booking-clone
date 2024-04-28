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
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  responsive: [
    {
      breakpoint: 680,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};
export default function UniquePlace() {
  return (
    <div className="max-w-[1280px] mx-auto mb-10 px-2 sm:px-0">
      <h1 className="text-base sm:text-2xl font-bold">
        Stay at our top unique properties
      </h1>
      <h2 className="text-deem text-xs sm:text-base mb-2">
        From castles and villas to boats and igloos, we have got it all
      </h2>
      {/* <div className="grid grid-rows-1 grid-cols-4 w-full gap-2 sm:gap-6"> */}
      <div className="slider-container">
        <Slider {...settings}>
        <div className="shadow-2xl rounded-lg">
          <img
            className="rounded-t-md"
            src="https://cf.bstatic.com/xdata/images/hotel/square600/255854447.webp?k=f9c9d47f18b3156fdcc5596749d137f35e3cf4962a8d3d37d69be0066ec9bfc3&o="
            alt="room1"
          />
          <div className="px-1 sm:px-3 pb-2">
            <h1 className="text-xs sm:text-base font-bold mt-2">
              Gyttja Västergårds
            </h1>
            <h2 className="text-deem text-[10px] sm:text-xs text-nowrap">
              Finland, Lillandet
            </h2>
            <button className="bg-primary text-[10px] sm:text-xs p-1 rounded-r-md rounded-t-md text-white inline-block">
              9.3
            </button>
            <h2 className="text-deem text-[10px] sm:text-xs inline-block ms-2">
              Superb · 201 reviews
            </h2>
          </div>
        </div>

        <div className="shadow-2xl rounded-lg">
          <img
            className="rounded-t-md"
            src="https://cf.bstatic.com/xdata/images/hotel/square600/237686104.webp?k=3813d2af0058b6676f19e8d707977dd086b6fd873d46dd9c19a8aaba24f813ff&o="
            alt="room1"
          />
          <div className="px-1 sm:px-3 pb-2">
            <h1 className="text-xs sm:text-base font-bold mt-2">
              Gyttja Västergårds
            </h1>
            <h2 className="text-deem text-[10px] sm:text-xs">
              Finland, Lillandet
            </h2>
            <button className="bg-primary text-[10px] sm:text-xs p-1 rounded-r-md rounded-t-md text-white inline-block">
              9.3
            </button>
            <h2 className="text-deem text-[10px] sm:text-xs inline-block ms-2">
              Fabulous · 351 reviews
            </h2>
          </div>
        </div>

        <div className="shadow-2xl rounded-lg">
          <img
            className="rounded-t-md"
            src="https://cf.bstatic.com/xdata/images/hotel/square600/228714298.webp?k=2e88556aac50ed7e31bdc4f399c385b1c2b3208d8a3c3fc622e770bc6d9b0c98&o="
            alt="room1"
          />
          <div className="px-1 sm:px-3 pb-2">
            <h1 className="text-xs sm:text-base font-bold mt-2">Harbor View</h1>
            <h2 className="text-deem text-[10px] sm:text-xs">
              United Kingdom, Isle Of Skye
            </h2>
            <button className="bg-primary text-[10px] sm:text-xs p-1 rounded-r-md rounded-t-md text-white inline-block">
              8.7
            </button>
            <h2 className="text-deem text-[10px] sm:text-xs inline-block ms-2">
              Superb · 251 reviews
            </h2>
          </div>
        </div>

        <div className="shadow-2xl rounded-lg">
          <img
            className="rounded-t-md"
            src="https://cf.bstatic.com/xdata/images/hotel/square600/236967822.webp?k=767dbb831d2109499cf73d2880a88e021a73781d7206cb812a328fd344756951&o="
            alt="room1"
          />
          <div className="px-1 sm:px-3 pb-2">
            <h1 className="text-xs sm:text-base font-bold mt-2">
              Gyttja Västergårds
            </h1>
            <h2 className="text-deem text-[10px] sm:text-xs">
              Finland, Lillandet
            </h2>
            <button className="bg-primary text-[10px] sm:text-xs p-1 rounded-r-md rounded-t-md text-white inline-block">
              9.6
            </button>
            <h2 className="text-deem text-[10px] sm:text-xs inline-block ms-2">
              Excellent · 537 reviews
            </h2>
          </div>
        </div>
        </Slider>
      </div>
    </div>
  );
}
