/* eslint-disable react/prop-types */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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

export default function Rooms() {
  return (
    <div className="container">
      <h1 className="text-base sm:text-2xl font-bold mb-3 px-2 sm:px-0">
        Browse by property type
      </h1>
      <div className="slider-container px-2 sm:px-0">
        <Slider {...settings}>
          <div>
            <img
              className="rounded-md w-full"
              src="https://r-xx.bstatic.com/xdata/images/xphoto/263x210/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o="
              alt="room1"
            />
            <h2 className="text-xs sm:text-base font-bold mt-2">Hotels</h2>
          </div>
          <div>
            <img
              className="rounded-md w-full"
              src="https://r-xx.bstatic.com/xdata/images/hotel/263x210/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o="
              alt="room1"
            />
            <h2 className="text-xs sm:text-base mt-2">Apartments</h2>
          </div>
          <div>
            <img
              className="rounded-md w-full"
              src="https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o="
              alt="room1"
            />
            <h2 className="text-xs sm:text-base mt-2">Resorts</h2>
          </div>
          <div>
            <img
              className="rounded-md w-full"
              src="https://q-xx.bstatic.com/xdata/images/hotel/263x210/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o="
              alt="room1"
            />
            <h2 className="text-xs sm:text-base mt-2">Villas</h2>
          </div>
        </Slider>
      </div>
    </div>
  );
}
