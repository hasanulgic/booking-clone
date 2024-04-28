import Bangladesh from "./components/Bangladesh";
import ChoosingDestination from "./components/ChoosingDestination";
import Destination from "./components/Destination";
import DiscountCard from "./components/DiscountCard";
import FamousPlace from "./components/FamousPlace";
import GuestPlace from "./components/GuestPlace";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Offers from "./components/Offers";
import QuickTrip from "./components/QuickTrip";
import Rooms from "./components/Rooms";
import Subscription from "./components/Subscription";
import TravelInspiration from "./components/TravelInspiration";
import UniquePlace from "./components/UniquePlace";

function App() {

  return (
    <>
      <Nav/>
      <Hero/>
      <Offers/>
      <Rooms/>
      <Destination/>
      <Bangladesh/>
      <QuickTrip/>
      <UniquePlace/>
      <GuestPlace/>
      <FamousPlace/>
      <TravelInspiration/>
      <DiscountCard/>
      <ChoosingDestination/>
      <Subscription/>
    </>
  );
}

export default App;
