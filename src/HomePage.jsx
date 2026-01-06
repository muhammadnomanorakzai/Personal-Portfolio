import React from "react";
import Banner from "./Banner";
import Features from "./Features";
// import Clients from './Clients'
import Experience from "./Experience";
import Contact from "./Contact";

function HomePage() {
  return (
    <>
      <Banner />
      <Experience />
      {/* <About/> */}
      <Features />
      {/* <Clients /> */}
      <Contact />
    </>
  );
}

export default HomePage;
