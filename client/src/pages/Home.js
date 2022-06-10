import React from "react";
import NavigationBar from "../components/Navbar";
import ControlledCarousel from "../components/Carousel";
import Destination from '../components/Destination';

export default function Home() {
  return (
    <div>
      {" "}
      <NavigationBar />
      <ControlledCarousel />
      <Destination />
    </div>
  );
}
