import React from "react";
import ControlledCarousel from "./components/Carousel";
import NavigationBar from "./components/Navbar";

export default function App() {
  return (
    <div>
      <>
        <NavigationBar />
        <ControlledCarousel />
      </>
    </div>
  );
}
