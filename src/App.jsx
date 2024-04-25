import Bangladesh from "./components/Bangladesh";
import Destination from "./components/Destination";
import FamousPlace from "./components/FamousPlace";
import GuestPlace from "./components/GuestPlace";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Offers from "./components/Offers";
import Rooms from "./components/Rooms";
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
      <UniquePlace/>
      <GuestPlace/>
      <FamousPlace/>
      <TravelInspiration/>
    </>
  );
}

export default App;
